export interface JuryMember {
  id: string;
  name: string;
  role: string;
  company: string;
  /** Remote portrait (ImageKit). Falls back to initials when absent. */
  photo?: string;
}

const IK =
  "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/Social%20Samosa/SAMMIE/Sammie%202026%20jury";
// Fill the 4:5 card (center crop, no padding, no face-zoom).
const TR = "?tr=w-700,h-875";

export const jury: JuryMember[] = [
  {
    id: "amaresh-godbole",
    name: "Amaresh Godbole",
    role: "CEO, PDX India & Chief, AI Experiences & Solutions",
    company: "Publicis Groupe India",
    photo: `${IK}/Amaresh.jpeg${TR}`,
  },
  {
    id: "anuya-jakatdar",
    name: "Anuya Jakatdar",
    role: "Co-founder & Chief Creative Officer",
    company: "Bare Bones Collective",
    photo: `${IK}/Anuya.jpeg${TR}`,
  },
  {
    id: "chandni-shah",
    name: "Chandni Shah",
    role: "CEO",
    company: "Kinnect & 22feet Tribal",
  },
  {
    id: "harshil-karia",
    name: "Harshil Karia",
    role: "Founder & CEO",
    company: "Schbang",
    photo: `${IK}/Harshil.jpg${TR}`,
  },
  {
    id: "manoti-jain",
    name: "Manoti Jain",
    role: "COO & Founding Partner",
    company: "Kulfi Collective",
    photo: `${IK}/Manoti%20Jain%20Kulfi%20Collective%20(1).jpg${TR}`,
  },
  {
    id: "niraj-ruparel",
    name: "Niraj Ruparel",
    role: "Creative Tech Maverick",
    company: "WPP India",
    photo: `${IK}/Niraj.jpg${TR}`,
  },
  {
    id: "sonia-khurana",
    name: "Sonia Khurana",
    role: "Founder",
    company: "SuperStuff.ai",
  },
  {
    id: "viren-noronha",
    name: "Viren Noronha",
    role: "Co-founder",
    company: "The New Thing",
    photo: `${IK}/TNT-Viren-Profile.jpeg${TR}`,
  },
  {
    // Title matched to the brochure speakers listing.
    id: "amit-wadhwa",
    name: "Amit Wadhwa",
    role: "CEO",
    company: "dentsu Creative India",
    // Provided image URL 404s (commas/& in filename); add a clean URL to enable.
  },
];
