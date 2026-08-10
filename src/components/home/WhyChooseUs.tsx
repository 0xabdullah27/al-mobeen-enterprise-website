"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const reasons = [
  {
    titleKey: "why.experience.title",
    textKey: "why.experience.text",
    gradient: "from-[var(--color-primary)] to-[var(--color-accent)]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    titleKey: "why.sourcing.title",
    textKey: "why.sourcing.text",
    gradient: "from-[var(--color-primary)] to-[var(--color-accent)]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    titleKey: "why.bulk.title",
    textKey: "why.bulk.text",
    gradient: "from-[var(--color-primary)] to-[var(--color-accent)]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
        <path d="M12 6v16" />
        <path d="M1 14h22" />
      </svg>
    ),
  },
  {
    titleKey: "why.jodiabazar.title",
    textKey: "why.jodiabazar.text",
    gradient: "from-[var(--color-primary)] to-[var(--color-accent)]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-[var(--color-surface)] relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2"
          >
            Core Advantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: "#0d1b2a" }}
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            {t("why.title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.titleKey}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-base)] text-center shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-start h-full"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} text-inverse-ink flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {reason.icon}
              </div>
              <h3 style={{ color: "#0d1b2a" }} className="text-base font-extrabold mb-2.5">
                {t(reason.titleKey)}
              </h3>
              <p style={{ color: "#283747" }} className="text-xs leading-relaxed font-medium">
                {t(reason.textKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
