import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { getCategoryBySlug } from "@/data/categories";

export const metadata: Metadata = {
  title: "Industries Served | Paints, Plastics, Inks, Textile, Leather",
  description:
    "Al Mobeen Enterprise supplies bulk industrial chemicals across 7 major sectors in Pakistan: Paints & Coatings, Printing Inks, Plastics/PVC, Textile, Leather, Detergents, and General Manufacturing.",
};

import PageHero from "@/components/ui/PageHero";

export default function IndustriesPage() {
  return (
    <div className="bg-[var(--color-base)] min-h-screen">
      <PageHero
        title="Industries We Serve"
        description="Reliable bulk chemical supply tailored to the technical requirements of Pakistan's core manufacturing sectors."
        badgeText="Sector Expertise"
      />

      <div className="section-container py-16 md:py-20">

        {/* Industry List */}
        <div className="space-y-8">
          {industries.map((industry, index) => {
            const relatedCats = industry.relatedCategories
              .map((slug) => getCategoryBySlug(slug))
              .filter(Boolean);

            const isEven = index % 2 === 0;

            return (
              <div
                key={industry.slug}
                className="bg-[var(--color-surface)] text-[var(--color-ink)] rounded-3xl border border-[var(--color-border)] p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-center"
              >
                <div className={`flex-1 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <span className="inline-block text-xs font-black uppercase tracking-wider text-[var(--color-accent)] mb-2">
                    Sector {index + 1}
                  </span>
                  <h2 style={{ color: "#0d1b2a" }} className="text-xl md:text-3xl font-bold mb-4">
                    {industry.name}
                  </h2>
                  <p style={{ color: "#283747" }} className="text-sm md:text-base font-medium leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Related Categories */}
                  {relatedCats.length > 0 && (
                    <div className="mb-6">
                      <h4 style={{ color: "#1b263b" }} className="text-xs font-extrabold uppercase tracking-wider mb-2">
                        Key Chemical Categories Supplied:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {relatedCats.map((cat) => (
                          <span
                            key={cat!.slug}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[var(--color-base)] text-[var(--color-ink)] border border-[var(--color-border)]"
                          >
                            <span className="category-dot" style={{ background: cat!.tintColor }} />
                            {cat!.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/industries/${industry.slug}`}
                    className="btn-outline !py-2.5 !px-5 !text-xs inline-flex items-center gap-2"
                  >
                    <span>View Sector Products</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>

                <div className={`w-full md:w-72 h-48 rounded-2xl bg-[var(--color-base)] border border-[var(--color-border)] flex items-center justify-center ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <div className="text-center p-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-2 font-bold text-xl">
                      {industry.name.charAt(0)}
                    </div>
                    <span style={{ color: "#1b263b" }} className="text-xs font-bold">
                      Al Mobeen Supply
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
