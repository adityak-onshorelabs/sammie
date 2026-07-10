import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";
import { contacts, navLinks } from "@/data/partners";
import { event } from "@/data/event";

export default function Footer() {
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
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-gold"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                    {c.email}
                  </a>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-gold"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                    {c.phone}
                  </a>
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
