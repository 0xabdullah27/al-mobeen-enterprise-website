"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const reasons = [
  {
    titleKey: "why.experience.title",
    textKey: "why.experience.text",
    gradient: "from-primary to-accent",
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
    gradient: "from-primary to-accent",
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
    gradient: "from-primary to-accent",
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
    gradient: "from-primary to-accent",
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
    <section className="section-padding bg-surface relative overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]  z-60 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]">
      <div className="section-container relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-ink"
          >
            {t("why.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className=" md:text-lg max-w-2xl mx-auto font-semibold text-neutral"
          >
            {t("why.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.titleKey}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-border bg-base p-6 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary text-inverse-ink flex items-center justify-center mb-5 shadow-md">
                  {reason.icon}
                </div>

                <h3 className="text-base font-extrabold mb-2.5 text-ink">
                  {t(reason.titleKey)}
                </h3>

                <p className="text-xs leading-relaxed font-medium text-ink opacity-85">
                  {t(reason.textKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
