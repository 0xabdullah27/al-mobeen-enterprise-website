import type { Metadata } from "next";
import ProductCatalog from "@/components/products/ProductCatalog";

export const metadata: Metadata = {
  title: "Industrial Chemicals Catalog | 80+ Bulk Products",
  description:
    "Explore Al Mobeen Enterprise's extensive catalog of 80+ bulk industrial chemicals in Karachi: solvents, plasticizers (DOP), titanium dioxide, pigments, resins, and specialty acids.",
};

import PageHero from "@/components/ui/PageHero";

export default function ProductsPage() {
  return (
    <div className="bg-[var(--color-base)] min-h-screen">
      <PageHero
        title="Industrial Chemicals Catalog"
        description="Browse our full range of bulk industrial chemicals sourced directly from Karachi's leading importers and large dealers. Select products to request a bulk quote."
        badgeText="Complete Product Range"
      />

      <div className="section-container py-12 md:py-16">

        {/* Catalog System */}
        <ProductCatalog />
      </div>
    </div>
  );
}
