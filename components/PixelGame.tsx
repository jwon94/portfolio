'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './PixelGame.module.css';

/* ─────────────────────────────────────────────────────────────────────────────
   SPRITES  (converted from sprites.jsx — no window globals)
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

const GROUND_TILE = `
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

/* ── Sprite helpers ── */
interface ParsedSprite { w: number; h: number; lines: string[] }
type Palette = Record<string, string>;

function parseSprite(str: string): ParsedSprite {
  const lines = str.split('\n').map(l => l.trim()).filter(Boolean);
  return { w: lines[0].length, h: lines.length, lines };
}

function drawSprite(
  ctx: CanvasRenderingContext2D,
  sprite: ParsedSprite,
  x: number,
  y: number,
  palette: Palette,
  flip = false,
) {
  const { w, h, lines } = sprite;
  x = Math.round(x); y = Math.round(y);
  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      const ch = lines[row][col];
      if (ch === '.' || !palette[ch]) continue;
      ctx.fillStyle = palette[ch];
      const px = flip ? (x + (w - 1 - col)) : (x + col);
      ctx.fillRect(px, y + row, 1, 1);
    }
  }
}

function bakeSprite(sprite: ParsedSprite, palette: Palette, flip = false): HTMLCanvasElement {
  const { w, h } = sprite;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
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
  GROUND_TILE:  parseSprite(GROUND_TILE),
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
    player: {
      H: '#2a1f3a', S: '#fde0c8', E: '#1a1426', C: '#ff97b0',
      M: '#c8456b', o: '#1a1426', X: '#ff5577',
      R: '#ff6f95', r: '#d04d72', W: '#ffffff', P: '#ff3565', p: '#c41e4d',
      B: '#3b3556', b: '#1f1a30',
    },
    coin:     { P: '#ff3565', p: '#c41e4d', W: '#ffffff' },
    obstacle: {
      o: '#ff8c3a', t: '#d96a1f',
      g: '#6fb05a', G: '#4f8a40',
      P: '#ff7e3a', p: '#d05a1d', y: '#fff39a',
    },
    hud:        '#ffffff',
    accent:     '#ff3565',
    skyTopHex:  '#fad7e6',
  },
  mono: {
    sky:      ['#fcfcfc', '#f0f0f0', '#e2e2e2', '#cfcfcf'],
    mountain: { m: '#9a9a9a', n: '#7a7a7a' },
    cloud:    { W: '#ffffff' },
    bush:     { F: '#4a4a4a', f: '#2a2a2a', T: '#1a1a1a' },
    ground:   { G: '#1a1a1a', g: '#000000', D: '#5a5a5a', d: '#3d3d3d' },
    player: {
      H: '#000000', S: '#ffffff', E: '#000000', C: '#b0b0b0',
      M: '#000000', o: '#000000', X: '#000000',
      R: '#1f1f1f', r: '#0a0a0a', W: '#ffffff', P: '#000000', p: '#1f1f1f',
      B: '#000000', b: '#000000',
    },
    coin:     { P: '#000000', p: '#1f1f1f', W: '#ffffff' },
    obstacle: {
      o: '#2a2a2a', t: '#000000',
      g: '#1a1a1a', G: '#000000',
      P: '#2a2a2a', p: '#000000', y: '#cfcfcf',
    },
    hud:        '#ffffff',
    accent:     '#000000',
    skyTopHex:  '#fcfcfc',
  },
} as const;

type ThemeName = keyof typeof THEMES;

/* ─────────────────────────────────────────────────────────────────────────────
   CONSTANTS  (identical to game.jsx)
───────────────────────────────────────────────────────────────────────────── */
const VW = 360, VH = 160;
const FLOOR_Y = 132;
const PLAYER_X = 56;
const GRAVITY = 0.36;
const JUMP_V  = -5.6;
const JUMP_V2 = -4.6;
const MIN_JUMP_FRAMES = 6;
const BASE_SPEED = 1.8;
const MAX_SPEED  = 4.2;

