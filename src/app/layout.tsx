import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/config/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Firearms & tactical gear`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_TAGLINE}. ${SITE_NAME} — premium demo storefront for firearms & tactical retail: weekly specials, promos, giveaways, and distributor-ready catalog structure.`,
  openGraph: {
    title: SITE_NAME,
    description: `${SITE_TAGLINE}. Presentation-quality ecommerce demo — polished, mobile-first, built to scale.`,
    type: "website",
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen font-sans">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
