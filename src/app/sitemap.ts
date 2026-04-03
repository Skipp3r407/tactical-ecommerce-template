import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { categories } from "@/content/categories";
import { SITE_URL } from "@/config/brand";

const base = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryRoutes = categories.map((c) => ({
    url: `${base}/shop/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const staticRoutes = [
    "",
    "/shop",
    "/specials",
    "/giveaways",
    "/videos",
    "/about",
    "/faq",
    "/contact",
    "/request-product",
    "/legal/privacy",
    "/legal/terms",
    "/legal/shipping",
    "/legal/returns",
    "/legal/compliance",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
