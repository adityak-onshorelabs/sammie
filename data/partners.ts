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

export interface ContactPerson {
  email: string;
  phone: string;
}

export interface Contact {
  label: string;
  people: ContactPerson[];
}

export const contacts: Contact[] = [
  {
    label: "Attend",
    people: [
      { email: "ali@socialsamosa.com", phone: "+91 82910 09692" },
      { email: "kunal@socialsamosa.com", phone: "+91 88790 45594" },
    ],
  },
  {
    label: "Partner",
    people: [{ email: "rhea@socialsamosa.com", phone: "+91 97694 56104" }],
  },
  {
    label: "General",
    people: [{ email: "tirtha@socialsamosa.com", phone: "+91 99752 31383" }],
  },
];

export const navLinks = [
  { label: "Overview", href: "/overview" },
  { label: "Conversations", href: "/#conversations" },
  { label: "Voices", href: "/voices" },
  { label: "Agenda", href: "/agenda" },
  { label: "The Ecosystem", href: "/ecosystem" },
  { label: "Partners", href: "/partners" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
