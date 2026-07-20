import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import type { MicrositeConfig } from "@/config/types";
import { basePath, href } from "@/lib/microsite";

// A server component, so the microsite arrives as a prop rather than through
// the client-side MicrositeProvider context.
export default function Footer({ site }: { site: MicrositeConfig }) {
  const { event } = site;
  const contacts = site.contact.channels;
  const base = basePath(site);
  const navLinks = site.nav.map((l) => ({ ...l, href: href(base, l.href) }));

  return (
    <footer className="border-t border-line bg-bg-sunken">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.4fr]">
          <div className="flex flex-col gap-5">
            <Logo imgClassName="h-28 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              {event.theme}. {event.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="kicker mb-1">Explore</span>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-text-muted transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div>
            <span className="kicker mb-4 block">Have Queries?</span>
            <div className="flex flex-col gap-5">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-1.5 border-t border-line pt-4 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-5"
                >
                  <span className="font-display w-20 shrink-0 text-xs uppercase tracking-widest text-gold">
                    {c.label}
                  </span>
                  <div className="flex min-w-0 flex-col gap-1.5">
                  {c.people.map((person, pi) => (
                    <div
                      key={person.email}
                      className={`flex flex-col gap-1.5 ${pi > 0 ? "mt-2 border-t border-line pt-2" : ""}`}
                    >
                      <a
                        href={`mailto:${person.email}`}
                        className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-gold"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                        {person.email}
                      </a>
                      <a
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-gold"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                        {person.phone}
                      </a>
                    </div>
                  ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Social Samosa. All rights reserved.
          </span>
          <span>
            {event.name} &middot; {event.edition}
          </span>
        </div>
      </div>
    </footer>
  );
}
