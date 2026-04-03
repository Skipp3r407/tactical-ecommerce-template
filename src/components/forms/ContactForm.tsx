"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-surface-850/60 to-surface-950/40 p-6 md:p-8">
      {sent ? (
        <p className="text-lg font-semibold text-emerald-300">Thanks — we&apos;ll be in touch shortly.</p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              required
              className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="phone">
              Phone (optional)
            </label>
            <input
              id="phone"
              className="mt-2 w-full min-h-[48px] rounded-xl border border-white/15 bg-surface-950 px-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500" htmlFor="msg">
              Message
            </label>
            <textarea
              id="msg"
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-white/15 bg-surface-950 px-3 py-3 text-sm text-white focus:border-brand-500/50 focus:outline-none focus:ring-1 focus:ring-brand-500/25"
            />
          </div>
          <button
            type="submit"
            className="w-full min-h-[48px] rounded-xl bg-brand-600 text-sm font-semibold text-white transition hover:bg-brand-500 active:scale-[0.99]"
          >
            Send message
          </button>
        </form>
      )}
    </div>
  );
}
