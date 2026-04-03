import { testimonials } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { TestimonialCard } from "@/components/trust/TestimonialCard";

export function Testimonials() {
  return (
    <section className="border-b border-white/10 bg-surface-950">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400/90">Reviews</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
            What customers notice first
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            In this industry, reputation is everything. Here’s what people say when we get it right.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={0.06 * i}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
