export interface Partner {
  name: string;
  /** Optional hosted logo image (SVG/PNG). When set, overrides the built-in brand mark. */
  logo?: string;
}

// Real partner brand marks in full colour. Some are JPEGs on solid backgrounds
// (yellow, white), so they render on white chips — see PartnerLogo.
const IK = "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/Social%20Samosa/SAMMIE/Logo";

export const partners: Partner[] = [
  { name: "Skin Deli", logo: `${IK}/Skin%20Deli.JPG.jpeg` },
  // Original PNG exceeds ImageKit's 25MP limit (raw URL 400s); ?tr resizes it.
  { name: "Fabelle", logo: `${IK}/Fabelle%20Brand%20Logo%20for%20Digital%20Use.png?tr=w-600` },
  { name: "The Curl Co", logo: `${IK}/curlco.jpeg` },
  { name: "BRND.ME", logo: `${IK}/BRND.ME%20-%20Logo.png` },
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
    people: [{ email: "business@socialsamosa.com", phone: "+91 77108 30559" }],
  },
  {
    label: "Speaker and General",
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
