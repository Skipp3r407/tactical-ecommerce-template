/**
 * Elevate Digital Studios — Distributor / drop-ship integration map
 * -----------------------------------------------------------------
 * This file documents where real-time sync, feeds, and overrides attach.
 * Replace mock `src/content/products.ts` with DB/API reads without changing UI contracts.
 */

import type { Product } from "@/lib/types/product";

/** Ingest: vendor CSV/XML/API → normalized Product[] */
export const INGEST_HOOK = "/api/sync/ingest"; // Route Handler or Edge function

/** Map external category IDs → internal `Category.id` */
export const CATEGORY_MAP_HOOK = "/api/sync/category-map";

/** Map distributor SKU ↔ storefront SKU */
export const SKU_MAP_HOOK = "/api/sync/sku-map";

/** Scheduled job (Vercel Cron, queue worker) */
export const SYNC_CRON = "0 */6 * * *"; // example: every 6 hours

export interface SyncJobPayload {
  source: "distributor" | "erp" | "manual";
  products: Partial<Product>[];
}

/**
 * Manual override flags on `Product.manualOverride` prevent feed clobbering
 * for title, price, or visibility while still syncing stock.
 */
export type OverrideField = keyof NonNullable<Product["manualOverride"]>;
