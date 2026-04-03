import Link from "next/link";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-zinc-500">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 ? (
                <span className="text-zinc-600" aria-hidden>
                  /
                </span>
              ) : null}
              {last || !item.href ? (
                <span className={cn(last ? "font-medium text-zinc-300" : "")}>{item.label}</span>
              ) : (
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
