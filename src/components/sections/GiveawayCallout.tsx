import Link from "next/link";
import { giveawayCampaign } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Countdown } from "@/components/ui/Countdown";

export function GiveawayCallout() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-surface-950 to-surface-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(220,38,38,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_80%,rgba(234,88,12,0.1),transparent_45%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-500/25 bg-surface-900/50 p-6 shadow-[0_40px_120px_-60px_rgba(220,38,38,0.45)] backdrop-blur-md sm:p-10 md:p-12 lg:p-14">
            <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-600/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div className="text-center lg:text-left">
                <p className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-gradient-to-r from-brand-600/20 to-accent-600/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-100">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
                  </span>
                  Giveaway live
                </p>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
                  {giveawayCampaign.title}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0 lg:max-w-2xl">
                  {giveawayCampaign.description}
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-zinc-600 lg:mx-0">
                  {giveawayCampaign.rulesSummary}
                </p>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <Countdown targetIso={giveawayCampaign.endsAt} />
                </div>
              </div>

              <div className="flex flex-col items-center gap-5 lg:items-stretch">
                <div
                  className="flex h-36 w-full max-w-[280px] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-surface-850/80 to-surface-950/60 shadow-inner shadow-black/40 lg:h-44 lg:max-w-none"
                  aria-hidden
                >
                  <svg className="h-20 w-20 text-brand-500/40" fill="none" viewBox="0 0 64 64" stroke="currentColor">
                    <path
                      strokeWidth={1.2}
                      d="M32 8L12 18v20c0 14 8.5 22 20 24 11.5-2 20-10 20-24V18L32 8z"
                      className="text-brand-400/50"
                    />
                    <path strokeWidth={1.2} d="M32 24v16M24 32h16" className="text-accent-400/60" />
                  </svg>
                </div>
                <Link
                  href={giveawayCampaign.ctaHref}
                  className="inline-flex min-h-[56px] w-full max-w-md items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-8 py-3.5 text-center text-base font-semibold text-white shadow-[0_20px_50px_-20px_rgba(220,38,38,0.65)] ring-1 ring-white/10 transition hover:from-brand-500 hover:to-brand-600 active:scale-[0.99] lg:max-w-none"
                >
                  {giveawayCampaign.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { GiveawayCallout as GiveawaySection };
