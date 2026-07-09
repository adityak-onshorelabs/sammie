import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/ui/CTABanner";
import { PhotoTile, VideoCard } from "@/components/ui/GalleryMedia";
import { editions } from "@/data/editions";
import { photos, videos, highlights } from "@/data/gallery";
import { event } from "@/data/event";

export const metadata = {
  title: "Past Editions — The Marketing Pulse Summit",
  description:
    "Revisit previous editions of SAMMIE: themes, highlights, galleries and videos.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">Past Editions</span>
      </div>
      <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
        Revisit. Relearn. Reimagine.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
        Years of decoding what drives marketing in India. Here is where the
        conversation has been.
      </p>

      {/* Edition cards */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {editions.map((e) => (
          <div
            key={e.year}
            className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl border border-line p-6"
          >
            <div
              aria-hidden
              className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.12 0.008 85), oklch(0.22 0.05 70 / 0.6))",
              }}
            />
            <span className="font-display text-5xl font-black text-gold-metallic">
              {e.year}
            </span>
            <span className="mt-1 text-sm uppercase tracking-wider text-text-muted">
              {e.theme}
            </span>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="mt-24">
        <div className="mb-4 flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">Highlights</span>
        </div>
        <h2 className="display max-w-2xl text-3xl text-text sm:text-4xl">
          Moments That Defined Each Year
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.year}
              className="group flex h-full flex-col gap-3 bg-bg p-8 transition-colors duration-300 hover:bg-bg-raised"
            >
              <span className="font-display text-4xl font-black text-gold-metallic">
                {h.year}
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-text">
                {h.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">{h.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery preview */}
      <div className="mt-24">
        <div className="mb-4 flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">Gallery</span>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display max-w-2xl text-3xl text-text sm:text-4xl">
            Photos &amp; Videos
          </h2>
          <Button href="/gallery" variant="ghost">
            View Full Gallery
          </Button>
        </div>

        {/* Photo preview */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.slice(0, 4).map((p) => (
            <PhotoTile key={p.id} photo={{ ...p, size: undefined }} className="aspect-[4/3]" />
          ))}
        </div>

        {/* Video preview */}
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24">
        <CTABanner
          title="Be Part of the Next Edition"
          body={`${event.name}, ${event.edition}. ${event.date}.`}
          href={event.registerUrl}
          note="Limited seats"
        />
      </div>
    </section>
  );
}
