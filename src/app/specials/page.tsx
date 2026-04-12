import type { Metadata } from "next";
import { weeklySpecials, promoBanners } from "@/content/site";
import { products } from "@/content/products";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/motion/Reveal";
import { DealCard } from "@/components/promo/DealCard";
import { PromoBanner } from "@/components/promo/PromoBanner";
import { PageHero } from "@/components/layout/PageHero";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { SITE_NAME } from "@/config/brand";

export const metadata: Metadata = {
  title: "Specials & deals",
  description: `Weekly specials, seasonal promos, and value picks at ${SITE_NAME} — real end dates, real inventory.`,
};

export default function SpecialsPage() {
  const onSale = products.filter((p) => p.badges.includes("sale") || p.badges.includes("clearance"));

  return (
    <>
      <PageHero
        eyebrow="Deals"
        title="Real savings, clearly marked"
        description="Limited-time bundles, seasonal promos, and clearance SKUs — always with honest end dates and terms, so you know exactly what you’re getting."
        align="center"
      />
      <InnerPageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Specials" }]}>
        <div className="grid gap-4 md:grid-cols-2">
            {promoBanners.map((p, i) => (
              <Reveal key={p.id} delay={0.05 * i}>
                <PromoBanner banner={p} className="md:min-h-[180px]" />
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">Weekly specials</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              Pair time-bound offers with countdown modules — ideal for seasonal pushes and distributor-funded promos.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {weeklySpecials.map((s, i) => (
                <Reveal key={s.id} delay={0.05 * i}>
                  <DealCard
                    title={s.title}
                    description={s.description}
                    badge={s.badge}
                    endsAt={s.endsAt}
                    href={s.productSlug ? `/shop/${s.productSlug}` : "/shop"}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">Featured deal SKUs</h2>
            <p className="mt-2 max-w-2xl text-zinc-400">
              Sale and clearance badges pull from product records — compare-at pricing can track distributor MAP and cost
              changes.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {onSale.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
      </InnerPageLayout>
    </>
  );
}
