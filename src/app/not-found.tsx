import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400/90">404</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-zinc-400">
        The page may have moved or the link could be outdated. Try the shop or contact us for help.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Home</Button>
        <Button variant="secondary" href="/shop">
          Shop
        </Button>
      </div>
    </div>
  );
}
