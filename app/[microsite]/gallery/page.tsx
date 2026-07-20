import GoldRule from "@/components/ui/GoldRule";
import VideoCard from "@/components/ui/VideoCard";
import PhotoGallery from "@/components/ui/PhotoGallery";
import { getMicrositePage } from "@/lib/microsite";

type Props = { params: Promise<{ microsite: string }> };

export async function generateMetadata({ params }: Props) {
  const { microsite } = await params;
  const { site, copy } = getMicrositePage(microsite, "gallery");
  return {
    title: `${copy.title} — ${site.event.name}`,
    description: copy.description,
  };
}

export default async function Page({ params }: Props) {
  const { microsite } = await params;
  const { site, copy } = getMicrositePage(microsite, "gallery");
  const photos = site.content.photos ?? [];
  const videos = site.content.videos ?? [];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">{copy.kicker}</span>
      </div>
      <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
        {copy.heading}
      </h1>
      {copy.blurb && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
          {copy.blurb}
        </p>
      )}

      {/* Photo gallery */}
      {photos.length > 0 && (
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <GoldRule width="2rem" />
            <span className="kicker">Photo Gallery</span>
          </div>
          <PhotoGallery photos={photos} />
        </div>
      )}

      {/* Video gallery */}
      {videos.length > 0 && (
        <div className="mt-24">
          <div className="mb-8 flex items-center gap-3">
            <GoldRule width="2rem" />
            <span className="kicker">Video Gallery</span>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {videos.map((v) => (
              <div key={v.id} className={v.vertical ? "sm:w-72 sm:shrink-0" : "sm:flex-1"}>
                <VideoCard video={v} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
