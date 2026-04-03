import Link from "next/link";
import { Countdown } from "@/components/ui/Countdown";
import { cn } from "@/lib/cn";

export function DealCard({
  title,
  description,
  badge,
  endsAt,
  href,
  className,
}: {
  title: string;
  description: string;
  badge?: string;
  endsAt?: string;
  href?: string;
  className?: string;
}) {
  const inner = (
    <>
      <div className="flex flex-wrap items-center gap-2">
        {badge ? (
          <span className="rounded-full bg-brand-600/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-200 ring-1 ring-brand-600/30">
            {badge}
          </span>
        ) : null}
        {endsAt ? <Countdown targetIso={endsAt} /> : null}
      </div>
      <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-200 hover:text-brand-100">
          View details →
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "group block rounded-2xl border border-white/10 bg-gradient-to-br from-surface-850/80 to-surface-900/40 p-6 shadow-[0_20px_60px_-50px_rgba(0,0,0,0.9)] transition hover:border-brand-600/30 hover:shadow-[0_28px_90px_-55px_rgba(220,38,38,0.22)]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}
