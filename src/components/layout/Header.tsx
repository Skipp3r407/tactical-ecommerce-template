"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { SITE_NAME } from "@/config/brand";
import { images } from "@/config/images";

const nav = [
  { href: "/shop", label: "Shop" },
  { href: "/specials", label: "Specials" },
  { href: "/giveaways", label: "Giveaways" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background,border-color,box-shadow] duration-300",
        scrolled
          ? "border-white/10 bg-surface-950/92 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl"
          : "border-transparent bg-surface-950/65 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex min-w-0 max-w-7xl flex-nowrap items-center justify-between gap-2 px-4 py-3 md:gap-4 md:py-4">
        <Link href="/" className="group flex shrink-0 items-center">
          <Image
            src={images.logo}
            alt=""
            width={413}
            height={413}
            priority
            className="h-[413px] w-[413px] object-contain"
          />
          <span className="sr-only">{SITE_NAME}</span>
        </Link>

        <nav className="hidden shrink-0 flex-nowrap items-center gap-0.5 lg:flex xl:gap-1">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-lg px-2 py-2 text-sm font-medium transition xl:px-3",
                  active ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 flex-nowrap items-center gap-2 lg:flex">
          <Button variant="secondary" href="/request-product" className="whitespace-nowrap">
            Request a product
          </Button>
          <Button href="/shop" className="whitespace-nowrap">
            Shop now
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-surface-950 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-product"
              className="mt-2 rounded-lg border border-white/15 px-3 py-3 text-center text-base font-semibold"
            >
              Request a product
            </Link>
            <Link
              href="/shop"
              className="rounded-lg bg-brand-600 px-3 py-3 text-center text-base font-semibold text-white shadow-md shadow-brand-900/30"
            >
              Shop now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
