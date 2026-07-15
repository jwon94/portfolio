"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(() => text.split("").map(() => randomChar()));
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const revealedRef = useRef(0);

  useEffect(() => {
    const totalChars = text.length;
    const revealInterval = 40; // ms between each character reveal
    const scrambleFrameRate = 50; // ms between scramble updates

    frameRef.current = setInterval(() => {
      revealedRef.current = Math.min(revealedRef.current + 1, totalChars);

      setDisplay(
        text.split("").map((char, i) => {
          if (i < revealedRef.current) return char;
          if (char === " ") return " ";
          return randomChar();
        })
      );

      if (revealedRef.current >= totalChars) {
        clearInterval(frameRef.current!);
      }
    }, revealInterval);

    return () => {
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [text]);

  return (
    <span className={className} aria-label={text}>
      {display.map((char, i) => (
        <span key={i} style={{ display: "inline" }}>
          {char}
        </span>
      ))}
    </span>
  );
}
