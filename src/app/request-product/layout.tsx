import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a product",
  description: "Ask us to source an item through distributors — capture missed opportunities.",
};

export default function RequestProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}
