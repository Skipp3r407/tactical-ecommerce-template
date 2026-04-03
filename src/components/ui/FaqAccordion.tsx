"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types/content";
import { cn } from "@/lib/cn";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface-850/30">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              className="flex w-full min-h-[52px] items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white hover:bg-white/5"
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              {item.question}
              <span className={cn("text-brand-400 transition", isOpen && "rotate-45")}>＋</span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
