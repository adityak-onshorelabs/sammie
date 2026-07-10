import { Mic2, Sparkles, Users, type LucideIcon } from "lucide-react";

export interface Platform {
  name: string;
  blurb: string;
  icon: LucideIcon;
}

export const platforms: Platform[] = [
  {
    name: "The Marketing Pulse Summit",
    blurb:
      "India's leading CMOs and Marketing Heads examine the forces driving India's marketing economy.",
    icon: Mic2,
  },
  {
    name: "Festive Marketing Camp",
    blurb:
      "A platform for brands to prepare for India's biggest season of culture, commerce and consumption.",
    icon: Sparkles,
  },
  {
    name: "AgencyCon",
    blurb:
      "A convention for agency leaders navigating the forces redefining the business of agencies.",
    icon: Users,
  },
];
