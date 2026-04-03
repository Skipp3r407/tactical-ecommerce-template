import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-400">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 max-w-2xl text-base leading-relaxed text-zinc-500", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
