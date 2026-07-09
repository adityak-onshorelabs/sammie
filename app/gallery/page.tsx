import GoldRule from "@/components/ui/GoldRule";
import { PhotoTile, VideoCard } from "@/components/ui/GalleryMedia";
import { photos, videos } from "@/data/gallery";

export const metadata = {
  title: "Gallery — The Marketing Pulse Summit",
  description:
    "Photos and videos from SAMMIE: The Marketing Pulse Summit.",
};

const sizeClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">Gallery</span>
      </div>
      <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
        Moments From the Floor
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
        The stage, the conversations and the people, from every edition of the
        summit.
      </p>

      {/* Photo gallery */}
      <div className="mt-16">
        <div className="mb-8 flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">Photo Gallery</span>
        </div>
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((p) => (
            <PhotoTile
              key={p.id}
              photo={p}
              className={p.size ? sizeClass[p.size] : ""}
            />
          ))}
        </div>
      </div>

      {/* Video gallery */}
      <div className="mt-24">
        <div className="mb-8 flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">Video Gallery</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
