import { Images, PlaySquare, Sparkles } from "lucide-react";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import { editions } from "@/data/editions";
import { event } from "@/data/event";

export const metadata = {
  title: "Past Editions — The Marketing Pulse Summit",
  description:
    "Revisit previous editions of SAMMIE: themes, speakers, galleries and highlights.",
};

const archives = [
  { icon: Images, title: "Photo Gallery", body: "Moments from the stage, the floor and the after-hours." },
  { icon: PlaySquare, title: "Session Videos", body: "Full talks and panels from previous editions." },
  { icon: Sparkles, title: "Highlights", body: "The ideas and moments that defined each year." },
];

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

      {/* Archive */}
      <div className="mt-24">
        <div className="mb-4 flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">The Archive</span>
        </div>
        <h2 className="display max-w-2xl text-3xl text-text sm:text-4xl">
          Galleries, Videos &amp; Highlights
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {archives.map((a) => (
            <div
              key={a.title}
              className="group flex h-full flex-col gap-4 bg-bg p-8 transition-colors duration-300 hover:bg-bg-raised"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-gold transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_26px_-8px_var(--color-gold)]">
                <a.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-text">
                {a.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-text-muted">
                {a.body}
              </p>
              <span className="mt-2 text-xs uppercase tracking-[0.2em] text-text-faint">
                Coming Soon
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 rounded-2xl border border-line bg-bg-raised p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text">
              Be Part of the Next Edition
            </h3>
            <p className="mt-2 text-sm text-text-muted">
              {event.name}, {event.edition}. {event.date}.
            </p>
          </div>
          <Button href={event.registerUrl}>Register Now</Button>
        </div>
      </div>
    </section>
  );
}
