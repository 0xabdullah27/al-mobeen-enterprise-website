"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useVelocity, useTransform, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { useQuote } from "./QuoteProvider";
import { useToast } from "@/components/ui/Toast";

export default function ChemicalMascotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem, isInQuote } = useQuote();
  const { showToast } = useToast();

  // Scroll tracking for dynamic rotation and bounce on scroll
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const rotateOnScroll = useTransform(scrollVelocity, [-2000, 2000], [-45, 45]);
  const scaleOnScroll = useTransform(scrollVelocity, [-2000, 0, 2000], [1.2, 1, 1.2]);

  const quickItems = products.filter((p) => p.bestSeller).slice(0, 5);
  const searchResults = searchQuery.trim()
    ? products.filter((p) =>
      p.displayName.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 4)
    : quickItems;

  const handleAdd = (p: typeof products[0]) => {
    addItem(p.slug, p.displayName, p.category);
    showToast(`${p.displayName} added to Quote List`);
  };

  const waLink = `https://wa.me/923321134530?text=${encodeURIComponent(
    "Hello Al Mobeen Enterprise, I'm using your Quick Chemical Desk to inquire about bulk rates."
  )}`;

  return (
    <>
      {/* Floating Interactive Chemical Companion (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
        {/* Floating Bubble Particles when scrolling */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              {/* Tooltip speech bubble */}
              <div className="hidden md:block mb-2 px-3 py-1.5 rounded-2xl bg-surface border border-border shadow-lg text-[11px] font-bold text-ink whitespace-nowrap">
                <span className="inline-block w-2 h-2 rounded-full bg-success mr-1.5 animate-pulse" />
                Quick Quote Helper
              </div>

              {/* Main Mascot Button */}
              <motion.button
                style={{ rotate: rotateOnScroll, scale: scaleOnScroll }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-primary-light to-accent text-inverse-ink flex items-center justify-center shadow-2xl border-2 border-inverse-ink/20 relative group"
                aria-label="Quick Chemical Companion"
              >
                {/* Glowing ring */}
                <div className="absolute -inset-1 rounded-2xl bg-accent/30 blur-md group-hover:bg-accent/50 transition-all -z-10" />

                {/* Animated Chemical Flask Icon */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A2 2 0 0 0 6.512 23h10.976a2 2 0 0 0 1.792-2.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                  <path d="M8.5 2h7" />
                  <path d="M7 16h10" />
                  <circle cx="12" cy="19" r="1" fill="currentColor" />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Expanded Quick Helper Popover */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-inverse-base/40 backdrop-blur-xs"
            />

            {/* Helper Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="fixed bottom-6 left-6 z-50 w-full max-w-sm bg-surface border border-border rounded-3xl p-5 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-success text-inverse-ink flex items-center justify-center font-bold text-xs">
                    AM
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-ink">Jodia Desk Assistant</h4>
                    <p className="text-[10px] font-bold text-neutral-light">Bulk Quote & Fast Sourcing</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-ink hover:bg-base transition-colors font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Instant Search */}
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search 80+ chemicals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-border bg-base text-ink font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/70">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>

              {/* Items List */}
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1 mb-4">
                {searchResults.map((p) => {
                  const inList = isInQuote(p.slug);
                  return (
                    <div
                      key={p.slug}
                      className="p-2.5 rounded-xl border border-border bg-base flex items-center justify-between text-xs"
                    >
                      <div>
                        <p className="font-extrabold text-ink">{p.displayName}</p>
                        <p className="text-[10px] font-bold text-neutral-light">{p.packaging}</p>
                      </div>
                      <button
                        onClick={() => handleAdd(p)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${inList ? "bg-success text-inverse-ink" : "bg-primary text-inverse-ink"
                          }`}
                      >
                        {inList ? "✓ Added" : "+ Quote"}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-whatsapp text-inverse-ink text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
