"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

/** Email capture block — wire POST to ESP (Klaviyo, Mailchimp, etc.) in Phase 2 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section className="border-t border-white/10 bg-surface-950">
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface-850/80 to-surface-950/60 p-6 shadow-[0_30px_90px_-55px_rgba(220,38,38,0.2)] md:flex md:items-center md:justify-between md:gap-10 md:p-10">
            <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-brand-600/12 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200/90">Stay informed</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-white md:text-2xl">
                Restocks, new arrivals, and real promotions
              </h2>
              <p className="mt-2 max-w-md text-sm text-zinc-400">
                Occasional email when something worth your attention lands — restocks, class announcements, and sales
                with actual end dates. Unsubscribe anytime.
              </p>
            </div>
            {done ? (
              <p className="relative mt-6 text-sm font-semibold text-emerald-300 md:mt-0 md:shrink-0">
                You&apos;re in — watch your inbox.
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="relative mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row md:mt-0 md:max-w-lg"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="min-h-[48px] flex-1 rounded-xl border border-white/15 bg-surface-950 px-4 text-sm text-white placeholder:text-zinc-600 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
                />
                <button
                  type="submit"
                  className="min-h-[48px] rounded-xl bg-brand-600 px-6 text-sm font-semibold text-white transition hover:bg-brand-500 active:scale-[0.99]"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { Newsletter as NewsletterSignup };
