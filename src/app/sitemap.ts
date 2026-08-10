import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { industries } from "@/data/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://almobeenenterprise.com";

  const routes = ["", "/about", "/products", "/industries", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes, ...industryRoutes];
}
