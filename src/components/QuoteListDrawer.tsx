"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useQuote } from "./QuoteProvider";
import { useLanguage } from "./LanguageProvider";

export default function QuoteListDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, updateNotes, count } = useQuote();
  const { t } = useLanguage();

  // Listen for toggle event from Navbar
  useEffect(() => {
    const handler = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-quote-drawer", handler);
    return () => window.removeEventListener("toggle-quote-drawer", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-inverse-base/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        style={{ animation: "fadeIn 200ms var(--ease-out)" }}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[61] w-full max-w-md bg-surface shadow-2xl flex flex-col"
        style={{
          animation: "slideInRight 300ms var(--ease-out)",
          background: "var(--color-surface)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)] text-[var(--color-ink)]">
          <h2 style={{ color: "#0d1b2a" }} className="text-lg font-extrabold">
            {t("quote.title")} {count > 0 && `(${count})`}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors text-[var(--color-ink)]"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
              <p style={{ color: "#1b263b" }} className="font-semibold text-sm">{t("quote.empty")}</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.slug}
                  className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p style={{ color: "#0d1b2a" }} className="font-extrabold text-sm">{item.displayName}</p>
                      <p style={{ color: "#283747" }} className="text-xs font-semibold mt-0.5 capitalize">
                        {item.category.replace(/-/g, " ")}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.slug)}
                      className="text-[var(--color-ink)] hover:text-danger transition-colors p-1"
                      aria-label={`Remove ${item.displayName}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder={t("quote.quantity")}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.slug, e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
                    />
                    <input
                      type="text"
                      placeholder={t("quote.notes")}
                      value={item.notes}
                      onChange={(e) => updateNotes(item.slug, e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[var(--color-border)]">
            <Link
              href={`/contact?products=${items.map((i) => i.slug).join(",")}`}
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full justify-center text-center"
            >
              {t("quote.send")}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
