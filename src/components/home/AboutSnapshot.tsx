"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutSnapshot() {
  const { t } = useLanguage();

  return (
    <section className="section-padding rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 md:-mt-14 relative z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]" style={{ background: "var(--color-surface)" }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <ScrollReveal>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                Since 1995
              </p>
              <h2 className="mb-5">{t("about.snippet.title")}</h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--color-neutral)" }}
              >
                {t("about.snippet.text")}
              </p>
              <Link href="/about" className="btn-outline">
                {t("nav.about")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          {/* Visual Column */}
          <ScrollReveal delay={100}>
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ background: "linear-gradient(135deg, rgba(27, 58, 107, 0.08) 0%, rgba(232, 98, 44, 0.06) 100%)" }}
            >
              {/* Decorative chemical elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "rgba(27, 58, 107, 0.1)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M17 18h1" />
                      <path d="M12 18h1" />
                      <path d="M7 18h1" />
                    </svg>
                  </div>
                  <p
                    className="text-4xl font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    30+
                  </p>
                  <p
                    className="text-sm font-medium mt-1"
                    style={{ color: "var(--color-neutral)" }}
                  >
                    {t("stats.years")}
                  </p>
                </div>
              </div>

              {/* Floating category dots */}
              <div className="absolute top-6 left-6 w-3 h-3 rounded-full blob-1" style={{ background: "var(--tint-solvents)" }} />
              <div className="absolute top-10 right-10 w-4 h-4 rounded-full blob-2" style={{ background: "var(--tint-pigments)" }} />
              <div className="absolute bottom-8 left-12 w-3 h-3 rounded-full blob-1" style={{ background: "var(--tint-resins)" }} />
              <div className="absolute bottom-12 right-8 w-2 h-2 rounded-full blob-2" style={{ background: "var(--tint-titanium)" }} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
