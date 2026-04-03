import { promoBanners } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { PromoBanner } from "@/components/promo/PromoBanner";

export function PromoStrip() {
  return (
    <section className="relative border-b border-white/10 bg-surface-900/40">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(220,38,38,0.06),transparent_30%,transparent_70%,rgba(220,38,38,0.05))]" />
      <div className="relative mx-auto grid max-w-7xl gap-4 px-4 py-10 md:grid-cols-2 md:gap-6 md:py-12">
        {promoBanners.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <PromoBanner banner={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
