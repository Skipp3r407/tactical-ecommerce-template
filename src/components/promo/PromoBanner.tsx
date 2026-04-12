import Image from "next/image";
import Link from "next/link";
import type { PromoBanner as PromoBannerType } from "@/lib/types/content";
import { cn } from "@/lib/cn";

/**
 * Single editable promo tile — used in homepage strip and can be reused in seasonal campaigns.
 */
export function PromoBanner({ banner, className }: { banner: PromoBannerType; className?: string }) {
  return (
    <Link
      href={banner.href ?? "#"}
      className={cn(
        "elevate-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition md:min-h-[152px]",
        banner.variant === "accent" &&
          "border-brand-600/30 bg-gradient-to-br from-brand-600/[0.14] via-surface-900/40 to-transparent shadow-[0_20px_60px_-50px_rgba(0,0,0,0.9)] hover:border-brand-500/45",
        banner.variant === "default" &&
          "border-white/10 bg-gradient-to-b from-surface-850/70 to-surface-950/30 hover:border-white/20",
        banner.variant === "dark" && "border-white/10 bg-surface-950/80 hover:border-white/20",
        className,
      )}
    >
      {banner.image ? (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={banner.image}
            alt=""
            fill
            className="object-cover opacity-[0.22] transition duration-500 group-hover:opacity-[0.3] group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-surface-950/88 via-surface-950/65 to-surface-950/40" />
        </div>
      ) : null}
      <div className="pointer-events-none absolute -right-12 -top-12 z-[1] h-32 w-32 rounded-full bg-brand-600/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-brand-600/15" />
      <div className="relative z-10">
        <p className="text-sm font-semibold tracking-tight text-white">{banner.title}</p>
        {banner.subtitle ? <p className="mt-2 text-sm leading-relaxed text-zinc-400">{banner.subtitle}</p> : null}
      </div>
      <span className="relative z-10 mt-4 inline-flex items-center text-sm font-semibold text-brand-200 transition group-hover:gap-1 group-hover:text-brand-100">
        Shop the promo
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
