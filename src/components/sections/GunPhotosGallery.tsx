import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { gunPhotoFilenames, gunPhotoSrc } from "@/config/gunPhotos";
import { SITE_NAME } from "@/config/brand";

export function GunPhotosGallery() {
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
        <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
          {gunPhotoFilenames.map((filename, i) => {
            const src = gunPhotoSrc(filename);
            return (
              <Reveal key={filename} delay={0.015 * (i % 12)}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-surface-900 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)]">
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
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
