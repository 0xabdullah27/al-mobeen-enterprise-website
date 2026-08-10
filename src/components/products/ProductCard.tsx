"use client";

import Link from "next/link";
import { type Product } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import CategoryIcon from "@/components/ui/CategoryIcon";
import { useQuote } from "@/components/QuoteProvider";
import { useToast } from "@/components/ui/Toast";
import { useLanguage } from "@/components/LanguageProvider";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryBySlug(product.category);
  const { addItem, isInQuote, removeItem } = useQuote();
  const { showToast } = useToast();
  const { t } = useLanguage();

  const isAdded = isInQuote(product.slug);

  const handleQuoteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAdded) {
      removeItem(product.slug);
    } else {
      addItem(product.slug, product.displayName, product.category);
      showToast(`${product.displayName} added to Quote List`);
    }
  };

  return (
    <div className="group min-w-0 relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/40 transition-all duration-200">
      <div className="min-w-0">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          {category && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[var(--color-ink)]">
              <span
                className="category-dot"
                style={{ background: category.tintColor }}
              />
              {category.name}
            </span>
          )}
          {product.bestSeller && (
            <span className="badge-bestseller">{t("products.bestSeller")}</span>
          )}
        </div>

        {/* Icon / Technical Box */}
        <div className="flex items-center justify-between p-4 rounded-xl mb-4 bg-[var(--color-base)] border border-[var(--color-border)]">
          <CategoryIcon category={product.category} size={42} />
          <div className="text-right">
            <span style={{ color: "#1b263b" }} className="text-[10px] font-extrabold uppercase block">
              Packaging
            </span>
            <span style={{ color: "#0d1b2a" }} className="text-xs font-black block">
              {product.packaging}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 
          style={{ color: "#0d1b2a" }}
          className="text-sm font-black mb-1.5 group-hover:text-[var(--color-primary)] transition-colors break-words hyphens-auto line-clamp-2"
          title={product.displayName}
        >
          <Link href={`/products/${product.slug}`}>
            <span className="absolute inset-0 z-0" aria-hidden="true" />
            {product.displayName}
          </Link>
        </h3>

        {/* Grade & Purity Sub-specs */}
        <div className="flex items-center gap-2 mb-3 text-[11px] text-[var(--color-ink)] font-bold">
          <span className="px-2 py-0.5 rounded bg-[var(--color-base)] border border-[var(--color-border)]">
            {product.grade}
          </span>
          {product.purity && (
            <span className="px-2 py-0.5 rounded bg-[var(--color-base)] border border-[var(--color-border)]">
              {product.purity}
            </span>
          )}
        </div>

        {/* Description */}
        <p style={{ color: "#283747" }} className="text-xs leading-relaxed font-medium line-clamp-2 mb-4">
          {product.description}
        </p>
      </div>

      {/* Footer Actions */}
      <div className="relative z-10 pt-3 border-t border-[var(--color-border)] flex items-center justify-between gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="text-xs font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
        >
          {t("products.viewDetails")}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>

        <button
          onClick={handleQuoteToggle}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm ${
            isAdded
              ? "bg-success text-inverse-ink"
              : "bg-[var(--color-primary)] text-inverse-ink hover:bg-[var(--color-primary-light)]"
          }`}
          aria-label={isAdded ? `Remove ${product.displayName} from Quote List` : `Add ${product.displayName} to Quote List`}
        >
          {isAdded ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Added</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>Quote</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
