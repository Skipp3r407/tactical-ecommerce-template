/** Editable homepage & marketing blocks — swap for CMS later */

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  backgroundImage: string;
}

export interface PromoBanner {
  id: string;
  title: string;
  subtitle?: string;
  href?: string;
  variant: "default" | "accent" | "dark";
  /** Background image under text (e.g. /images/banners/p1.jpg) */
  image?: string;
}

export interface SpecialItem {
  id: string;
  title: string;
  description: string;
  endsAt?: string;
  productSlug?: string;
  badge?: string;
  /** Large price display for homepage cards (e.g. $549) */
  priceNow?: string;
  /** Struck-through compare (e.g. $599) */
  priceWas?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Grouped FAQ for premium accordion + anchor navigation */
export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export interface GiveawayCampaign {
  id: string;
  title: string;
  description: string;
  rulesSummary: string;
  endsAt: string;
  ctaLabel: string;
  ctaHref: string;
}
