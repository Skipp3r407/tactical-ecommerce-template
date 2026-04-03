import { contactBlock } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function CtaBand() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-r from-surface-900 via-surface-850 to-surface-900">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Reveal>
          <div className="rounded-3xl border border-brand-600/25 bg-surface-950/60 p-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white md:text-3xl">
                Questions before you check out?
              </h2>
              <p className="mt-3 max-w-xl text-zinc-400">
                Call <span className="text-white">{contactBlock.phone}</span> or send a message — we answer{" "}
                {contactBlock.hours} for compatibility, transfer timing, and anything holding up your order.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
              <Button href="/contact">Contact us</Button>
              <Button variant="secondary" href={`tel:${contactBlock.phone.replace(/\D/g, "")}`}>
                Call now
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
