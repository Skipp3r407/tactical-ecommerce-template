import { VideoPlayerWithPoster } from "@/components/media/VideoPlayerWithPoster";
import { Reveal } from "@/components/motion/Reveal";

export function VideoEmbedCard({
  title,
  description,
  embedUrl,
  thumbnailUrl,
  delay = 0,
}: {
  title: string;
  description: string;
  embedUrl: string;
  /** Local poster from /public/images/media */
  thumbnailUrl?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="elevate-card overflow-hidden rounded-2xl border border-white/10 bg-surface-850/40">
        <div className="relative aspect-video w-full bg-black">
          <VideoPlayerWithPoster title={title} embedUrl={embedUrl} thumbnailUrl={thumbnailUrl} />
        </div>
        <div className="p-6">
          <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
        </div>
      </article>
    </Reveal>
  );
}
