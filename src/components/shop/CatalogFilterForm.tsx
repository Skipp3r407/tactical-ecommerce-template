"use client";

import Link from "next/link";
import type { Category } from "@/lib/types/product";

export type SortKey = "featured" | "price-asc" | "price-desc" | "new" | "deals";

export function CatalogFilterForm({
  categories,
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
}: {
  categories: Category[];
  brands: string[];
  query: string;
  setQuery: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  brand: string;
  setBrand: (v: string) => void;
  priceMax: number | "";
  setPriceMax: (v: number | "") => void;
  inStockOnly: boolean;
  setInStockOnly: (v: boolean) => void;
  fixedCategorySlug?: string;
}) {
  const locked = Boolean(fixedCategorySlug);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-surface-850/60 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Search</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Name, SKU, keyword…"
          className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
        />
      </div>

      <div className="rounded-2xl border border-white/10 bg-surface-850/60 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Category</p>
        {locked ? (
          <div className="mt-3">
            <p className="text-sm font-medium text-white">
              {categories.find((c) => c.slug === fixedCategorySlug)?.name ?? "Category"}
            </p>
            <Link href="/shop" className="mt-2 inline-flex text-sm font-semibold text-brand-200 hover:text-brand-100">
              Browse all products →
            </Link>
          </div>
        ) : (
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="rounded-2xl border border-white/10 bg-surface-850/60 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Brand</p>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
        >
          <option value="">All brands</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-2xl border border-white/10 bg-surface-850/60 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Max price</p>
        <input
          type="number"
          min={0}
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value === "" ? "" : Number(e.target.value))}
          placeholder="No limit"
          className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
        />
      </div>

      <label className="flex min-h-[48px] cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-surface-850/60 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
          className="h-5 w-5 rounded border-white/20 bg-surface-950"
        />
        <span className="text-sm text-zinc-300">In stock only</span>
      </label>
    </div>
  );
}

/** Sidebar / drawer filters — same fields, reusable label for proposals */
export { CatalogFilterForm as FiltersSidebar };

export function CatalogSortRow({
  sort,
  setSort,
}: {
  sort: SortKey;
  setSort: (v: SortKey) => void;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <label htmlFor="sort" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        Sort
      </label>
      <select
        id="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value as SortKey)}
        className="min-h-[44px] w-full rounded-xl border border-white/15 bg-surface-850 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25 sm:w-auto"
      >
        <option value="featured">Featured</option>
        <option value="deals">Biggest savings</option>
        <option value="new">New arrivals</option>
        <option value="price-asc">Price: low to high</option>
        <option value="price-desc">Price: high to low</option>
      </select>
    </div>
  );
}
