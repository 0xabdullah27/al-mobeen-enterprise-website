"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { industries } from "@/data/industries";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/components/LanguageProvider";

const industryIcons: Record<string, ReactNode> = {
  "paints-coatings": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M12 11v5" />
      <path d="M8 16h8l-1 5H9l-1-5z" />
    </svg>
  ),
  "printing-inks": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3h12v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  ),
  "plastics-pvc": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="m3.27 6.96 8.73 5.05 8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  ),
  "textile-dyeing": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <path d="M6 9v12" />
      <path d="M13 6h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3" />
      <path d="M13 14h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4" />
    </svg>
  ),
  "leather": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  "detergents-cleaning": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  ),
  "general-industrial": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  ),
};

export default function IndustriesSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding rounded-t-[3rem] md:rounded-t-[4rem]   relative z-50 shadow-[0_-15px_40px_rgba(0,0,0,0.06)] bg-base">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="mb-3 text-ink">{t("industries.title")}</h2>
            <p className="text-base md:text-lg max-w-lg mx-auto font-semibold text-neutral">
              {t("industries.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 70} className="h-full w-full">
              <Link
                href={`/products?industry=${ind.slug}`}
                className="h-44 w-full flex flex-col items-center justify-center text-center p-5 rounded-2xl border border-border bg-surface backdrop-blur-xl group cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl hover:border-primary hover:-translate-y-1.5 relative overflow-hidden block"
              >
                {/* Arrow indicator on hover */}
                <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0 text-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 shrink-0 transition-all duration-300 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-surface group-hover:scale-110 shadow-xs">
                  {industryIcons[ind.slug] || industryIcons["general-industrial"]}
                </div>
                <h3 className="text-xs sm:text-sm font-bold tracking-tight text-ink group-hover:text-primary transition-colors px-2 leading-snug">
                  {ind.name}
                </h3>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
