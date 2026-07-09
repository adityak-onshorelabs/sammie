import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { event } from "@/data/event";

export default function RegisterCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-[linear-gradient(115deg,var(--color-gold-light),var(--color-gold)_38%,var(--color-gold-deep)_72%,var(--color-gold-bronze))]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(80% 120% at 20% 0%, oklch(0.2 0.02 85 / 0.6), transparent 60%)",
        }}
      />
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <h2 className="display max-w-2xl text-4xl text-bg sm:text-5xl">
            Be Part of the Conversation Shaping the Future of Marketing.
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-bg/70">
            Limited Seats. Register Now.
          </p>
        </Reveal>
        <Button
          href={event.registerUrl}
          variant="ghost"
          className="shrink-0 !border-bg !text-bg hover:!bg-bg hover:!text-gold"
        >
          Register Now
        </Button>
      </div>
    </section>
  );
}
