import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { PageHero } from "@/components/layout/PageHero";
import { LegalProse } from "@/components/legal/LegalProse";

/** Consistent hero + breadcrumbs + article for all policy pages */
export function LegalPageTemplate({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} align="center" />
      <div className="border-b border-white/10 bg-surface-950">
        <div className="mx-auto max-w-3xl px-4 py-8 md:py-10">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
        </div>
        <div className="mx-auto max-w-3xl px-4 pb-16 md:pb-24">
          <LegalProse variant="embedded">{children}</LegalProse>
        </div>
      </div>
    </>
  );
}
