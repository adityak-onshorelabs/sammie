"use client";

import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  suffix = "",
  ordinal = "",
}: {
  value: number;
  suffix?: string;
  ordinal?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring, reduced, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {reduced ? value : display}
      {ordinal ? <sup className="text-[0.5em]">{ordinal}</sup> : null}
      {suffix}
    </span>
  );
}
