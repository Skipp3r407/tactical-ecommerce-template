import type { Product } from "@/lib/types/product";
import { productImage } from "@/config/images";

/**
 * Eight demo SKUs for screenshots — replace with distributor import.
 * Image files: `/public/images/products/{slug}.jpg` (see each `slug` below).
 * Photos are Unsplash-licensed stock matched to product type/title (https://unsplash.com/license), not brand packshots.
 */
export const products: Product[] = [
  {
    id: "1",
    slug: "sig-p320-m18-9mm",
    sku: "ALGA-HG-P320M18",
    distributorSku: "SIG-320CA-9-BXR3",
    title: "Sig Sauer P320 M18 9mm",
    shortDescription:
      "Coyote P320 carry with night sights and ambi controls — the same M18 lineage, ready for your chosen FFL transfer.",
    description:
      "The P320 M18 brings duty-proven ergonomics in a coyote-tan configuration with factory night sights and a compact slide length that still feels shootable under time pressure. Striker-fired with a crisp, repeatable break and modular grip sizing in the full retail ecosystem. Ships only to a licensed FFL; confirm magazine capacity and feature legality for your state before purchase.",
    price: 679,
    compareAtPrice: 729,
    currency: "USD",
    images: [productImage("sig-p320-m18-9mm"), productImage("sig-p320-m18-9mm")],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    categoryIds: ["cat-firearms"],
    brand: "Sig Sauer",
    inStock: true,
    stockQty: 5,
    badges: ["featured", "sale", "hot"],
    specs: {
      Caliber: "9mm",
      Capacity: "17+1 (where legal)",
      Barrel: "3.9 in",
      Finish: "Coyote PVD",
      Sights: "SIGLITE night sights",
    },
    highlights: [
      "M18-style configuration with traction where hands actually grip",
      "Optic-ready slides available in the ecosystem — verify this SKU’s cut",
      "Strong pairing with defensive 9mm loads and a quality holster",
    ],
    bundleSuggestions: [
      { title: "Hornady Critical Defense 9mm (20 rd)", slug: "hornady-critical-defense-9mm-20", price: 27.49 },
      { title: "Vortex SPARC Solar Red Dot", slug: "vortex-sparc-solar-red-dot", price: 249 },
    ],
    spotlight: true,
  },
  {
    id: "2",
    slug: "springfield-hellcat-pro-osp",
    sku: "ALGA-HG-HCPROOSP",
    distributorSku: "SPG-HCPRO9OSP",
    title: "Springfield Hellcat Pro OSP 9mm",
    shortDescription:
      "Slim Pro footprint with optics-ready slide — more grip, same concealment goals as the original Hellcat.",
    description:
      "The Hellcat Pro stretches the grip for a full firing hand without turning into a duty brick. OSP cut accepts popular micro footprints with the right plate; iron sights remain usable as backups. Ideal for appendix or strong-side IWB when you want capacity and control in one package. FFL transfer required; verify local restrictions.",
    price: 569,
    compareAtPrice: 619,
    currency: "USD",
    images: [productImage("springfield-hellcat-pro-osp")],
    categoryIds: ["cat-firearms"],
    brand: "Springfield Armory",
    inStock: true,
    stockQty: 8,
    badges: ["sale", "hot"],
    specs: {
      Caliber: "9mm",
      Capacity: "15+1 / 17+1 (where legal)",
      Barrel: "3.7 in",
      Slide: "OSP (optic-ready)",
      Frame: "Hellcat Pro",
    },
    highlights: ["Textured frame for wet or gloved hands", "Slim enough for discreet carry with Pro capacity", "Strong seller when paired with a micro red dot"],
    bundleSuggestions: [
      { title: "Streamlight TLR-7 Sub", slug: "streamlight-tlr-7-sub", price: 129 },
      { title: "Vortex SPARC Solar Red Dot", slug: "vortex-sparc-solar-red-dot", price: 249 },
    ],
  },
  {
    id: "3",
    slug: "aero-m4e1-pro-556-carbine",
    sku: "ALGA-RF-M4E1PRO16",
    distributorSku: "APRG-556-M4E1-16",
    title: 'Aero Precision M4E1 Pro 16" 5.56 NATO',
    shortDescription:
      "Factory-assembled carbine — M4E1 enhanced upper/lower, mid-length gas, free-float M-LOK handguard.",
    description:
      "Configured as a modern 5.56 carbine for training, home defense planning, or patrol-adjacent roles where law allows. Mid-length gas system and a rigid handguard keep the dot steady under light and sling tension. This demo build is representative, not agency-specific — confirm muzzle device, BCG, and furniture rules in your jurisdiction. Transfers through your FFL only.",
    price: 1199,
    compareAtPrice: 1299,
    currency: "USD",
    images: [productImage("aero-m4e1-pro-556-carbine"), productImage("aero-m4e1-pro-556-carbine")],
    categoryIds: ["cat-firearms"],
    brand: "Aero Precision",
    inStock: true,
    stockQty: 2,
    badges: ["featured", "sale"],
    specs: {
      Caliber: "5.56 NATO",
      Barrel: '16 in',
      Handguard: "M-LOK free-float",
      Gas: "Mid-length",
      Lower: "M4E1",
    },
    highlights: [
      "Low stock — call before scheduling a transfer",
      "Handguard leaves room for light, sling, and laser at 3/9 o’clock",
      "Pairs cleanly with a 200-series mount height for red dots",
    ],
    bundleSuggestions: [
      { title: "Vortex SPARC Solar Red Dot", slug: "vortex-sparc-solar-red-dot", price: 249 },
      { title: "Unity FAST Micro Mount — FDE", slug: "unity-fast-micro-mount-fde", price: 96 },
      { title: "Magpul MS4 Dual QD Sling Gen 2", slug: "magpul-ms4-dual-qd-sling-gen2", price: 52 },
    ],
    spotlight: true,
  },
  {
    id: "4",
    slug: "hornady-critical-defense-9mm-20",
    sku: "ALGA-AM-CD9-20",
    distributorSku: "HRN-90240-20",
    title: "Hornady Critical Defense 9mm 115gr (20 rounds)",
    shortDescription:
      "20-round box of 115gr FTX — reliable feeding in compact pistols; sold only where shipping law allows.",
    description:
      "Critical Defense uses the FTX bullet profile and tuned propellants for consistent expansion out of short barrels. Sold in compliance with federal, state, and local ammunition shipping rules — we may require ID verification and refuse orders to restricted locations. Contact us with your zip before bulk case buys.",
    price: 27.49,
    compareAtPrice: 32.99,
    currency: "USD",
    images: [productImage("hornady-critical-defense-9mm-20")],
    categoryIds: ["cat-ammunition"],
    brand: "Hornady",
    inStock: true,
    stockQty: 240,
    badges: ["sale", "special"],
    specs: {
      Bullet: "115gr FTX",
      Case: "Brass",
      Pack: "20 rounds",
      Use: "Personal defense / compact pistols",
    },
    highlights: ["Nickel-plated cases for slick feed and corrosion resistance", "Low-flash propellant for dim-light encounters"],
  },
  {
    id: "5",
    slug: "vortex-sparc-solar-red-dot",
    sku: "ALGA-OP-SPARC-SOL",
    distributorSku: "VOR-SPC-AR2",
    title: "Vortex SPARC Solar Red Dot",
    shortDescription:
      "Solar-assisted CR2032 runtime — 2 MOA dot, night-vision compatible settings, rugged aluminum housing.",
    description:
      "The SPARC Solar adds a photovoltaic cell on top of battery power so sunny range days extend your maintenance interval. Multi-height mount included in retail kits; verify co-witness with your irons or riser choice. Backed by Vortex’s VIP warranty story — ideal demo SKU for optics category storytelling.",
    price: 249,
    compareAtPrice: 299,
    currency: "USD",
    images: [productImage("vortex-sparc-solar-red-dot")],
    categoryIds: ["cat-optics"],
    brand: "Vortex",
    inStock: true,
    stockQty: 16,
    badges: ["featured", "new", "sale"],
    specs: {
      Reticle: "2 MOA dot",
      Battery: "CR2032 + solar assist",
      Mount: "Multi-height included",
      NV: "Compatible settings",
    },
    highlights: ["Auto-off preserves battery when forgotten on", "Clear glass for the price tier — strong add-on attach rate"],
    bundleSuggestions: [{ title: "Unity FAST Micro Mount — FDE", slug: "unity-fast-micro-mount-fde", price: 96 }],
  },
  {
    id: "6",
    slug: "streamlight-tlr-7-sub",
    sku: "ALGA-LT-TLR7SUB",
    distributorSku: "STL-69406",
    title: "Streamlight TLR-7 Sub Weapon Light",
    shortDescription:
      "500-lumen compact pistol light — verify Sub (1913 short / Glock 43X/48 MOS / Hellcat) variant before checkout.",
    description:
      "The TLR-7 Sub family mounts flush on slim rails without hanging past the muzzle on compact slides. This listing represents the Sub platform — confirm the exact key set for your pistol model; wrong keys cause gap or battery cap stress. High demand SKU; backorders may apply when distributor buckets empty.",
    price: 129,
    compareAtPrice: 149,
    currency: "USD",
    images: [productImage("streamlight-tlr-7-sub")],
    categoryIds: ["cat-accessories"],
    brand: "Streamlight",
    inStock: false,
    stockQty: 0,
    badges: ["sale"],
    specs: {
      Output: "500 lumens",
      Runtime: "1.5h continuous",
      Battery: "CR123A",
      Beam: "Focused for ID distance",
    },
    highlights: ["Low signature next to compact slides", "User-programmable strobe (where law allows)"],
  },
  {
    id: "7",
    slug: "magpul-ms4-dual-qd-sling-gen2",
    sku: "ALGA-SL-MS4G2",
    distributorSku: "MAG518",
    title: "Magpul MS4 Dual QD Sling Gen 2",
    shortDescription:
      "Quick-adjust two-to-one-point sling — heavy-duty QD swivels and durable polymer hardware.",
    description:
      "Switch between two-point stability and single-point mobility without re-rigging your rifle. The MS4 is a staple upgrade for patrol-style carbines and training guns. Pair with QD sockets in your stock and handguard; swivels are included in this demo configuration.",
    price: 52,
    compareAtPrice: 65,
    currency: "USD",
    images: [productImage("magpul-ms4-dual-qd-sling-gen2")],
    categoryIds: ["cat-accessories"],
    brand: "Magpul",
    inStock: true,
    stockQty: 42,
    badges: ["sale", "clearance"],
    specs: {
      Width: "1.25 in webbing",
      Hardware: "QD swivels included",
      Modes: "2-point / 1-point",
      Color: "Black",
    },
    highlights: ["Clearance pricing while last distributor carton lasts", "Fits most carbines with QD cups at rear and front"],
  },
  {
    id: "8",
    slug: "unity-fast-micro-mount-fde",
    sku: "ALGA-MT-FASTMICFDE",
    distributorSku: "UNY-FST-MICR-FDE",
    title: "Unity Tactical FAST Micro Mount — FDE",
    shortDescription:
      "2.26\" optical centerline for neck-up posture — Aimpoint Micro footprint, FDE anodize.",
    description:
      "The FAST Micro raises red dots to a more heads-up posture behind night vision or gas masks, and clears common laser topologies. Direct Aimpoint Micro T-2 footprint compatibility; use manufacturer plates for other optics. Torque to spec — over-torque cracks coatings and walks screws.",
    price: 96,
    currency: "USD",
    images: [productImage("unity-fast-micro-mount-fde")],
    categoryIds: ["cat-accessories"],
    brand: "Unity Tactical",
    inStock: true,
    stockQty: 11,
    badges: ["featured", "new"],
    specs: {
      Height: "2.26 in centerline",
      Footprint: "Aimpoint Micro",
      Finish: "FDE Type III anodize",
      Weight: "~3 oz",
    },
    highlights: ["Pairs with SPARC Solar or similar micro dots on raised builds", "FDE matches coyote rifles and M18-style pistols aesthetically"],
    bundleSuggestions: [{ title: "Vortex SPARC Solar Red Dot", slug: "vortex-sparc-solar-red-dot", price: 249 }],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter((p) => p.id !== product.id && p.categoryIds.some((c) => product.categoryIds.includes(c)))
    .slice(0, limit);
}
