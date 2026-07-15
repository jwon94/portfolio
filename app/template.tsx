"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const SHAPE_PATHS = {
  cloud: {
    path: "M137.86 69.2941C136.163 69.2941 134.514 69.0868 132.935 68.6958C130.732 78.0083 122.513 84.9261 112.711 84.9261C107.698 84.9261 103.098 83.1163 99.5062 80.1021C97.2307 89.3098 89.0613 96.1251 79.3321 96.1251C69.743 96.1251 61.6691 89.5046 59.26 80.4983C55.6532 83.5642 51.0142 85.4084 45.9532 85.4084C36.1512 85.4084 27.9324 78.4906 25.729 69.1781C24.1503 69.5692 22.5012 69.7764 20.8046 69.7764C9.31453 69.7764 -4.72188e-05 60.2707 -4.67062e-05 48.5449C-4.66992e-05 48.3837 0.00172865 48.2229 0.00522876 48.0626C0.00172867 47.9022 -4.66711e-05 47.7414 -4.66641e-05 47.5802C-4.61515e-05 35.8544 9.31454 26.3487 20.8047 26.3487C22.5012 26.3487 24.1503 26.5559 25.729 26.947C27.9324 17.6345 36.1512 10.7167 45.9532 10.7167C51.0142 10.7167 55.6532 12.5609 59.26 15.6268C61.6691 6.62049 69.743 -3.88687e-06 79.3321 -3.46772e-06C89.0613 -3.04244e-06 97.2307 6.81535 99.5062 16.023C103.098 13.0088 107.698 11.199 112.711 11.199C122.513 11.199 130.732 18.1168 132.935 27.4293C134.514 27.0383 136.163 26.831 137.86 26.831C149.35 26.831 158.664 36.3367 158.664 48.0626C158.664 59.7884 149.35 69.2941 137.86 69.2941Z",
    viewBox: "0 0 159 97", w: 110, h: 67,
  },
  doubleflower: {
    path: "M63.1837 9.18367C63.1837 4.11167 59.072 0 54 0C48.928 0 44.8163 4.11167 44.8163 9.18367V19.2513L39.8422 10.4983C37.3363 6.08855 31.7301 4.5452 27.3204 7.05111C22.9106 9.55703 21.3673 15.1633 23.8732 19.573L29.5334 29.5334L19.573 23.8732C15.1633 21.3673 9.55704 22.9106 7.05112 27.3204C4.54521 31.7301 6.08856 37.3363 10.4983 39.8422L19.2514 44.8163H9.18367C4.11167 44.8163 0 48.928 0 54C0 59.072 4.11167 63.1837 9.18367 63.1837H19.2513L10.4983 68.1578C6.08856 70.6637 4.54522 76.2699 7.05113 80.6796C9.55704 85.0893 15.1633 86.6327 19.573 84.1268L29.5335 78.4665L23.8732 88.427C21.3673 92.8367 22.9106 98.443 27.3204 100.949C31.7301 103.455 37.3363 101.911 39.8422 97.5017L44.8163 88.7486V98.8163C44.8163 103.888 48.928 108 54 108C59.072 108 63.1837 103.888 63.1837 98.8163V88.7487L68.1578 97.5017C70.6637 101.911 76.2699 103.455 80.6796 100.949C85.0894 98.443 86.6327 92.8367 84.1268 88.427L78.4665 78.4665L88.427 84.1268C92.8367 86.6327 98.443 85.0893 100.949 80.6796C103.455 76.2699 101.911 70.6637 97.5017 68.1578L88.7487 63.1837H98.8163C103.888 63.1837 108 59.072 108 54C108 48.928 103.888 44.8163 98.8163 44.8163H88.7486L97.5017 39.8422C101.911 37.3363 103.455 31.7301 100.949 27.3204C98.443 22.9106 92.8367 21.3673 88.427 23.8732L78.4665 29.5334L84.1268 19.573C86.6327 15.1633 85.0894 9.55703 80.6796 7.05111C76.2699 4.5452 70.6637 6.08855 68.1578 10.4983L63.1837 19.2513V9.18367Z",
    viewBox: "0 0 108 108", w: 80, h: 80,
  },
  flower: {
    path: "M66.5346 133.069C56.0927 133.069 47.5047 125.131 46.4759 114.961C38.5567 121.425 26.8711 120.965 19.4875 113.582C12.104 106.198 11.6443 94.5126 18.1086 86.5934C7.93791 85.5646 -4.56433e-07 76.9766 0 66.5346C8.26446e-07 56.0927 7.93793 47.5047 18.1086 46.4759C11.6443 38.5567 12.104 26.8711 19.4876 19.4875C26.8711 12.104 38.5567 11.6443 46.4759 18.1086C47.5047 7.9379 56.0927 8.26444e-07 66.5346 0C76.9766 -4.56432e-07 85.5646 7.93791 86.5934 18.1086C94.5126 11.6443 106.198 12.1039 113.582 19.4875C120.965 26.8711 121.425 38.5567 114.961 46.4759C125.131 47.5047 133.069 56.0927 133.069 66.5346C133.069 76.9766 125.131 85.5646 114.961 86.5934C121.425 94.5126 120.965 106.198 113.582 113.582C106.198 120.965 94.5126 121.425 86.5934 114.961C85.5646 125.131 76.9766 133.069 66.5346 133.069Z",
    viewBox: "0 0 134 134", w: 90, h: 90,
  },
  oval: {
    path: "M91.7781 43.4615C104.383 38.8983 112.414 32.0027 112.379 24.3201C112.318 10.7487 87.111 -0.139129 56.0783 0.00140305C25.0456 0.141935 -0.0615064 11.2576 -4.81224e-05 24.829C0.0347427 32.5116 8.12753 39.3342 20.7736 43.7831C8.16834 48.3463 0.137678 55.242 0.172469 62.9246C0.233927 76.4959 25.4407 87.3838 56.4734 87.2432C87.5061 87.1027 112.613 75.987 112.552 62.4157C112.517 54.7331 104.424 47.9104 91.7781 43.4615Z",
    viewBox: "0 0 113 88", w: 120, h: 93,
  },
} as const;

