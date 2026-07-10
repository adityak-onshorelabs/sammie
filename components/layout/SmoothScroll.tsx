"use client";

import { useLayoutEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  // On route change, hard-reset Lenis to the top. A navigation triggered
  // mid-scroll otherwise leaves in-flight momentum + target intact, so the new
  // page either renders at the old scroll position or visibly keeps scrolling.
  // stop() halts the momentum, immediate+force jumps to 0, velocity is zeroed
  // so no residual inertia carries over, then start() resumes.
  useLayoutEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;
    lenis.stop();
    lenis.scrollTo(0, { immediate: true, force: true });
    lenis.velocity = 0;
    lenis.start();
  }, [pathname]);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
