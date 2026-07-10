export interface Partner {
  name: string;
  /** Optional hosted logo image (SVG/PNG). When set, overrides the built-in brand mark. */
  logo?: string;
}

export const partners: Partner[] = [
  { name: "Meta", logo: "/partners/meta.svg" },
  { name: "Google", logo: "/partners/google.svg" },
  { name: "LinkedIn", logo: "/partners/linkedin.png" },
  // Wordmark inverts to a solid blob; use the clean built-in play glyph instead.
  { name: "YouTube" },
  { name: "Amazon Ads", logo: "/partners/amazon-ads.png" },
  // X ships a white glyph that vanishes on the light chip; use the built-in black mark.
  { name: "X" },
  { name: "Zerodha", logo: "/partners/zerodha.svg" },
];

export const contacts = [
  { label: "Attend", name: "Pranita", email: "pranita@socialsamosa.com", phone: "+91 98201 38735" },
  { label: "Partner", name: "Partnerships", email: "info@socialsamosa.com", phone: "+91 99309 08043" },
  { label: "General", name: "General", email: "hello@socialsamosa.com", phone: "+91 97695 70660" },
];

export const navLinks = [
  { label: "Overview", href: "/overview" },
  { label: "Conversations", href: "/#conversations" },
  { label: "Voices", href: "/voices" },
  { label: "Agenda", href: "/agenda" },
  { label: "SAMMIE Journey", href: "/sammiejourney" },
  { label: "Partners", href: "/partners" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
