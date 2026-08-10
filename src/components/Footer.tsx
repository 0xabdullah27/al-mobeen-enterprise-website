"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/products", label: t("nav.products") },
    { href: "/industries", label: t("nav.industries") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer
      className="text-ink bg-surface border-t border-border"
      
    >
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4 group">
              <img 
                src="/ame-logo.png" 
                alt="Al Mobeen Enterprise Logo" 
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-9 h-9 rounded-lg flex items-center justify-center bg-ink/5 text-ink font-bold text-sm">
                AM
              </div>
              <span className="font-bold text-lg tracking-tight">
                Al Mobeen Enterprise
              </span>
            </div>
            <p className="text-[var(--color-ink)]/80 text-sm leading-relaxed mb-5">
              {t("footer.tagline")}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/almobeenenterprise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[var(--color-ink)]/10 text-[var(--color-ink)] flex items-center justify-center transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-surface)] hover:scale-110"
                aria-label="Instagram"
                style={{ transitionDuration: "var(--dur-micro)" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/almobeenenterprise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[var(--color-ink)]/10 text-[var(--color-ink)] flex items-center justify-center transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-surface)] hover:scale-110"
                aria-label="Facebook"
                style={{ transitionDuration: "var(--dur-micro)" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider mb-4 text-[var(--color-ink)]">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-ink)]/80 text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
                    style={{ transitionDuration: "var(--dur-micro)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider mb-4 text-[var(--color-ink)]">
              {t("footer.categories")}
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-[var(--color-ink)]/80 text-sm font-medium hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"
                    style={{ transitionDuration: "var(--dur-micro)" }}
                  >
                    <span
                      className="category-dot"
                      style={{ background: cat.tintColor }}
                    />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider mb-4 text-[var(--color-ink)]">
              {t("footer.contactInfo")}
            </h3>
            <div className="space-y-3 text-sm text-[var(--color-ink)]/85 font-medium">
              <p className="leading-relaxed">
                G/9, Golden Center, Weaver Lane,
                <br />
                Jodia Bazar, Karachi
              </p>
              <div className="space-y-1.5">
                <a
                  href="tel:+923321134530"
                  className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0332-1134530
                </a>
                <a
                  href="tel:+923002268847"
                  className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0300-2268847
                </a>
                <a
                  href="tel:+923152703824"
                  className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0315-2703824
                </a>
              </div>
              <a
                href="mailto:almobeenenterprise@gmail.com"
                className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                almobeenenterprise@gmail.com
              </a>
              <p className="text-[var(--color-ink)]/70 text-xs mt-3 font-semibold">
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--color-border)] text-center text-[var(--color-ink)]/70 text-xs font-semibold">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
