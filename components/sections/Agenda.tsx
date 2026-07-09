import {
  Mic,
  MessagesSquare,
  Flame,
  Coffee,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { agenda } from "@/data/agenda";

const kindIcon: Record<string, LucideIcon> = {
  keynote: Mic,
  panel: MessagesSquare,
  fireside: Flame,
  break: Coffee,
  networking: Users,
};

const kindColor: Record<string, string> = {
  keynote: "text-gold",
  panel: "text-text",
  fireside: "text-gold",
  break: "text-text-faint",
  networking: "text-text-faint",
};

export default function Agenda() {
  return (
    <section className="border-t border-line bg-bg-raised py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between gap-10">
          <SectionHeading
            kicker="Programme at a Glance"
            title={
              <>
                A Day of Ideas
                <br />
                That Move Markets
              </>
            }
          />
          <div>
            <Button href="/programme" variant="ghost">
              View Detailed Agenda
            </Button>
          </div>
        </div>

        <ol className="relative ml-5 border-l border-line">
          {agenda.map((item, i) => {
            const Icon = kindIcon[item.kind] ?? Users;
            return (
              <Reveal key={i} delay={Math.min(i, 6) * 0.05}>
                <li className="group relative flex items-start gap-5 py-4 pl-8">
                  <span className="absolute -left-[18px] top-3.5 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-bg-raised text-text-faint transition-all duration-300 group-hover:border-gold group-hover:text-gold group-hover:shadow-[0_0_24px_-8px_var(--color-gold)]">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="w-20 shrink-0 pt-1.5 font-display text-sm tabular-nums text-text-faint">
                    {item.time}
                  </span>
                  <span
                    className={`pt-1 text-base font-medium leading-snug ${kindColor[item.kind]}`}
                  >
                    {item.title}
                  </span>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
