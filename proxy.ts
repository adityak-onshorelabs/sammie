import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { microsites } from "./config/microsites";

// Slugs are PascalCase in links and prerendered exactly, so a hand-typed
// /themarketingpulsesummit would otherwise 404. Redirect any casing variant to
// the canonical one instead of loosening the route matching, which would cost
// static generation and split SEO across several URLs.
const canonical = new Map(microsites.map((m) => [m.slug.toLowerCase(), m.slug]));

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first, ...rest] = pathname.split("/");
  if (!first) return NextResponse.next();

  const slug = canonical.get(decodeURIComponent(first).toLowerCase());
  if (!slug || slug === first) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = ["", slug, ...rest].join("/");
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip Next internals, the API and static assets — they never carry a slug.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.[\\w]+$).*)"],
};
