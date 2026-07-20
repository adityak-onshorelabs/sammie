"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import type { SectionProps } from "./registry";
import { easeOutExpo } from "@/lib/motion";

export default function Ecosystem({ site }: SectionProps) {
  const platforms = site.content.platforms ?? [];

  return (
    <section className="border-t border-line bg-bg-sunken py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="Our Ecosystem"
          title="Built Around the Conversations Moving the Industry Forward"
          action={
            <Button href="/ecosystem" variant="ghost">
              Explore the Ecosystem
            </Button>
          }
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOutExpo }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
