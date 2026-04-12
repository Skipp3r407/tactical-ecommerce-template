/**
 * Inventory photos under /public/images/gun-photos — filenames with spaces are URL-encoded at runtime.
 */
export const gunPhotoFilenames = [
  "AMMO.jpg",
  "ARMSCOR 9MM 115GR FMJ.JPG",
  "BOLT ACTION RIFLE .jpg",
  "Bolt Action Rifle.jpg",
  "FREEDOM ORDINANCE 9MM.jpg",
  "Gun Magazines.JPG",
  "IMG_7741.jpg",
  "IMG_7742.jpg",
  "IMG_7743.jpg",
  "IMG_7744.jpg",
  "IMG_7745.jpg",
  "IMG_7746.jpg",
  "IMG_7747.jpg",
  "IMG_7748.jpg",
  "IMG_7749.jpg",
  "IMG_7750.jpg",
  "IMG_7751.jpg",
  "IMG_7752.jpg",
  "IMG_7753.jpg",
  "IMG_7754.jpg",
  "IMG_7755.jpg",
  "IMG_7756.jpg",
  "Kalashbnikov USA 1.jpg",
  "Kalashbnikov USA 2.jpg",
  "Kalashbnikov USA 3.jpg",
  "Kalashbnikov USA.jpg",
  "ROSSI 22LR.jpg",
  "SCCY DVG-1CBLG Lime.jpg",
  "SCCY Grey.jpg",
  "SCCY Pink.jpg",
  "SCCY Purple.jpg",
  "SCCY White.JPG",
  "SCOPES.JPG",
  "SEMI-AUTO HANDGUN.jpg",
  "SEMI-AUTO RIFLE.jpg",
  "SEMI-AUTO SHOTGUNS.jpg",
  "SSCCY.jpg",
] as const;

const GUN_PHOTO_DIR = "/images/gun-photos";

export function gunPhotoSrc(filename: string): string {
  return `${GUN_PHOTO_DIR}/${encodeURIComponent(filename)}`;
}

export const gunPhotoUrls: readonly string[] = gunPhotoFilenames.map((name) => gunPhotoSrc(name));

/** Subset for compact UI (footer strip, hero accents) */
export const gunPhotoFilmstripSrcs: readonly string[] = gunPhotoFilenames.slice(0, 6).map((name) => gunPhotoSrc(name));
