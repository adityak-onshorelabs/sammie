import {
  Mic,
  MessagesSquare,
  Flame,
  Coffee,
  Users,
  CalendarDays,
  Clock,
  type LucideIcon,
} from "lucide-react";
import GoldRule from "@/components/ui/GoldRule";
import CTABanner from "@/components/ui/CTABanner";
import { agenda } from "@/data/agenda";
import { event } from "@/data/event";

export const metadata = {
  title: "Agenda — The Marketing Pulse Summit",
  description:
    "The full agenda for SAMMIE: The Marketing Pulse Summit, a day of ideas that move markets.",
};

const kindIcon: Record<string, LucideIcon> = {
  keynote: Mic,
  panel: MessagesSquare,
  fireside: Flame,
  break: Coffee,
  networking: Users,
};

const kindLabel: Record<string, string> = {
  keynote: "Keynote",
  panel: "Panel",
  fireside: "Fireside",
  break: "Break",
  networking: "Networking",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">The Agenda</span>
      </div>
      <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
        A Day of Ideas That Move Markets
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
        One stage, a full day of the conversations shaping India&rsquo;s
        marketing economy. Session speakers and stage details are announced
        closer to the event.
      </p>

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-text-muted">
        <span className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-gold" strokeWidth={1.75} />
          {event.date}
        </span>
        <span className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gold" strokeWidth={1.75} />
          {event.time}
        </span>
      </div>

      {/* Timeline */}
      <ol className="mt-16 ml-5 border-l border-line">
        {agenda.map((item, i) => {
          const Icon = kindIcon[item.kind] ?? Users;
          const accent = ["keynote", "fireside"].includes(item.kind);
          return (
            <li key={i} className="group relative flex items-start gap-6 py-5 pl-10">
              <span className="absolute -left-[19px] top-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg text-text-faint transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:shadow-[0_0_24px_-8px_var(--color-gold)]">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="w-24 shrink-0 pt-0.5 font-display text-sm tabular-nums text-text-faint">
                {item.time}
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <span className="kicker">{kindLabel[item.kind]}</span>
                <span
                  className={`text-lg font-medium leading-snug ${
                    accent ? "text-gold" : "text-text"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-16">
        <CTABanner
          title="Secure Your Seat"
          body="Register to be in the room where the conversations happen."
          href={event.registerUrl}
          note="Limited seats"
        />
      </div>
    </section>
  );
}
