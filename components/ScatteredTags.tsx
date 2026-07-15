"use client";

import { RefObject, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

interface Tag {
  label: string;
  color: string;
  rotation: number;
  left: string;
  bottom: string;
  mass: number;      // controls how fast it falls — heavier = slower
  stiffness: number;
  damping: number;
  zIndex: number;
}

interface Props {
  constraintsRef?: RefObject<HTMLElement | null>;
}

// Critically-damped springs: damping ≈ 2*sqrt(stiffness*mass) → one clean thud, no bounce.
// Varying mass creates different fall speeds so pills land at slightly different times,
// like real objects of different weights hitting the same floor.
const TAGS: Tag[] = [
  { label: "PRODUCT DESIGN",     color: "#D9C9FF", rotation: -32, left: "-2%", bottom: "0%", mass: 0.8, stiffness: 280, damping: 30, zIndex: 3 },
  { label: "FINTECH",            color: "#EDEAC0", rotation:  16, left: "11%", bottom: "0%", mass: 1.8, stiffness: 220, damping: 40, zIndex: 6 },
  { label: "PROTOTYPING",        color: "#84E2CB", rotation:  -6, left: "22%", bottom: "0%", mass: 1.1, stiffness: 260, damping: 34, zIndex: 4 },
  { label: "USER RESEARCH",      color: "#EFDBD5", rotation:  48, left: "33%", bottom: "0%", mass: 2.4, stiffness: 200, damping: 44, zIndex: 2 },
  { label: "INTERACTION DESIGN", color: "#DFF9AD", rotation: -58, left: "42%", bottom: "0%", mass: 1.4, stiffness: 240, damping: 37, zIndex: 7 },
  { label: "SYSTEMS THINKING",   color: "#98CAFF", rotation:  55, left: "54%", bottom: "0%", mass: 0.9, stiffness: 270, damping: 31, zIndex: 1 },
  { label: "UX STRATEGY",        color: "#D9C9FF", rotation: -20, left: "64%", bottom: "0%", mass: 3.0, stiffness: 180, damping: 47, zIndex: 5 },
  { label: "VISUAL DESIGN",      color: "#84E2CB", rotation:  30, left: "75%", bottom: "0%", mass: 1.2, stiffness: 255, damping: 35, zIndex: 8 },
];

export default function ScatteredTags({ constraintsRef }: Props) {
  const internalRef = useRef<HTMLDivElement>(null);
  const boundary = (constraintsRef ?? internalRef) as RefObject<Element>;
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      ref={constraintsRef ? undefined : internalRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      {TAGS.map((tag) => (
        <motion.div
          key={tag.label}
          drag
          dragMomentum
          dragElastic={0.1}
          dragConstraints={boundary}
          whileHover={{ scale: 1.06, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
          whileDrag={{ scale: 1.1, zIndex: 50, boxShadow: "0 12px 32px rgba(0,0,0,0.18)" }}
          initial={shouldReduceMotion ? false : { y: -1400 }}
          animate={{ y: 0, rotate: tag.rotation }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  type: "spring",
                  stiffness: tag.stiffness,
                  damping: tag.damping,
                  mass: tag.mass,
                }
          }
          style={{
            position: "absolute",
            left: tag.left,
            bottom: tag.bottom,
            zIndex: tag.zIndex,
            backgroundColor: tag.color,
            color: "#000",
            cursor: "grab",
            userSelect: "none",
            touchAction: "none",
            display: "inline-flex",
            alignItems: "center",
            padding: "16px 28px",
            borderRadius: "9999px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
            pointerEvents: "auto",
          }}
        >
          {tag.label}
        </motion.div>
      ))}
    </div>
  );
}
