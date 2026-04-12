import Image from "next/image";
import Link from "next/link";
import { weeklySpecials } from "@/content/site";
import { productImage } from "@/config/images";
import { Reveal } from "@/components/motion/Reveal";
import { Countdown } from "@/components/ui/Countdown";
import { cn } from "@/lib/cn";

/** Homepage weekly deals — optimized for screenshots + mobile tap targets */
export function WeeklySpecials() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(220,38,38,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_5%,rgba(234,88,12,0.1),transparent_48%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-900/90 via-surface-950 to-surface-950" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/35 bg-gradient-to-r from-brand-600/15 to-accent-600/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-100">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" aria-hidden />
                Weekly specials
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.08]">
                Limited run.{" "}
                <span className="bg-gradient-to-r from-brand-200 via-white to-accent-200 bg-clip-text text-transparent">
                  Real savings.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
                Four headline SKUs with countdowns — built to look sharp in a deck and read clearly on a phone.
              </p>
            </div>
            <Link
              href="/specials"
              className="inline-flex min-h-[52px] w-full shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:border-brand-500/40 hover:bg-white/[0.1] sm:w-auto"
            >
              View all deals
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-4">
          {weeklySpecials.map((s, i) => (
            <Reveal key={s.id} delay={0.06 * i}>
              <div
                className={cn(
                  "elevate-card group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 p-5 sm:min-h-[300px] sm:p-6",
                  "shadow-[0_28px_90px_-55px_rgba(0,0,0,0.9)]",
                  s.productSlug
                    ? "bg-surface-950/40"
                    : "bg-gradient-to-b from-surface-850/95 to-surface-950/80",
                )}
              >
                {s.productSlug ? (
                  <>
                    <div className="pointer-events-none absolute inset-0">
                      <Image
                        src={productImage(s.productSlug)}
                        alt=""
                        fill
                        className="object-cover opacity-[0.55] transition duration-500 group-hover:opacity-[0.68]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface-950/55 via-surface-950/72 to-surface-950/92" />
                  </>
                ) : null}

                <div className="absolute left-0 top-0 z-[1] h-full w-1 rounded-l-2xl bg-gradient-to-b from-brand-500 via-brand-600 to-accent-600 opacity-90" />
                <div className="pointer-events-none absolute -right-8 -top-8 z-[1] h-28 w-28 rounded-full bg-brand-600/20 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-brand-500/15" />

                <div className="relative z-[2] flex flex-wrap items-center gap-2 pl-2">
                  {s.badge ? (
                    <span className="rounded-full bg-gradient-to-r from-red-950/80 to-red-900/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-red-100 ring-1 ring-red-400/30">
                      {s.badge}
                    </span>
                  ) : null}
                  {s.endsAt ? <Countdown targetIso={s.endsAt} /> : null}
                </div>

                {s.priceNow ? (
                  <div className="relative z-[2] mt-5 flex flex-wrap items-end gap-3 border-b border-white/10 pb-4 pl-2">
                    <span className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-white sm:text-[2.75rem]">
                      {s.priceNow}
                    </span>
                    {s.priceWas ? (
                      <span className="mb-1.5 text-lg font-medium text-zinc-500 line-through">{s.priceWas}</span>
                    ) : null}
                  </div>
                ) : null}

                <h3 className="relative z-[2] mt-4 pl-2 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-white sm:text-xl">
                  {s.title}
                </h3>
                <p className="relative z-[2] mt-2 flex-1 pl-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>

                {s.productSlug ? (
                  <Link
                    href={`/shop/${s.productSlug}`}
                    className="relative z-[2] mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 px-4 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/10 transition hover:from-brand-500 hover:to-brand-600 sm:w-auto sm:justify-start sm:px-5"
                  >
                    Shop this deal
                  </Link>
                ) : (
                  <Link
                    href="/specials"
                    className="relative z-[2] mt-5 inline-flex min-h-[48px] items-center text-sm font-semibold text-brand-200"
                  >
                    Details →
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export { WeeklySpecials as SpecialsSection };
