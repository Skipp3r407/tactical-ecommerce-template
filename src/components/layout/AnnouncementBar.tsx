import Link from "next/link";
import { announcement } from "@/content/site";

export function AnnouncementBar() {
  return (
    <div className="relative z-[60] border-b border-white/10 bg-surface-900/95 bg-[linear-gradient(90deg,rgba(220,38,38,0.07),transparent_38%,transparent_62%,rgba(234,88,12,0.06))] backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-2.5 text-center text-xs text-zinc-300 sm:text-sm">
        <p className="max-w-3xl">{announcement.message}</p>
        {announcement.href ? (
          <Link
            href={announcement.href}
            className="font-semibold text-brand-400 underline-offset-4 hover:text-brand-200 hover:underline"
          >
            {announcement.ctaLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
