import { Users, Megaphone, Handshake } from "lucide-react";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import PartnerLogo from "@/components/ui/PartnerLogo";
import { partners } from "@/data/partners";
import { contacts } from "@/data/partners";

export const metadata = {
  title: "Partners — The Marketing Pulse Summit",
  description:
    "Partners and sponsors of SAMMIE: The Marketing Pulse Summit, and how to partner with India's leading marketing summit.",
};

const reasons = [
  {
    icon: Users,
    title: "Reach the Decision-Makers",
    body: "Put your brand in front of India's CMOs, marketing leaders and founders in one room.",
  },
  {
    icon: Megaphone,
    title: "Own the Conversation",
    body: "Align with the topics defining the next chapter of marketing in India.",
  },
  {
    icon: Handshake,
    title: "Build Real Relationships",
    body: "Network beyond the stage with the people shaping modern marketing.",
  },
];

export default function Page() {
  const partnerEmail =
    contacts.find((c) => c.label === "Partner")?.email ?? "info@socialsamosa.com";

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">Partners</span>
      </div>
      <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
        Partners &amp; Sponsors
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
        The brands and platforms powering SAMMIE: The Marketing Pulse Summit.
      </p>

      {/* Logo grid */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex h-32 items-center justify-center rounded-2xl border border-line bg-bg-raised transition-colors duration-300 hover:border-gold/40 hover:bg-bg"
          >
            <PartnerLogo partner={p} />
          </div>
        ))}
      </div>

      {/* Why partner */}
      <div className="mt-24">
        <div className="mb-4 flex items-center gap-3">
          <GoldRule width="2rem" />
          <span className="kicker">Partner With Us</span>
        </div>
        <h2 className="display max-w-2xl text-3xl text-text sm:text-4xl">
          Reach the Room That Matters
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group flex h-full flex-col gap-4 bg-bg p-8 transition-colors duration-300 hover:bg-bg-raised"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-gold transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_26px_-8px_var(--color-gold)]">
                <r.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-text">
                {r.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-text-muted">
                {r.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 rounded-2xl border border-line bg-bg-raised p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text">
              Become a Partner
            </h3>
            <p className="mt-2 text-sm text-text-muted">
              Write to us at{" "}
              <a
                href={`mailto:${partnerEmail}`}
                className="text-gold underline underline-offset-4"
              >
                {partnerEmail}
              </a>{" "}
              to explore partnership opportunities.
            </p>
          </div>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}
