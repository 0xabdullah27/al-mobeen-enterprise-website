"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollProgressWidget() {
  const [mounted, setMounted] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const { scrollYProgress } = useScroll();

  // Smooth spring physics for rotation and fill level
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 24,
    restDelta: 0.001,
  });

  // Continuous rotation mapped to scroll progress (0deg at top, 720deg at bottom)
  const rotation = useTransform(smoothProgress, [0, 1], [0, 720]);

  // Fill height percentage from 0% (empty) at top to 100% (full) at bottom
  const fillHeight = useTransform(smoothProgress, [0, 1], [0, 100]);
  const fillHeightPercent = useTransform(fillHeight, (h) => `${h}%`);

  useEffect(() => {
    setMounted(true);
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setIsBottom(v > 0.85);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!mounted) return null;

  const handleClick = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.scrollY + window.innerHeight * 0.85,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center cursor-pointer select-none group"
      aria-label="Scroll Progress Roller"
      title={isBottom ? "Scroll back to top" : "Scroll down"}
    >
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Outer Curved Rotating Text SVG ("SCROLL TO SCROLL • SCROLL TO SCROLL •") */}
        <motion.svg
          style={{ rotate: rotation }}
          className="absolute inset-0 w-full h-full text-[var(--color-ink)]"
          viewBox="0 0 120 120"
        >
          <defs>
            <path
              id="scrollTextPath"
              d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
            />
          </defs>
          <text className="text-[9.5px] font-black uppercase tracking-[0.19em]" fill="currentColor">
            <textPath href="#scrollTextPath" startOffset="0%">
              SCROLL TO SCROLL • SCROLL TO SCROLL •{" "}
            </textPath>
          </text>
        </motion.svg>

        {/* Inner Dual-Tone Fill Progress Circle */}
        <div className="relative w-[64px] h-[64px] rounded-full bg-[#111111] overflow-hidden border-2 border-[var(--color-border)] shadow-2xl flex items-center justify-center">
          {/* Lime Green Liquid Fill Level (Fills vertically from top down as you scroll) */}
          <motion.div
            style={{ height: fillHeightPercent }}
            className="absolute top-0 inset-x-0 bg-[#c0eb00] transition-all duration-75"
          />

          {/* High-Contrast Arrow (Flips UP when near page bottom) */}
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 text-white mix-blend-difference"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isBottom ? "rotate-180" : ""}`}
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
}
