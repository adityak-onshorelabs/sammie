"use client";

import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import JuryCard from "@/components/ui/JuryCard";
import type { SectionProps } from "./registry";

export default function Jury({ site }: SectionProps) {
  const track = useRef<HTMLDivElement>(null);
  const jury = site.content.jury ?? [];

  const scrollBy = (dir: 1 | -1) => {
    track.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="The Voices"
          title="Behind India's Leading Brands"
          action={
            <div className="flex items-center gap-3">
              <div className="hidden gap-2 sm:flex">
                {([-1, 1] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => scrollBy(d)}
                    aria-label={d === -1 ? "Previous jury members" : "Next jury members"}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-text-muted transition-colors hover:border-gold hover:text-gold"
                  >
                    {d === -1 ? "←" : "→"}
                  </button>
                ))}
              </div>
              <Button href="/voices" variant="ghost">
                View All
              </Button>
            </div>
          }
        />
      </div>

      <div
        ref={track}
        style={{
          paddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))",
          paddingRight: "1.5rem",
          scrollPaddingLeft: "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))",
        }}
        className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {jury.map((m, i) => (
          <div key={m.id} className="w-64 shrink-0 snap-start">
            <JuryCard member={m} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
