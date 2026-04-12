import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";
import { gunPhotoSrc } from "@/config/gunPhotos";
import { SITE_NAME } from "@/config/brand";

export const metadata: Metadata = {
  title: "About us",
  description: `${SITE_NAME} — our mission, how we serve customers, and why we lead with clarity in firearms and ammunition retail.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        imageOnly
        title="About us"
        imageUrl={images.aboutBanner}
        imageAlt={`${SITE_NAME} — About banner`}
      />
      <InnerPageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white md:text-3xl">
                Mission
              </h2>
              <p className="mt-4 text-lg text-zinc-300">
                We believe confidence comes from clarity — the right specs on the page, restrictions stated up front,
                and staff who can explain transfer steps without making you feel rushed.
              </p>
              <p className="mt-4 text-zinc-400">
                Our catalog is curated, not chaotic: we’d rather stock and recommend gear we understand than list every
                SKU on the planet. When something isn’t on the shelf, we’ll tell you honestly and help you source it
                through proper channels.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/shop">Shop the catalog</Button>
                <Button variant="secondary" href="/contact">
                  Contact
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-70px_rgba(220,38,38,0.35)]">
                <Image
                  src={gunPhotoSrc("SEMI-AUTO RIFLE.jpg")}
                  alt={`${SITE_NAME} — in-store firearms display`}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/85 to-transparent" />
                <p className="absolute bottom-6 left-6 max-w-xs text-sm text-zinc-300">
                  From our shop floor — real inventory photography.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Service philosophy",
                b: "We’d rather sell the right optic once than the wrong one twice. Questions are part of the job — not an interruption.",
              },
              {
                t: "Trust",
                b: "If we can’t ship it, transfer it, or stand behind it, we say so before you pay. No fine-print games.",
              },
              {
                t: "Expertise",
                b: "Our people shoot, train, and carry. Recommendations come from experience and manufacturer guidance — not a script.",
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={0.05 * i}>
                <div className="elevate-card h-full rounded-2xl border border-white/10 bg-surface-850/40 p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{x.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{x.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-surface-900/80 to-surface-950 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200/90">Authorized supply</p>
            <p className="mt-3 max-w-3xl text-zinc-400">
              We source through manufacturers and distributors you recognize. No gray-market shortcuts — just vetted
              product, documented transfers, and a team you can reach when something needs a human.{" "}
              <Link href="/contact" className="font-semibold text-brand-200 hover:text-brand-100">
                Contact us
              </Link>{" "}
              for dealer inquiries or bulk law-enforcement quotes.
            </p>
          </div>
      </InnerPageLayout>
    </>
  );
}
