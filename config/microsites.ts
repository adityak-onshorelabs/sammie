import type { MicrositeConfig, PageId } from "./types";
import TheMarketingPulseSummit from "../content/TheMarketingPulseSummit";

/**
 * The microsite registry — the one place routing knows about individual events.
 *
 * ADDING A MICROSITE
 *   1. Create `content/<Slug>/` exporting a default MicrositeConfig.
 *   2. Add one line to the array below.
 * There is nothing else. No route file, layout or component changes.
 *
 * (A filesystem scan would remove even that line, but the bundler cannot
 * statically resolve a glob import, which would cost us static prerendering of
 * every microsite. One explicit line is the better trade.)
 */
export const microsites: MicrositeConfig[] = [TheMarketingPulseSummit];

/**
 * Which microsite `/` serves while the platform hosts a single live event.
 * Change this one constant to repoint the root redirect (and the legacy
 * flat-route redirects in next.config.ts) at a different event.
 */
export const DEFAULT_MICROSITE = "TheMarketingPulseSummit";

/** Every sub-route a microsite can expose. Mirrors `app/[microsite]/<id>/`. */
export const PAGE_IDS: PageId[] = [
  "overview",
  "voices",
  "agenda",
  "ecosystem",
  "partners",
  "gallery",
  "contact",
  "register",
];

/** Slugs in canonical casing, for generateStaticParams and sitemaps. */
export const micrositeSlugs = (): string[] => microsites.map((m) => m.slug);

// Case-insensitive lookup: /themarketingpulsesummit resolves the same config as
// the canonical /TheMarketingPulseSummit, so hand-typed URLs don't 404.
const bySlug = new Map(microsites.map((m) => [m.slug.toLowerCase(), m]));

export function findMicrosite(slug: string): MicrositeConfig | undefined {
  return bySlug.get(decodeURIComponent(slug).toLowerCase());
}
