"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { placeholderBg } from "@/components/ui/GalleryMedia";
import type { GalleryVideo } from "@/data/gallery";

// A lightweight YouTube facade: shows a branded poster + gold play button and
// only mounts the (autoplaying) iframe once the viewer clicks. Falls back to the
// video's own YouTube thumbnail, then a placeholder, when no poster is given.
export default function VideoCard({ video }: { video: GalleryVideo }) {
  const [playing, setPlaying] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  const canPlay = Boolean(video.youtubeId || video.src);
  const poster =
    video.poster ??
    (video.youtubeId
      ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
      : video.src
        ? `${video.src}/ik-thumbnail.jpg`
        : undefined);
  const showPoster = poster && !posterFailed;

  return (
    <div className="group overflow-hidden rounded-2xl border border-line">
      <div
        className={`relative ${video.vertical ? "aspect-[9/16]" : "aspect-video"}`}
      >
        {playing && video.youtubeId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : playing && video.src ? (
          <video
            className="absolute inset-0 h-full w-full bg-black object-contain"
            src={video.src}
            autoPlay
            controls
            playsInline
          />
        ) : (
          <button
            type="button"
            onClick={() => canPlay && setPlaying(true)}
            aria-label={canPlay ? `Play ${video.title}` : video.title}
            disabled={!canPlay}
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            {showPoster ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={poster}
                alt={video.title}
                onError={() => setPosterFailed(true)}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <span
                aria-hidden
                className="absolute inset-0 block"
                style={{ background: placeholderBg }}
              />
            )}
            {/* darkening + centered gold play button */}
            <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-black/10 transition-colors duration-300 group-hover:from-black/60">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-bg/40 text-gold backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:text-bg">
                <Play className="ml-0.5 h-5 w-5 fill-current" strokeWidth={0} />
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="border-t border-line p-4 text-sm font-medium text-text">
        {video.title}
      </p>
    </div>
  );
}
