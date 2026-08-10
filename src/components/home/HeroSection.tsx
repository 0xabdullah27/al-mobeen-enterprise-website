"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero3DCard from "./Hero3DCard";
import { useLanguage } from "@/components/LanguageProvider";

export default function HeroSection() {
  const { t } = useLanguage();

  const waLink = `https://wa.me/923321134530?text=${encodeURIComponent(
    "Hello Al Mobeen Enterprise, I am inquiring about bulk chemical supply."
  )}`;

  return (
    <section className="relative bg-[var(--color-base)] py-12 lg:py-20 overflow-hidden border-b border-[var(--color-border)]">
      {/* Background subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--color-ink) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Completely clean, bold & unobstructed typography */}
          <div className="lg:col-span-7">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-xs font-extrabold text-[var(--color-ink)] mb-6 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
              <span>Sole Proprietorship • Est. 1995 • Jodia Bazar, Karachi</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-[var(--color-ink)]"
            >
              Bulk Chemical Supply from Pakistan&apos;s Trading Hub
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg font-extrabold leading-relaxed mb-8 max-w-xl text-[var(--color-ink)]/90"
            >
              Al Mobeen Enterprise sources high-grade industrial solvents, plasticizers, pigments, resins, and acids directly from established importers and tier-1 dealers across Pakistan.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link href="/products" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
                Browse 80+ Chemical Catalog
              </Link>

              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Desk
              </a>
            </motion.div>

            {/* Key Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--color-border)]"
            >
              <div>
                <p className="text-2xl md:text-3xl font-black text-[var(--color-primary)] font-tabular">30 Years</p>
                <p className="text-xs font-extrabold text-[var(--color-ink)]/90">In Jodia Bazar</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[var(--color-primary)] font-tabular">80+ Items</p>
                <p className="text-xs font-extrabold text-[var(--color-ink)]/90">Ready Sourcing</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-[var(--color-primary)] font-tabular">7 Sectors</p>
                <p className="text-xs font-extrabold text-[var(--color-ink)]/90">Nationwide Focus</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Embedded Hero 3D Card strictly within grid container */}
          <div className="lg:col-span-5">
            <Hero3DCard />
          </div>
        </div>
      </div>
    </section>
  );
}
