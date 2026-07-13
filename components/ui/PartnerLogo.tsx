import type { Partner } from "@/data/partners";

// Renders a partner's brand mark in its original colours. The white surface is
// supplied by the container (the white band on /partners, a white pill in the
// home marquee) so these full-colour logos — some on solid JPEG backgrounds —
// always read correctly against the dark theme.
export default function PartnerLogo({ partner }: { partner: Partner }) {
  if (!partner.logo) {
    return (
      <span className="font-display text-xl font-semibold uppercase tracking-wide text-neutral-500">
        {partner.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={partner.logo}
      alt={`${partner.name} logo`}
      className="max-h-20 w-auto max-w-[200px] object-contain"
    />
  );
}
