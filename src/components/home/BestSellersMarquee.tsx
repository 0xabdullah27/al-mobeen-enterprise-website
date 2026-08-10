"use client";

import { getBestSellers } from "@/data/products";
import { useLanguage } from "@/components/LanguageProvider";

export default function BestSellersMarquee() {
  const bestSellers = getBestSellers();
  const { t } = useLanguage();

  const items = [...bestSellers, ...bestSellers];

  return (
    <section className="py-10 bg-[var(--color-surface)] overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 md:-mt-14 relative z-40 border-t border-[var(--color-border)] shadow-[0_-15px_40px_rgba(0,0,0,0.06)]">
      <div className="section-container mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            {t("bestsellers.title")}
          </p>
        </div>
        <span className="text-xs font-semibold text-[var(--color-neutral)] hidden sm:inline">
          High demand industrial chemical items
        </span>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {items.map((product, i) => (
            <span
              key={`${product.slug}-${i}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-extrabold whitespace-nowrap border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] shadow-sm hover:border-[var(--color-accent)] hover:scale-105 transition-all cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_#f97316]" />
              {product.displayName}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
