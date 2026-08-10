import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries, getIndustryBySlug } from "@/data/industries";
import { getProductsByIndustry } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: `Chemicals for ${industry.name} | Bulk Supply in Pakistan`,
    description: `Al Mobeen Enterprise supplies bulk industrial chemicals for the ${industry.name} sector in Karachi and across Pakistan. ${industry.description}`,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const industryProducts = getProductsByIndustry(industry.slug);

  return (
    <div className="pt-28 pb-20 bg-[var(--color-base)] min-h-screen">
      <div className="section-container">
        {/* Breadcrumb */}
        <div style={{ color: "#1b263b" }} className="mb-6 flex items-center gap-2 text-xs font-bold">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/industries" className="hover:underline">Industries</Link>
          <span>/</span>
          <span style={{ color: "#0d1b2a" }} className="font-extrabold">{industry.name}</span>
        </div>

        {/* Industry Banner */}
        <div className="bg-[var(--color-surface)] text-[var(--color-ink)] rounded-3xl border border-[var(--color-border)] p-8 md:p-12 mb-12 shadow-sm">
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[var(--color-accent)] mb-2">
            Industrial Sector
          </p>
          <h1 style={{ color: "#0d1b2a" }} className="text-3xl md:text-5xl font-extrabold mb-4">
            Chemicals for {industry.name}
          </h1>
          <p style={{ color: "#283747" }} className="text-base font-medium leading-relaxed max-w-3xl mb-6">
            {industry.description}
          </p>
          <div style={{ color: "#0d1b2a" }} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-base)] border border-[var(--color-border)] text-xs font-extrabold">
            <span>Available Products: {industryProducts.length}</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-16">
          <h2 style={{ color: "#0d1b2a" }} className="text-xl md:text-2xl font-extrabold mb-6">
            Popular Products for {industry.name}
          </h2>

          {industryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p style={{ color: "#283747" }} className="text-sm font-medium">
              No specific products tagged for this sector currently. Browse our full catalog.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
