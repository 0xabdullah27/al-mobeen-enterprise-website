"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  badgeText?: string;
}

export default function PageHero({ title, description, badgeText }: PageHeroProps) {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[var(--color-base)] border-b border-[var(--color-border)]">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[var(--color-primary)] opacity-[0.15] blur-[100px]"></div>
        <div className="absolute left-1/3 right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[var(--color-accent)] opacity-[0.1] blur-[120px]"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-6 border border-[var(--color-primary)]/20 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              {badgeText}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-ink)] mb-6 leading-[1.1] tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: "var(--color-ink)" }}
            className="text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
