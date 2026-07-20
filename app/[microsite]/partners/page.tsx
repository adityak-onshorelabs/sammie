import { Users, Megaphone, Handshake } from "lucide-react";
import GoldRule from "@/components/ui/GoldRule";
import CTABanner from "@/components/ui/CTABanner";
import PartnerLogo from "@/components/ui/PartnerLogo";
import { getMicrositePage } from "@/lib/microsite";

type Props = { params: Promise<{ microsite: string }> };

export async function generateMetadata({ params }: Props) {
  const { microsite } = await params;
  const { site, copy } = getMicrositePage(microsite, "partners");
  return {
    title: `${copy.title} — ${site.event.name}`,
    description: copy.description,
  };
}

const reasons = [
  {
    icon: Users,
    title: "Reach the Decision-Makers",
    body: "Connect with India's leading CMOs, Marketing Heads and business leaders in one room.",
  },
  {
    icon: Megaphone,
    title: "Join the Conversation",
    body: "Align your brand with the ideas, debates and decisions driving modern marketing.",
  },
  {
    icon: Handshake,
    title: "Build Lasting Connections",
    body: "Network beyond the stage with the people leading brands, businesses and the industry.",
  },
];

export default async function Page({ params }: Props) {
  const { microsite } = await params;
  const { site, copy } = getMicrositePage(microsite, "partners");
  const partners = site.content.partners ?? [];
  const partnerEmail =
    site.contact.channels.find((c) => c.label === "Partner")?.people[0].email ??
    site.contact.inbox;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 pt-36">
      <div className="mb-6 flex items-center gap-3">
        <GoldRule width="2rem" />
        <span className="kicker">{copy.kicker}</span>
      </div>
      <h1 className="display max-w-3xl text-5xl text-text sm:text-7xl">
        {copy.heading}
      </h1>
      {copy.blurb && (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted">
          {copy.blurb}
        </p>
      )}

      {/* Individual brand cards — each its own white surface so the full-colour
          marks read cleanly against the dark theme */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex h-32 items-center justify-center rounded-2xl bg-white px-8 shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
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
          What&rsquo;s In It For Your Brand?
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

        <div className="mt-12">
          <CTABanner
            title="Put Your Brand in the Right Room."
            href="/contact"
            cta="Get in Touch"
            body={
              <>
                Explore sponsorship opportunities with {site.event.name}. Write
                to us at{" "}
                <a
                  href={`mailto:${partnerEmail}`}
                  className="text-gold underline underline-offset-4"
                >
                  {partnerEmail}
                </a>
                .
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
