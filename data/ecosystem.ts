import { Mic2, Sparkles, Users, type LucideIcon } from "lucide-react";

const IK =
  "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/Social%20Samosa/SAMMIE/Logo";

export interface Platform {
  name: string;
  blurb: string;
  icon: LucideIcon;
  /** Brand logo rendered as a premium watermark behind the card. */
  logo?: string;
}

export const platforms: Platform[] = [
  {
    name: "The Marketing Pulse Summit",
    blurb:
      "India's leading CMOs and Marketing Heads examine the forces driving India's marketing economy.",
    icon: Mic2,
    logo: "/logos/marketing-pulse-white.png",
  },
  {
    name: "Festive Marketing Camp",
    blurb:
      "A platform for brands to prepare for India's biggest season of culture, commerce and consumption.",
    icon: Sparkles,
    logo: `${IK}/IMG_9808.PNG`,
  },
  {
    name: "AgencyCon",
    blurb:
      "A convention for agency leaders navigating the forces redefining the business of agencies.",
    icon: Users,
    logo: `${IK}/IMG_9807.JPEG`,
  },
];
