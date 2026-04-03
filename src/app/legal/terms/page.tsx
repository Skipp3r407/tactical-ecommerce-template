import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Site usage terms, limitations of liability, and governing law placeholders.",
};

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title="Terms of Service"
      description="Governing rules for using this site and purchasing — draft for presentation only."
    >
      <p>
        Placeholder terms. Your attorney should tailor these for your jurisdiction, product categories, and sales
        channels.
      </p>
      <h2>Eligibility & acceptable use</h2>
      <p>Users must comply with applicable laws. Prohibited activities should be listed explicitly.</p>
      <h2>Products & representations</h2>
      <p>Inventory and pricing may change. Product imagery may be illustrative where noted.</p>
    </LegalPageTemplate>
  );
}
