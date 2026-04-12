import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/types/product";
import { cn } from "@/lib/cn";

export function CategoryCard({ category, className }: { category: Category; className?: string }) {
  return (
    <Link
      href={`/shop/category/${category.slug}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-850/60 transition hover:border-brand-600/35",
        className,
      )}
    >
      <div className="relative aspect-[16/10]">
        {category.image ? (
          <Image
            src={category.image}
            alt={`${category.name} — shop category`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 25vw, 320px"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/20 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white group-hover:text-brand-100">
          {category.name}
        </h3>
        {category.description ? (
          <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{category.description}</p>
        ) : null}
        <span className="mt-3 inline-flex items-center text-sm font-semibold text-brand-200">
          Browse category
          <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
