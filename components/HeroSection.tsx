"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";

import PhysicsTags from "@/components/PhysicsTags";

function MagneticFace() {
  const svgRef = useRef<SVGSVGElement>(null);
  const controls = useAnimation();

  const eyeRawX = useMotionValue(0);
  const eyeRawY = useMotionValue(0);
  const eyeX = useSpring(eyeRawX, { stiffness: 200, damping: 18, mass: 0.1 });
  const eyeY = useSpring(eyeRawY, { stiffness: 200, damping: 18, mass: 0.1 });

  const bodyRawX = useMotionValue(0);
  const bodyRawY = useMotionValue(0);
  const bodyX = useSpring(bodyRawX, { stiffness: 80, damping: 20, mass: 0.3 });
  const bodyY = useSpring(bodyRawY, { stiffness: 80, damping: 20, mass: 0.3 });

  useEffect(() => {
    controls.start({
      y: 0,
      rotate: 0,
      transition: { duration: 0.55, delay: 0.1, ease: [0.3, 0, 0.7, 1] },
    });

    function onMouseMove(e: MouseEvent) {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const MAX = 7;
      eyeRawX.set(Math.max(-MAX, Math.min(MAX, (e.clientX - cx) * 0.08)));
      eyeRawY.set(Math.max(-MAX, Math.min(MAX, (e.clientY - cy) * 0.08)));
      const BODY_MAX = 2;
      bodyRawX.set(Math.max(-BODY_MAX, Math.min(BODY_MAX, (e.clientX - cx) * 0.02)));
      bodyRawY.set(Math.max(-BODY_MAX, Math.min(BODY_MAX, (e.clientY - cy) * 0.02)));
    }

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [controls, eyeRawX, eyeRawY, bodyRawX, bodyRawY]);

  return (
    <motion.div className="flex justify-center mb-0" style={{ x: bodyX, y: bodyY }}>
      <motion.svg
        ref={svgRef}
        width="65"
        height="65"
        viewBox="0 0 65 65"
        xmlns="http://www.w3.org/2000/svg"
        animate={controls}
        initial={{ y: -200, rotate: -30 }}
      >
        <defs>
          <clipPath id="face-clip">
            <path d="M38.0272 5.52721C38.0272 2.47462 35.5526 0 32.5 0C29.4474 0 26.9728 2.47462 26.9728 5.52721V11.5865L23.9791 6.3184C22.4709 3.6644 19.0968 2.73554 16.4428 4.24373C13.7888 5.75191 12.86 9.12603 14.3681 11.78L17.7748 17.7748L11.78 14.3681C9.12604 12.8599 5.75192 13.7888 4.24373 16.4428C2.73555 19.0968 3.66441 22.4709 6.31841 23.9791L11.5865 26.9728H5.52721C2.47461 26.9728 0 29.4474 0 32.5C0 35.5526 2.47461 38.0272 5.52721 38.0272H11.5864L6.31841 41.0209C3.66441 42.5291 2.73555 45.9032 4.24373 48.5572C5.75192 51.2112 9.12604 52.14 11.78 50.6319L17.7748 47.2252L14.3681 53.22C12.86 55.874 13.7888 59.2481 16.4428 60.7563C19.0968 62.2645 22.4709 61.3356 23.9791 58.6816L26.9728 53.4135V59.4728C26.9728 62.5254 29.4474 65 32.5 65C35.5526 65 38.0272 62.5254 38.0272 59.4728V53.4135L41.0209 58.6816C42.5291 61.3356 45.9032 62.2645 48.5572 60.7563C51.2112 59.2481 52.14 55.874 50.6319 53.22L47.2252 47.2252L53.22 50.6319C55.874 52.14 59.2481 51.2112 60.7563 48.5572C62.2645 45.9032 61.3356 42.5291 58.6816 41.0209L53.4136 38.0272H59.4728C62.5254 38.0272 65 35.5526 65 32.5C65 29.4474 62.5254 26.9728 59.4728 26.9728H53.4135L58.6816 23.9791C61.3356 22.4709 62.2645 19.0968 60.7563 16.4428C59.2481 13.7888 55.874 12.8599 53.22 14.3681L47.2252 17.7748L50.6319 11.78C52.14 9.12603 51.2112 5.75191 48.5572 4.24373C45.9032 2.73554 42.5291 3.6644 41.0209 6.3184L38.0272 11.5864V5.52721Z" />
          </clipPath>
        </defs>
        <path
          d="M38.0272 5.52721C38.0272 2.47462 35.5526 0 32.5 0C29.4474 0 26.9728 2.47462 26.9728 5.52721V11.5865L23.9791 6.3184C22.4709 3.6644 19.0968 2.73554 16.4428 4.24373C13.7888 5.75191 12.86 9.12603 14.3681 11.78L17.7748 17.7748L11.78 14.3681C9.12604 12.8599 5.75192 13.7888 4.24373 16.4428C2.73555 19.0968 3.66441 22.4709 6.31841 23.9791L11.5865 26.9728H5.52721C2.47461 26.9728 0 29.4474 0 32.5C0 35.5526 2.47461 38.0272 5.52721 38.0272H11.5864L6.31841 41.0209C3.66441 42.5291 2.73555 45.9032 4.24373 48.5572C5.75192 51.2112 9.12604 52.14 11.78 50.6319L17.7748 47.2252L14.3681 53.22C12.86 55.874 13.7888 59.2481 16.4428 60.7563C19.0968 62.2645 22.4709 61.3356 23.9791 58.6816L26.9728 53.4135V59.4728C26.9728 62.5254 29.4474 65 32.5 65C35.5526 65 38.0272 62.5254 38.0272 59.4728V53.4135L41.0209 58.6816C42.5291 61.3356 45.9032 62.2645 48.5572 60.7563C51.2112 59.2481 52.14 55.874 50.6319 53.22L47.2252 47.2252L53.22 50.6319C55.874 52.14 59.2481 51.2112 60.7563 48.5572C62.2645 45.9032 61.3356 42.5291 58.6816 41.0209L53.4136 38.0272H59.4728C62.5254 38.0272 65 35.5526 65 32.5C65 29.4474 62.5254 26.9728 59.4728 26.9728H53.4135L58.6816 23.9791C61.3356 22.4709 62.2645 19.0968 60.7563 16.4428C59.2481 13.7888 55.874 12.8599 53.22 14.3681L47.2252 17.7748L50.6319 11.78C52.14 9.12603 51.2112 5.75191 48.5572 4.24373C45.9032 2.73554 42.5291 3.6644 41.0209 6.3184L38.0272 11.5864V5.52721Z"
          fill="#E6E2A0"
        />
        <motion.g style={{ x: eyeX, y: eyeY }} clipPath="url(#face-clip)">
          <circle cx="27" cy="29" r="2" fill="#0B0B0B" />
          <circle cx="38" cy="29" r="2" fill="#0B0B0B" />
          <path
            d="M19 33C22.9375 37.5277 33.85 43.8666 46 33"
            stroke="black"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative px-12 flex flex-col items-center justify-center min-h-[80vh] overflow-hidden"
    >
      <div className="flex flex-col gap-[11px] max-w-[900px] mx-auto text-center">
        <MagneticFace />
        <p className="text-[40px] font-normal text-black leading-normal">
          {"Product Designer pairing visual craft with measurable business impact."}
        </p>
        <p
          className="text-[24px] font-normal text-black leading-normal"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {"10 years across fintech, enterprise, and startups. Previously at Intuit TurboTax, Slalom Build, Questrade & Sensibill."}
        </p>
      </div>

      <PhysicsTags containerRef={heroRef} />
    </section>
  );
}
