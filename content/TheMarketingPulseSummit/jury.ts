import type { JuryMember } from "../../config/types";

const IK =
  "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/Social%20Samosa/SAMMIE/Speakers";
// Fill the 4:5 card (center crop, no padding, no face-zoom).
const TR = "?tr=w-700,h-875";

export const jury: JuryMember[] = [
  {
    id: "shalini-rao",
    name: "Shalini Rao",
    role: "Chief Marketing Officer",
    company: "BIAL",
    photo: `${IK}/Shalini%20Rao,%20Chief%20Marketing%20Officer,%20BIAL.jpeg${TR}`,
  },
  {
    id: "sidharth-shakdher",
    name: "Sidharth Shakdher",
    role: "CMO & Business Head",
    company: "Paytm",
    photo: `${IK}/CMO%20&%20Business%20Head,Paytm.jpeg${TR}`,
  },
  {
    id: "prasun-kumar",
    name: "Prasun Kumar",
    role: "CMO & Business Head",
    company: "Magicbricks",
    photo: `${IK}/Prasun%20Kumar,%20CMO%20&%20Business%20Head,%20Magicbricks.jpeg${TR}`,
  },
];
