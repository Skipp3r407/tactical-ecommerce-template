import Image from "next/image";
import Link from "next/link";
import { contactBlock } from "@/content/site";
import { categories } from "@/content/categories";
import { ELEVATE_DIGITAL_STUDIOS_URL, SITE_NAME, SITE_NAME_SHORT, SITE_TAGLINE } from "@/config/brand";
import { gunPhotoFilmstripSrcs } from "@/config/gunPhotos";
import { images } from "@/config/images";

const shop = [
  { href: "/shop", label: "All products" },
  { href: "/specials", label: "Specials & deals" },
  { href: "/giveaways", label: "Giveaways" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/videos", label: "Videos & media" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/shipping", label: "Shipping" },
  { href: "/legal/returns", label: "Returns" },
  { href: "/legal/compliance", label: "Compliance & notices" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(220,38,38,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-16 md:py-20">
        <div className="grid gap-12 text-center md:grid-cols-2 md:gap-10 md:text-left lg:grid-cols-4 lg:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <div
              className="mb-4 flex w-full max-w-md flex-wrap justify-center gap-1.5 md:justify-start"
              aria-hidden
            >
              {gunPhotoFilmstripSrcs.map((src) => (
                <div
                  key={src}
                  className="relative h-10 w-14 shrink-0 overflow-hidden rounded-md border border-white/10 sm:h-11 sm:w-[4.5rem]"
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="72px" />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-3">
              <Image
                src={images.logo}
                alt={`${SITE_NAME} logo`}
                width={118}
                height={118}
                sizes="(max-width: 640px) 64px, 94px"
                className="h-16 w-16 shrink-0 object-contain sm:h-[4.8rem] sm:w-[4.8rem] md:h-[94px] md:w-[94px]"
              />
              <div className="text-center sm:text-left">
                <span className="sr-only">{SITE_NAME_SHORT}</span>
                <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-wide text-white">
                  {SITE_NAME}
                </span>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-400/90">
                  {SITE_TAGLINE}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400 md:max-w-none">
              Premium demo storefront for presentations — weekly specials, giveaways, video, and a catalog structure
              ready for distributor feeds.
            </p>
            <p className="mt-5 text-xs text-zinc-600">
              Powered by{" "}
              <a
                href={ELEVATE_DIGITAL_STUDIOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 underline underline-offset-2 transition hover:text-zinc-400"
              >
                Elevate Digital Studios
              </a>
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {["Secure checkout ready", "FFL messaging", "Mobile optimized"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Shop</h3>
            <ul className="mt-5 space-y-2.5">
              {shop.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-zinc-300 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              {categories.map((c) => (
                <li key={c.id}>
                  <Link href={`/shop/category/${c.slug}`} className="text-sm text-zinc-400 transition hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Company</h3>
            <ul className="mt-5 space-y-2.5">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-zinc-300 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/request-product" className="text-sm font-semibold text-brand-200 hover:text-brand-100">
                  Request a product
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-zinc-300">
              <li>
                <a
                  href={`tel:${contactBlock.phone.replace(/\D/g, "")}`}
                  className="inline-block text-lg font-semibold text-white hover:text-brand-100"
                >
                  {contactBlock.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactBlock.email}`} className="hover:text-white">
                  {contactBlock.email}
                </a>
              </li>
              <li className="text-zinc-400">{contactBlock.hours}</li>
              <li className="text-zinc-400">
                {contactBlock.addressLine}
                <br />
                {contactBlock.cityStateZip}
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
              {["Instagram", "YouTube"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-zinc-500 md:justify-start">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-zinc-300">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-center text-xs text-zinc-600 md:text-right">
            © {new Date().getFullYear()} {SITE_NAME}. Demo build — replace with live policies and contact data.
          </p>
        </div>
      </div>
    </footer>
  );
}
