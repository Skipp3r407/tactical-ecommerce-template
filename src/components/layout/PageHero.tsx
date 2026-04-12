import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  imageUrl,
  imageAlt = "",
  align = "left",
  children,
  /** Full-bleed image only — no text overlays or darkening gradients (use for artwork banners) */
  imageOnly = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  /** Describe the hero photo for accessibility when imageUrl is set */
  imageAlt?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  imageOnly?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/10",
        imageOnly && imageUrl && "min-h-[min(52vh,40rem)] w-full",
      )}
    >
      {imageUrl ? (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {!imageOnly ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/85 to-surface-950/55" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(220,38,38,0.12),transparent_55%)]" />
            </>
          ) : null}
        </div>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.08),transparent_50%)]" />
      )}

      {imageOnly ? (
        <div className="relative w-full">
          <h1 className="sr-only">{title}</h1>
        </div>
      ) : (
        <div
          className={cn(
            "relative mx-auto max-w-7xl px-4 py-16 md:py-20",
            align === "center" && "text-center",
          )}
        >
          <Reveal>
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200/90">{eyebrow}</p>
            ) : null}
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            {description ? (
              <p
                className={cn(
                  "mt-4 max-w-2xl text-lg text-zinc-400 md:text-xl",
                  align === "center" && "mx-auto",
                )}
              >
                {description}
              </p>
            ) : null}
            {children ? <div className={cn("mt-8", align === "center" && "flex justify-center")}>{children}</div> : null}
          </Reveal>
        </div>
      )}
    </section>
  );
}
