"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  if (!main) return null;

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-surface-800">
        <Image
          src={main}
          alt={`${title} — primary product image`}
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 50vw"
          priority
        />
      </div>
      {images.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border transition",
                active === i ? "border-brand-500 ring-1 ring-brand-600/40" : "border-white/10 hover:border-white/25",
              )}
            >
              <Image
                src={src}
                alt={`${title} — gallery image ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
