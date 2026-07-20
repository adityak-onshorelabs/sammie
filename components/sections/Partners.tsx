import Marquee from "@/components/ui/Marquee";
import GoldRule from "@/components/ui/GoldRule";
import PartnerLogo from "@/components/ui/PartnerLogo";
import type { SectionProps } from "./registry";

export default function Partners({ site }: SectionProps) {
  // Each mark sits on its own white pill so the full-colour logos read on dark.
  const logos = (site.content.partners ?? []).map((p) => (
    <div
      key={p.name}
      className="flex h-28 w-52 items-center justify-center rounded-xl bg-white px-6"
    >
      <PartnerLogo partner={p} />
    </div>
  ));

  return (
    <section className="border-t border-line py-20">
      <div className="mx-auto mb-10 flex max-w-7xl items-center gap-3 px-6">
        <GoldRule width="2rem" />
        <span className="kicker">Our Partners</span>
      </div>
      <Marquee items={logos} />
    </section>
  );
}
