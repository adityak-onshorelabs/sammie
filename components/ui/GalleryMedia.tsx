import { ImageIcon } from "lucide-react";
import type { GalleryPhoto } from "@/data/gallery";

const placeholderBg =
  "radial-gradient(110% 100% at 100% 0%, oklch(0.3 0.08 70 / 0.55), oklch(0.14 0.008 85))";

export function PhotoTile({
  photo,
  className = "",
}: {
  photo: GalleryPhoto;
  className?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-line ${className}`}
    >
      {photo.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.caption ?? "Gallery image"}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-full w-full items-center justify-center"
          style={{ background: placeholderBg }}
        >
          <ImageIcon
            className="h-8 w-8 text-line transition-colors duration-500 group-hover:text-gold/40"
            strokeWidth={1.5}
          />
        </div>
      )}
      {photo.caption && (
        <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-[linear-gradient(to_top,var(--color-bg),transparent)] p-4 text-xs uppercase tracking-[0.15em] text-text-muted opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}

export { placeholderBg };
