"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { platforms } from "@/data/ecosystem";
import { easeOutExpo } from "@/lib/motion";

export default function Ecosystem() {
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
          {platforms.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: easeOutExpo }}
                className="group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bg-raised p-6 transition-colors duration-500 hover:border-gold/50"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 100% 0%, oklch(0.3 0.08 70 / 0.5), transparent 60%)",
                  }}
                />
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg/60 text-gold transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_0_26px_-8px_var(--color-gold)]">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div className="mt-6 flex flex-col gap-3">
                  <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-text">
                    {p.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {p.blurb}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
