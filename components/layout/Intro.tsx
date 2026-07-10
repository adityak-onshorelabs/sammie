"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { event } from "@/data/event";
import { easeOutExpo } from "@/lib/motion";

type IntroState = {
  /** True when this document load shows the intro sequence (first visit this
   *  session, or a hard reload). Drives whether chrome animates in at all. */
  intro: boolean;
  /** True once the loader has finished — the cue for content to animate in. */
  reveal: boolean;
};

const IntroCtx = createContext<IntroState>({ intro: false, reveal: true });
export const useIntro = () => useContext(IntroCtx);

/** Shared entrance variant for nav chrome (logo, each link, CTA). The base delay
 *  is tuned so the stagger begins as the loader finishes sliding away (~0.9s
 *  exit) rather than playing hidden underneath it; `custom` (i) is the position
 *  in the cascade. */
export const chromeIn: Variants = {
  hidden: { opacity: 0, y: -14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo, delay: 0.85 + i * 0.14 },
  }),
};

export default function Intro({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const [intro, setIntro] = useState(false);
  const [reveal, setReveal] = useState(true);
  const [pct, setPct] = useState(0);

  // Decide on mount from the pre-paint <head> script (data-intro), and arm the
  // hard-reload (Ctrl/Cmd+Shift+R) detector for subsequent loads.
  useEffect(() => {
    if (document.documentElement.dataset.intro === "1") {
      setIntro(true);
      setReveal(false);
    } else {
      // Safety: if the pre-paint script decided "skip" (or failed to run and
      // left the attribute unset), make sure the default-covering shield is
      // dismissed so content is never stuck behind it.
      document.documentElement.dataset.intro = "0";
    }
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "R" || e.key === "r")) {
        try {
          sessionStorage.setItem("introForce", "1");
        } catch {}
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Progress counter while the loader is up.
  useEffect(() => {
    if (!intro || reveal) return;

    const finish = () => {
      // Drop the pre-paint shield and cue content entrance.
      document.documentElement.dataset.intro = "0";
      setReveal(true);
    };

    if (reduced) {
      setPct(100);
      const t = setTimeout(finish, 350);
      return () => clearTimeout(t);
    }

    let raf = 0;
    const DUR = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DUR);
      const eased = 1 - Math.pow(2, -10 * t);
      setPct(Math.round((t >= 1 ? 1 : eased) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(finish, 400);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [intro, reduced, reveal]);

  // Lock scroll while the loader covers the screen.
  useEffect(() => {
    const locked = intro && !reveal;
    document.documentElement.style.overflow = locked ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [intro, reveal]);

  const showLoader = intro && !reveal;

  return (
    <IntroCtx.Provider value={{ intro, reveal }}>
      {children}

      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-bg"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: easeOutExpo }}
          >
            {/* soft gold glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 42%, oklch(0.8 0.115 85 / 0.14), transparent 70%)",
              }}
            />
            {/* corner frame ticks */}
            <span aria-hidden className="pointer-events-none absolute left-6 top-6 h-6 w-6 border-l border-t border-line sm:left-10 sm:top-10" />
            <span aria-hidden className="pointer-events-none absolute right-6 top-6 h-6 w-6 border-r border-t border-line sm:right-10 sm:top-10" />
            <span aria-hidden className="pointer-events-none absolute bottom-6 left-6 h-6 w-6 border-b border-l border-line sm:bottom-10 sm:left-10" />
            <span aria-hidden className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 border-b border-r border-line sm:bottom-10 sm:right-10" />

            {/* top row: name + edition */}
            <div className="relative flex items-center justify-between px-8 pt-10 sm:px-16">
              <span className="kicker">{event.name}</span>
              <span className="kicker hidden sm:block">{event.edition}</span>
            </div>

            {/* center wordmark */}
            <div className="relative flex flex-1 flex-col items-center justify-center gap-6 px-6">
              <div className="flex items-center gap-4 sm:gap-5">
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.1 }}
                  className="inline-block h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-gold sm:border-y-[18px] sm:border-l-[28px]"
                />
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: easeOutExpo }}
                    className="text-gold-metallic gold-shine font-display text-6xl font-black uppercase leading-none tracking-tight sm:text-8xl"
                  >
                    SAMMIE
                  </motion.h1>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-[0.6rem] font-medium uppercase tracking-[0.4em] text-text-faint sm:text-xs"
              >
                {event.tagline}
              </motion.p>

              {/* progress line */}
              <div className="mt-4 h-px w-56 max-w-[70vw] overflow-hidden bg-line sm:w-72">
                <div
                  className="h-full bg-gold-metallic transition-[width] duration-100 ease-linear"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            {/* bottom row: date + counter */}
            <div className="relative flex items-end justify-between px-8 pb-10 sm:px-16">
              <span className="kicker">{event.date}</span>
              <span className="font-display text-4xl font-black tabular-nums text-text sm:text-6xl">
                {pct}
                <span className="align-top text-base text-gold sm:text-xl">%</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </IntroCtx.Provider>
  );
}
