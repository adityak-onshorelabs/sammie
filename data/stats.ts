export interface Stat {
  value: number;
  suffix?: string;
  ordinal?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Speakers" },
  { value: 5, suffix: "+", label: "Sessions" },
  { value: 200, suffix: "+", label: "Advertising & Marketing Professionals" },
];
