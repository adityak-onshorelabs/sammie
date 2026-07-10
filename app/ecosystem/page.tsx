import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import { PhotoTile, VideoCard } from "@/components/ui/GalleryMedia";
import { platforms } from "@/data/ecosystem";
import { photos, videos } from "@/data/gallery";

export const metadata = {
  title: "The Ecosystem — The Marketing Pulse Summit",
  description:
    "Social Samosa's ecosystem of industry platforms — The Marketing Pulse Summit, Festive Marketing Camp and AgencyCon — built around the conversations moving the industry forward.",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">Our Ecosystem</span>
      </div>
      <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
        Built Around the Conversations Moving the Industry Forward
      </h1>

      {/* Platform blocks */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.name}
              className="group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bg-raised p-6 transition-colors duration-500 hover:border-gold/50"
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                style={{
                  background:
                    "radial-gradient(120% 120% at 100% 0%, oklch(0.3 0.08 70 / 0.5), transparent 60%)",
                }}
              />
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg/60 text-gold transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_26px_-8px_var(--color-gold)]">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div className="mt-6 flex flex-col gap-3">
                <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-text">
                  {p.name}
                </h2>
                <p className="text-sm leading-relaxed text-text-muted">
                  {p.blurb}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inside the Ecosystem — moments */}
      <div className="mt-24">
        <div className="mb-4 flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">Inside the Ecosystem</span>
        </div>
        <h2 className="display max-w-2xl text-3xl text-text sm:text-4xl">
          Moments from Social Samosa&rsquo;s Platforms
        </h2>

        {/* Photos */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {photos.slice(0, 8).map((p) => (
            <PhotoTile
              key={p.id}
              photo={{ ...p, size: undefined }}
              className="aspect-[4/3]"
            />
          ))}
        </div>

        {/* Videos */}
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </div>

      {/* Get in touch */}
      <div className="mt-24">
        <div className="mb-4 flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">Shape the Conversation. Support the Platform.</span>
        </div>
        <h2 className="display max-w-2xl text-3xl text-text sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted">
          Explore speaking and partnership opportunities across Social Samosa&rsquo;s
          industry platforms.
        </p>

        <div className="mt-10 max-w-2xl">
          <ContactForm />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-text-muted">
            Ready to attend The Marketing Pulse Summit?
          </p>
          <Button href="/register">Register Now</Button>
        </div>
      </div>
    </section>
  );
}
