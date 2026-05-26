'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './PixelGame.module.css';

/* ─────────────────────────────────────────────────────────────────────────────
   SPRITES  (from sprites.jsx — no window globals)
───────────────────────────────────────────────────────────────────────────── */
const PLAYER_RUN_A = `
....HHHHHHHH....
..HHHHHHHHHHHH..
.HHSSSSSSSSSSHH.
.HSSSSSSSSSSSSH.
.HSSEESSSSEESSH.
.HSSEESSSSEESSH.
.HSCSSSSSSSSCSH.
.HSSSSSMMSSSSSH.
.HHSSSSSSSSSSHH.
..HHHHHHHHHHHH..
...RRRRRRRRRR...
..RRWWWWWWWWRR..
..RWWPPPPPPWWR..
..RWWWPPPPWWWR..
...RRRWWWWRRR...
...RRRRRRRRRR...
....BB....BB....
...bbb....bbb...
`;
const PLAYER_RUN_B = `
....HHHHHHHH....
..HHHHHHHHHHHH..
.HHSSSSSSSSSSHH.
.HSSSSSSSSSSSSH.
.HSSEESSSSEESSH.
.HSSEESSSSEESSH.
.HSCSSSSSSSSCSH.
.HSSSSSMMSSSSSH.
.HHSSSSSSSSSSHH.
..HHHHHHHHHHHH..
...RRRRRRRRRR...
..RRWWWWWWWWRR..
..RWWPPPPPPWWR..
..RWWWPPPPWWWR..
...RRRWWWWRRR...
...RRRRRRRRRR...
...BBB....BBB...
...bb......bb...
`;
const PLAYER_JUMP = `
....HHHHHHHH....
..HHHHHHHHHHHH..
.HHSSSSSSSSSSHH.
.HSSSSSSSSSSSSH.
.HSSEESSSSEESSH.
.HSSEESSSSEESSH.
.HSCSSSSSSSSCSH.
.HSSSSSSooSSSSH.
.HHSSSSSSSSSSHH.
..HHHHHHHHHHHH..
...RRRRRRRRRR...
..RRWWWWWWWWRR..
..RWWPPPPPPWWR..
..RWWWPPPPWWWR..
...RRRWWWWRRR...
....RRRRRRRR....
...BB......BB...
....bb....bb....
`;
const PLAYER_HURT = `
....HHHHHHHH....
..HHHHHHHHHHHH..
.HHSSSSSSSSSSHH.
.HSSSSSSSSSSSSH.
.HSSXXSSSSXXSSH.
.HSSXXSSSSXXSSH.
.HSCSSSSSSSSCSH.
.HSSSSMooMSSSSH.
.HHSSSSSSSSSSHH.
..HHHHHHHHHHHH..
...RRRRRRRRRR...
..RRWWWWWWWWRR..
..RWWPPPPPPWWR..
..RWWWPPPPWWWR..
...RRRWWWWRRR...
...RRRRRRRRRR...
....BB....BB....
...bbb....bbb...
`;
const CARROT2 = `
.....gg.....
....gggg....
...gg..gg...
..ooooooo...
..oooottoo..
..oototooo..
..oootooooo.
..ootoooooo.
..oooooottoo
..oototoooo.
...oooootoo.
...oooooo...
....oooo....
.....oo.....
`;
const PUMPKIN = `
......gg......
....gggg......
....gg.gg.....
..PPPP.PPPP...
.PPpPPPPPpPP..
PPpPPPyyPPpPP.
PpPPPyyyyPPpP.
PpPPPyyyyPPpP.
PPpPPPPPPpPPP.
PPPpPPPPpPPPP.
.PPpPPPPpPPP..
..PPPPPPPP....
...PPPPPP.....
....PPPP......
`;
const HEART_A = `
.PP..PP.
PPPPPPPP
PWWPPWPP
PWPPPPPP
.PPPPPP.
..PPPP..
...PP...
........
`;
const HEART_B = `
.PP..PP.
PPPPPPPP
PPWWPWPP
PPWPPPPP
.PPPPPP.
..PPPP..
...PP...
........
`;
const CLOUD = `
......WWWWWWWW..........
....WWWWWWWWWWWW........
..WWWWWWWWWWWWWWWWW.....
.WWWWWWWWWWWWWWWWWWW....
WWWWWWWWWWWWWWWWWWWWWWW.
WWWWWWWWWWWWWWWWWWWWWWWW
.WWWWWWWWWWWWWWWWWWWWWW.
..WWWWWWWWWWWWWWWWWWW...
...WWWWWWWWWWWWWWWW.....
........................
`;
const GROUND_TILE_STR = `
GGGGGGGGGGGGGGGG
GggGGggGGggGGggG
DDDDDDDDDDDDDDDD
DdDDdDDddDDdDDdD
DDDdDDDDDdDDDDdD
dDDDDdDDDDDdDDdD
DDdDDDdDDDdDDDdD
DDDDDDDDDDDDDDDD
`;
const MOUNTAIN = `
........mm........
.......mmmm.......
......mmmmmm......
.....mmmmmmmm.....
....mmmnnnnmmmm...
...mmmnnnnnnmmm...
..mmmnnnnnnnnmmm..
.mmmnnnnnnnnnnmmm.
mmmnnnnnnnnnnnnmmm
mmnnnnnnnnnnnnnnmm
mnnnnnnnnnnnnnnnnm
nnnnnnnnnnnnnnnnnn
`;
const BUSH = `
....FFFFFF....
..FFFFFFFFFF..
.FFFffFFFFffF.
FFFFFFFFFFFFFF
FfFFFFFFFFFFFF
FFFFffFFFFffFF
.FFFFFFFFFFFF.
..FFFFFFFFFF..
......TT......
.....TTTT.....
`;

