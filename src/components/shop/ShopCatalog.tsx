"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/lib/types/product";
import { categories as categoryList } from "@/content/categories";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Drawer } from "@/components/ui/Drawer";
import { CatalogFilterForm, CatalogSortRow, type SortKey } from "@/components/shop/CatalogFilterForm";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function uniqueBrands(products: Product[]) {
  return Array.from(new Set(products.map((p) => p.brand))).sort();
}

export function ShopCatalog({
  products,
  fixedCategorySlug,
}: {
  products: Product[];
  /** When set (category landing), category filter is locked to this slug */
  fixedCategorySlug?: string;
}) {
  const searchParams = useSearchParams();
  const initialCategory = fixedCategorySlug ?? searchParams.get("category") ?? "";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [priceMax, setPriceMax] = useState<number | "">("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (fixedCategorySlug) {
      setCategory(fixedCategorySlug);
      return;
    }
    setCategory(searchParams.get("category") ?? "");
  }, [searchParams, fixedCategorySlug]);

  const brands = useMemo(() => uniqueBrands(products), [products]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => !p.hidden);

    if (category) {
      const cat = categoryList.find((c) => c.slug === category);
      if (cat) list = list.filter((p) => p.categoryIds.includes(cat.id));
    }

    if (brand) list = list.filter((p) => p.brand === brand);

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q),
      );
    }

    if (priceMax !== "" && !Number.isNaN(Number(priceMax))) {
      list = list.filter((p) => p.price <= Number(priceMax));
    }

    if (inStockOnly) list = list.filter((p) => p.inStock);

    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sort === "new") sorted.sort((a, b) => (b.badges.includes("new") ? 1 : 0) - (a.badges.includes("new") ? 1 : 0));
    if (sort === "deals") {
      sorted.sort((a, b) => {
        const save = (p: Product) =>
          p.compareAtPrice != null ? Math.max(0, p.compareAtPrice - p.price) : 0;
        return save(b) - save(a);
      });
    }
    if (sort === "featured") {
      sorted.sort((a, b) => {
        const af = a.badges.includes("featured") || a.spotlight ? 1 : 0;
        const bf = b.badges.includes("featured") || b.spotlight ? 1 : 0;
        return bf - af;
      });
    }

    return sorted;
  }, [products, category, brand, query, priceMax, inStockOnly, sort]);

  const filterProps = {
    categories: categoryList,
    brands,
    query,
    setQuery,
    category,
    setCategory,
    brand,
    setBrand,
    priceMax,
    setPriceMax,
    inStockOnly,
    setInStockOnly,
    fixedCategorySlug,
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:hidden">
        <CatalogSortRow sort={sort} setSort={setSort} />
        <Button
          variant="secondary"
          className="min-h-[48px] w-full justify-center sm:w-auto"
          onClick={() => setDrawerOpen(true)}
        >
          Filters
        </Button>
      </div>

      <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-10">
        <aside className="mb-8 hidden space-y-4 lg:block">
          <CatalogFilterForm {...filterProps} />
        </aside>

        <div>
          <div className="hidden items-center justify-between gap-4 lg:flex">
            <p className="text-sm text-zinc-400">
              Showing <span className="font-semibold text-zinc-200">{filtered.length}</span> products
            </p>
            <div className="min-w-[220px]">
              <CatalogSortRow sort={sort} setSort={setSort} />
            </div>
          </div>

          <p className="mb-4 text-sm text-zinc-400 lg:hidden">
            Showing <span className="font-semibold text-zinc-200">{filtered.length}</span> products
          </p>

          <div className="mt-0 lg:mt-6">
            <ProductGrid
              className={cn(
                filtered.length === 0 && "grid-cols-1",
              )}
            >
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-white/15 bg-surface-850/30 p-12 text-center">
                  <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    Nothing matches yet
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Loosen a filter, clear search, or browse all products — inventory updates on a schedule.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setQuery("");
                        setBrand("");
                        setPriceMax("");
                        setInStockOnly(false);
                        if (!fixedCategorySlug) setCategory("");
                      }}
                    >
                      Reset filters
                    </Button>
                    <Button href="/shop">View full catalog</Button>
                  </div>
                </div>
              ) : (
                filtered.map((p) => <ProductCard key={p.id} product={p} />)
              )}
            </ProductGrid>
          </div>
        </div>
      </div>

      <Drawer open={drawerOpen} title="Filters" onClose={() => setDrawerOpen(false)}>
        <div className="space-y-4">
          <CatalogFilterForm {...filterProps} />
          <Button className="w-full min-h-[52px] justify-center" onClick={() => setDrawerOpen(false)}>
            Show {filtered.length} results
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
