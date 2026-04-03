import type { Metadata } from "next";
import { mediaVideos } from "@/content/videos";
import { PageHero } from "@/components/layout/PageHero";
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";
import { VideoEmbedCard } from "@/components/media/VideoEmbedCard";

export const metadata: Metadata = {
  title: "Videos & media",
  description: "Product spotlights, range tips, and brand stories — embed-first, CMS-ready.",
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="See the gear in context"
        description="Short, purposeful videos convert — use this grid for spotlights, how-tos, and new arrival walkthroughs."
        align="center"
      />
      <InnerPageLayout breadcrumbs={[{ label: "Home", href: "/" }, { label: "Videos" }]}>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mediaVideos.map((v, i) => (
            <VideoEmbedCard
              key={v.id}
              title={v.title}
              description={v.description}
              embedUrl={v.embedUrl}
              thumbnailUrl={v.thumbnail}
              delay={0.04 * i}
            />
          ))}
        </div>
      </InnerPageLayout>
    </>
  );
}
