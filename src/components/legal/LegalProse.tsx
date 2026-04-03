const articleClass =
  "mt-10 space-y-6 text-sm leading-relaxed text-zinc-400 [&_h2]:scroll-mt-28 [&_h2]:pt-2 [&_h2]:font-[family-name:var(--font-display)] [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:marker:text-brand-500/70";

const disclaimer = (
  <p className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-500">
    Placeholder content for layout review. Have counsel replace with jurisdiction-specific language before launch.
  </p>
);

/** Full-width legal article (legacy) or embedded body under PageHero */
export function LegalProse({
  title,
  children,
  variant = "page",
}: {
  title?: string;
  children: React.ReactNode;
  variant?: "page" | "embedded";
}) {
  if (variant === "embedded") {
    return (
      <>
        {disclaimer}
        <div className={articleClass}>{children}</div>
      </>
    );
  }

  return (
    <div className="border-b border-white/10 bg-surface-950">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200/80">Legal</p>
        {title ? (
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
        ) : null}
        {disclaimer}
        <div className={articleClass}>{children}</div>
      </div>
    </div>
  );
}
