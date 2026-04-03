import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Returns & refunds",
  description: "Return windows, restocking, and exceptions for regulated goods.",
};

export default function ReturnsPage() {
  return (
    <LegalPageTemplate
      title="Returns & refunds"
      description="How returns work for accessories vs. regulated goods — draft for legal review."
    >
      <p>
        Regulated categories often have limited return rights. This section must reflect your actual policy and legal
        obligations.
      </p>
      <h2>General policy</h2>
      <p>Describe eligible items, time windows, condition requirements, and restocking fees if any.</p>
      <h2>Non-returnable items</h2>
      <p>List categories that cannot be returned once transferred or for compliance reasons.</p>
    </LegalPageTemplate>
  );
}