type ParsedSprite = { w: number; h: number; lines: string[] };
type Palette = Record<string, string>;

function parseSprite(str: string): ParsedSprite {
  const lines = str.split('\n').map(l => l.trim()).filter(Boolean);
  return { w: lines[0].length, h: lines.length, lines };
}
function drawSprite(ctx: CanvasRenderingContext2D, sprite: ParsedSprite, x: number, y: number, palette: Palette, flip = false) {
  const { w, h, lines } = sprite;
  x = Math.round(x); y = Math.round(y);
  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      const ch = lines[row][col];
      if (ch === '.' || !palette[ch]) continue;
      ctx.fillStyle = palette[ch];
      ctx.fillRect(flip ? (x + (w - 1 - col)) : (x + col), y + row, 1, 1);
    }
  }
}
function bakeSprite(sprite: ParsedSprite, palette: Palette, flip = false): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = sprite.w; c.height = sprite.h;
  const ctx = c.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  drawSprite(ctx, sprite, 0, 0, palette, flip);
  return c;
}

const SPRITES = {
  PLAYER_RUN_A: parseSprite(PLAYER_RUN_A),
  PLAYER_RUN_B: parseSprite(PLAYER_RUN_B),
  PLAYER_JUMP:  parseSprite(PLAYER_JUMP),
  PLAYER_HURT:  parseSprite(PLAYER_HURT),
  CARROT:       parseSprite(CARROT2),
  PUMPKIN:      parseSprite(PUMPKIN),
  HEART_A:      parseSprite(HEART_A),
  HEART_B:      parseSprite(HEART_B),
  CLOUD:        parseSprite(CLOUD),
  GROUND_TILE:  parseSprite(GROUND_TILE_STR),
  MOUNTAIN:     parseSprite(MOUNTAIN),
  BUSH:         parseSprite(BUSH),
};

/* ─────────────────────────────────────────────────────────────────────────────
   THEMES  (identical to game.jsx)
───────────────────────────────────────────────────────────────────────────── */
const THEMES = {
  pastel: {
    sky:      ['#fad7e6', '#e8c8f0', '#c8b8ec', '#b0c4ef'],
    mountain: { m: '#a594d6', n: '#8674c0' },
    cloud:    { W: '#ffffff' },
    bush:     { F: '#7fc97a', f: '#5fae5a', T: '#6b4a2e' },
    ground:   { G: '#74cf6a', g: '#5fae57', D: '#b48562', d: '#9a6f4d' },
    player:   { H: '#2a1f3a', S: '#fde0c8', E: '#1a1426', C: '#ff97b0', M: '#c8456b', o: '#1a1426', X: '#ff5577', R: '#ff6f95', r: '#d04d72', W: '#ffffff', P: '#ff3565', p: '#c41e4d', B: '#3b3556', b: '#1f1a30' },
    coin:     { P: '#ff3565', p: '#c41e4d', W: '#ffffff' },
    obstacle: { o: '#ff8c3a', t: '#d96a1f', g: '#6fb05a', G: '#4f8a40', P: '#ff7e3a', p: '#d05a1d', y: '#fff39a' },
    hud: '#ffffff', accent: '#ff3565', skyTopHex: '#fad7e6', images: false,
  },
  mono: {
    sky:      ['#fcfcfc', '#f0f0f0', '#e2e2e2', '#cfcfcf'],
    mountain: { m: '#9a9a9a', n: '#7a7a7a' },
    cloud:    { W: '#ffffff' },
    bush:     { F: '#4a4a4a', f: '#2a2a2a', T: '#1a1a1a' },
    ground:   { G: '#1a1a1a', g: '#000000', D: '#5a5a5a', d: '#3d3d3d' },
    player:   { H: '#000000', S: '#ffffff', E: '#000000', C: '#b0b0b0', M: '#000000', o: '#000000', X: '#000000', R: '#1f1f1f', r: '#0a0a0a', W: '#ffffff', P: '#000000', p: '#1f1f1f', B: '#000000', b: '#000000' },
    coin:     { P: '#000000', p: '#1f1f1f', W: '#ffffff' },
    obstacle: { o: '#2a2a2a', t: '#000000', g: '#1a1a1a', G: '#000000', P: '#2a2a2a', p: '#000000', y: '#cfcfcf' },
    hud: '#ffffff', accent: '#000000', skyTopHex: '#fcfcfc', images: false,
  },
  toronto: {
    images: true,
    sky:      ['#5cbcec', '#7fcef0', '#a4dff2', '#bce8eb'],
    mountain: { m: '#5b7799', n: '#3f5a7d' },
    cloud:    { W: '#ffffff' },
    bush:     { F: '#3a7c4a', f: '#2a5e36', T: '#1a3a22' },
    ground:   { G: '#4caf3a', g: '#3a8c2c', D: '#7a4d2e', d: '#5a3520' },
    player:   { H: '#2a1f3a', S: '#fde0c8', E: '#1a1426', C: '#ff97b0', M: '#c8456b', o: '#1a1426', X: '#ff5577', R: '#ff6f95', r: '#d04d72', W: '#ffffff', P: '#ff3565', p: '#c41e4d', B: '#3b3556', b: '#1f1a30' },
    coin:     { P: '#ff3565', p: '#c41e4d', W: '#ffffff' },
    obstacle: { o: '#ff8c3a', t: '#d96a1f', g: '#6fb05a', G: '#4f8a40', P: '#ff7e3a', p: '#d05a1d', y: '#fff39a' },
    hud: '#ffffff', accent: '#ff3565', skyTopHex: '#5cbcec',
  },
} as const;

