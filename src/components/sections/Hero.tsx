import Image from "next/image";
import { hero } from "@/content/site";
import { CTAButtons } from "@/components/ui/CTAButtons";
import { Reveal } from "@/components/motion/Reveal";
import { SITE_NAME, SITE_TAGLINE } from "@/config/brand";

const trustChips = [
  { label: "FFL workflow ready" },
  { label: "Distributor sync–ready data" },
  { label: "Mobile-first catalog" },
];

export function Hero() {
  return (
    <section className="relative min-h-[min(100dvh,920px)] overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt={`${SITE_NAME} — premium firearms and tactical gear`}
          fill
          priority
          className="object-cover object-center opacity-[0.88] sm:opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-950 via-surface-950/[0.97] to-surface-950/55 sm:via-surface-950/96 sm:to-surface-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_25%,rgba(220,38,38,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_20%,rgba(234,88,12,0.12),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,3,4,0.92),transparent_45%)] sm:bg-[linear-gradient(to_top,rgba(3,3,4,0.88),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-950 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[min(100dvh,920px)] max-w-7xl flex-col justify-center px-4 py-24 sm:py-28 md:py-32 lg:py-36">
        <Reveal>
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <span className="hidden h-px w-10 bg-gradient-to-r from-brand-500 to-accent-500 sm:block" aria-hidden />
              <p className="max-w-[22rem] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-accent-300 sm:max-w-none sm:text-[11px] sm:tracking-[0.28em]">
                {SITE_TAGLINE}
              </p>
            </div>
            <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-display)] text-[2.1rem] font-bold leading-[1.04] tracking-tight text-white [text-shadow:0_4px_48px_rgba(0,0,0,0.55)] sm:mt-5 sm:text-5xl md:text-6xl lg:text-[3.65rem]">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-zinc-300 sm:mt-8 sm:text-lg md:text-xl">
              {hero.subheadline}
            </p>
            <CTAButtons
              className="mt-10 items-stretch sm:mt-12 sm:items-center sm:justify-start"
              primary={hero.primaryCta}
              secondary={hero.secondaryCta}
            />
            <ul
              className="mt-10 flex w-full max-w-xl flex-col gap-2 sm:mt-12 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-3"
              aria-label="Trust highlights"
            >
              {trustChips.map((c) => (
                <li
                  key={c.label}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-center text-xs font-medium text-zinc-300 backdrop-blur-sm sm:py-2 sm:text-left"
                >
                  {c.label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"
        aria-hidden
      />
    </section>
  );
}

export { Hero as HeroSection };
