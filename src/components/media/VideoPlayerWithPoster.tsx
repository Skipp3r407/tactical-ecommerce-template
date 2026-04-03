"use client";

import Image from "next/image";
import { useState } from "react";

/** YouTube/Vimeo iframe with optional local poster from /public/images/media */
export function VideoPlayerWithPoster({
  title,
  embedUrl,
  thumbnailUrl,
}: {
  title: string;
  embedUrl: string;
  thumbnailUrl?: string;
}) {
  const [playing, setPlaying] = useState(!thumbnailUrl);

  if (playing || !thumbnailUrl) {
    return (
      <iframe
        title={title}
        src={embedUrl}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="absolute inset-0 flex items-center justify-center bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      aria-label={`Play video: ${title}`}
    >
      <Image src={thumbnailUrl} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" aria-hidden />
      <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-black/40 ring-2 ring-white/20 transition hover:scale-105 hover:bg-brand-500">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="ml-1">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
