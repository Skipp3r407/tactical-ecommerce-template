import Link from "next/link";
import { faqPreview } from "@/content/site";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/motion/Reveal";

export function FaqPreview() {
  return (
    <section className="border-b border-white/10 bg-surface-900/30">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400/90">FAQ</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
              Quick answers
            </h2>
            <p className="mt-3 text-zinc-400">
              Shipping, transfers, and ordering — the questions we hear most. For the full list, visit the FAQ.
            </p>
            <Link
              href="/faq"
              className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand-200 hover:text-brand-100"
            >
              Browse all questions →
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <FaqAccordion items={faqPreview} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