function rectsOverlap(
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */
interface PixelGameProps {
  theme?: ThemeName;
}

export default function PixelGame({ theme = 'pastel' }: PixelGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef  = useRef<any>(null);
  const bakedRef  = useRef<any>(null);
  const themeRef  = useRef<ThemeName>(theme);
  const [mode, setMode] = useState<'title' | 'playing' | 'gameover'>('title');
  const [hud, setHud] = useState({ score: 0, coins: 0, high: 0 });
  const [, force] = useState(0);

  const HS_KEY = 'pixcel-game-high-v1';
  const getHigh = () => { try { return parseInt(localStorage.getItem(HS_KEY) || '0', 10) || 0; } catch { return 0; } };
  const setHigh = (n: number) => { try { localStorage.setItem(HS_KEY, String(n)); } catch {} };

  /* re-bake when theme changes */
  useEffect(() => {
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
    force(n => n + 1);
  }, [theme]);

  /* init state */
  const initState = useCallback(() => {
    stateRef.current = {
      player: { x: PLAYER_X, y: FLOOR_Y - 18, vy: 0, onGround: true, jumps: 0, frame: 0, animT: 0, hurt: false, jumpHeld: 0 },
      obstacles: [],
      coins: [],
      clouds:    [{ x: 40, y: 18, scale: 1 }, { x: 180, y: 30, scale: 0.8 }, { x: 290, y: 14, scale: 1.1 }],
      mountains: [{ x: 0 }, { x: 120 }, { x: 240 }],
      bushes:    [{ x: 80, y: FLOOR_Y - 10 }, { x: 200, y: FLOOR_Y - 10 }, { x: 320, y: FLOOR_Y - 10 }],
      groundOffset: 0,
      speed: BASE_SPEED,
      distance: 0,
      coinsCollected: 0,
      score: 0,
      timeSinceObstacle: 0,
      timeSinceCoin: 0,
      shake: 0,
      flashT: 0,
      paused: false,
    };
  }, []);

  if (!stateRef.current) initState();

  /* startGame — defined before the keyboard effect that references it */
  const startGame = useCallback(() => {
    initState();
    setHud({ score: 0, coins: 0, high: getHigh() });
    setMode('playing');
  }, [initState]);

  /* keyboard + button input */
  const inputRef = useRef({ jumpPressed: false, jumpHeld: false });
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.code || e.key;
      const jumpKey = (k === 'Space' || k === ' ' || k === 'ArrowUp' || k === 'KeyW' || k === 'Up' || k === 'w');
      if (jumpKey) {
        if (e.type === 'keydown') {
          if (!e.repeat) inputRef.current.jumpPressed = true;
          inputRef.current.jumpHeld = true;
          if (mode === 'title')    { startGame(); }
          else if (mode === 'gameover') { startGame(); }
          e.preventDefault();
        } else {
          inputRef.current.jumpHeld = false;
        }
      }
      if (k === 'KeyR' || k === 'r') {
        if (mode === 'gameover') startGame();
      }
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('keyup', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('keyup', onKey);
    };
  }, [mode, startGame]);

  const touchJumpDown = useCallback(() => {
    inputRef.current.jumpPressed = true;
    inputRef.current.jumpHeld = true;
    if (mode === 'title' || mode === 'gameover') startGame();
  }, [mode, startGame]);

  const touchJumpUp = useCallback(() => {
    inputRef.current.jumpHeld = false;
  }, []);

  /* main loop — identical logic to game.jsx */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = VW; canvas.height = VH;
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;
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
        s.speed = Math.min(MAX_SPEED, BASE_SPEED + s.distance * 0.0008);

        const p = s.player;
        if (inputRef.current.jumpPressed) {
          if (p.onGround) {
            p.vy = JUMP_V; p.onGround = false; p.jumps = 1; p.jumpHeld = 0;
          } else if (p.jumps < 2) {
            p.vy = JUMP_V2; p.jumps = 2; p.jumpHeld = 0;
            s.sparkleT = 12;
          }
          inputRef.current.jumpPressed = false;
        }
        if (!p.onGround && p.vy < 0 && inputRef.current.jumpHeld && p.jumpHeld < MIN_JUMP_FRAMES) {
          p.vy -= 0.18;
          p.jumpHeld++;
        }

        p.vy += GRAVITY;
        p.y  += p.vy;
        if (p.y >= FLOOR_Y - 18) {
          p.y = FLOOR_Y - 18; p.vy = 0; p.onGround = true; p.jumps = 0; p.jumpHeld = 0;
        }
        if (p.onGround) {
          p.animT += 1;
          if (p.animT > 5) { p.animT = 0; p.frame = (p.frame + 1) % 2; }
        }

        s.timeSinceObstacle += 1;
        const minGap = Math.max(58, 110 - Math.floor(s.distance / 60));
        if (s.timeSinceObstacle > minGap && Math.random() < 0.04) {
          const type = Math.random() < 0.6 ? 'carrot' : 'pumpkin';
          const spr  = type === 'carrot' ? SPRITES.CARROT : SPRITES.PUMPKIN;
          s.obstacles.push({ x: VW + 8, y: FLOOR_Y - spr.h, w: spr.w, h: spr.h, type });
          s.timeSinceObstacle = 0;
        }
        s.timeSinceCoin += 1;
        if (s.timeSinceCoin > 38 && Math.random() < 0.06) {
          const n = 3 + Math.floor(Math.random() * 3);
          const baseY = 60 + Math.floor(Math.random() * 30);
          const arc = Math.random() < 0.5;
          for (let i = 0; i < n; i++) {
            s.coins.push({
              x: VW + 8 + i * 12,
              y: baseY + (arc ? Math.round(Math.sin(i / (n - 1) * Math.PI) * -10) : 0),
              w: 8, h: 8, taken: false, t: i * 4,
            });
          }
          s.timeSinceCoin = 0;
        }

        s.obstacles.forEach((o: any) => o.x -= s.speed);
        s.coins.forEach((c: any) => c.x -= s.speed);
        s.obstacles = s.obstacles.filter((o: any) => o.x > -40);
        s.coins = s.coins.filter((c: any) => !c.taken && c.x > -20);

        s.mountains.forEach((m: any) => {
          m.x -= s.speed * 0.18;
          if (m.x < -120) m.x += 360;
        });
        s.bushes.forEach((bz: any) => {
          bz.x -= s.speed * 0.55;
          if (bz.x < -20) bz.x += 360 + Math.random() * 40;
        });
        s.clouds.forEach((c: any) => {
          c.x -= s.speed * 0.3;
          if (c.x < -40) { c.x = VW + 10; c.y = 10 + Math.random() * 30; c.scale = 0.6 + Math.random() * 0.6; }
        });
        s.groundOffset = (s.groundOffset + s.speed) % 16;

        s.distance += s.speed * 0.6;
        s.score = Math.floor(s.distance) + s.coinsCollected * 10;

        const pBox = { x: p.x + 3, y: p.y + 2, w: 10, h: 14 };
        for (const o of s.obstacles) {
          const oBox = { x: o.x + 2, y: o.y + 3, w: o.w - 4, h: o.h - 4 };
          if (rectsOverlap(pBox, oBox)) {
            s.shake = 14; s.flashT = 6;
            highScore = Math.max(highScore, s.score);
            setHigh(highScore);
            setHud({ score: s.score, coins: s.coinsCollected, high: highScore });
            setMode('gameover');
            break;
          }
        }
        for (const c of s.coins) {
          const cBox = { x: c.x, y: c.y, w: 8, h: 8 };
          if (!c.taken && rectsOverlap(pBox, cBox)) {
            c.taken = true; s.coinsCollected += 1; s.flashT = 2;
          }
        }

        if (s.distance % 8 < s.speed) {
          setHud(h => h.score === s.score && h.coins === s.coinsCollected ? h : ({ score: s.score, coins: s.coinsCollected, high: highScore }));
        }
      }

      /* ── DRAW ── */
      const cam = { x: 0, y: 0 };
      if (s.shake > 0) {
        cam.x = (Math.random() - 0.5) * s.shake * 0.6;
        cam.y = (Math.random() - 0.5) * s.shake * 0.4;
        s.shake -= 0.6;
      }
      ctx.save();
      ctx.translate(cam.x, cam.y);

      const grad = ctx.createLinearGradient(0, 0, 0, VH);
      grad.addColorStop(0,    t.sky[0]);
      grad.addColorStop(0.45, t.sky[1]);
      grad.addColorStop(0.75, t.sky[2]);
      grad.addColorStop(1,    t.sky[3]);
      ctx.fillStyle = grad;
      ctx.fillRect(-4, -4, VW + 8, VH + 8);

      s.mountains.forEach((m: any) => {
        ctx.drawImage(b.mountain, Math.round(m.x),       FLOOR_Y - 12 - b.mountain.height + 4);
        ctx.drawImage(b.mountain, Math.round(m.x + 120), FLOOR_Y - 12 - b.mountain.height + 4);
        ctx.drawImage(b.mountain, Math.round(m.x + 240), FLOOR_Y - 12 - b.mountain.height + 4);
      });

      s.clouds.forEach((c: any) => {
        ctx.save();
        ctx.translate(Math.round(c.x), Math.round(c.y));
        ctx.scale(c.scale, c.scale);
        ctx.drawImage(b.cloud, 0, 0);
        ctx.restore();
      });

      s.bushes.forEach((bz: any) => {
        ctx.drawImage(b.bush, Math.round(bz.x), Math.round(bz.y));
      });

      const gh    = b.ground.height;
      const tileW = b.ground.width;
      ctx.fillStyle = t.ground.D;
      ctx.fillRect(-4, FLOOR_Y + gh - 2, VW + 8, VH);
      const startX = -Math.floor(s.groundOffset);
      for (let x = startX; x < VW + tileW; x += tileW) {
        ctx.drawImage(b.ground, x, FLOOR_Y);
      }

      const heartFrame = (Math.floor(performance.now() / 180) % 2) === 0 ? b.heartA : b.heartB;
      s.coins.forEach((c: any) => {
        if (c.taken) return;
        ctx.drawImage(heartFrame, Math.round(c.x), Math.round(c.y));
      });

      s.obstacles.forEach((o: any) => {
        const img = o.type === 'carrot' ? b.carrot : b.pumpkin;
        ctx.drawImage(img, Math.round(o.x), Math.round(o.y));
      });

      const p = s.player;
      let pImg: HTMLCanvasElement;
      if (mode === 'gameover')  pImg = b.hurt;
      else if (!p.onGround)     pImg = b.jump;
      else                      pImg = p.frame === 0 ? b.runA : b.runB;
      ctx.drawImage(pImg, Math.round(p.x), Math.round(p.y));

      if (s.flashT > 0) {
        ctx.fillStyle = `rgba(255,255,255,${0.4 * (s.flashT / 8)})`;
        ctx.fillRect(0, 0, VW, VH);
        s.flashT -= 1;
      }

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
  }, [mode]);

  /* ── overlays ── */
  const renderOverlay = () => {
    if (mode === 'title') {
      return (
        <div className={styles.gameOverlay}>
          <h2>HEART RUN</h2>
          <p>Help Chelsea dash through the meadow.<br />Collect hearts. Don&apos;t eat the carrots.</p>
          <div className={styles.keys}>
            <span className={styles.key}>SPACE</span>
            <span className={styles.key}>↑</span>
            <span className={styles.key}>W</span>
            <span style={{ opacity: 0.85, padding: '6px 4px' }}>to jump · tap again to double jump</span>
          </div>
          <button className={styles.cta} onClick={startGame}>▶ START</button>
        </div>
      );
    }
    if (mode === 'gameover') {
      return (
        <div className={styles.gameOverlay}>
          <h2>GAME OVER</h2>
          <p>Score <b>{hud.score}</b> · Hearts <b>{hud.coins}</b> · Best <b>{hud.high}</b></p>
          <button className={styles.cta} onClick={startGame}>↻ RUN AGAIN</button>
          <div className={styles.keys} style={{ marginTop: 4 }}>
            <span className={styles.key}>SPACE</span>
            <span style={{ opacity: 0.85, padding: '6px 4px' }}>or</span>
            <span className={styles.key}>R</span>
          </div>
        </div>
      );
    }
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
          <div className={styles.col} style={{ alignItems: 'flex-end' }}>
            <span className={styles.lbl}>BEST</span>
            <span className={styles.val}>{String(hud.high).padStart(5, '0')}</span>
          </div>
          <div className={styles.col} style={{ alignItems: 'flex-end', position: 'absolute', right: 18, top: 54 }}>
            <span className={styles.lbl} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
              <svg width="12" height="11" viewBox="0 0 12 11" aria-hidden="true">
                <path
                  d="M1 3.5C1 2.1 2.1 1 3.5 1c1 0 1.9.6 2.5 1.5C6.6 1.6 7.5 1 8.5 1 9.9 1 11 2.1 11 3.5c0 3.5-5 6.5-5 6.5S1 7 1 3.5z"
                  fill={THEMES[theme].accent}
                />
              </svg>
              × {hud.coins}
            </span>
          </div>
        </div>
        <div className={styles.mobileControls}>
          <div className={styles.group}></div>
          <div className={styles.group}>
            <button
              onTouchStart={(e) => { e.preventDefault(); touchJumpDown(); }}
              onTouchEnd={(e)   => { e.preventDefault(); touchJumpUp(); }}
              onMouseDown={touchJumpDown}
              onMouseUp={touchJumpUp}
              onMouseLeave={touchJumpUp}
              aria-label="Jump"
            >↑</button>
          </div>
        </div>
        {renderOverlay()}
      </div>
    </div>
  );
}
