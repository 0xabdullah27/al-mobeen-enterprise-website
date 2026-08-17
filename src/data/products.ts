import productsData from "./products.json";

export interface Product {
  name: string;
  slug: string;
  displayName: string;
  category: string;
  industryTags: string[];
  bestSeller: boolean;
  description: string;
  packaging: string; // e.g. "200L Drum", "25kg Bag", "IBC Tank", "Bulk Tanker"
  grade: string;     // e.g. "Industrial Grade", "Technical Grade"
  purity?: string;   // e.g. "99.5% Min", "Commercial Pure"
  image?: string;
}

export const products: Product[] = productsData as Product[];

// Convenience helpers
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductsByIndustry(industrySlug: string): Product[] {
  return products.filter((p) => p.industryTags.includes(industrySlug));
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.displayName.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );
}
