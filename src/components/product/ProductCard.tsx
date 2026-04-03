import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types/product";
import { ProductBadges } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

export function ProductCard({
  product,
  className,
  quickView = true,
  variant = "default",
}: {
  product: Product;
  className?: string;
  quickView?: boolean;
  /** Larger type + glow for homepage featured row */
  variant?: "default" | "featured";
}) {
  const primary = product.images[0];
  const featured = variant === "featured";
  return (
    <article
      className={cn(
        "elevate-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-surface-850/90 to-surface-950/40 shadow-[0_24px_80px_-55px_rgba(0,0,0,0.95)]",
        featured &&
          "ring-1 ring-brand-600/20 shadow-[0_28px_90px_-50px_rgba(220,38,38,0.2),0_24px_80px_-55px_rgba(0,0,0,0.9)]",
        className,
      )}
    >
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-surface-800">
        {primary ? (
          <Image
            src={primary}
            alt={`${product.title} — product photo at ${product.brand}`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes={
              featured
                ? "(max-width:480px) 100vw, (max-width:1280px) 50vw, 25vw"
                : "(max-width:768px) 100vw, 33vw"
            }
          />
        ) : null}
        <div className="absolute left-3 top-3">
          <ProductBadges badges={product.badges} />
        </div>
        {!product.inStock ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/55">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-white/20">
              Out of stock
            </span>
          </div>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{product.brand}</p>
        <Link
          href={`/shop/${product.slug}`}
          className={cn(
            "mt-1 font-[family-name:var(--font-display)] font-semibold text-white hover:text-brand-100",
            featured ? "text-xl leading-snug sm:text-[1.35rem]" : "text-lg",
          )}
        >
          {product.title}
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{product.shortDescription}</p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <p className="text-xs text-zinc-500">SKU {product.sku}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-xl font-semibold text-white">${product.price.toFixed(2)}</span>
              {product.compareAtPrice ? (
                <span className="text-sm text-zinc-500 line-through">${product.compareAtPrice.toFixed(2)}</span>
              ) : null}
            </div>
          </div>
          {quickView ? (
            <Link
              href={`/shop/${product.slug}`}
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-brand-600/40 hover:bg-white/10"
            >
              View
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
