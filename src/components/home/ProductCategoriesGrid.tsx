"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import CategoryIcon from "@/components/ui/CategoryIcon";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductCategoriesGrid() {
  const { t } = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden bg-[var(--color-base)] rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 md:-mt-14 z-30 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]">
      {/* Ambient background blobs for glassmorphism to distort */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-[var(--color-accent)]/10 blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[var(--color-primary-light)]/10 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: "var(--color-primary)" }}
            className="text-xs font-black uppercase tracking-[0.2em] mb-2"
          >
            Explore Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: "#0d1b2a" }}
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            {t("categories.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: "#1b263b" }}
            className="text-base md:text-lg max-w-lg mx-auto font-semibold"
          >
            {t("categories.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <Link
                href={`/products?category=${cat.slug}`}
                className="block p-8 rounded-[2rem] border border-[var(--color-border)]/40 bg-[var(--color-surface)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(27,38,59,0.12)] transition-all duration-500 group h-full flex flex-col relative overflow-hidden"
              >
                {/* Large watermark icon */}
                <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 text-[var(--color-primary)]">
                  <CategoryIcon category={cat.slug} size={180} />
                </div>

                <div className="relative z-10 flex-1">
                  <div className="mb-6 p-4 rounded-2xl w-max bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-base)] border border-[var(--color-border)]/50 group-hover:-translate-y-1 transition-transform duration-500 shadow-sm">
                    <CategoryIcon category={cat.slug} size={32} className="text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors" />
                  </div>

                  <h3 className="text-xl font-extrabold mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-sm leading-relaxed mb-8 line-clamp-3 font-medium text-[var(--color-ink)]/85">
                    {cat.description}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between w-full mt-auto pt-4 border-t border-[var(--color-border)]/20 group-hover:border-[var(--color-border)]/40 transition-colors">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    Explore Category
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-base)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-surface)] text-[var(--color-primary)] transition-all duration-300 shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
