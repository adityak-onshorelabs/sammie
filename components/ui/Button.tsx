"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useSiteLink } from "@/components/layout/MicrositeProvider";

type Variant = "gold" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  gold: "bg-gold-metallic gold-shine text-bg hover:brightness-110",
  ghost:
    "border border-line text-text hover:border-gold hover:text-gold bg-transparent",
};

const Arrow = () => (
  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
    &rarr;
  </span>
);

export default function Button({
  href,
  children,
  variant = "gold",
  arrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  // Callers write microsite-relative hrefs ("/agenda"); the active microsite
  // prefixes its slug here so no component has to know which event it is on.
  const to = useSiteLink()(href);
  const external = /^https?:/.test(href);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Link
        ref={ref}
        href={to}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
        {arrow ? <Arrow /> : null}
      </Link>
    </motion.div>
  );
}
