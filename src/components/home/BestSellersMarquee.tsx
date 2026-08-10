"use client";

import { getBestSellers } from "@/data/products";
import { useLanguage } from "@/components/LanguageProvider";

export default function BestSellersMarquee() {
  const bestSellers = getBestSellers();
  const { t } = useLanguage();

  const items = [...bestSellers, ...bestSellers];

  return (
    <section className="section-padding  bg-surface overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] relative z-40 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]">
      <div className="section-container mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
            {t("bestsellers.title")}
          </p>
        </div>
        <span className="text-xs font-semibold text-neutral hidden sm:inline">
          High demand industrial chemical items
        </span>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {items.map((product, i) => (
            <span
              key={`${product.slug}-${i}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-extrabold whitespace-nowrap border border-border bg-base text-ink shadow-sm hover:border-accent hover:scale-105 transition-all cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-accent shadow-accent" />
              {product.displayName}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
