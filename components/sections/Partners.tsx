import Marquee from "@/components/ui/Marquee";
import GoldRule from "@/components/ui/GoldRule";
import PartnerLogo from "@/components/ui/PartnerLogo";
import { partners } from "@/data/partners";

export default function Partners() {
  const logos = partners.map((p) => <PartnerLogo key={p.name} partner={p} />);

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
