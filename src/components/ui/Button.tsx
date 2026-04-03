import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-gradient-to-b from-brand-600 to-brand-700 text-white shadow-lg shadow-brand-900/30 ring-1 ring-white/10 transition-[transform,box-shadow,background-color] duration-200 hover:from-brand-500 hover:to-brand-600 hover:shadow-[0_14px_44px_-14px_rgba(220,38,38,0.5),0_10px_36px_-18px_rgba(234,88,12,0.22)] active:scale-[0.98]",
  secondary:
    "border border-white/12 bg-white/[0.04] text-white transition-[transform,background-color,border-color] duration-200 hover:border-brand-600/35 hover:bg-white/[0.07] active:scale-[0.99]",
  ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
  danger: "bg-red-700 text-white hover:bg-red-600",
} as const;

export function Button({
  className,
  variant = "primary",
  href,
  children,
  ...rest
}: React.ComponentProps<"button"> & {
  variant?: keyof typeof variants;
  href?: string;
  children: React.ReactNode;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-wide transition focus-visible:outline-none disabled:opacity-50",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
