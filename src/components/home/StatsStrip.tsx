"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

interface StatItem {
  value: number | string;
  suffix: string;
  labelKey: string;
  isNumeric: boolean;
}

const stats: StatItem[] = [
  { value: 30, suffix: "", labelKey: "stats.years", isNumeric: true },
  { value: 80, suffix: "+", labelKey: "stats.products", isNumeric: true },
  { value: 7, suffix: "", labelKey: "stats.industries", isNumeric: true },
  { value: "Nationwide", suffix: "", labelKey: "stats.coverage", isNumeric: false },
];

export default function StatsStrip() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<(number | string)[]>(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (prefersReduced) {
            setCounts(stats.map((s) => s.value));
            return;
          }

          // Animate each numeric counter
          const duration = 1200;
          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(
              stats.map((s) => {
                if (!s.isNumeric) return progress >= 0.5 ? s.value : "";
                return Math.round((s.value as number) * eased);
              })
            );

            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={ref}
      className="relative rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 md:-mt-14 z-10 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <div className="section-container py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.labelKey} className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold font-tabular mb-1"
                style={{ color: "var(--color-primary)" }}
              >
                {stat.isNumeric ? (
                  <>
                    {counts[i]}
                    {stat.suffix}
                  </>
                ) : (
                  <span className="text-2xl md:text-3xl">
                    {counts[i] || t("stats.nationwide")}
                  </span>
                )}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-neutral)" }}
              >
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
