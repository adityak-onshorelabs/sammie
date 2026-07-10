"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { event } from "@/data/event";
import { easeOutExpo } from "@/lib/motion";

// Cinematic line-mask reveal: each line rises out of an overflow-hidden clip.
const lineWrap = "block overflow-hidden";
const line = {
  hidden: { y: "115%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.15 + i * 0.12, ease: easeOutExpo },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.7 + i * 0.1, ease: easeOutExpo },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-bg">
      <AuroraBackground
        variant="gold"
        speed={0.7}
        blobCount={6}
        className="absolute inset-0 z-0"
      />
      {/* contrast overlays over the canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,var(--color-bg),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/3 bg-[linear-gradient(to_top,var(--color-bg),transparent)]"
      />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-6 pb-24 pt-32">
        <h1
          className="display relative max-w-5xl text-text"
          style={{ fontSize: "var(--text-hero)" }}
        >
          <span className={lineWrap}>
            <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
              The Marketing
            </motion.span>
          </span>
          <span className={lineWrap}>
            <motion.span
              custom={1}
              variants={line}
              initial="hidden"
              animate="show"
              className="block text-gold-metallic gold-shine"
            >
              Pulse
            </motion.span>
          </span>
          <span className={lineWrap}>
            <motion.span custom={2} variants={line} initial="hidden" animate="show" className="block">
              Summit
            </motion.span>
          </span>
        </h1>

        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          {event.keywords.map((k, i) => (
            <span key={k} className="flex items-center gap-5">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-gold/60" />}
              <span className="font-display text-sm uppercase tracking-[0.2em] text-gold">
                {k}
              </span>
            </span>
          ))}
        </motion.div>

        <motion.p
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-md text-base leading-relaxed text-text-muted"
        >
          {event.intro}
        </motion.p>

        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <Button href={event.registerUrl}>Register Now</Button>
          <div className="flex items-center gap-5 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold" strokeWidth={1.75} />
              <span className="font-display uppercase tracking-wider text-text">
                {event.date}
              </span>
            </span>
            <span className="h-4 w-px bg-line" />
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {event.time}
            </span>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted lg:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold"
        >
          &darr;
        </motion.span>
      </motion.div>
    </section>
  );
}
