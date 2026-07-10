import { CalendarDays, Clock, MapPin, ArrowUpRight } from "lucide-react";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import { event } from "@/data/event";

export const metadata = {
  title: "Overview — The Marketing Pulse Summit",
  description:
    "What drives India's marketing economy. An overview of SAMMIE: The Marketing Pulse Summit, its theme, topics and format.",
};

export default function Page() {
  const [lead, ...rest] = event.overview;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">Overview</span>
      </div>
      <h1 className="display max-w-4xl text-5xl text-text sm:text-7xl">
        What Drives India&rsquo;s Marketing Economy
      </h1>
      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
        {event.keywords.map((k, i) => (
          <span key={k} className="flex items-center gap-5">
            {i > 0 && <span className="h-1 w-1 rounded-full bg-gold/60" />}
            <span className="font-display text-sm uppercase tracking-[0.2em] text-gold">
              {k}
            </span>
          </span>
        ))}
      </div>

      {/* Narrative + details */}
      <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="flex max-w-[68ch] flex-col gap-6">
          <p className="text-xl leading-relaxed text-text sm:text-2xl">{lead}</p>
          {rest.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-text-muted">
              {p}
            </p>
          ))}
        </div>

        <aside className="relative h-fit overflow-hidden rounded-2xl border border-line bg-bg-raised p-8">
          {/* gold glow accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,oklch(0.8_0.12_85/0.22),transparent_70%)] blur-2xl"
          />

          <div className="relative flex items-center justify-between">
            <span className="kicker">Event Details</span>
            <span className="rounded-full border border-gold/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gold">
              {event.edition}
            </span>
          </div>

          <ul className="relative mt-6 flex flex-col divide-y divide-line">
            {[
              { icon: CalendarDays, label: "Date", value: event.date },
              { icon: Clock, label: "Time", value: event.time },
              {
                icon: MapPin,
                label: "Venue",
                value: event.city,
              },
            ].map((row) => (
              <li key={row.label} className="flex items-center gap-4 py-4 first:pt-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                  <row.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="flex flex-col">
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-text-faint">
                    {row.label}
                  </span>
                  <span className="text-sm font-medium text-text">
                    {row.value}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="relative mt-8 border-t border-line pt-6">
            <Button href={event.registerUrl}>Register Now</Button>
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-text-faint">
              Limited seats
            </p>
          </div>
        </aside>
      </div>

      {/* Topics */}
      <div className="mt-24 border-t border-line pt-16">
        <div className="mb-4 flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">On the Agenda</span>
        </div>
        <h2 className="display max-w-2xl text-3xl text-text sm:text-4xl">
          Topics We&rsquo;ll Unpack
        </h2>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {event.topics.map((t, i) => (
            <li
              key={i}
              className={`group flex items-start gap-5 bg-bg p-6 transition-colors duration-300 hover:bg-bg-raised ${
                i === event.topics.length - 1 && event.topics.length % 2 === 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <span className="font-display text-lg font-black text-line transition-colors duration-300 group-hover:text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-base font-medium leading-snug text-text">
                {t}
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-text-faint transition-colors duration-300 group-hover:text-gold" strokeWidth={1.75} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
