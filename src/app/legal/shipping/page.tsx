import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping methods, timelines, restrictions, and FFL transfer expectations.",
};

export default function ShippingPolicyPage() {
  return (
    <LegalPageTemplate
      title="Shipping Policy"
      description="Carriers, handling windows, and restricted categories — align this copy with your live operations."
    >
      <p>
        Replace with operational truth: carriers, handling time, signature requirements, hazmat/ammo restrictions, and
        distributor drop-ship behavior.
      </p>
      <h2>FFL transfers</h2>
      <p>Firearms ship to licensed dealers. Buyers must pass required checks per local law.</p>
      <h2>Restricted items</h2>
      <p>Some SKUs may be unavailable in certain locations. Orders may be canceled if non-compliant.</p>
    </LegalPageTemplate>
  );
}
