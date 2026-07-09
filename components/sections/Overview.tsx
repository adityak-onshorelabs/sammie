import GoldRule from "@/components/ui/GoldRule";
import Reveal from "@/components/ui/Reveal";
import { event } from "@/data/event";

export default function Overview() {
  const [lead, ...rest] = event.overview;

  return (
    <section
      id="overview"
      className="mx-auto max-w-7xl px-6 py-24 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <GoldRule width="2rem" />
            <span className="kicker">The Big Picture</span>
          </div>
          <Reveal>
            <h2 className="display text-4xl text-text sm:text-5xl">
              What Drives India&rsquo;s Marketing Economy
            </h2>
          </Reveal>
        </div>

        <div className="flex max-w-[68ch] flex-col gap-6">
          <Reveal>
            <p className="text-xl leading-relaxed text-text sm:text-2xl">
              {lead}
            </p>
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={i} delay={0.06 * (i + 1)}>
              <p className="text-base leading-relaxed text-text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
