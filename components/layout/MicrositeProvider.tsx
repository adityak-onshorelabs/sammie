"use client";

import { createContext, useContext, useMemo } from "react";
import type { MicrositeConfig } from "@/config/types";
import { basePath, href } from "@/lib/microsite";

type MicrositeCtx = {
  site: MicrositeConfig;
  /** "/TheMarketingPulseSummit" — prefix for every internal link. */
  base: string;
  /** Rewrites a microsite-relative href ("/agenda") to an absolute one. */
  link: (to: string) => string;
};

const Ctx = createContext<MicrositeCtx | null>(null);

/**
 * Makes the active microsite available to client components without threading
 * props through every level. Server components take `site` as a prop instead —
 * they already have it from the route params.
 */
export default function MicrositeProvider({
  site,
  children,
}: {
  site: MicrositeConfig;
  children: React.ReactNode;
}) {
  const value = useMemo<MicrositeCtx>(() => {
    const base = basePath(site);
    return { site, base, link: (to: string) => href(base, to) };
  }, [site]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useMicrosite(): MicrositeCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("useMicrosite must be used inside a MicrositeProvider");
  }
  return ctx;
}

/**
 * Link resolver for components that may render outside a microsite (none
 * today, but it keeps shared UI like Button safe on future platform-level
 * pages). Falls back to leaving the href untouched.
 */
export function useSiteLink(): (to: string) => string {
  const ctx = useContext(Ctx);
  return ctx ? ctx.link : (to: string) => to;
}
