"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { gunPhotoFilenames, gunPhotoSrc } from "@/config/gunPhotos";
import { SITE_NAME } from "@/config/brand";

export function GunPhotosGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxIndex, close]);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-surface-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(220,38,38,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="In the shop"
            title="Photo gallery"
            description="Real inventory and range photos from our floor — same gear we list online."
            align="center"
          />
        </Reveal>
        <p className="sr-only">Select a photo to view it larger.</p>
        <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
          {gunPhotoFilenames.map((filename, i) => {
            const src = gunPhotoSrc(filename);
            return (
              <Reveal key={filename} delay={0.015 * (i % 12)}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-surface-900 text-left shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] transition hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  <Image
                    src={src}
                    alt={`${SITE_NAME} — store photo ${i + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={i < 6 ? "eager" : "lazy"}
                    priority={i < 6}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-950/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {lightboxIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery photo"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-3 backdrop-blur-md sm:p-6"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-3 z-[101] flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/20 bg-surface-950/80 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:right-6 sm:top-6"
            aria-label="Close enlarged photo"
          >
            Close
          </button>
          <div
            className="relative h-[min(88vh,900px)] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gunPhotoSrc(gunPhotoFilenames[lightboxIndex])}
              alt={`${SITE_NAME} — store photo ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
