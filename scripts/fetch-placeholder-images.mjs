/**
 * Downloads cohesive placeholder bitmaps into /public/images.
 * Run: npm run images:placeholders
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public", "images");

function dummy(spec, text) {
  const q = text ? `&text=${encodeURIComponent(text)}` : "";
  return `https://dummyimage.com/${spec}${q}`;
}

const productSlugs = [
  "glock-19-gen-5",
  "smith-wesson-mp-shield",
  "ar-15-tactical-rifle",
  "9mm-ammo-bulk-500",
  "tactical-vest-pro-series",
  "red-dot-sight-x2",
  "gun-cleaning-kit-deluxe",
  "tactical-backpack",
  "tactical-weapon-light-1000lm",
  "two-point-sling-rapid",
];

const files = [
  [dummy("360x360/b91c1c/ffffff.png", "JTS"), "logo.png"],
  [dummy("2400x1200/18181b/ea580c.jpg", "Hero"), "hero.jpg"],
  [dummy("960x600/27272a/f97316.jpg", "Firearms"), "categories/firearms.jpg"],
  [dummy("960x600/27272a/f97316.jpg", "Optics"), "categories/optics.jpg"],
  [dummy("960x600/27272a/f97316.jpg", "Gear"), "categories/accessories.jpg"],
  [dummy("960x600/27272a/f97316.jpg", "Ammo"), "categories/ammunition.jpg"],
  [dummy("1280x720/1c1917/dc2626.jpg", "Featured"), "media/v1.jpg"],
  [dummy("1280x720/1c1917/ea580c.jpg", "Video A"), "media/mv1.jpg"],
  [dummy("1280x720/1c1917/ea580c.jpg", "Video B"), "media/mv2.jpg"],
  [dummy("1280x720/1c1917/ea580c.jpg", "Video C"), "media/mv3.jpg"],
  [dummy("1200x440/1c1917/b91c1c.jpg", "Promo"), "banners/p1.jpg"],
  [dummy("1200x440/1c1917/ea580c.jpg", "Promo 2"), "banners/p2.jpg"],
  [dummy("1200x560/18181b/991b1b.jpg", "About"), "banners/about.jpg"],
];

for (const slug of productSlugs) {
  const label = slug.replace(/-/g, " ").slice(0, 18);
  files.push([dummy("900x675/171717/dc2626.jpg", label), `products/${slug}.jpg`]);
}

async function main() {
  for (const [url, rel] of files) {
    const dest = path.join(root, rel);
    await mkdir(path.dirname(dest), { recursive: true });
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} → ${res.status} ${res.statusText}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log("wrote", rel);
  }
  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
