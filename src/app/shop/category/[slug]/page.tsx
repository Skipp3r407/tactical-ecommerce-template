import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCategoryBySlug } from "@/content/categories";
import { products } from "@/content/products";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category" };
  return {
    title: category.name,
    description: category.description ?? category.longDescription,
  };
}

function CatalogFallback() {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface-850/40 p-12 text-center text-zinc-500">
      Loading catalog…
    </div>
  );
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <>
      <PageHero
        eyebrow="Shop by category"
        title={category.name}
        description={category.longDescription ?? category.description}
        imageUrl={category.heroImage ?? category.image}
      />

      <div className="border-b border-white/10 bg-surface-950">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: category.name },
            ]}
          />

          {category.tagline ? (
            <p className="mt-6 max-w-3xl text-lg text-zinc-300 md:text-xl">&ldquo;{category.tagline}&rdquo;</p>
          ) : null}

          {category.subcategories?.length ? (
            <Reveal>
              <div className="mt-8 flex flex-wrap gap-2">
                {category.subcategories.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/shop/category/${category.slug}`}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-brand-600/35 hover:text-white"
                  >
                    {s.name}
                  </Link>
                ))}
                <span className="self-center text-xs text-zinc-600">Subcategory filters can link to filtered views in Phase 2.</span>
              </div>
            </Reveal>
          ) : null}

          {category.promoCallout ? (
            <Reveal delay={0.05}>
              <div className="mt-10 rounded-2xl border border-brand-600/25 bg-gradient-to-r from-brand-600/10 to-transparent p-6 md:flex md:items-center md:justify-between md:gap-8">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {category.promoCallout.title}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">{category.promoCallout.body}</p>
                </div>
                <Link
                  href={category.promoCallout.href}
                  className="mt-4 inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-xl bg-brand-600 px-5 text-sm font-semibold text-white transition hover:bg-brand-500 md:mt-0"
                >
                  Continue
                </Link>
              </div>
            </Reveal>
          ) : null}

          <div className="mt-12">
            <SectionHeading
              title={`All ${category.name.toLowerCase()}`}
              description="Filters adapt to mobile with a dedicated drawer — desktop keeps a persistent sidebar."
            />
            <div className="mt-10">
              <Suspense fallback={<CatalogFallback />}>
                <ShopCatalog products={products} fixedCategorySlug={category.slug} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