type ShapeKey = keyof typeof SHAPE_PATHS;

const PALETTE: { shape: ShapeKey | "pill"; color: string }[] = [
  { shape: "flower",       color: "#FE8F00" },
  { shape: "doubleflower", color: "#BDBCFA" },
  { shape: "flower",       color: "#84E2CB" },
  { shape: "oval",         color: "#9C8902" },
  { shape: "cloud",        color: "#E2E2E2" },
  { shape: "pill",         color: "#EFDBD5" },
  { shape: "flower",       color: "#DFF9AD" },
  { shape: "doubleflower", color: "#D9C9FF" },
  { shape: "pill",         color: "#EDEAC0" },
  { shape: "oval",         color: "#84E2CB" },
  { shape: "pill",         color: "#BDBCFA" },
  { shape: "cloud",        color: "#DFF9AD" },
  { shape: "flower",       color: "#EFDBD5" },
  { shape: "doubleflower", color: "#FE8F00" },
  { shape: "pill",         color: "#E2E2E2" },
  { shape: "oval",         color: "#D9C9FF" },
  { shape: "flower",       color: "#EDEAC0" },
  { shape: "pill",         color: "#84E2CB" },
  { shape: "cloud",        color: "#BDBCFA" },
  { shape: "doubleflower", color: "#DFF9AD" },
  { shape: "oval",         color: "#FE8F00" },
  { shape: "pill",         color: "#9C8902" },
  { shape: "flower",       color: "#E2E2E2" },
  { shape: "pill",         color: "#D9C9FF" },
  { shape: "cloud",        color: "#EFDBD5" },
  { shape: "doubleflower", color: "#84E2CB" },
  { shape: "oval",         color: "#EDEAC0" },
  { shape: "pill",         color: "#FE8F00" },
  { shape: "flower",       color: "#BDBCFA" },
  { shape: "pill",         color: "#DFF9AD" },
  { shape: "cloud",        color: "#9C8902" },
  { shape: "doubleflower", color: "#EFDBD5" },
  { shape: "pill",         color: "#EDEAC0" },
  { shape: "oval",         color: "#E2E2E2" },
  { shape: "flower",       color: "#D9C9FF" },
  { shape: "pill",         color: "#BDBCFA" },
  { shape: "cloud",        color: "#84E2CB" },
  { shape: "doubleflower", color: "#EDEAC0" },
  { shape: "pill",         color: "#FE8F00" },
  { shape: "oval",         color: "#DFF9AD" },
];

function sr(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const SHAPES = PALETTE.map((p, i) => ({
  ...p,
  left:     sr(i * 5)     * 95,
  rotate:   (sr(i * 5 + 1) - 0.5) * 70,
  duration: 0.5 + sr(i * 5 + 2) * 0.5,
  delay:    sr(i * 5 + 3) * 0.6,
  scale:    0.6 + sr(i * 5 + 4) * 0.8,
}));

function ShapesOverlay() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Falling shapes */}
      {SHAPES.map((s, i) => {
        const def = s.shape !== "pill" ? SHAPE_PATHS[s.shape as ShapeKey] : null;
        return (
          <motion.div
            key={i}
            initial={{ y: -200, rotate: s.rotate }}
            animate={{ y: "115vh" }}
            transition={{ duration: s.duration, delay: s.delay, ease: [0.3, 0, 0.7, 1] }}
            style={{
              position: "absolute",
              left: `${s.left}%`,
              top: 0,
              transform: `scale(${s.scale})`,
              transformOrigin: "top left",
              ...(def
                ? { width: def.w, height: def.h }
                : {
                    backgroundColor: s.color,
                    borderRadius: "9999px",
                    width: 80 + sr(i) * 60,
                    height: 36,
                  }),
            }}
          >
            {def && (
              <svg
                style={{ width: "100%", height: "100%" }}
                viewBox={def.viewBox}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={def.path} fill={s.color} />
              </svg>
            )}
          </motion.div>
        );
      })}

    </div>
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && <ShapesOverlay />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.35 }}
      >
        {children}
      </motion.div>
    </>
  );
}
