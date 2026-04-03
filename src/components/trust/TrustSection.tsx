import { Reveal } from "@/components/motion/Reveal";
import { trustStats } from "@/content/site";

export function TrustSection() {
  return (
    <section className="relative border-b border-white/10 bg-surface-900/35">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(220,38,38,0.04),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200/90">Why customers stay</p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white md:text-4xl">
            We earn trust before the transfer
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Straight policies, realistic availability, and people who pick up the line — the baseline you should expect
            when you’re buying gear that has to work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i}>
              <div className="elevate-card rounded-2xl border border-white/10 bg-surface-850/50 p-6 text-center lg:text-left">
                <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium text-brand-200/90">{s.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{s.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
