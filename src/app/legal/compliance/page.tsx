import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Compliance & notices",
  description: "Important legal disclaimers, regulatory notices, and site usage boundaries.",
};

export default function CompliancePage() {
  return (
    <LegalPageTemplate
      title="Compliance & notices"
      description="High-level compliance framing — not a substitute for counsel or official statutes."
    >
      <p>
        This site does not provide legal advice. Buyers are responsible for compliance with federal, state, and local
        laws. Product availability does not guarantee legal possession in your jurisdiction.
      </p>
      <h2>Age & eligibility</h2>
      <p>Describe minimum ages and verification expectations for purchases and pickups.</p>
      <h2>State restrictions</h2>
      <p>Summarize high-level restrictions and link to authoritative resources where appropriate.</p>
    </LegalPageTemplate>
  );
}
