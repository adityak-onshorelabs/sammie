export interface Edition {
  year: string;
  theme: string;
  image?: string;
}

export const editions: Edition[] = [
  { year: "2025", theme: "Beyond Attention" },
  { year: "2024", theme: "Marketing Rewired" },
  { year: "2023", theme: "New Age. New Rules." },
  { year: "2022", theme: "Building What's Next" },
];
