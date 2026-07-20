import { notFound } from "next/navigation";
import type { MicrositeConfig, PageId } from "@/config/types";
import { findMicrosite } from "@/config/microsites";

/**
 * Resolve a route param to a microsite config, 404ing on an unknown slug.
 * Server-side entry point for every page and layout under `app/[microsite]`.
 */
export function getMicrosite(slug: string): MicrositeConfig {
  const site = findMicrosite(slug);
  if (!site) notFound();
  return site;
}

/**
 * Same, but also 404s when the microsite hasn't configured that sub-route —
 * an event with no gallery simply has no /gallery URL, no stub page needed.
 */
export function getMicrositePage(slug: string, page: PageId) {
  const site = getMicrosite(slug);
  const copy = site.pages[page];
  if (!copy) notFound();
  return { site, copy };
}

/** URL prefix every internal link on a microsite hangs off. */
export function basePath(site: MicrositeConfig | string): string {
  return `/${typeof site === "string" ? site : site.slug}`;
}

/**
 * Rewrite a microsite-relative href to an absolute one.
 *
 * Content and components author links as if their microsite were the site root
 * ("/agenda", "/#conversations", "/"), and this prefixes the slug at render
 * time. That is what keeps the slug out of the components and lets the same
 * template serve every event. Absolute URLs, mailto:/tel: and bare fragments
 * pass through untouched.
 */
export function href(base: string, to: string): string {
  if (!to) return base;
  if (/^([a-z]+:|\/\/)/i.test(to) || to.startsWith("#")) return to;
  if (to === "/") return base;
  return `${base}${to.startsWith("/") ? "" : "/"}${to}`;
}

/**
 * The microsite's design tokens as a `:root` rule.
 *
 * Token *names* stay in globals.css (that is what generates the Tailwind
 * utilities); this only overrides their *values*. Scoping to :root rather than
 * a wrapper element matters — html/body backgrounds, ::selection and the
 * scrollbar all resolve their vars outside the React tree.
 */
export function themeCss(site: MicrositeConfig): string {
  const t = site.theme;
  if (!t) return "";

  const decls: string[] = [];
  for (const [token, value] of Object.entries(t.colors ?? {})) {
    if (value) decls.push(`--color-${token}:${value};`);
  }
  if (t.gradient) decls.push(`--gradient-gold:${t.gradient};`);

  return decls.length ? `:root{${decls.join("")}}` : "";
}
