import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getProductsByCategory } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { getIndustryBySlug } from "@/data/industries";
import CategoryIcon from "@/components/ui/CategoryIcon";
import ProductCard from "@/components/products/ProductCard";
import ProductDetailActions from "@/components/products/ProductDetailActions";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.displayName} Supplier in Karachi, Pakistan | Bulk Chemical`,
    description: `${product.displayName} bulk distribution by Al Mobeen Enterprise, Jodia Bazar Karachi. ${product.description}`,
    openGraph: {
      title: `${product.displayName} Bulk Supply | Al Mobeen Enterprise`,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const productIndustries = product.industryTags
    .map((tag) => getIndustryBySlug(tag))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.displayName,
    description: product.description,
    category: category?.name,
    offers: {
      "@type": "Offer",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Al Mobeen Enterprise",
      },
    },
  };

  return (
    <div className="pt-28 pb-20 bg-base min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section-container">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold text-ink">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:underline">Products</Link>
          <span>/</span>
          {category && (
            <>
              <Link href={`/products?category=${category.slug}`} className="hover:underline">
                {category.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="font-extrabold text-ink">{product.displayName}</span>
        </div>

        {/* Detail Card */}
        <div className="bg-surface text-ink rounded-3xl border border-border p-6 md:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Visual Icon Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-12 rounded-2xl bg-base border border-border relative">
              <CategoryIcon category={product.category} size={120} />
              {product.bestSeller && (
                <span className="absolute top-4 right-4 badge-bestseller">
                  Best Seller
                </span>
              )}
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7">
              {category && (
                <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-base border border-border text-ink mb-3">
                  <span className="category-dot" style={{ background: category.tintColor }} />
                  {category.name}
                </span>
              )}

              <h1 className="text-2xl md:text-4xl font-black mb-4 text-ink">
                {product.displayName}
              </h1>

              <p className="text-base font-medium leading-relaxed mb-6 text-ink opacity-85">
                {product.description}
              </p>

              {/* Industries tags */}
              {productIndustries.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider mb-3 text-ink">
                    Primary Industry Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {productIndustries.map((ind) => (
                      <Link
                        key={ind!.slug}
                        href={`/products?industry=${ind!.slug}`}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-base border border-border text-ink hover:border-primary transition-colors"
                      >
                        {ind!.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Action Buttons */}
              <ProductDetailActions product={product} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-xl md:text-2xl font-black mb-6 text-ink">
              You May Also Need
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.slug} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
