export interface Stat {
  value: number;
  suffix?: string;
  ordinal?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 40, suffix: "+", label: "Speakers" },
  { value: 500, suffix: "+", label: "Marketing Leaders" },
  { value: 25, suffix: "+", label: "Sessions" },
  { value: 1, label: "Stage" },
  { value: 7, ordinal: "th", label: "Edition" },
];
