import type { MicrositeConfig } from "../../config/types";
import { event } from "./event";
import { stats } from "./stats";
import { sessions } from "./sessions";
import { agenda } from "./agenda";
import { jury } from "./jury";
import { partners, contacts } from "./partners";
import { platforms } from "./ecosystem";
import { editions } from "./editions";
import { photos, videos, highlights } from "./gallery";

/**
 * SAMMIE: The Marketing Pulse Summit — the platform's first microsite.
 *
 * Everything the generic templates need lives here. `theme` restates the
 * current globals.css values verbatim so this site renders pixel-identically to
 * the pre-platform build; a new microsite overrides whichever tokens it wants.
 */
const TheMarketingPulseSummit: MicrositeConfig = {
  slug: "TheMarketingPulseSummit",

  event,

  seo: {
    title: "The Marketing Pulse Summit — SAMMIE",
    description:
      "What drives India's marketing economy. India's leading CMOs, marketing leaders and founders decode the forces shaping modern marketing. 7th edition.",
  },

  brand: {
    logo: "/logos/marketing-pulse-white.png",
    logoAlt: "The Marketing Pulse Summit",
    mailLogo:
      "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/Social%20Samosa/SAMMIE/Logo/marketing-pulse-white.png",
    heroImage:
      "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/Social%20Samosa/SAMMIE/hero_image",
    heroLines: ["The Marketing", "Pulse", "Summit"],
    heroAccentLine: 1,
  },

  theme: {
    colors: {
      bg: "oklch(0.15 0.008 85)",
      "bg-raised": "oklch(0.19 0.01 85)",
      "bg-sunken": "oklch(0.12 0.008 85)",
      line: "oklch(0.3 0.012 85)",
      text: "oklch(0.95 0.01 85)",
      "text-muted": "oklch(0.72 0.012 85)",
      "text-faint": "oklch(0.55 0.012 85)",
      gold: "oklch(0.8 0.115 85)",
      "gold-deep": "oklch(0.68 0.12 80)",
      "gold-light": "oklch(0.9 0.06 92)",
      "gold-bronze": "oklch(0.54 0.1 66)",
    },
    gradient: `linear-gradient(
      155deg,
      oklch(0.92 0.05 93) 0%,
      oklch(0.83 0.12 87) 26%,
      oklch(0.68 0.12 78) 52%,
      oklch(0.55 0.1 68) 70%,
      oklch(0.82 0.12 86) 100%
    )`,
    fonts: { display: "bricolage", body: "montserrat" },
  },

  nav: [
    { label: "Overview", href: "/overview" },
    { label: "Conversations", href: "/#conversations" },
    { label: "Voices", href: "/voices" },
    { label: "Agenda", href: "/agenda" },
    { label: "The Ecosystem", href: "/ecosystem" },
    { label: "Partners", href: "/partners" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  home: {
    sections: [
      "hero",
      "stats",
      "overview",
      "conversations",
      "jury",
      "agenda",
      "ecosystem",
      "partners",
      "registerCTA",
    ],
  },

  pages: {
    overview: {
      title: "Overview",
      description:
        "What drives India's marketing economy. An overview of SAMMIE: The Marketing Pulse Summit, its theme, topics and format.",
      kicker: "Overview",
      heading: "What Drives India’s Marketing Economy",
    },
    voices: {
      title: "Voices",
      description:
        "The voices behind India's leading brands, shaping the conversations at SAMMIE: The Marketing Pulse Summit.",
      kicker: "The Voices",
      heading: "Behind India’s Leading Brands",
      blurb:
        "The leaders and category-definers judging India’s best, and shaping the conversations at SAMMIE: The Marketing Pulse Summit.",
    },
    agenda: {
      title: "Agenda",
      description:
        "The full agenda for SAMMIE: The Marketing Pulse Summit, a day of ideas that move markets.",
      kicker: "The Agenda",
      heading: "A Day of Ideas That Move Markets",
      blurb: "Sessions Where Marketing’s Biggest Questions Get Answered",
    },
    ecosystem: {
      title: "The Ecosystem",
      description:
        "Social Samosa's ecosystem of industry platforms — The Marketing Pulse Summit, Festive Marketing Camp and AgencyCon — built around the conversations moving the industry forward.",
      kicker: "Our Ecosystem",
      heading: "Built Around the Conversations Moving the Industry Forward",
    },
    partners: {
      title: "Partners",
      description:
        "Partners and sponsors of SAMMIE: The Marketing Pulse Summit, and how to partner with India's leading marketing summit.",
      kicker: "Partners",
      heading: "Partners",
      blurb: "The brands and platforms supporting The Marketing Pulse Summit.",
    },
    gallery: {
      title: "Gallery",
      description: "Photos and videos from SAMMIE: The Marketing Pulse Summit.",
      kicker: "Gallery",
      heading: "Moments From the Floor",
      blurb:
        "The stage, the conversations and the people, from every edition of the summit.",
    },
    contact: {
      title: "Contact",
      description:
        "Get in touch with the SAMMIE Marketing Pulse Summit team for general, speaker and partnership enquiries.",
      kicker: "Contact",
      heading: "Let’s Talk",
      blurb:
        "Questions about attending, speaking or partnering with SAMMIE: The Marketing Pulse Summit? Send us a note and the right person will get back to you.",
    },
    register: {
      title: "Register",
      kicker: "Registration",
      heading: "Register Now",
    },
  },

  contact: {
    inbox: "events@socialsamosa.com",
    channels: contacts,
    enquiryTypes: [
      "Speaker and General Queries",
      "Partnership Enquiry",
      "Registration",
    ],
  },

  content: {
    stats,
    sessions,
    agenda,
    jury,
    partners,
    platforms,
    editions,
    photos,
    videos,
    highlights,
  },
};

export default TheMarketingPulseSummit;
