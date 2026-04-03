import { whyChooseUs, brandHighlights } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function WhyChooseUs() {
  return (
    <section className="border-b border-white/10 bg-surface-950">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400/90">Why buy here</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
            The way a serious shop should feel
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="h-full rounded-2xl border border-white/10 bg-surface-850/50 p-6 transition hover:border-brand-600/30">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {brandHighlights.map((b) => (
            <span
              key={b}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
