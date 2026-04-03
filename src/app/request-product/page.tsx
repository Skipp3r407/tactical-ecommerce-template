import { PageHero } from "@/components/layout/PageHero";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { RequestProductForm } from "@/components/forms/RequestProductForm";

export default function RequestProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Sourcing"
        title="Request a product"
        description="Tell us what you’re trying to accomplish — we’ll check distributor availability and reply with honest timing and next steps."
        align="center"
      />
      <InnerPageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Request a product" }]} maxWidthClass="max-w-3xl">
        <RequestProductForm />
      </InnerPageLayout>
    </>
  );
}
