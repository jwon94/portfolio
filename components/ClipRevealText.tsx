"use client";

import { motion } from "framer-motion";

const DIRECTIONS = [
  { x: 0, y: "100%" },
  { x: 0, y: "-100%" },
  { x: "100%", y: 0 },
  { x: "-100%", y: 0 },
];

export default function ClipRevealText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const letters = text.split("");

  return (
    <span className={className} aria-label={text}>
      {letters.map((char, i) => {
        const dir = DIRECTIONS[i % DIRECTIONS.length];
        return (
          <span
            key={i}
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ x: dir.x, y: dir.y, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === " " ? " " : char}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
