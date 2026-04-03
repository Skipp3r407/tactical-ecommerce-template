import type { Metadata } from "next";
import { faqCategories, faqItems } from "@/content/faq";
import { PageHero } from "@/components/layout/PageHero";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Ordering, shipping, policies, promotions, distributor fulfillment, and support — answered clearly.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Support"
        title="Questions, answered directly"
        description="No maze of jargon — just the topics buyers ask about most, organized so you can scan fast on mobile."
        align="center"
      />
      <InnerPageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]} maxWidthClass="max-w-3xl">
        {faqCategories.map((cat, i) => (
          <Reveal key={cat.id} delay={0.04 * i}>
            <section id={cat.id} className="mt-12 first:mt-0 scroll-mt-28">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">{cat.label}</h2>
              <div className="mt-4">
                <FaqAccordion items={cat.items} />
              </div>
            </section>
          </Reveal>
        ))}
      </InnerPageLayout>
    </>
  );
}
