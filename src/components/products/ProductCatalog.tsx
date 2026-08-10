"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { products, type Product } from "@/data/products";
import { categories } from "@/data/categories";
import { industries } from "@/data/industries";
import ProductCard from "./ProductCard";
import { useQuote } from "@/components/QuoteProvider";
import { useToast } from "@/components/ui/Toast";
import { useLanguage } from "@/components/LanguageProvider";

function ProductCatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLanguage();
  const { addItem, isInQuote, removeItem } = useQuote();
  const { showToast } = useToast();

  const initialCategory = searchParams.get("category") || "";
  const initialIndustry = searchParams.get("industry") || "";
  const initialQuery = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedIndustry, setSelectedIndustry] = useState<string>(initialIndustry);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedCategory && product.category !== selectedCategory) return false;
      if (selectedIndustry && !product.industryTags.includes(selectedIndustry)) return false;
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchName = product.displayName.toLowerCase().includes(q);
        const matchDesc = product.description.toLowerCase().includes(q);
        const matchRaw = product.name.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchRaw) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedIndustry, searchQuery]);

  const updateFilters = (cat: string, ind: string, q: string) => {
    setSelectedCategory(cat);
    setSelectedIndustry(ind);
    setSearchQuery(q);

    const params = new URLSearchParams();
    if (cat) params.set("category", cat);
    if (ind) params.set("industry", ind);
    if (q) params.set("search", q);

    const str = params.toString();
    router.replace(str ? `/products?${str}` : "/products", { scroll: false });
  };

  const clearAllFilters = () => updateFilters("", "", "");
  const hasActiveFilters = selectedCategory || selectedIndustry || searchQuery;

  return (
    <div>
      {/* Shadcn-Style Filter Control Panel */}
      <div className="mb-8 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm space-y-4">
        {/* Top Controls Row: Search + Category Select + Industry Select + View Mode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
          
          {/* Search Input (4 cols on lg) */}
          <div className="relative lg:col-span-4">
            <input
              type="text"
              placeholder={t("products.search")}
              value={searchQuery}
              onChange={(e) => updateFilters(selectedCategory, selectedIndustry, e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all font-medium"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-neutral)"
              strokeWidth="2.5"
              className="absolute left-3.5 top-1/2 -translate-y-1/2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => updateFilters(selectedCategory, selectedIndustry, "")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--color-neutral)] hover:text-[var(--color-ink)] font-bold text-base"
              >
                ×
              </button>
            )}
          </div>

          {/* Category Select Box (3 cols on lg) */}
          <div className="relative lg:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => updateFilters(e.target.value, selectedIndustry, searchQuery)}
              className="w-full pl-3.5 pr-8 py-2.5 text-xs sm:text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] font-bold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all appearance-none cursor-pointer"
            >
              <option value="">📁 {t("products.allCategories")}</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-ink)]/70">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Industry Select Box (3 cols on lg) */}
          <div className="relative lg:col-span-3">
            <select
              value={selectedIndustry}
              onChange={(e) => updateFilters(selectedCategory, e.target.value, searchQuery)}
              className="w-full pl-3.5 pr-8 py-2.5 text-xs sm:text-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-ink)] font-bold focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all appearance-none cursor-pointer"
            >
              <option value="">🏭 {t("products.allIndustries")}</option>
              {industries.map((ind) => (
                <option key={ind.slug} value={ind.slug}>
                  {ind.name}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-ink)]/70">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* View Mode Toggle & Counter (2 cols on lg) */}
          <div className="flex items-center justify-between lg:justify-end gap-3 lg:col-span-2">
            <span className="text-xs font-semibold text-[var(--color-ink)]/80 lg:hidden">
              Showing <strong>{filteredProducts.length}</strong> items
            </span>
            <div className="flex items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] p-1 shadow-xs">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                  viewMode === "grid"
                    ? "bg-[var(--color-primary)] text-inverse-ink shadow-sm"
                    : "text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]"
                }`}
                title="Grid View"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors ${
                  viewMode === "table"
                    ? "bg-[var(--color-primary)] text-inverse-ink shadow-sm"
                    : "text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]"
                }`}
                title="Industrial Table View"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters & Counter Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[var(--color-border)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-ink)]">
              Showing <strong>{filteredProducts.length}</strong> items
            </span>
            {selectedCategory && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold border border-[var(--color-primary)]/20">
                Category: {categories.find((c) => c.slug === selectedCategory)?.name}
                <button onClick={() => updateFilters("", selectedIndustry, searchQuery)} className="hover:text-danger font-black text-sm">×</button>
              </span>
            )}
            {selectedIndustry && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-bold border border-[var(--color-accent)]/20">
                Industry: {industries.find((i) => i.slug === selectedIndustry)?.name}
                <button onClick={() => updateFilters(selectedCategory, "", searchQuery)} className="hover:text-danger font-black text-sm">×</button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[var(--color-ink)]/10 text-[var(--color-ink)] font-bold border border-[var(--color-ink)]/20">
                Search: &quot;{searchQuery}&quot;
                <button onClick={() => updateFilters(selectedCategory, selectedIndustry, "")} className="hover:text-danger font-black text-sm">×</button>
              </span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-xs font-extrabold text-danger hover:underline"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {/* Product View: Grid vs Industrial Table */}
      {filteredProducts.length > 0 ? (
        viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          /* Industrial Table View */
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm">
            <table className="w-full text-left text-xs text-[var(--color-ink)]">
              <thead className="bg-[var(--color-base)] border-b border-[var(--color-border)] uppercase text-[10px] font-extrabold tracking-wider text-[var(--color-neutral)]">
                <tr>
                  <th className="py-3.5 px-4">Chemical Name</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Packaging Spec</th>
                  <th className="py-3.5 px-4">Grade / Purity</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {filteredProducts.map((p) => {
                  const added = isInQuote(p.slug);
                  const cat = categories.find((c) => c.slug === p.category);
                  return (
                    <tr key={p.slug} className="hover:bg-[var(--color-base)] transition-colors">
                      <td className="py-3 px-4 font-bold">
                        <Link href={`/products/${p.slug}`} className="hover:text-[var(--color-primary)] hover:underline">
                          {p.displayName}
                        </Link>
                        {p.bestSeller && (
                          <span className="ml-2 text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-warning text-inverse-ink">
                            Best Seller
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-[var(--color-neutral)] font-semibold">
                        {cat?.name || p.category}
                      </td>
                      <td className="py-3 px-4 font-semibold">{p.packaging}</td>
                      <td className="py-3 px-4 text-[var(--color-neutral)]">{p.grade} {p.purity ? `(${p.purity})` : ""}</td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => {
                            if (added) {
                              removeItem(p.slug);
                            } else {
                              addItem(p.slug, p.displayName, p.category);
                              showToast(`${p.displayName} added to Quote List`);
                            }
                          }}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors ${
                            added
                              ? "bg-success text-inverse-ink"
                              : "bg-[var(--color-primary)] text-inverse-ink hover:bg-[var(--color-primary-light)]"
                          }`}
                        >
                          {added ? "✓ Added" : "+ Quote"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <div className="text-center py-16 px-4 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)]">
          <h3 className="text-lg font-bold mb-2">No matching chemical items</h3>
          <p className="text-sm text-[var(--color-neutral)] max-w-sm mx-auto mb-6">
            We couldn&apos;t find any products matching your current filters.
          </p>
          <button onClick={clearAllFilters} className="btn-primary">
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProductCatalog() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-[var(--color-neutral)]">Loading catalog...</div>}>
      <ProductCatalogContent />
    </Suspense>
  );
}
