import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Phone, email, hours, map, and inquiry form — mobile-friendly layout.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
