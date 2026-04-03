import { Breadcrumbs, type Crumb } from "@/components/navigation/Breadcrumbs";

/**
 * Shared inner page chrome: breadcrumbs + padded content region.
 * Use after PageHero for consistent vertical rhythm.
 */
export function InnerPageLayout({
  children,
  breadcrumbs,
  maxWidthClass = "max-w-7xl",
  className = "",
}: {
  children: React.ReactNode;
  breadcrumbs: Crumb[];
  maxWidthClass?: string;
  className?: string;
}) {
  return (
    <div className={`border-b border-white/10 bg-surface-950 ${className}`}>
      <div className={`mx-auto ${maxWidthClass} px-4 py-8 md:py-10`}>
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <div className={`mx-auto ${maxWidthClass} px-4 pb-16 md:pb-24`}>{children}</div>
    </div>
  );
}
