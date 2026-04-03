import type { Category } from "@/lib/types/product";
import { categoryImage } from "@/config/images";

export const categories: Category[] = [
  {
    id: "cat-firearms",
    slug: "firearms",
    name: "Firearms",
    description: "Handguns, rifles, and shotguns — every transfer follows applicable law; availability varies by model and region.",
    image: categoryImage("firearms"),
    heroImage: categoryImage("firearms"),
    tagline: "The right platform, vetted and documented.",
    longDescription:
      "From home defense to competition, we list firearms with the specifications and transfer steps that serious buyers expect — so you know what ships, where it goes, and what you’ll do at your FFL.",
    promoCallout: {
      title: "High-demand models — check ETA first",
      body: "Allocations change quickly. Call or message before you set your transfer appointment so we can confirm inbound status.",
      href: "/contact",
    },
    subcategories: [
      { slug: "handguns", name: "Handguns" },
      { slug: "rifles", name: "Rifles" },
      { slug: "shotguns", name: "Shotguns" },
    ],
  },
  {
    id: "cat-optics",
    slug: "optics",
    name: "Optics",
    description: "Red dots, magnified optics, mounts, and rings — matched to your rail height and intended use.",
    image: categoryImage("optics"),
    heroImage: categoryImage("optics"),
    tagline: "Glass you can trust when the shot counts.",
    longDescription:
      "We organize optics by how you shoot: fast acquisition up close, versatile carbine setups, and deliberate precision. Compare tube size, reticle style, and mount standards side by side — without wading through irrelevant SKUs.",
    promoCallout: {
      title: "Not sure on rings or mount height?",
      body: "Tell us your rail and optic — we’ll recommend ring height, torque basics, and common pitfalls before you buy twice.",
      href: "/request-product",
    },
    subcategories: [
      { slug: "red-dots", name: "Red dots" },
      { slug: "lpvo", name: "LPVO" },
      { slug: "mounts", name: "Mounts & rings" },
    ],
  },
  {
    id: "cat-accessories",
    slug: "accessories",
    name: "Accessories",
    description: "Lights, slings, storage, and support gear — selected for fit, finish, and field reliability.",
    image: categoryImage("accessories"),
    heroImage: categoryImage("accessories"),
    tagline: "Details that turn a rifle into a system.",
    longDescription:
      "Illumination, carry, and organization matter as much as the upper receiver. We stock accessories that mate cleanly to common rails and receivers — fewer returns, fewer “almost fits.”",
    subcategories: [
      { slug: "lights", name: "Lights" },
      { slug: "slings", name: "Slings" },
      { slug: "storage", name: "Bags & storage" },
    ],
  },
  {
    id: "cat-ammunition",
    slug: "ammunition",
    name: "Ammunition",
    description: "Training and defensive ammunition where lawfully sold — ID, shipping rules, and limits apply by jurisdiction.",
    image: categoryImage("ammunition"),
    heroImage: categoryImage("ammunition"),
    tagline: "Honest guidance on what we can deliver — and where.",
    longDescription:
      "Ammunition laws vary by state and locality. Our listings reflect the best current inventory picture; checkout enforces the restrictions that apply to your order. When in doubt, ask before you pay.",
    promoCallout: {
      title: "Case quantities & range packs",
      body: "Need bulk training ammo or a recurring range order? Contact us for case pricing where your laws allow.",
      href: "/contact",
    },
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
