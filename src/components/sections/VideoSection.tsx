import { featuredVideos } from "@/content/site";
import { VideoPlayerWithPoster } from "@/components/media/VideoPlayerWithPoster";
import { Reveal } from "@/components/motion/Reveal";

/** Homepage featured embed — cinematic frame for screenshots */
export function VideoSection() {
  const v = featuredVideos[0];
  if (!v) return null;

  return (
    <section className="relative border-b border-white/10">
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(220,38,38,0.09),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(234,88,12,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400/90">Media</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Behind the counter
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Short, purposeful video builds trust — receiving checks, mount tips, and new-arrival walkthroughs.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-12 max-w-5xl">
            <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-600/20 via-transparent to-accent-600/15 opacity-80 blur-2xl sm:-inset-4" />
            <div className="relative rounded-2xl border border-white/10 bg-surface-900/80 p-1 shadow-[0_40px_100px_-55px_rgba(0,0,0,0.95)] sm:rounded-3xl sm:p-1.5">
              <div className="overflow-hidden rounded-[0.65rem] border border-white/5 bg-black sm:rounded-[1.1rem]">
                <div className="relative aspect-video w-full">
                  <VideoPlayerWithPoster title={v.title} embedUrl={v.embedUrl} thumbnailUrl={v.thumbnail} />
                </div>
              </div>
              <div className="border-t border-white/10 bg-gradient-to-r from-surface-950/90 to-surface-900/90 px-5 py-5 backdrop-blur sm:px-8 sm:py-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white sm:text-xl">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">{v.description}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
