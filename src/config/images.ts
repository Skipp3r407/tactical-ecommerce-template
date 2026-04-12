/**
 * Central paths for assets in /public/images.
 * Replace placeholder files with real photography; keep filenames or update here.
 */
export const images = {
  logo: "/images/logo.png",
  /** Floating chat assistant launcher (FAB) — `/public/images/chatbot.png` */
  chatbotFab: "/images/chatbot.png",
  /** Optional brand texture layered behind the logo in the hero */
  logoBg: "/images/logobg.png",
  hero: "/images/hero.jpg",
  aboutBanner: "/images/about.png",
  /** Pixel dimensions of `aboutBanner` — update if the PNG is replaced */
  aboutBannerSize: { width: 1536, height: 606 } as const,
} as const;

/**
 * PDP / card art — `/public/images/products/{slug}.jpg`.
 * Demo JPEGs are royalty-free stock from Unsplash (Unsplash License — https://unsplash.com/license).
 * They illustrate category/title (not manufacturer packshots); replace with licensed SKU photography for production.
 */
export function productImage(slug: string): string {
  return `/images/products/${slug}.jpg`;
}

/**
 * Category card + category hero — `/public/images/categories/{slug}.jpg`.
 * Stock photography (Unsplash License — free for commercial use; see https://unsplash.com/license):
 * `firearms` — rifle on table (Bexar Arms); `optics` — rifle scope close-up; `accessories` — rifle & loadout on stone;
 * `ammunition` — dense pile of brass bullet shells (Unsplash). Downloaded at 1600px wide for consistent card/hero crops.
 */
export function categoryImage(categorySlug: string): string {
  return `/images/categories/${categorySlug}.jpg`;
}

/**
 * Homepage promo tiles — `/public/images/banners/{id}.jpg`.
 * `p1` / `p2`: Unsplash License — tactical rifle with optic (promo event); rifle & loadout gear on stone (optics & loadout).
 */
export function bannerImage(bannerId: string): string {
  return `/images/banners/${bannerId}.jpg`;
}

/** Video posters — /public/images/media/{id}.jpg */
export function mediaThumbnail(mediaId: string): string {
  return `/images/media/${mediaId}.jpg`;
}
