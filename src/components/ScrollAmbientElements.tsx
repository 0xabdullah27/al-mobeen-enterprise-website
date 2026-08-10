"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollAmbientElements() {
  const { scrollYProgress } = useScroll();

  // Scroll driven transforms for ambient margin elements
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden hidden xl:block">
      {/* Left Floating Chemical Molecular Structure */}
      <motion.div
        style={{ rotate: rotateLeft, y: yLeft }}
        animate={{
          x: [0, 15, 0],
        }}
        transition={{
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/3 left-6 w-28 h-28 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-2xs flex items-center justify-center shadow-lg"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/40">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/40 animate-ping" />
      </motion.div>

      {/* Right Floating Chemical Orbital Gear */}
      <motion.div
        style={{ rotate: rotateRight, y: yRight }}
        animate={{
          x: [0, -15, 0],
        }}
        transition={{
          x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-2/3 right-6 w-32 h-32 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-2xs flex items-center justify-center shadow-lg"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent/40">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-accent/40 animate-ping" />
      </motion.div>
    </div>
  );
}
