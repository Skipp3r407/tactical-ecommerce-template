import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { products } from "@/content/products";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse firearms, optics, accessories, and ammunition — premium filtering, mobile drawer, and distributor-ready product data.",
};

function CatalogFallback() {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface-850/40 p-10 text-center text-zinc-500">
      Loading catalog…
    </div>
  );
}

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalog"
        title="Find it fast — without the clutter"
        description="Search, sort, and filter across categories and brands. On mobile, filters slide up in a dedicated drawer so the grid stays clean."
        align="center"
      />
      <div className="border-b border-white/10 bg-surface-950">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-16 md:pb-20">
          <Suspense fallback={<CatalogFallback />}>
            <ShopCatalog products={products} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
