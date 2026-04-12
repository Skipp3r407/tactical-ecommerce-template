import type { Metadata } from "next";
import { giveawayCampaign } from "@/content/site";
import { PageHero } from "@/components/layout/PageHero";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { Reveal } from "@/components/motion/Reveal";
import { Countdown } from "@/components/ui/Countdown";
import { Newsletter } from "@/components/sections/Newsletter";
import { SITE_NAME } from "@/config/brand";

export const metadata: Metadata = {
  title: "Giveaways & promotions",
  description: `${SITE_NAME} giveaways — official rules, how to enter, and seasonal prize announcements.`,
};

export default function GiveawaysPage() {
  return (
    <>
      <PageHero
        eyebrow="Promotions"
        title="Giveaways done the right way"
        description="Clear rules, simple entry, and prizes worth showing up for. Read eligibility and deadlines before you submit — we take compliance as seriously as the rest of the shop."
        align="center"
      />
      <InnerPageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Giveaways" }]}>
        <Reveal delay={0.06}>
          <div className="rounded-3xl border border-brand-600/25 bg-gradient-to-br from-red-950/35 to-surface-900/60 p-6 shadow-[0_40px_120px_-70px_rgba(220,38,38,0.28)] sm:p-10 md:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <Countdown targetIso={giveawayCampaign.endsAt} />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {giveawayCampaign.title}
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-300">{giveawayCampaign.description}</p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="rounded-2xl border border-white/10 bg-surface-950/50 p-5 sm:p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">How to enter</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  <li>Submit the form with accurate contact details.</li>
                  <li>One entry per household unless otherwise stated.</li>
                  <li>Follow all federal/state rules where promotions apply.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-950/50 p-5 sm:p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Rules & disclaimer</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{giveawayCampaign.rulesSummary}</p>
                <p className="mt-4 text-xs text-zinc-600">
                  Replace with your official rules, eligibility, and sponsor details before going live.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-dashed border-white/15 bg-surface-950/30 p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-white">Entry form (placeholder)</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Wire this to your form backend, CRM, or email tool. Add consent language your counsel approves.
              </p>
              <form className="mt-6 grid gap-3 sm:grid-cols-2">
                <input
                  className="min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none"
                  placeholder="Full name"
                  aria-label="Full name"
                />
                <input
                  className="min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none"
                  placeholder="Email"
                  type="email"
                  aria-label="Email"
                />
                <button
                  type="button"
                  className="min-h-[48px] rounded-xl bg-brand-600 px-4 text-sm font-semibold text-white transition hover:bg-brand-500 sm:col-span-2"
                >
                  Submit entry
                </button>
              </form>
            </div>
          </div>
        </Reveal>

        <div className="mt-12">
          <Newsletter />
        </div>
      </InnerPageLayout>
    </>
  );
}
