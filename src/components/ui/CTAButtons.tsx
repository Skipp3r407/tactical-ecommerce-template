import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/** Hero / section primary + secondary actions — keeps CTA pairs consistent */
export function CTAButtons({
  primary,
  secondary,
  className,
}: {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4", className)}>
      <Button href={primary.href} className="min-h-[52px] w-full justify-center px-8 sm:w-auto sm:min-h-0 sm:px-5">
        {primary.label}
      </Button>
      {secondary ? (
        <Button
          variant="secondary"
          href={secondary.href}
          className="min-h-[52px] w-full justify-center sm:w-auto sm:min-h-0"
        >
          {secondary.label}
        </Button>
      ) : null}
    </div>
  );
}
