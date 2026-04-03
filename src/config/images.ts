/**
 * Central paths for assets in /public/images.
 * Replace placeholder files with real photography; keep filenames or update here.
 */
export const images = {
  logo: "/images/logo.png",
  hero: "/images/hero.jpg",
  aboutBanner: "/images/banners/about.jpg",
} as const;

export function productImage(slug: string): string {
  return `/images/products/${slug}.jpg`;
}

/** Category card + category hero — /public/images/categories/{slug}.jpg */
export function categoryImage(categorySlug: string): string {
  return `/images/categories/${categorySlug}.jpg`;
}

export function bannerImage(bannerId: string): string {
  return `/images/banners/${bannerId}.jpg`;
}

/** Video posters — /public/images/media/{id}.jpg */
export function mediaThumbnail(mediaId: string): string {
  return `/images/media/${mediaId}.jpg`;
}