type ThemeName = keyof typeof THEMES;

/* ─────────────────────────────────────────────────────────────────────────────
   CAREER SIGNS + IMAGE LOADER  (identical to game.jsx, paths → /images/game/)
───────────────────────────────────────────────────────────────────────────── */
const SIGNS = [
  { slug: 'yorksheridan', company: 'York / Sheridan', role: 'Graphic Design',  years: '2012–2016', postH: 20 },
  { slug: 'questrade',    company: 'Questrade',       role: 'Fintech',         years: '2016–2018', postH: 45 },
  { slug: 'sensibill',    company: 'Sensibill',       role: 'Fintech Startup', years: '2018–2020', postH: 20 },
  { slug: 'slalom',       company: 'Slalom Build',    role: 'Consulting',      years: '2020–2025', postH: 30 },
  { slug: 'intuit',       company: 'Intuit TurboTax', role: 'Fintech',         years: '2025–2026', postH: 60 },
];

const BG_IMG: { far: HTMLImageElement | null; mid: HTMLImageElement | null; ground: HTMLImageElement | null; player: HTMLImageElement | null; signs: Record<string, HTMLImageElement>; ready: boolean } =
  { far: null, mid: null, ground: null, player: null, signs: {}, ready: false };

// Image loading — called once from useEffect (browser only)
let _imagesLoading = false;
function ensureImagesLoaded() {
  if (_imagesLoading || typeof window === 'undefined') return;
  _imagesLoading = true;
  const total = 5 + SIGNS.length;
  let n = 0;
  const done = () => { n++; if (n >= total) BG_IMG.ready = true; };
  const mk = (src: string, onload: (img: HTMLImageElement) => void) => {
    const img = new window.Image();
    img.onload  = () => { onload(img); done(); };
    img.onerror = () => { done(); };
    img.src = src;
  };
  mk('/images/game/bg-far.png',          img => { BG_IMG.far    = img; });
  mk('/images/game/bg-mid.png',          img => { BG_IMG.mid    = img; });
  mk('/images/game/ground-tile.png',     img => { BG_IMG.ground = img; });
  mk('/images/game/character-llama.png', img => { BG_IMG.player = img; });
  mk('/images/game/sign-start.png',      img => { BG_IMG.signs.start = img; });
  SIGNS.forEach(s => mk(`/images/game/sign-${s.slug}.png`, img => { BG_IMG.signs[s.slug] = img; }));
}

/* ─────────────────────────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────────────────────────── */
const VW = 360, VH = 160;
const FLOOR_Y = 132;
const PLAYER_X = 56;
const GRAVITY = 0.38;
const JUMP_V  = -7.4;
const JUMP_V2 = -5.8;
const MIN_JUMP_FRAMES = 6;
const BASE_SPEED = 1.8;
const PLAYER_W = 34, PLAYER_H = 46;
const PLAYER_H_PROC = 18;
const WALK_FORWARD = 2.0;
const WALK_BACKWARD = 1.4;
const TOTAL_SIGNS = 5;
const SIGN_MIN_GAP_FRAMES = 280;
const HEART_TRAIL_MIN_GAP_FRAMES = 70;
const SIGN_BODY_H = 32;
const SIGN_POST_H_DEFAULT = 24;

function rectsOverlap(a: { x: number; y: number; w: number; h: number }, b: { x: number; y: number; w: number; h: number }) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */
interface PixelGameProps { theme?: ThemeName; }

