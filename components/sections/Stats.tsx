import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import type { SectionProps } from "./registry";

export default function Stats({ site }: SectionProps) {
  const stats = site.content.stats ?? [];

  return (
    <section className="border-y border-line bg-bg-raised">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-x divide-y divide-line sm:grid-cols-3 sm:divide-y-0">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="flex flex-col items-center gap-2 px-6 py-10 text-center">
              <span className="font-display text-4xl font-black text-gold-metallic sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} ordinal={s.ordinal} />
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-text-faint">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
