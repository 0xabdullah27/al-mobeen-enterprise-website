"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useQuote } from "./QuoteProvider";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import { type Language, languageNames } from "@/data/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count } = useQuote();
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/industries", label: t("nav.industries") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      {/* Top B2B Announcement Bar (Hidden on Mobile) */}
      <div className="bg-[var(--color-primary)] text-inverse-ink py-2 px-4 text-xs font-semibold border-b border-inverse-ink/10 hidden md:block">
        <div className="section-container flex items-center justify-between">
          <div className="flex items-center gap-6 text-inverse-ink/90">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              G/9 Golden Center, Weaver Lane, Jodia Bazar, Karachi
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mon - Sat: 9:00 AM – 6:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+923321134530"
              className="flex items-center gap-1.5 text-inverse-ink hover:text-[var(--color-accent)] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Desk: 0332-1134530
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3 border-b border-[var(--color-border)] shadow-sm"
            : "bg-[var(--color-surface)] py-3.5 border-b border-[var(--color-border)]"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 z-10 group shrink-0">
            <img 
              src="/ame-logo.png" 
              alt="Al Mobeen Enterprise Logo" 
              className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-ink)] flex items-center justify-center text-inverse-ink font-black text-lg shadow-md">
              AM
            </div>
            <div>
              <span style={{ color: "#0d1b2a" }} className="font-black text-base sm:text-lg tracking-tight block leading-none dark:!text-white">
                Al Mobeen Enterprise
              </span>
              <span style={{ color: "#1b263b" }} className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider hidden sm:block mt-0.5 dark:!text-slate-300">
                Bulk Chemical Trader • Est. 1995
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-bold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark/Light Mode Toggle (Desktop & Tablet) */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] hover:bg-[var(--color-surface-hover)] transition-colors shadow-sm"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-ink)]">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-accent)]">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M18.36 5.64l1.41-1.41" />
                </svg>
              )}
            </button>

            {/* Language Switcher (Desktop Only) */}
            <div className="hidden lg:flex items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] overflow-hidden text-xs shadow-sm p-0.5">
              {(["en", "romanUrdu", "urdu"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-lg transition-all font-bold ${
                    lang === l
                      ? "bg-[var(--color-primary)] text-inverse-ink shadow-sm"
                      : "text-[var(--color-neutral)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {languageNames[l]}
                </button>
              ))}
            </div>

            {/* Quote List Drawer Trigger Button */}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent("toggle-quote-drawer"));
              }}
              className="relative p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] hover:bg-[var(--color-surface-hover)] transition-colors shadow-sm"
              aria-label="Quote List"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                <path d="M9 14l2 2 4-4" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-accent)] text-inverse-ink text-[10px] font-extrabold flex items-center justify-center shadow-md">
                  {count}
                </span>
              )}
            </button>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="btn-primary hidden md:inline-flex !py-2.5 !px-5 !text-sm"
            >
              {t("nav.getQuote")}
            </Link>

            {/* Mobile Hamburger Icon */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] hover:bg-[var(--color-surface-hover)] transition-colors"
              aria-label="Open Navigation Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Shadcn-style Slide-over Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
            />

            {/* Slide-in Sheet Drawer (From Right) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[340px] bg-[var(--color-surface)] border-l border-[var(--color-border)] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[var(--color-border)] mb-6">
                  <div className="flex items-center gap-2">
                    <img src="/ame-logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                    <span style={{ color: "#0d1b2a" }} className="font-black text-base dark:!text-white">
                      Al Mobeen
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] hover:bg-[var(--color-surface-hover)]"
                    aria-label="Close menu"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 mb-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl font-extrabold text-base text-[var(--color-ink)] hover:bg-[var(--color-base)] transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  ))}
                </nav>

                {/* Controls Section: Language & Theme */}
                <div className="space-y-4 pt-4 border-t border-[var(--color-border)] mb-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-neutral)] block mb-2">
                      Language / Zaban
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 bg-[var(--color-base)] p-1 rounded-xl border border-[var(--color-border)] text-xs font-bold text-center">
                      {(["en", "romanUrdu", "urdu"] as Language[]).map((l) => (
                        <button
                          key={l}
                          onClick={() => setLang(l)}
                          className={`py-2 rounded-lg transition-all ${
                            lang === l
                              ? "bg-[var(--color-primary)] text-inverse-ink shadow-sm"
                              : "text-[var(--color-neutral)] hover:text-[var(--color-ink)]"
                          }`}
                        >
                          {languageNames[l]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-neutral)] block mb-2">
                      Appearance Theme
                    </label>
                    <button
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-sm font-bold text-[var(--color-ink)]"
                    >
                      <span className="flex items-center gap-2">
                        {theme === "light" ? "☀️ Light Theme" : "🌙 Dark Theme"}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                        Toggle
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-4 border-t border-[var(--color-border)] space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full justify-center !py-3.5"
                >
                  {t("nav.getQuote")}
                </Link>

                <a
                  href="tel:+923321134530"
                  className="btn-outline w-full justify-center !py-3 !text-xs"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Desk: 0332-1134530
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
