import { cn } from "@/lib/cn";
import type { ProductBadge } from "@/lib/types/product";

const map: Record<ProductBadge, string> = {
  featured: "bg-brand-600/20 text-brand-200 ring-1 ring-brand-500/35",
  sale: "bg-red-950/50 text-red-300 ring-1 ring-red-500/40",
  special: "bg-zinc-800 text-zinc-200 ring-1 ring-zinc-600/50",
  new: "bg-emerald-950/40 text-emerald-300 ring-1 ring-emerald-500/30",
  clearance: "bg-amber-950/40 text-amber-200 ring-1 ring-amber-600/35",
  hot: "bg-orange-950/50 text-orange-200 ring-1 ring-orange-500/45",
};

const labels: Record<ProductBadge, string> = {
  featured: "Featured",
  sale: "Sale",
  special: "Special",
  new: "New",
  clearance: "Clearance",
  hot: "Hot deal",
};

export function ProductBadges({ badges }: { badges: ProductBadge[] }) {
  if (!badges.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map((b) => (
        <span
          key={b}
          className={cn(
            "rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
            map[b],
          )}
        >
          {labels[b]}
        </span>
      ))}
    </div>
  );
}
