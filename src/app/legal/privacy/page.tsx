import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      description="Placeholder policy copy for layout and client review — replace with counsel-approved language before launch."
    >
      <p>
        This is placeholder legal copy. Replace with counsel-reviewed language describing data collection, cookies,
        analytics, marketing email consent, and retention — especially if you run eCommerce and forms.
      </p>
      <h2>Information we collect</h2>
      <p>Contact details, order information, device data, and communications you send us.</p>
      <h2>How we use information</h2>
      <p>Fulfillment, customer support, fraud prevention, and (with consent) marketing.</p>
      <h2>Your choices</h2>
      <ul>
        <li>Marketing opt-out mechanisms</li>
        <li>Access/update requests where applicable</li>
      </ul>
    </LegalPageTemplate>
  );
}