export default function PixelGame({ theme = 'toronto' }: PixelGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef  = useRef<any>(null);
  const bakedRef  = useRef<any>(null);
  const themeRef  = useRef<ThemeName>(theme);
  const [mode, setMode] = useState<'playing' | 'gameover' | 'finished'>('playing');
  const [hud, setHud] = useState({ score: 0, coins: 0, high: 0 });
  const [, force] = useState(0);

  const HS_KEY = 'pixcel-game-high-v1';
  const getHigh = () => { try { return parseInt(localStorage.getItem(HS_KEY) || '0', 10) || 0; } catch { return 0; } };
  const setHigh = (n: number) => { try { localStorage.setItem(HS_KEY, String(n)); } catch {} };

  /* re-bake when theme changes */
  useEffect(() => {
    ensureImagesLoaded();
    themeRef.current = theme;
    const t = THEMES[theme];
    bakedRef.current = {
      runA:    bakeSprite(SPRITES.PLAYER_RUN_A, t.player),
      runB:    bakeSprite(SPRITES.PLAYER_RUN_B, t.player),
      jump:    bakeSprite(SPRITES.PLAYER_JUMP,  t.player),
      hurt:    bakeSprite(SPRITES.PLAYER_HURT,  t.player),
      carrot:  bakeSprite(SPRITES.CARROT,       t.obstacle),
      pumpkin: bakeSprite(SPRITES.PUMPKIN,      t.obstacle),
      heartA:  bakeSprite(SPRITES.HEART_A,      t.coin),
      heartB:  bakeSprite(SPRITES.HEART_B,      t.coin),
      cloud:   bakeSprite(SPRITES.CLOUD,        t.cloud),
      mountain:bakeSprite(SPRITES.MOUNTAIN,     t.mountain),
      bush:    bakeSprite(SPRITES.BUSH,         t.bush),
      ground:  bakeSprite(SPRITES.GROUND_TILE,  t.ground),
    };
    initState();
    setMode('playing');
    force(n => n + 1);
  }, [theme]); // eslint-disable-line react-hooks/exhaustive-deps

  const initState = useCallback(() => {
    const isToronto = themeRef.current === 'toronto';
    const pH = isToronto ? PLAYER_H : PLAYER_H_PROC;
    const startObstacles: any[] = [];
    if (isToronto) {
      const startImg = BG_IMG.signs && BG_IMG.signs.start;
      const startPostH = 20;
      const startBodyH = startImg ? startImg.height : 32;
      const startW = startImg ? startImg.width : 64;
      const startH = startBodyH + startPostH;
      startObstacles.push({
        x: PLAYER_X + 42, y: FLOOR_Y - startH, w: startW, h: startH,
        postH: startPostH, bodyH: startBodyH,
        type: 'sign', slug: 'start',
        meta: { company: 'Start', role: '', years: '' },
        passed: false, isStartMarker: true,
      });
    }
    stateRef.current = {
      player: { x: PLAYER_X, y: FLOOR_Y - pH, h: pH, vy: 0, onGround: true, jumps: 0, frame: 0, animT: 0, hurt: false, jumpHeld: 0 },
      obstacles: startObstacles,
      coins: [],
      clouds: [{ x: 40, y: 18, scale: 1 }, { x: 180, y: 30, scale: 0.8 }, { x: 290, y: 14, scale: 1.1 }],
      mountains: [{ x: 0 }, { x: 120 }, { x: 240 }],
      bushes: [{ x: 80, y: FLOOR_Y - 10 }, { x: 200, y: FLOOR_Y - 10 }, { x: 320, y: FLOOR_Y - 10 }],
      groundOffset: 0, bgFarOffset: 0, bgMidOffset: 0,
      speed: BASE_SPEED, distance: 0, coinsCollected: 0, score: 0,
      timeSinceObstacle: 0, timeSinceCoin: 0,
      shake: 0, flashT: 0, paused: false,
      nextSignIdx: 0, signsSpawned: 0, signsPassed: 0,
      currentSign: null, currentSignT: 0, finishTimer: 0,
    };
  }, []);

  if (!stateRef.current) initState();

  const startGame = useCallback(() => {
    initState();
    setHud({ score: 0, coins: 0, high: getHigh() });
    setMode('playing');
  }, [initState]); // eslint-disable-line react-hooks/exhaustive-deps

  /* keyboard input */
  const inputRef = useRef({ jumpPressed: false, jumpHeld: false, left: false, right: false });
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.code || e.key;
      const isDown = e.type === 'keydown';
      const jumpKey  = k === 'Space' || k === ' ' || k === 'KeyW' || k === 'w';
      const rightKey = k === 'ArrowRight' || k === 'Right' || k === 'KeyD' || k === 'd';
      const leftKey  = k === 'ArrowLeft'  || k === 'Left'  || k === 'KeyA' || k === 'a';
      if (jumpKey) {
        if (isDown) {
          if (!e.repeat) inputRef.current.jumpPressed = true;
          inputRef.current.jumpHeld = true;
          if (mode === 'gameover' || mode === 'finished') startGame();
          e.preventDefault();
        } else { inputRef.current.jumpHeld = false; }
      }
      if (rightKey) { inputRef.current.right = isDown; e.preventDefault(); }
      if (leftKey)  { inputRef.current.left  = isDown; e.preventDefault(); }
      if ((k === 'KeyR' || k === 'r') && isDown) {
        if (mode === 'gameover' || mode === 'finished') startGame();
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup',   onKey);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('keyup', onKey); };
  }, [mode, startGame]);

  const touchJumpDown  = useCallback(() => { inputRef.current.jumpPressed = true; inputRef.current.jumpHeld = true; if (mode === 'gameover' || mode === 'finished') startGame(); }, [mode, startGame]);
  const touchJumpUp    = useCallback(() => { inputRef.current.jumpHeld = false; }, []);
  const touchRightDown = useCallback(() => { inputRef.current.right = true; }, []);
  const touchRightUp   = useCallback(() => { inputRef.current.right = false; }, []);
  const touchLeftDown  = useCallback(() => { inputRef.current.left  = true; }, []);
  const touchLeftUp    = useCallback(() => { inputRef.current.left  = false; }, []);

  /* main loop — identical logic to game.jsx */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = VW * dpr; canvas.height = VH * dpr;
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;
    ctx.scale(dpr, dpr);
    let raf: number;
    let last = performance.now();
    let acc = 0;
    const STEP = 1000 / 60;
    let highScore = getHigh();
    setHud(h => ({ ...h, high: highScore }));

    const update = () => {
      const s = stateRef.current;
      const t = THEMES[themeRef.current];
      const b = bakedRef.current;
      if (!b) return;

      if (mode === 'playing') {
        const moveDir = inputRef.current.right ? 1 : (inputRef.current.left ? -1 : 0);
        s.speed = moveDir > 0 ? WALK_FORWARD : (moveDir < 0 ? -WALK_BACKWARD : 0);
        const movingForward = s.speed > 0;

        const p = s.player;
        if (inputRef.current.jumpPressed) {
          if (p.onGround) {
            p.vy = JUMP_V; p.onGround = false; p.jumps = 1; p.jumpHeld = 0;
          } else if (p.jumps < 2) {
            p.vy = JUMP_V2; p.jumps = 2; p.jumpHeld = 0; s.sparkleT = 12;
          }
          inputRef.current.jumpPressed = false;
        }
        if (!p.onGround && p.vy < 0 && inputRef.current.jumpHeld && p.jumpHeld < MIN_JUMP_FRAMES) {
          p.vy -= 0.18; p.jumpHeld++;
        }

        const prevBottom = p.y + p.h;
        p.vy += GRAVITY;
        p.y  += p.vy;
        let landedFloor = FLOOR_Y;
        for (const o of s.obstacles) {
          if (o.type !== 'sign') continue;
          const ax1 = p.x + 6, ax2 = p.x + PLAYER_W - 6;
          const bx1 = o.x + 2, bx2 = o.x + o.w - 2;
          const hOverlap = ax1 < bx2 && ax2 > bx1;
          if (hOverlap && p.vy >= 0 && prevBottom <= o.y + 2 && (p.y + p.h) >= o.y) {
            if (o.y < landedFloor) landedFloor = o.y;
          }
        }
        if (p.y + p.h >= landedFloor) {
          p.y = landedFloor - p.h; p.vy = 0; p.onGround = true; p.jumps = 0; p.jumpHeld = 0;
        } else {
          if (p.onGround) {
            let supported = (p.y + p.h >= FLOOR_Y - 0.5);
            if (!supported) {
              const ax1 = p.x + 6, ax2 = p.x + PLAYER_W - 6;
              for (const o of s.obstacles) {
                if (o.type !== 'sign') continue;
                const bx1 = o.x + 2, bx2 = o.x + o.w - 2;
                if (ax1 < bx2 && ax2 > bx1 && Math.abs((p.y + p.h) - o.y) < 1.5) { supported = true; break; }
              }
            }
            if (!supported) p.onGround = false;
          }
        }
        if (p.onGround && s.speed !== 0) {
          p.animT += 1;
          if (p.animT > 5) { p.animT = 0; p.frame = (p.frame + 1) % 2; }
        }

        if (movingForward) s.timeSinceObstacle += s.speed;
        const isToronto = themeRef.current === 'toronto' && BG_IMG.ready;
        if (isToronto) {
          const MIN_SIGN_X_GAP = 220;
          let rightmostSignRight = -Infinity;
          for (const o of s.obstacles) {
            if (o.type === 'sign') { const r = o.x + o.w; if (r > rightmostSignRight) rightmostSignRight = r; }
          }
          const horizontalRoom = rightmostSignRight === -Infinity || (VW + 8) - rightmostSignRight >= MIN_SIGN_X_GAP;
          if (movingForward && s.signsSpawned < TOTAL_SIGNS && s.timeSinceObstacle > SIGN_MIN_GAP_FRAMES && horizontalRoom) {
            const meta = SIGNS[s.nextSignIdx];
            const img  = BG_IMG.signs[meta.slug];
            if (img) {
              const w = img.width;
              const postH = typeof meta.postH === 'number' ? meta.postH : SIGN_POST_H_DEFAULT;
              const h = SIGN_BODY_H + postH;
              s.obstacles.push({ x: VW + 8, y: FLOOR_Y - h, w, h, postH, type: 'sign', slug: meta.slug, meta, passed: false });
              const n = 2 + Math.floor(Math.random() * 2);
              const heartCenterY = FLOOR_Y - h - 34;
              for (let i = 0; i < n; i++) {
                s.coins.push({ x: VW + 8 + Math.floor(w / 2) - (n - 1) * 6 + i * 12, y: heartCenterY - Math.round(Math.sin(i / Math.max(1, n - 1) * Math.PI) * 4), w: 8, h: 8, taken: false, t: i * 4 });
              }
              s.coins.push({ x: VW + 8 + Math.floor(w / 2) - 4, y: FLOOR_Y - h - 12, w: 8, h: 8, taken: false, t: 0 });
              s.nextSignIdx += 1; s.signsSpawned += 1; s.timeSinceObstacle = 0; s.timeSinceCoin = 0;
            }
          }
        } else {
          if (movingForward && s.timeSinceObstacle > 70 && Math.random() < 0.04) {
            const type = Math.random() < 0.6 ? 'carrot' : 'pumpkin';
            const spr = type === 'carrot' ? SPRITES.CARROT : SPRITES.PUMPKIN;
            s.obstacles.push({ x: VW + 8, y: FLOOR_Y - spr.h, w: spr.w, h: spr.h, type });
            s.timeSinceObstacle = 0;
          }
        }
        if (movingForward) s.timeSinceCoin += s.speed;
        if (isToronto) {
          const canTrail = movingForward && s.timeSinceObstacle > 70 && (s.signsSpawned < TOTAL_SIGNS ? s.timeSinceObstacle < SIGN_MIN_GAP_FRAMES - 40 : true);
          if (canTrail && s.timeSinceCoin > HEART_TRAIL_MIN_GAP_FRAMES && Math.random() < 0.12) {
            const n = 2 + Math.floor(Math.random() * 3);
            const baseY = 55 + Math.floor(Math.random() * 35);
            const arc = Math.random() < 0.6;
            for (let i = 0; i < n; i++) s.coins.push({ x: VW + 8 + i * 12, y: baseY + (arc ? Math.round(Math.sin(i / Math.max(1, n - 1) * Math.PI) * -8) : 0), w: 8, h: 8, taken: false, t: i * 4 });
            s.timeSinceCoin = 0;
          }
        } else if (movingForward && s.timeSinceCoin > 50 && Math.random() < 0.04) {
          const n = 3 + Math.floor(Math.random() * 3);
          const baseY = 60 + Math.floor(Math.random() * 30);
          const arc = Math.random() < 0.5;
          for (let i = 0; i < n; i++) s.coins.push({ x: VW + 8 + i * 12, y: baseY + (arc ? Math.round(Math.sin(i / (n - 1) * Math.PI) * -10) : 0), w: 8, h: 8, taken: false, t: i * 4 });
          s.timeSinceCoin = 0;
        }

        s.obstacles.forEach((o: any) => { o.x -= s.speed; });
        s.coins.forEach((c: any) => { c.x -= s.speed; });
        s.obstacles = s.obstacles.filter((o: any) => o.x > -40 && o.x < VW * 2);
        s.coins     = s.coins.filter((c: any) => !c.taken && c.x > -20 && c.x < VW * 2);

        s.mountains.forEach((m: any) => { m.x -= s.speed * 0.18; if (m.x < -120) m.x += 360; if (m.x > 240) m.x -= 360; });
        s.bushes.forEach((bz: any) => { bz.x -= s.speed * 0.55; if (bz.x < -20) bz.x += 360 + Math.random() * 40; if (bz.x > 380) bz.x -= 360; });
        s.clouds.forEach((c: any) => { c.x -= s.speed * 0.3; if (c.x < -40) { c.x = VW + 10; c.y = 10 + Math.random() * 30; c.scale = 0.6 + Math.random() * 0.6; } if (c.x > VW + 40) c.x = -30; });
        s.groundOffset = (s.groundOffset + s.speed + 16 * 1000) % 16;
        s.bgFarOffset += s.speed * 0.15;
        s.bgMidOffset += s.speed * 0.55;

        if (movingForward) { s.distance += s.speed * 0.6; s.score = Math.floor(s.distance) + s.coinsCollected * 10; }

        const isLlama = p.h >= 30;
        const pBox = { x: p.x + (isLlama ? 6 : 3), y: p.y + (isLlama ? 4 : 2), w: isLlama ? (PLAYER_W - 12) : 10, h: p.h - (isLlama ? 8 : 4) };
        for (const o of s.obstacles) {
          if (o.type === 'sign') {
            if (!o.passed && o.x + o.w < p.x) {
              o.passed = true;
              if (o.isStartMarker) continue;
              s.currentSign = o.meta; s.currentSignT = 150; s.signsPassed += 1; s.flashT = 3;
              if (s.signsPassed >= TOTAL_SIGNS) s.finishTimer = 1;
            }
            continue;
          }
          if (rectsOverlap(pBox, { x: o.x + 2, y: o.y + 3, w: o.w - 4, h: o.h - 4 })) {
            s.shake = 14; s.flashT = 6;
            highScore = Math.max(highScore, s.score);
            setHigh(highScore);
            setHud({ score: s.score, coins: s.coinsCollected, high: highScore });
            setMode('gameover');
            break;
          }
        }
        if (s.finishTimer > 0) {
          s.finishTimer += 1;
          if (s.finishTimer > 150) {
            highScore = Math.max(highScore, s.score); setHigh(highScore);
            setHud({ score: s.score, coins: s.coinsCollected, high: highScore });
            setMode('finished');
          }
        }
        for (const c of s.coins) {
          if (!c.taken && rectsOverlap(pBox, { x: c.x, y: c.y, w: 8, h: 8 })) { c.taken = true; s.coinsCollected += 1; s.flashT = 2; }
        }
        if (s.currentSignT > 0) s.currentSignT -= 1;
        if (Math.abs(s.distance % 8) < Math.max(0.3, Math.abs(s.speed))) {
          setHud(h => h.score === s.score && h.coins === s.coinsCollected ? h : { score: s.score, coins: s.coinsCollected, high: highScore });
        }
      }

      /* ── DRAW ── */
      const cam = { x: 0, y: 0 };
      if (s.shake > 0) { cam.x = (Math.random() - 0.5) * s.shake * 0.6; cam.y = (Math.random() - 0.5) * s.shake * 0.4; s.shake -= 0.6; }
      ctx.save();
      ctx.translate(cam.x, cam.y);

      const useImages = (t as any).images && BG_IMG.ready;
      if (useImages) {
        const grad = ctx.createLinearGradient(0, 0, 0, VH);
        grad.addColorStop(0, t.sky[0]); grad.addColorStop(1, t.sky[3]);
        ctx.fillStyle = grad; ctx.fillRect(-4, -4, VW + 8, VH + 8);
        const far = BG_IMG.far!;
        const fx = -Math.floor(s.bgFarOffset % far.width);
        ctx.drawImage(far, fx, 0); ctx.drawImage(far, fx + far.width, 0);
        const mid = BG_IMG.mid!;
        const mx = -Math.floor(s.bgMidOffset % mid.width);
        const my = FLOOR_Y - mid.height + 2;
        ctx.drawImage(mid, mx, my); ctx.drawImage(mid, mx + mid.width, my);
        const grd = BG_IMG.ground!;
        const gx = -Math.floor(s.groundOffset % grd.width);
        ctx.fillStyle = t.ground.D;
        ctx.fillRect(-4, FLOOR_Y + grd.height - 1, VW + 8, VH);
        for (let x = gx; x < VW + grd.width; x += grd.width) ctx.drawImage(grd, x, FLOOR_Y);
      } else {
        const b = bakedRef.current;
        const grad = ctx.createLinearGradient(0, 0, 0, VH);
        grad.addColorStop(0, t.sky[0]); grad.addColorStop(0.45, t.sky[1]); grad.addColorStop(0.75, t.sky[2]); grad.addColorStop(1, t.sky[3]);
        ctx.fillStyle = grad; ctx.fillRect(-4, -4, VW + 8, VH + 8);
        s.mountains.forEach((m: any) => { ctx.drawImage(b.mountain, Math.round(m.x), FLOOR_Y - 12 - b.mountain.height + 4); ctx.drawImage(b.mountain, Math.round(m.x + 120), FLOOR_Y - 12 - b.mountain.height + 4); ctx.drawImage(b.mountain, Math.round(m.x + 240), FLOOR_Y - 12 - b.mountain.height + 4); });
        s.clouds.forEach((c: any) => { ctx.save(); ctx.translate(Math.round(c.x), Math.round(c.y)); ctx.scale(c.scale, c.scale); ctx.drawImage(b.cloud, 0, 0); ctx.restore(); });
        s.bushes.forEach((bz: any) => ctx.drawImage(b.bush, Math.round(bz.x), Math.round(bz.y)));
        ctx.fillStyle = t.ground.D; ctx.fillRect(-4, FLOOR_Y + b.ground.height - 2, VW + 8, VH);
        const startX = -Math.floor(s.groundOffset);
        for (let x = startX; x < VW + b.ground.width; x += b.ground.width) ctx.drawImage(b.ground, x, FLOOR_Y);
      }

      const heartFrame = (Math.floor(performance.now() / 180) % 2) === 0 ? b!.heartA : b!.heartB;
      s.coins.forEach((c: any) => { if (!c.taken) ctx.drawImage(heartFrame, Math.round(c.x), Math.round(c.y)); });

      s.obstacles.forEach((o: any) => {
        if (o.type === 'sign') {
          const img = BG_IMG.signs[o.slug]; if (!img) return;
          const sx = Math.round(o.x), sy = Math.round(o.y);
          const postW = 3;
          const oPostH = typeof o.postH === 'number' ? o.postH : SIGN_POST_H_DEFAULT;
          const oBodyH = typeof o.bodyH === 'number' ? o.bodyH : SIGN_BODY_H;
          const postH = oPostH + 4;
          const postTopY = sy + oBodyH - 4;
          const post1X = sx + Math.round(o.w * 0.22);
          const post2X = sx + Math.round(o.w * 0.78) - postW;
          ctx.fillStyle = '#7d828b'; ctx.fillRect(post1X, postTopY, postW, postH); ctx.fillRect(post2X, postTopY, postW, postH);
          ctx.fillStyle = '#4f535b'; ctx.fillRect(post1X + postW - 1, postTopY, 1, postH); ctx.fillRect(post2X + postW - 1, postTopY, 1, postH);
          ctx.fillStyle = '#b0b4bb'; ctx.fillRect(post1X, postTopY, 1, postH); ctx.fillRect(post2X, postTopY, 1, postH);
          ctx.drawImage(img, sx, sy);
          ctx.fillStyle = 'rgba(0,0,0,0.22)'; ctx.fillRect(post1X - 1, FLOOR_Y, 5, 1); ctx.fillRect(post2X - 1, FLOOR_Y, 5, 1);
        } else {
          ctx.drawImage(o.type === 'carrot' ? b.carrot : b.pumpkin, Math.round(o.x), Math.round(o.y));
        }
      });

      const p = s.player;
      const useLlama = themeRef.current === 'toronto' && BG_IMG.player;
      if (useLlama) {
        const img = BG_IMG.player!;
        const bob = (mode === 'playing' && p.onGround && s.speed !== 0 && (Math.floor(performance.now() / 130) % 2 === 0)) ? -1 : 0;
        const facingLeft = s.speed < 0;
        ctx.save();
        ctx.translate(Math.round(p.x), Math.round(p.y) + bob);
        if (facingLeft) { ctx.translate(PLAYER_W, 0); ctx.scale(-1, 1); }
        if (!p.onGround) { ctx.translate(PLAYER_W / 2, PLAYER_H); ctx.rotate((p.vy < 0 ? 0.12 : -0.12) * (facingLeft ? -1 : 1)); ctx.translate(-PLAYER_W / 2, -PLAYER_H); }
        ctx.drawImage(img, 0, 0, PLAYER_W, PLAYER_H);
        ctx.restore();
      } else {
        const pImg = mode === 'gameover' ? b.hurt : (!p.onGround ? b.jump : (p.frame === 0 ? b.runA : b.runB));
        ctx.drawImage(pImg, Math.round(p.x), Math.round(p.y));
      }

      if (s.flashT > 0) { ctx.fillStyle = `rgba(255,255,255,${0.4 * (s.flashT / 8)})`; ctx.fillRect(0, 0, VW, VH); s.flashT -= 1; }
      ctx.restore();
    };

    const tick = (now: number) => {
      const dt = now - last; last = now; acc += dt;
      if (acc > 200) acc = STEP;
      while (acc >= STEP) { update(); acc -= STEP; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  const renderOverlay = () => {
    if (mode === 'gameover') return (
      <div className={styles.gameOverlay}>
        <h2>GAME OVER</h2>
        <p>Score <b>{hud.score}</b> · Hearts <b>{hud.coins}</b></p>
        <button className={styles.cta} onClick={startGame}>↻ RUN AGAIN</button>
      </div>
    );
    if (mode === 'finished') return (
      <div className={styles.gameOverlay}>
        <h2>YOU MADE IT!</h2>
        <p>You ran Chelsea&apos;s whole career path.<br />Hearts collected <b>{hud.coins}</b></p>
        <button className={styles.cta} onClick={startGame}>↻ RUN AGAIN</button>
      </div>
    );
    return null;
  };

  return (
    <div className={styles.gameRoot}>
      <div className={styles.gameCanvasWrap}>
        <canvas ref={canvasRef} className={styles.pixel} />
        <div className={styles.gameHud}>
          <div className={styles.col}>
            <span className={styles.lbl}>SCORE</span>
            <span className={styles.val}>{String(hud.score).padStart(5, '0')}</span>
          </div>
          <div className={`${styles.col} ${styles.hearts}`} style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
            <span className={styles.val} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="20" height="18" viewBox="0 0 12 11" aria-hidden="true">
                <path d="M1 3.5C1 2.1 2.1 1 3.5 1c1 0 1.9.6 2.5 1.5C6.6 1.6 7.5 1 8.5 1 9.9 1 11 2.1 11 3.5c0 3.5-5 6.5-5 6.5S1 7 1 3.5z" fill={THEMES[theme].accent} />
              </svg>
              × {hud.coins}
            </span>
          </div>
        </div>
        {renderOverlay()}
      </div>
      <div className={styles.mobileControls}>
        <div className={styles.group}>
          <button onTouchStart={e => { e.preventDefault(); touchLeftDown(); }} onTouchEnd={e => { e.preventDefault(); touchLeftUp(); }} onTouchCancel={e => { e.preventDefault(); touchLeftUp(); }} onMouseDown={touchLeftDown} onMouseUp={touchLeftUp} onMouseLeave={touchLeftUp} aria-label="Walk left">←</button>
          <button onTouchStart={e => { e.preventDefault(); touchRightDown(); }} onTouchEnd={e => { e.preventDefault(); touchRightUp(); }} onTouchCancel={e => { e.preventDefault(); touchRightUp(); }} onMouseDown={touchRightDown} onMouseUp={touchRightUp} onMouseLeave={touchRightUp} aria-label="Walk right">→</button>
        </div>
        <div className={`${styles.group} ${styles.jump}`}>
          <button onTouchStart={e => { e.preventDefault(); touchJumpDown(); }} onTouchEnd={e => { e.preventDefault(); touchJumpUp(); }} onTouchCancel={e => { e.preventDefault(); touchJumpUp(); }} onMouseDown={touchJumpDown} onMouseUp={touchJumpUp} onMouseLeave={touchJumpUp} aria-label="Jump">↑</button>
        </div>
      </div>
    </div>
  );
}
