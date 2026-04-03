import { categories } from "@/content/categories";
import { CategoryCard } from "@/components/product/CategoryCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function FeaturedCategories() {
  return (
    <section className="border-b border-white/10 bg-surface-950">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Categories"
            title="Shop by category"
            description="Firearms, optics, ammunition, and loadout accessories — structured for distributor category mapping and clean filter URLs on the shop."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={0.04 * i}>
              <CategoryCard category={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
