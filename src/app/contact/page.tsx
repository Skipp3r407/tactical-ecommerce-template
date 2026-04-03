import { contactBlock } from "@/content/site";
import { PageHero } from "@/components/layout/PageHero";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a real team"
        description="Call during business hours, email us anytime, or send a message — we’ll route it to the right person."
        align="center"
      />
      <InnerPageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="elevate-card rounded-2xl border border-white/10 bg-surface-850/40 p-6 md:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">Visit & call</h2>
              <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">Phone</span>
                  <a
                    className="mt-1 inline-block min-h-[44px] text-lg font-semibold text-white"
                    href={`tel:${contactBlock.phone.replace(/\D/g, "")}`}
                  >
                    {contactBlock.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">Email</span>
                  <a className="mt-1 inline-block text-white hover:text-brand-100" href={`mailto:${contactBlock.email}`}>
                    {contactBlock.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">Hours</span>
                  <span className="mt-1 block">{contactBlock.hours}</span>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-zinc-500">Address</span>
                  <span className="mt-1 block">
                    {contactBlock.addressLine}
                    <br />
                    {contactBlock.cityStateZip}
                  </span>
                </li>
              </ul>
              <div className="mt-8 aspect-video w-full min-h-[200px] overflow-hidden rounded-xl border border-white/10 bg-surface-900">
                <iframe
                  title="Map"
                  className="h-full w-full min-h-[200px]"
                  loading="lazy"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.5%2C37.7%2C-122.3%2C37.9&layer=mapnik"
                />
              </div>
              <p className="mt-2 text-xs text-zinc-600">Replace embed with Google Maps or your preferred map provider.</p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <ContactForm />
          </Reveal>
        </div>
      </InnerPageLayout>
    </>
  );
}
