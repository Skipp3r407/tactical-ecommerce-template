import Link from "next/link";
import type { Product } from "@/lib/types/product";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

/**
 * Homepage-only featured grid — tighter rhythm for screenshots (4-up on xl).
 */
export function HomeFeaturedProducts({
  products,
  title = "Featured products",
  description = "Curated SKUs with strong imagery and badges — the row clients photograph first.",
}: {
  products: Product[];
  title?: string;
  description?: string;
}) {
  const list = products.slice(0, 4);

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/40 to-surface-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,38,38,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading eyebrow="Editor’s picks" title={title} description={description} />
          </Reveal>
          <Link
            href="/shop"
            className="mb-1 shrink-0 text-center text-sm font-semibold text-brand-200 transition hover:text-brand-100 md:text-left"
          >
            Full catalog →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * i}>
              <ProductCard product={p} variant="featured" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
