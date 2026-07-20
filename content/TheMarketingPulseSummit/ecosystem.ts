import type { Platform } from "../../config/types";

const IK =
  "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/Social%20Samosa/SAMMIE/Logo";

export const platforms: Platform[] = [
  {
    name: "The Marketing Pulse Summit",
    blurb:
      "India's leading CMOs and Marketing Heads examine the forces driving India's marketing economy.",
    logo: "/logos/marketing-pulse-white.png",
  },
  {
    name: "Festive Marketing Camp",
    blurb:
      "A platform for brands to prepare for India's biggest season of culture, commerce and consumption.",
    logo: `${IK}/fmc.png`,
  },
  {
    name: "AgencyCon",
    blurb:
      "A convention for agency leaders navigating the forces redefining the business of agencies.",
    logo: `${IK}/agencycon.png`,
  },
];
