import type {
  FaqItem,
  GiveawayCampaign,
  HeroContent,
  PromoBanner,
  SpecialItem,
  Testimonial,
  VideoItem,
} from "@/lib/types/content";
import { bannerImage, mediaThumbnail } from "@/config/images";
import { SITE_TAGLINE } from "@/config/brand";

export const announcement = {
  message: `${SITE_TAGLINE} · Same-week answers on orders · FFL transfers explained step by step`,
  href: "/contact",
  ctaLabel: "Talk to sales",
};

export const hero: HeroContent = {
  headline: "Premium Guns & Ammunition You Can Trust",
  subheadline:
    "Built for performance. Backed by reliability. Explore top-quality firearms, ammunition, and range gear with competitive pricing and fast fulfillment — structured for distributor sync when you scale.",
  primaryCta: { label: "Shop the catalog", href: "/shop" },
  secondaryCta: { label: "View weekly specials", href: "/specials" },
};

export const trustStats = [
  {
    value: "24hr",
    label: "Response standard",
    caption:
      "We target replies to product and order questions within one business day — and we’re often faster when the counter is quiet.",
  },
  {
    value: "FFL",
    label: "Transfers, explained",
    caption:
      "Firearms route through licensed dealers with expectations spelled out up front: routing, paperwork, and what you’ll need at pickup.",
  },
  {
    value: "Spec",
    label: "Details that matter",
    caption:
      "Listings emphasize what you actually need to decide: caliber, compatibility, mount standards — not filler.",
  },
  {
    value: "US",
    label: "Fulfillment you can plan around",
    caption:
      "Shipping options, restrictions, and hazmat rules are communicated clearly so you’re not surprised at checkout.",
  },
];

export const requestProductTeaser = {
  eyebrow: "Can’t find it listed?",
  title: "We’ll help you source it the right way",
  body: "Tell us manufacturer, model, and timeline. Our team checks distributor channels and comes back with real availability — not a black hole.",
  bullets: [
    "One form captures what we need to quote accurately",
    "Keeps your request organized for follow-up",
    "Works alongside catalog sync so special orders stay manageable",
  ],
  cta: "Request a product",
};

export const promoBanners: PromoBanner[] = [
  {
    id: "p1",
    title: "Handgun & carbine event",
    subtitle: "Stackable promos on select Sig, Springfield, and Aero builds — while distributor allocations last",
    href: "/specials",
    variant: "accent",
    image: bannerImage("p1"),
  },
  {
    id: "p2",
    title: "Gear drop: optics & loadout",
    subtitle: "Red dots, vests, and range packs refreshed weekly — built for conversion without looking generic",
    href: "/shop?sort=new",
    variant: "default",
    image: bannerImage("p2"),
  },
];

export const weeklySpecials: SpecialItem[] = [
  {
    id: "s1",
    title: "Sig Sauer P320 M18 9mm",
    description: "Coyote M18 lineage with night sights — FFL transfer required.",
    priceWas: "$729.00",
    priceNow: "$679.00",
    productSlug: "sig-p320-m18-9mm",
    endsAt: "2026-04-20T23:59:59Z",
    badge: "Hot deal",
  },
  {
    id: "s2",
    title: "Springfield Hellcat Pro OSP",
    description: "Optics-ready slim Pro grip — deep concealment without giving up rounds.",
    priceWas: "$619.00",
    priceNow: "$569.00",
    productSlug: "springfield-hellcat-pro-osp",
    endsAt: "2026-04-20T23:59:59Z",
    badge: "Hot deal",
  },
  {
    id: "s3",
    title: 'Aero M4E1 Pro 16" 5.56',
    description: "Mid-length carbine, M-LOK rail — low in-stock; confirm before transfer.",
    priceWas: "$1,299.00",
    priceNow: "$1,199.00",
    productSlug: "aero-m4e1-pro-556-carbine",
    endsAt: "2026-04-22T23:59:59Z",
    badge: "Limited",
  },
  {
    id: "s4",
    title: "Hornady Critical Defense 9mm (20)",
    description: "115gr FTX defensive box — shipping rules vary by jurisdiction.",
    priceWas: "$32.99",
    priceNow: "$27.49",
    productSlug: "hornady-critical-defense-9mm-20",
    endsAt: "2026-04-18T23:59:59Z",
    badge: "Ammo deal",
  },
];

export const whyChooseUs = [
  {
    title: "Compliance without the runaround",
    body: "We say plainly what ships, what needs an FFL, and what your zip or state may restrict — before you invest time in checkout.",
  },
  {
    title: "Curated, not cluttered",
    body: "We merchandise for decision quality: the right optic height, the right mount standard, the right load for the job — not endless duplicate listings.",
  },
  {
    title: "Support that sounds like a counter, not a script",
    body: "Real answers on availability, alternates, and transfer timing — especially when the purchase matters.",
  },
];

export const brandHighlights = ["Trijicon", "SureFire", "Vortex", "Aero Precision", "Magpul"];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I priced out a P320 M18 and an Aero carbine the same afternoon. Compare-at pricing was clear, transfer steps were spelled out, and nobody rushed me off the phone.",
    author: "Marcus T.",
    role: "Competition shooter",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Ordered a SPARC Solar and a box of Critical Defense — they confirmed my zip for ammo shipping and suggested a mount that actually matched my slide. That’s the bar.",
    author: "Elena R.",
    role: "Carbine owner",
    rating: 5,
  },
];

export const faqPreview: FaqItem[] = [
  {
    id: "fq1",
    question: "Do you ship to my area?",
    answer:
      "It depends on product type and the law where you live. We only ship where it’s lawful — send your zip and we’ll confirm what’s possible before you order.",
  },
  {
    id: "fq2",
    question: "How do firearm transfers work?",
    answer:
      "Firearms ship to a licensed FFL of your choosing. You’ll complete transfer paperwork and any required checks at pickup, per federal, state, and local rules.",
  },
];

export const featuredVideos: VideoItem[] = [
  {
    id: "v1",
    title: "How we prep gear before it hits the site",
    description:
      "A quick look at how we verify specs, condition, and photos — so what you see online matches what ships.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: mediaThumbnail("v1"),
  },
];

export const giveawayCampaign: GiveawayCampaign = {
  id: "gw1",
  title: "Spring range kit giveaway",
  description:
    "Enter for a chance to win a curated accessory bundle — pro-grade basics for a focused day at the range.",
  rulesSummary:
    "No purchase necessary where prohibited by law. Official rules, eligibility, and sponsor details are posted on the giveaways page — review before entering.",
  endsAt: "2026-04-30T23:59:59Z",
  ctaLabel: "See how to enter",
  ctaHref: "/giveaways",
};

export const contactBlock = {
  phone: "(555) 010-0199",
  email: "orders@afterlifegunsandammo.com",
  hours: "Mon–Sat 10a–7p · Sun closed",
  addressLine: "123 Commerce Dr, Suite 100",
  cityStateZip: "Your City, ST 00000",
};
