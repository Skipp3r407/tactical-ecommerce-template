import Image from "next/image";
import Link from "next/link";
import { productImage } from "@/config/images";
import { Countdown } from "@/components/ui/Countdown";
import { cn } from "@/lib/cn";

export function DealCard({
  title,
  description,
  badge,
  endsAt,
  href,
  className,
  /** When set, shows matching catalog photo behind copy (e.g. weekly special SKU) */
  productSlug,
}: {
  title: string;
  description: string;
  badge?: string;
  endsAt?: string;
  href?: string;
  className?: string;
  productSlug?: string;
}) {
  const inner = (
    <div className="relative z-[1]">
      <div className="flex flex-wrap items-center gap-2">
        {badge ? (
          <span className="rounded-full bg-brand-600/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-200 ring-1 ring-brand-600/30">
            {badge}
          </span>
        ) : null}
        {endsAt ? <Countdown targetIso={endsAt} /> : null}
      </div>
      <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-200 hover:text-brand-100">
          View details →
        </span>
      ) : null}
    </div>
  );

  const bgLayers =
    productSlug ? (
      <>
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={productImage(productSlug)}
            alt=""
            fill
            className="object-cover opacity-[0.55] transition duration-300 group-hover:opacity-[0.68]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-950/55 via-surface-950/72 to-surface-950/92" />
        <div className="pointer-events-none absolute -bottom-4 -right-3 z-0 h-24 w-24 rounded-full bg-brand-500/25 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-80" aria-hidden />
      </>
    ) : null;

  const classes = cn(
    "group relative block overflow-hidden rounded-2xl border border-white/10 p-6",
    "shadow-[0_12px_40px_-28px_rgba(0,0,0,0.85)]",
    "transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform",
    "hover:-translate-y-px hover:border-brand-600/35",
    "hover:shadow-[0_0_0_1px_rgba(220,38,38,0.18),0_0_18px_-2px_rgba(220,38,38,0.22),0_0_30px_-6px_rgba(234,88,12,0.08)]",
    productSlug ? "bg-surface-950/35" : "bg-gradient-to-br from-surface-850/80 to-surface-900/40",
    className,
  );

  const hoverBloom =
    productSlug ? null : (
      <div
        className="pointer-events-none absolute -bottom-3 -right-2 z-0 h-24 w-24 rounded-full bg-brand-500/22 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-80"
        aria-hidden
      />
    );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {bgLayers}
        {hoverBloom}
        {inner}
      </Link>
    );
  }

  return (
    <div className={classes}>
      {bgLayers}
      {hoverBloom}
      {inner}
    </div>
  );
}
