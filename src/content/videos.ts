import type { VideoItem } from "@/lib/types/content";
import { mediaThumbnail } from "@/config/images";

export const mediaVideos: VideoItem[] = [
  {
    id: "mv1",
    title: "Zeroing basics: LPVO vs red dot",
    description: "Educational content builds trust and keeps visitors on-site longer.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: mediaThumbnail("mv1"),
  },
  {
    id: "mv2",
    title: "Range safety checklist",
    description: "Short-form explainers pair well with product category pages.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: mediaThumbnail("mv2"),
  },
  {
    id: "mv3",
    title: "New arrivals walkthrough",
    description: "Highlight distributor-fed SKUs with a human narrator.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: mediaThumbnail("mv3"),
  },
];
