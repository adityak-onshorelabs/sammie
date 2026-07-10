"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/partners";
import { event } from "@/data/event";
import { easeOutExpo, staggerParent, fadeRiseChild } from "@/lib/motion";
import { useIntro, chromeIn } from "./Intro";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { intro, reveal } = useIntro();

  // Entrance props for nav chrome. When this load isn't an intro load, elements
  // render statically (initial=false) with no animation.
  const enter = (i: number) => ({
    variants: chromeIn,
    custom: i,
    initial: intro ? ("hidden" as const) : false,
    animate: reveal ? ("show" as const) : ("hidden" as const),
  });

  const isActive = (href: string) => {
    // In-page anchors (e.g. "/#conversations") never take the active page state.
    if (href.includes("#")) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          className={`flex w-full items-center justify-between gap-8 px-6 transition-all duration-500 sm:px-10 xl:px-16 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <motion.div {...enter(0)}>
            <Logo />
          </motion.div>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l, i) => {
              const active = isActive(l.href);
              return (
                <motion.li key={l.href} {...enter(1 + i)}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative text-sm font-medium transition-colors ${
                      active ? "text-gold" : "text-text-muted hover:text-text"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <motion.div className="hidden items-center gap-4 lg:flex" {...enter(1 + navLinks.length)}>
            <Button href={event.registerUrl} className="!px-6 !py-3">
              Register Now
            </Button>
          </motion.div>

          <motion.button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            {...enter(1)}
          >
            <span
              className={`h-px w-6 bg-text transition-all duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-text transition-all duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </motion.button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg lg:hidden"
          >
            {/* overlay top bar: logo + close */}
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-gold hover:text-gold"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            {/* links */}
            <motion.nav
              variants={staggerParent}
              initial="hidden"
              animate="show"
              className="flex-1 overflow-y-auto px-6 py-4"
            >
              <ul className="flex flex-col">
                {navLinks.map((l, i) => {
                  const active = isActive(l.href);
                  return (
                    <motion.li key={l.href} variants={fadeRiseChild}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className="group flex items-center gap-4 border-b border-line/60 py-4"
                      >
                        <span
                          className={`w-7 font-display text-xs tabular-nums ${
                            active ? "text-gold" : "text-text-faint"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`display flex-1 text-3xl transition-colors ${
                            active ? "text-gold" : "text-text group-hover:text-gold"
                          }`}
                        >
                          {l.label}
                        </span>
                        <ArrowUpRight
                          className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                            active
                              ? "text-gold"
                              : "-translate-x-1 text-text-faint opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                          strokeWidth={1.75}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>

            {/* footer */}
            <div className="border-t border-line px-6 py-6">
              <div className="grid [&>div]:w-full">
                <Button href={event.registerUrl} className="w-full justify-center">
                  Register Now
                </Button>
              </div>
              <div className="mt-5 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-text-faint">
                <span>{event.edition}</span>
                <span>{event.date}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
