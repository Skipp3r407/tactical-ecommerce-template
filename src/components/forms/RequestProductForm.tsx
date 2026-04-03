"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function RequestProductForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <Reveal>
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-surface-850/60 to-surface-950/40 p-6 shadow-[0_30px_100px_-60px_rgba(0,0,0,0.85)] md:p-8">
        {done ? (
          <div className="text-center">
            <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-emerald-300">
              Request received
            </p>
            <p className="mt-3 text-zinc-400">
              We&apos;ll review distributor availability and follow up using your preferred contact method — usually
              within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="rp-name">
                Full name
              </label>
              <input
                id="rp-name"
                required
                className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="rp-email">
                  Email
                </label>
                <input
                  id="rp-email"
                  type="email"
                  required
                  className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="rp-phone">
                  Phone
                </label>
                <input
                  id="rp-phone"
                  type="tel"
                  className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="rp-brand">
                  Brand
                </label>
                <input
                  id="rp-brand"
                  placeholder="e.g. Trijicon"
                  className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="rp-model">
                  Model
                </label>
                <input
                  id="rp-model"
                  placeholder="e.g. Credo HX 1-8x28"
                  className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="rp-item">
                What are you looking for?
              </label>
              <input
                id="rp-item"
                required
                placeholder="SKU if known, caliber, color, configuration…"
                className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="rp-notes">
                Notes
              </label>
              <textarea
                id="rp-notes"
                rows={4}
                placeholder="Budget, timeline, transfer dealer, questions…"
                className="mt-2 w-full rounded-xl border border-white/15 bg-surface-950 px-3 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
              />
            </div>
            <button
              type="submit"
              className="w-full min-h-[52px] rounded-xl bg-brand-600 text-sm font-semibold text-white transition hover:bg-brand-500 active:scale-[0.99]"
            >
              Submit request
            </button>
            <p className="text-center text-xs text-zinc-600">
              By submitting, you agree we may contact you about this request. This is not an order confirmation.
            </p>
          </form>
        )}
      </div>
    </Reveal>
  );
}
