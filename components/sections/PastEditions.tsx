"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { editions } from "@/data/editions";
import { easeOutExpo } from "@/lib/motion";

export default function PastEditions() {
  return (
    <section className="border-t border-line bg-bg-sunken py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          kicker="Past Editions"
          title="Revisit. Relearn. Reimagine."
          action={
            <Button href="/past-editions" variant="ghost">
              Explore All Editions
            </Button>
          }
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {editions.map((e, i) => (
            <motion.a
              key={e.year}
              href={`/past-editions#${e.year}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easeOutExpo }}
              className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl border border-line p-6"
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-105"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.12 0.008 85), oklch(0.22 0.05 70 / 0.6))",
                }}
              />
              <span className="font-display text-5xl font-black text-gold-metallic">
                {e.year}
              </span>
              <span className="mt-1 text-sm uppercase tracking-wider text-text-muted">
                {e.theme}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
