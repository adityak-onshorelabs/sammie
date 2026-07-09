"use client";

import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";

// Animated gold hairline that draws in on view.
export default function GoldRule({
  className = "",
  width = "4rem",
}: {
  className?: string;
  width?: string;
}) {
  return (
    <motion.span
      aria-hidden
      className={`block h-px origin-left bg-gold ${className}`}
      style={{ width }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: easeOutExpo }}
    />
  );
}
