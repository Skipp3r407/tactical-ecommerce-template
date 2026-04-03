import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { requestProductTeaser } from "@/content/site";

export function RequestProductTeaser() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-br from-surface-900 via-surface-950 to-surface-950">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200/90">{requestProductTeaser.eyebrow}</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
              {requestProductTeaser.title}
            </h2>
            <p className="mt-4 text-lg text-zinc-400">{requestProductTeaser.body}</p>
            <ul className="mt-8 space-y-3 text-sm text-zinc-300">
              {requestProductTeaser.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/90" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/request-product">{requestProductTeaser.cta}</Button>
              <Button variant="secondary" href="/contact">
                Talk to the team
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-850/40 p-8 shadow-[0_40px_120px_-60px_rgba(220,38,38,0.35)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-600/12 blur-3xl" />
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">How it works</p>
              <ol className="mt-6 space-y-6 text-sm text-zinc-300">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                    1
                  </span>
                  <span>Tell us what you&apos;re looking for — manufacturer, model, or use case.</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                    2
                  </span>
                  <span>We check distributor availability and transfer requirements.</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                    3
                  </span>
                  <span>You get a straight answer — timeline, pricing context, and next steps.</span>
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
