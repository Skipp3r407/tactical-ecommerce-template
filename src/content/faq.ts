import type { FaqCategory } from "@/lib/types/content";

export const faqCategories: FaqCategory[] = [
  {
    id: "ordering",
    label: "Ordering & availability",
    items: [
      {
        id: "orders-1",
        question: "How do I buy from you?",
        answer:
          "Browse the catalog, add to cart, and check out where the product and your location allow it. Firearms require FFL transfer; some items need in-store pickup, ID verification, or other steps — we spell that out before you pay.",
      },
      {
        id: "avail-1",
        question: "Why did an item show in stock and then change?",
        answer:
          "Inventory updates on a schedule from distributors and our own counts — numbers can move between syncs. If you’re coordinating a transfer or travel, contact us to confirm before you commit.",
      },
      {
        id: "req-1",
        question: "Can you source something that isn’t listed?",
        answer:
          "Yes. Use Request a Product with manufacturer, model, and any deadline. We’ll check authorized channels and reply with availability and pricing when we can.",
      },
    ],
  },
  {
    id: "shipping",
    label: "Shipping & transfers",
    items: [
      {
        id: "ship-1",
        question: "Where do you ship?",
        answer:
          "It depends on what you’re buying and the law where you live. Some products are pickup-only, hazmat-restricted, or unavailable in certain jurisdictions — we’ll tell you at checkout or by email if we need to adjust the order.",
      },
      {
        id: "ship-2",
        question: "How long does fulfillment take?",
        answer:
          "In-stock items leave our facility within the handling window shown on the product or cart page. Drop-ship SKUs may add time based on the supplier’s processing rules — we communicate delays when we see them.",
      },
      {
        id: "ship-3",
        question: "How do firearm transfers work?",
        answer:
          "Firearms ship to an FFL you select (or we assign per policy). You complete transfer paperwork and any required checks at pickup, following federal, state, and local law.",
      },
    ],
  },
  {
    id: "policies",
    label: "Policies & compliance",
    items: [
      {
        id: "policy-1",
        question: "What’s your compliance posture?",
        answer:
          "We operate within applicable federal, state, and local regulations and post restrictions clearly. You’re responsible for knowing the laws that apply to you as a buyer — when unsure, ask your FFL or qualified counsel.",
      },
      {
        id: "returns-1",
        question: "What about returns?",
        answer:
          "Return eligibility depends on product category and condition. Many regulated items can’t be returned after transfer — see our Returns policy for specifics (have counsel review before you publish final language).",
      },
      {
        id: "site-1",
        question: "Is website content legal advice?",
        answer:
          "No. This information is general. For legal questions, consult qualified counsel or the appropriate regulatory authority.",
      },
    ],
  },
  {
    id: "promotions",
    label: "Specials, promos & giveaways",
    items: [
      {
        id: "spec-1",
        question: "How do specials and promotions work?",
        answer:
          "Promotions may be limited by dates, inventory, or buyer eligibility. The price and terms shown at checkout control unless the offer explicitly states otherwise.",
      },
      {
        id: "gw-1",
        question: "How do giveaways work?",
        answer:
          "Every campaign lists official rules, who may enter, and the deadline. Always use counsel-reviewed rules text before you run a live giveaway.",
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    items: [
      {
        id: "support-1",
        question: "What’s the best way to reach you?",
        answer:
          "Call during posted hours, email, or use the contact form. We prioritize clear answers on transfers, compatibility, and availability — the questions that actually block a purchase.",
      },
      {
        id: "dist-1",
        question: "Do you integrate distributor inventory?",
        answer:
          "Our catalog is built to connect to distributor feeds, SKU mapping, and scheduled inventory syncs. Exact timing and fields depend on which partners and platform you connect.",
      },
    ],
  },
];

export const faqItems = faqCategories.flatMap((c) => c.items);
