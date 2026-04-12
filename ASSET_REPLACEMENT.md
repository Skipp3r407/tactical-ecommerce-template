# Asset replacement guide — AfterLife Guns and Ammo (demo)

Replace placeholder files under `public/images/` with final brand photography. Paths are referenced from `src/config/images.ts` and content slugs.

## Folder map

| Path | Purpose |
|------|---------|
| `/public/images/logo.png` | Header + footer mark (square, ~320–512 px source) |
| `/public/images/hero.jpg` | Homepage hero background (wide, **2400×1200** or larger, 16:9–2:1) |
| `/public/images/banners/` | Promo tiles + about hero (`p1.jpg`, `p2.jpg`, `about.jpg`) — **~1200×420–560** |
| `/public/images/categories/` | Category cards + category page heroes (`firearms.jpg`, `optics.jpg`, `accessories.jpg`, `ammunition.jpg`) — **~1200×750** (≈16:10) |
| `/public/images/products/{slug}.jpg` | One file per product `slug` in `src/content/products.ts` — **~1200×900** (4:3) |
| `/public/images/media/` | Video posters (`v1.jpg` featured home, `mv1.jpg`–`mv3.jpg` videos page) — **1280×720** |

## Logo (`logo.png`)

- **Where:** `public/images/logo.png`
- **Used in:** `Header`, `Footer` (`images.logo`)
- **Recommended:** PNG with transparency, **256–512 px** square, readable at 36×36 CSS px

## Hero (`hero.jpg`)

- **Where:** `public/images/hero.jpg`
- **Used in:** `Hero` section (`site.ts` → `images.hero`), About page secondary image
- **Recommended:** **2400×1200** (or 1920×1080 min), dark-friendly subject, safe area left for headline overlay

## Category images (`categories/*.jpg`)

- **Files:** `firearms.jpg`, `optics.jpg`, `accessories.jpg`, `ammunition.jpg`
- **Used in:** `CategoryCard`, category landing hero (`src/content/categories.ts` via `categoryImage(slug)`)
- **Match slugs** to category `slug` fields, not display names

## Product images (`products/{slug}.jpg`)

- **Naming:** Must match each product’s `slug` exactly (e.g. `glock-19-gen-5.jpg`)
- **Used in:** `ProductCard`, `ProductGallery`, Open Graph / JSON-LD (absolute URL built with `SITE_URL`)
- **Gallery:** First image is primary; duplicate paths are OK for multi-image demos until you add `image-2.jpg` support

## Banners (`banners/*.jpg`)

- `p1.jpg`, `p2.jpg` — homepage + specials promo tiles (`bannerImage('p1')`, etc.)
- `about.jpg` — About page `PageHero` background

## Video posters (`media/*.jpg`)

- `v1.jpg` — Featured video on homepage
- `mv1.jpg`, `mv2.jpg`, `mv3.jpg` — Videos page cards

## Regenerating placeholders

```bash
npm run images:placeholders
```

Requires network (downloads from dummyimage.com). Swap files manually afterward; keep filenames unless you update `src/config/images.ts` and `products.ts` slugs.

## Alt text

Components use descriptive `alt` where the image carries meaning (products, categories, hero). Decorative promo backgrounds use `alt=""`.
