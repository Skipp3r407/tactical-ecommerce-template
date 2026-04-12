"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { SITE_NAME_SHORT } from "@/config/brand";

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 15l7-7 7 7"
      />
    </svg>
  );
}

/** Side-view handgun outline — matches stroke icons, reads at FAB size */
function PistolIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        stroke="currentColor"
        strokeWidth={1.85}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 17.5V13l2.4-4h6.3l1-1.7h4.3l3.8 1.1v3H16l-2.1 5.1H9.8L8.4 17.5H4z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.85}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.8 9.8h2.4v2.6"
      />
    </svg>
  );
}

type Msg = { id: string; role: "user" | "assistant"; text: string };

function botReply(userText: string): string {
  const t = userText.toLowerCase();
  if (t.includes("hour") || t.includes("open"))
    return "Hours vary by location — use Contact for the latest. We're happy to confirm before you make the trip.";
  if (t.includes("ffl") || t.includes("transfer"))
    return "FFL transfers: bring a valid ID and coordinate with your receiving dealer. We can walk you through the checklist on Contact.";
  if (t.includes("ship") || t.includes("deliver"))
    return "Shipping rules depend on product type and your state. Ask on Contact with your ZIP and SKU for the straight answer.";
  if (t.includes("price") || t.includes("stock") || t.includes("special"))
    return "Browse Shop and Specials for current listings. For something you don't see, use Request a product.";
  return `Thanks for reaching out. A teammate can give a detailed answer — use Contact or call the store. (${SITE_NAME_SHORT} assistant)`;
}

const starterMessages: Msg[] = [
  {
    id: "welcome",
    role: "assistant",
    text: `Hi — I'm the ${SITE_NAME_SHORT} site assistant. Ask about hours, FFL transfers, or where to find something in the shop.`,
  },
];

export function FloatingChatAndScroll() {
  const panelId = useId();
  const [scrollVisible, setScrollVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(starterMessages);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrollVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!chatOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setChatOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [chatOpen]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, chatOpen]);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const send = () => {
    const text = draft.trim();
    if (!text || busy) return;
    const userMsg: Msg = { id: `u-${Date.now()}`, role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setDraft("");
    setBusy(true);
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: `a-${Date.now()}`, role: "assistant", text: botReply(text) },
      ]);
      setBusy(false);
    }, 450);
  };

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-4 right-4 z-[90] flex max-w-[100vw] flex-col-reverse gap-3 pb-[max(0.25rem,env(safe-area-inset-bottom))] pr-[max(0.25rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6",
      )}
    >
      {chatOpen && (
        <div
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-label="Chat assistant"
          className="pointer-events-auto w-[min(100vw-2rem,22rem)] overflow-hidden rounded-2xl border border-white/12 bg-surface-900/95 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.85)] backdrop-blur-md"
        >
          <div className="border-b border-white/10 px-4 py-3">
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">
              {SITE_NAME_SHORT} assistant
            </p>
            <p className="text-xs text-zinc-500">Demo replies — contact the store for official answers.</p>
          </div>
          <div
            ref={listRef}
            className="max-h-[min(52vh,20rem)] space-y-3 overflow-y-auto px-4 py-3"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "max-w-[92%] rounded-xl px-3 py-2 text-sm leading-relaxed",
                  msg.role === "user"
                    ? "ml-auto bg-brand-600/25 text-zinc-100 ring-1 ring-brand-600/30"
                    : "mr-auto bg-white/[0.06] text-zinc-300 ring-1 ring-white/10",
                )}
              >
                {msg.text}
              </div>
            ))}
            {busy && (
              <p className="text-xs text-zinc-500" aria-live="polite">
                …
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-white/10 px-3 py-2">
            <Link
              href="/shop"
              className="rounded-lg border border-white/12 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-300 hover:border-brand-600/35 hover:text-white"
            >
              Shop
            </Link>
            <Link
              href="/faq"
              className="rounded-lg border border-white/12 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-300 hover:border-brand-600/35 hover:text-white"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/12 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-zinc-300 hover:border-brand-600/35 hover:text-white"
            >
              Contact
            </Link>
          </div>
          <form
            className="flex gap-2 border-t border-white/10 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <label htmlFor="floating-chat-input" className="sr-only">
              Message
            </label>
            <input
              id="floating-chat-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask a quick question…"
              className="min-h-[44px] flex-1 rounded-xl border border-white/12 bg-surface-950/80 px-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-600/45 focus:outline-none"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={busy || !draft.trim()}
              className="shrink-0 rounded-xl bg-gradient-to-b from-brand-600 to-brand-700 px-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/25 ring-1 ring-white/10 transition hover:from-brand-500 hover:to-brand-600 disabled:opacity-40"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <div className="pointer-events-auto flex flex-col-reverse gap-3">
        <button
          type="button"
          onClick={() => setChatOpen((o) => !o)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-surface-900/95 text-white shadow-[0_18px_50px_-22px_rgba(0,0,0,0.9)] backdrop-blur-md transition hover:border-brand-600/40 hover:bg-surface-850 focus-visible:outline-none",
            chatOpen && "border-brand-600/45 ring-2 ring-brand-600/25",
          )}
          aria-expanded={chatOpen}
          aria-controls={chatOpen ? panelId : undefined}
          aria-label={chatOpen ? "Close chat assistant" : "Open chat assistant"}
        >
          <PistolIcon className="h-6 w-6" />
        </button>

        {scrollVisible && (
          <button
            type="button"
            onClick={scrollTop}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-surface-900/95 text-zinc-200 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.85)] backdrop-blur-md transition hover:border-brand-600/35 hover:text-white focus-visible:outline-none"
            aria-label="Back to top"
          >
            <ChevronUpIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
