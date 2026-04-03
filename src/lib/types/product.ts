/**
 * Product model aligned with distributor import + manual overrides.
 * Maps cleanly to CSV/XML/REST feeds from 2A Commerce–style platforms.
 */
export type ProductBadge = "featured" | "sale" | "special" | "new" | "clearance" | "hot";

export interface Product {
  id: string;
  slug: string;
  sku: string;
  /** External distributor / ERP SKU for sync mapping */
  distributorSku?: string;
  title: string;
  shortDescription: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  images: string[];
  videoUrl?: string;
  categoryIds: string[];
  brand: string;
  inStock: boolean;
  stockQty?: number;
  badges: ProductBadge[];
  specs: Record<string, string>;
  /** Short bullet highlights for PDP — editable independently of long description */
  highlights?: string[];
  /** Cross-sell / frequently paired SKUs (manual or rule-based) */
  bundleSuggestions?: { title: string; slug: string; price: number }[];
  /** When true, imported feed updates are ignored for this field */
  manualOverride?: {
    title?: boolean;
    price?: boolean;
    visibility?: boolean;
  };
  /** Hide from catalog while retaining sync data */
  hidden?: boolean;
  /** Force-show in featured blocks regardless of inventory sort */
  spotlight?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: string;
  /** Full-bleed hero for category landing */
  heroImage?: string;
  tagline?: string;
  longDescription?: string;
  /** Optional promo strip inside category page */
  promoCallout?: { title: string; body: string; href: string };
  subcategories?: { slug: string; name: string }[];
}
