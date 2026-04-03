import Link from "next/link";
import type { Product } from "@/lib/types/product";
import { ProductCard } from "@/components/product/ProductCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function ProductRow({
  title,
  description,
  products,
  eyebrow,
  href,
  hrefLabel = "View all",
}: {
  title: string;
  description?: string;
  products: Product[];
  eyebrow?: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <section className="border-b border-white/10 bg-surface-900/20">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </Reveal>
          {href ? (
            <Link
              href={href}
              className="mb-1 text-sm font-semibold text-brand-200 hover:text-brand-100 md:shrink-0"
            >
              {hrefLabel} →
            </Link>
          ) : null}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * i}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
