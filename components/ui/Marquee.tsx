"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Marquee({
  items,
  speed = 28,
}: {
  items: React.ReactNode[];
  speed?: number;
}) {
  const reduced = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max items-center gap-16 py-2"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {row.map((node, i) => (
          <div key={i} className="shrink-0">
            {node}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
