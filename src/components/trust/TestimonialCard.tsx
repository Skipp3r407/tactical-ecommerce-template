import type { Testimonial } from "@/lib/types/content";
import { cn } from "@/lib/cn";

export function TestimonialCard({ t, className }: { t: Testimonial; className?: string }) {
  return (
    <blockquote
      className={cn(
        "elevate-card h-full rounded-2xl border border-white/10 bg-gradient-to-b from-surface-850/60 to-surface-950/40 p-8",
        className,
      )}
    >
      <div className="flex gap-0.5 text-brand-400" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: t.rating }).map((_, j) => (
          <span key={j} aria-hidden>
            ★
          </span>
        ))}
      </div>
      <p className="mt-5 text-lg leading-relaxed text-zinc-200">&ldquo;{t.quote}&rdquo;</p>
      <footer className="mt-8 border-t border-white/10 pt-6 text-sm">
        <span className="font-semibold text-white">{t.author}</span>
        {t.role ? <span className="text-zinc-500"> · {t.role}</span> : null}
      </footer>
    </blockquote>
  );
}
