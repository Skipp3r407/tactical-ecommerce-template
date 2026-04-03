# John’s Tactical Supply — Architecture & Planning

This document captures stack decisions, sitemap, content models, integration hooks, SEO, phases, and feature rationale. The running app lives in the repo root (`src/`).

---

## 1. Project folder structure

```
├── docs/
│   └── ARCHITECTURE.md          ← this file
├── public/                      ← static assets (favicon, og images) — add as needed
├── src/
│   ├── config/
│   │   └── brand.ts             ← SITE_NAME, SITE_URL, monogram (update at launch)
│   ├── app/                     ← Next.js App Router pages, layouts, sitemap, robots
│   ├── components/
│   │   ├── layout/              ← AnnouncementBar, Header, Footer
│   │   ├── legal/               ← LegalProse
│   │   ├── motion/              ← Reveal (scroll animations)
│   │   ├── product/             ← ProductCard, CategoryCard, Gallery
│   │   ├── sections/            ← Home sections, headings, newsletter
│   │   ├── shop/                ← ShopCatalog (filters)
│   │   └── ui/                  ← Button, badges, FAQ, countdown
│   ├── content/                 ← Editable TS modules (swap for CMS/DB later)
│   └── lib/                     ← types, cn()
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 2. Recommended stack & architecture

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 15 (App Router)** | SSR/SSG for SEO, file-based routing, API Routes / Route Handlers for future sync jobs |
| Language | **TypeScript** | Safer refactors as catalog and integrations grow |
| Styling | **Tailwind CSS v4** | Fast iteration, design tokens in `globals.css` |
| Motion | **Framer Motion** | Scroll reveals with `useReducedMotion` fallback |
| Content (now) | **Typed modules in `src/content/`** | Owner-friendly edit points without a DB; migrate to **Sanity / Payload / Directus / Supabase** when needed |
| Commerce | **Phase 1: catalog + lead gen**; **Phase 2+: checkout** | Firearm-friendly platforms (e.g. **2A Commerce**, **AmmoReady**, **Coreware**) often provide cart/FFL flows — this front-end is built to integrate or embed |
| Search (later) | **Algolia / Meilisearch** | When SKU count grows |

**Modular principle:** UI components are dumb/presentational; `content/*` holds marketing copy; `lib/types/product.ts` mirrors what a distributor feed would populate.

---

## 3. Complete sitemap

| Path | Purpose |
|------|---------|
| `/` | Home — hero, categories, featured rows, specials, giveaway, video, trust, FAQ preview, CTA, newsletter |
| `/shop` | Catalog — search, filters, sort, mobile filter drawer |
| `/shop/category/[slug]` | Category landing — hero, promo callout, optional subcategory chips, locked category filters |
| `/shop/[slug]` | Product detail — gallery, specs, highlights, bundles, related, JSON-LD |
| `/specials` | Deals — promos, weekly specials, sale SKUs |
| `/giveaways` | Campaign landing — rules, countdown, entry placeholder |
| `/videos` | Media grid |
| `/about` | Brand story |
| `/faq` | Full FAQ + FAQPage JSON-LD |
| `/contact` | Form + hours + map embed placeholder |
| `/request-product` | Sourcing form + confirmation |
| `/legal/privacy` | Privacy |
| `/legal/terms` | Terms |
| `/legal/shipping` | Shipping |
| `/legal/returns` | Returns |
| `/legal/compliance` | Compliance & notices |

---

## 4. Wireframe-level page-by-page content plan (summary)

- **Home:** Announcement → Hero (H1, dual CTA) → Promo strip (2 tiles) → Categories (4) → Featured → Weekly specials → New / Best / Clearance rows → Giveaway → Video → Why us → Testimonials → FAQ preview → CTA band → Newsletter.
- **Shop:** Heading → Sidebar: search, category, brand, max price, in-stock → Grid + sort.
- **PDP:** Breadcrumb → Gallery + buy/info column (SKU, distributor SKU, price, badges, policy card) → Description → Product video (optional) → Spec table → Related + sticky mobile CTA.
- **Specials:** Promo cards → Weekly specials with countdown → On-sale product grid.
- **Giveaways:** Hero campaign → Rules/disclaimer columns → Entry form placeholder.
- **Videos:** 3-column responsive grid of embeds.
- **About:** Story + image + 3 value cards.
- **FAQ:** Centered heading + accordion (all items).
- **Contact:** Split: contact card + map + form success state.
- **Request product:** Single column form → confirmation state.
- **Legal:** Title + editable sections.

---

## 5. UI component list

- **Layout:** `AnnouncementBar`, `Header` (sticky, mobile drawer), `Footer`
- **Primitives:** `Button`, `ProductBadges`, `Countdown`, `FaqAccordion`
- **Merch:** `ProductCard`, `CategoryCard`, `ProductGallery`, `ShopCatalog`, `PromoBanner`, `FiltersSidebar` (alias of `CatalogFilterForm`)
- **Aliases (proposal docs):** `HeroSection`, `SpecialsSection`, `GiveawaySection`, `CountdownTimer`
- **Sections:** `Hero`, `PromoStrip`, `FeaturedCategories`, `ProductRow`, `WeeklySpecials`, `GiveawayCallout`, `VideoSection`, `WhyChooseUs`, `Testimonials`, `FaqPreview`, `CtaBand`, `Newsletter`
- **Motion:** `Reveal`
- **Legal:** `LegalProse`

---

## 6. Editable content model (suggested)

| Entity | Source file(s) | Fields |
|--------|----------------|--------|
| Announcement | `content/site.ts` | `message`, `href`, `ctaLabel` |
| Hero | `site.ts` | headline, subheadline, CTAs, background image URL |
| Promo banners | `site.ts` | array: id, title, subtitle, href, variant |
| Weekly specials | `site.ts` | title, description, endsAt, productSlug, badge |
| Giveaway | `site.ts` | campaign object |
| Categories | `content/categories.ts` | slug, name, description, image |
| Products | `content/products.ts` | full `Product` type |
| Videos (home) | `site.ts` | `featuredVideos` |
| Videos (page) | `content/videos.ts` | `mediaVideos` |
| FAQ | `content/faq.ts` | Q/A array |
| Contact | `site.ts` | `contactBlock` |

**CMS migration:** Map each entity to a collection; keep slugs stable for SEO. `Product.manualOverride` flags preserve merchandising during sync.

---

## 7. Promo / specials module structure

- **Announcement bar:** Site-wide; driven by `announcement` object.
- **Home promo strip:** `promoBanners[]` — link to `/specials` or filtered `/shop`.
- **Weekly specials:** `weeklySpecials[]` — optional `endsAt` for `Countdown`.
- **Product-level:** `badges: ProductBadge[]` — sale/special/new/clearance/featured.
- **Phase 2:** `promotions` table with `schedule`, `segment`, `priority`, and `featured_product_ids[]`.

---

## 8. Product & category architecture

- **Category:** `Category` with stable `id` (for distributor mapping) and public `slug` (for URLs/filters).
- **Product:** `Product` includes `sku`, optional `distributorSku`, `categoryIds[]`, `specs` key/value, `images[]`, optional `videoUrl`, stock flags, `hidden`, `spotlight`, `manualOverride`.
- **Merchandising:** Featured rows on home use `badges` + `spotlight` so marketing can pin items without fighting inventory sort.

---

## 9. Distributor sync — integration prep

**Where integrations plug in**

1. **Ingest:** `POST /api/sync/products` (future) or scheduled worker (Vercel Cron / AWS Lambda / self-hosted) that pulls CSV/XML/API from distributor or commerce platform.
2. **Normalize:** Map vendor fields → `Product` shape; store raw payload for audit (`product_raw` table).
3. **SKU mapping:** `distributorSku` ↔ internal `sku` with conflict resolution rules.
4. **Category mapping:** Vendor category IDs → internal `categoryIds` via mapping table.
5. **Overrides:** If `manualOverride.price` etc., skip field updates from feed.
6. **Visibility:** `hidden` to suppress; `spotlight` to feature in carousels.
7. **OOS:** Set `inStock: false`, optionally auto-hide after N days or show with “notify me” (Phase 2).

**Files to evolve:** Replace `content/products.ts` with DB queries; keep `lib/types/product.ts` as the contract.

---

## 10. Responsive / mobile behavior

- **Header:** Full-height mobile menu, 44px tap targets, sticky top.
- **Shop:** Filters stack above grid; grid 1 → 2 → 3 columns.
- **PDP:** Sticky bottom bar on small screens for price + contact CTA.
- **Hero:** Responsive typography; background image with left gradient for legibility.
- **Motion:** Respects `prefers-reduced-motion` in `Reveal`.

---

## 11. SEO plan

- **Metadata:** `layout.tsx` default title template; per-route `metadata` or `generateMetadata` on PDP.
- **URLs:** Clean paths (`/shop/[slug]`, `/legal/...`).
- **Structured data:** Product JSON-LD on PDP; FAQPage JSON-LD on `/faq` (implemented as examples — validate in production).
- **Sitemap / robots:** `src/app/sitemap.ts`, `src/app/robots.ts` — update `metadataBase` and domain in `layout.tsx` and sitemap base URL.
- **Performance:** `next/image` for media; limit third-party scripts; lazy map embed on contact.
- **Internal linking:** Header/footer + home sections + related products.

---

## 12. Legal / policy page structure

Each page under `/legal/*` uses `LegalProse` with placeholder copy. Replace with attorney-approved text. Link all pages from footer.

---

## 13. Suggested next phases

| Phase | Focus |
|-------|--------|
| **1 (current)** | Branded content, catalog UX, lead forms, trust/compliance scaffolding, distributor-ready types |
| **2** | Live cart + FFL-friendly checkout integration; email/CRM; admin UI for promos; search index |
| **3** | Loyalty, wishlist, bundles, wholesale inquiry, analytics dashboards, AI chat, live inventory admin |

---

## Feature priority lists

### Phase 1 / 2 / 3 (recommended)

- **Phase 1:** Public pages, filters, product detail, forms (contact + request), newsletter UI, SEO metadata, JSON-LD samples, mobile/sticky patterns, content modules for owner edits.
- **Phase 2:** Payment + FFL workflow via chosen platform; distributor sync worker; email automation; optional CMS; inventory dashboard.
- **Phase 3:** Advanced merchandising, loyalty, wholesale, custom promo landing pages, reporting.

### Which features help sales

- Clear PDPs, specs, trust copy, related items, specials, CTAs, newsletter capture, request-a-product, reviews/testimonials, FAQ, and fast mobile UX.

### Which features improve admin flexibility

- Editable `content/*` (or CMS), promo/specials modules, override flags on products, giveaway/campaign templates, legal pages as structured sections.

### Which features prepare for distributor drop shipping

- `distributorSku`, category mapping, `manualOverride`, `hidden`, scheduled sync design, OOS handling, normalized `Product` type, and separation of “feed data” vs “merchandising layer.”

---

**Distributor integration map:** See `src/lib/distributor-integration.ts` for documented hook paths (`INGEST_HOOK`, SKU/category mapping, cron placeholder) and override behavior.

**Agency delivery note:** This codebase is structured as a premium *Elevate Digital Studios*–style foundation: modular sections, config-driven content under `src/content/`, tasteful motion (`Reveal`), and room for CMS/commerce integration without a redesign.

*Last updated: premium UI pass + category routes. Replace `example.com`, contact info, and legal copy before production.*
