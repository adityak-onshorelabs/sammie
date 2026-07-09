import { BookOpen, Users, ArrowUpRight, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { whyAttend } from "@/data/partners";

const icons: Record<string, LucideIcon> = {
  Learn: BookOpen,
  Connect: Users,
  Lead: ArrowUpRight,
};

export default function WhyAttend() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading kicker="Why Attend" title="Three Reasons to Be in the Room" />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {whyAttend.map((w, i) => {
          const Icon = icons[w.title] ?? ArrowUpRight;
          return (
            <Reveal key={w.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col gap-5 overflow-hidden bg-bg p-8 transition-colors duration-500 hover:bg-bg-raised sm:p-10">
                {/* faint index watermark for depth */}
                <span className="pointer-events-none absolute -right-2 -top-4 font-display text-8xl font-black text-line/40 transition-colors duration-500 group-hover:text-gold/10">
                  0{i + 1}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-line bg-bg-raised text-gold transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_30px_-8px_var(--color-gold)]">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="relative font-display text-2xl font-bold uppercase tracking-tight text-text">
                  {w.title}
                </h3>
                <p className="relative max-w-xs text-sm leading-relaxed text-text-muted">
                  {w.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
