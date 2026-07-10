import { Ticket, Handshake, MessageSquare, Mail, Phone, MapPin, type LucideIcon } from "lucide-react";
import GoldRule from "@/components/ui/GoldRule";
import ContactForm from "@/components/sections/ContactForm";
import { contacts } from "@/data/partners";
import { event } from "@/data/event";

export const metadata = {
  title: "Contact — The Marketing Pulse Summit",
  description:
    "Get in touch with the SAMMIE Marketing Pulse Summit team for general, speaker and partnership enquiries.",
};

const channelIcon: Record<string, LucideIcon> = {
  Attend: Ticket,
  Partner: Handshake,
  General: MessageSquare,
};

const channelTitle: Record<string, string> = {
  Attend: "Attend & Registration",
  Partner: "Partnerships",
  General: "General Enquiry",
};

export default function Page() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">Contact</span>
      </div>
      <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
        Let&rsquo;s Talk
      </h1>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted">
        Questions about attending, speaking or partnering with SAMMIE: The
        Marketing Pulse Summit? Send us a note and the right person will get back
        to you.
      </p>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        {/* Form */}
        <div>
          <span className="kicker mb-6 block">Send a Message</span>
          <ContactForm />
        </div>

        {/* Channels */}
        <div className="flex flex-col gap-8">
          <span className="kicker block">Direct Contacts</span>

          <div className="flex flex-col divide-y divide-line">
            {contacts.map((c) => {
              const Icon = channelIcon[c.label] ?? MessageSquare;
              return (
                <div key={c.label} className="flex gap-4 py-5 first:pt-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-text">
                      {channelTitle[c.label] ?? c.label}
                    </span>
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
              );
            })}
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-line bg-bg-raised p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-gold">
              <MapPin className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-display text-sm font-bold uppercase tracking-wide text-text">
                {event.city}
              </span>
              <span className="text-sm text-text-muted">
                {event.date} &middot; {event.time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
