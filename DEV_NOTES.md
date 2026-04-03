# Developer notes — distributor & commerce integration

This repo is a **client presentation demo**. Catalog data lives in `src/content/products.ts` and `src/content/categories.ts`. The UI is built to swap those sources for API/DB reads without redesigning pages.

## Where integration plugs in

1. **Product ingest**  
   - Replace static `products` export with data from your worker, Route Handler, or server action.  
   - Target shape: `Product` in `src/lib/types/product.ts` (SKU, `distributorSku`, `categoryIds`, `images`, `manualOverride`, etc.).  
   - Documented hooks (conceptual): `src/lib/distributor-integration.ts` (`INGEST_HOOK`, `SKU_MAP_HOOK`, `CATEGORY_MAP_HOOK`).

2. **Category mapping**  
   - Distributor category IDs → internal `Category.id` (`cat-firearms`, …).  
   - Keep `slug` stable for URLs and `categoryImage(slug)` paths under `public/images/categories/`.

3. **Inventory & price sync**  
   - Map feed rows to `inStock`, `stockQty`, `price`, `compareAtPrice`.  
   - Use `Product.manualOverride` to prevent feed overwrites for curated titles, MAP pricing, or merchandising.

4. **Images**  
   - Option A: continue hosting under `public/images/products/{slug}.jpg`.  
   - Option B: store absolute CDN URLs in `product.images` and add hostnames to `next.config.ts` → `images.remotePatterns`.

5. **Merchandising**  
   - Homepage rows read badges (`featured`, `hot`, `sale`, `new`) and `spotlight`.  
   - Weekly specials / promos / giveaways: `src/content/site.ts` (later CMS or JSON API).

6. **Forms**  
   - Contact, request-a-product, newsletter: wire `action` or API routes to CRM / ESP / ticketing.

7. **Checkout**  
   - Not implemented — drop in your commerce layer (e.g. headless cart, FFL workflow, ammo compliance gates).

## Key files

| Area | File(s) |
|------|---------|
| Catalog | `src/content/products.ts`, `src/content/categories.ts` |
| Marketing blocks | `src/content/site.ts`, `src/content/videos.ts`, `src/content/faq.ts` |
| Asset paths | `src/config/images.ts` |
| Shop UI | `src/components/shop/ShopCatalog.tsx`, `CatalogFilterForm.tsx` |
| PDP | `src/app/shop/[slug]/page.tsx` |
| Brand / URL | `src/config/brand.ts` (`SITE_URL` for OG + JSON-LD) |

## SEO / structured data

Product JSON-LD in `shop/[slug]/page.tsx` resolves relative image paths with `SITE_URL`. Update `SITE_URL` before production.
