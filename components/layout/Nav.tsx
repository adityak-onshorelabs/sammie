"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import { navLinks } from "@/data/partners";
import { event } from "@/data/event";
import { easeOutExpo } from "@/lib/motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
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
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                isActive("/contact")
                  ? "border-gold bg-gold text-bg"
                  : "border-gold/50 text-gold hover:bg-gold hover:text-bg"
              }`}
            >
              Contact
            </Link>
            <Button href={event.registerUrl} className="!px-6 !py-3">
              Register Now
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
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
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="border-b border-line bg-bg px-6 py-8 lg:hidden"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`font-display text-2xl uppercase tracking-tight ${
                      isActive(l.href) ? "text-gold" : "text-text"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-fit rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold"
              >
                Contact
              </Link>
              <Button href={event.registerUrl}>Register Now</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
