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
    <div className="pt-28 pb-20 bg-base min-h-screen">
      <div className="section-container">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold text-ink">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/industries" className="hover:underline">Industries</Link>
          <span>/</span>
          <span className="font-extrabold text-ink">{industry.name}</span>
        </div>

        {/* Industry Banner */}
        <div className="bg-surface text-ink rounded-3xl border border-border p-8 md:p-12 mb-12 shadow-sm">
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-accent mb-2">
            Industrial Sector
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-ink">
            Chemicals for {industry.name}
          </h1>
          <p className="text-base font-medium leading-relaxed max-w-3xl mb-6 text-ink opacity-85">
            {industry.description}
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-base border border-border text-xs font-extrabold text-ink">
            <span>Available Products: {industryProducts.length}</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-extrabold mb-6 text-ink">
            Popular Products for {industry.name}
          </h2>

          {industryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-sm font-medium text-ink opacity-85">
              No specific products tagged for this sector currently. Browse our full catalog.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
