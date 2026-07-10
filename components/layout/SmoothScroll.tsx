"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

// Height to leave clear beneath the fixed nav when landing on an anchor.
const ANCHOR_OFFSET = -96;

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  // Lenis hijacks window scroll, so both top-resets and hash anchors must go
  // through it. On route change: if the URL has a hash, scroll to that element
  // (retrying until it mounts); otherwise hard-reset to the top. The reset
  // stop()/immediate+force/velocity=0/start() sequence also kills any in-flight
  // momentum from a navigation triggered mid-scroll.
  useLayoutEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    const hash = window.location.hash;
    if (hash.length > 1) {
      let tries = 0;
      let raf = 0;
      const go = () => {
        const el = document.querySelector(hash);
        if (el) lenis.scrollTo(el as HTMLElement, { offset: ANCHOR_OFFSET });
        else if (tries++ < 30) raf = requestAnimationFrame(go);
      };
      raf = requestAnimationFrame(go);
      return () => cancelAnimationFrame(raf);
    }

    lenis.stop();
    lenis.scrollTo(0, { immediate: true, force: true });
    lenis.velocity = 0;
    lenis.start();
  }, [pathname]);

  // Same-page anchor clicks keep the pathname, and Next's pushState-based hash
  // nav neither fires hashchange nor scrolls through Lenis. Intercept clicks on
  // in-page hash links and drive Lenis directly. Cross-page hash links fall
  // through to the router (handled by the route-change effect above).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement).closest("a");
      const href = anchor?.getAttribute("href");
      if (!href) return;
      const i = href.indexOf("#");
      if (i === -1) return;
      const path = href.slice(0, i) || "/";
      const id = href.slice(i + 1);
      if (!id || path !== window.location.pathname) return; // not same-page
      const el = document.getElementById(id);
      const lenis = lenisRef.current?.lenis;
      if (!el || !lenis) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: ANCHOR_OFFSET });
      history.pushState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
