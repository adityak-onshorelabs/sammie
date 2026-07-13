import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import { PhotoTile } from "@/components/ui/GalleryMedia";
import { platforms } from "@/data/ecosystem";
import { photos } from "@/data/gallery";

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
        {platforms.map((p) => (
          <div
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-bg-raised transition-colors duration-500 hover:border-gold/50"
          >
            {p.logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.logo}
                alt={p.name}
                className="h-44 w-full bg-[#0c0c0d] object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            )}
            <div className="flex flex-col gap-3 p-6">
              <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-text">
                {p.name}
              </h2>
              <p className="text-sm leading-relaxed text-text-muted">
                {p.blurb}
              </p>
            </div>
          </div>
        ))}
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
