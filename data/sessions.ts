export interface Session {
  id: string;
  title: string;
  blurb?: string;
}

// "The Conversations" — card titles from the event brochure.
export const sessions: Session[] = [
  { id: "brand-vs-performance", title: "Brand vs Performance Is Dead. Now What?" },
  { id: "regional-internet", title: "Regional Internet. National Brands." },
  { id: "quick-commerce", title: "Quick Commerce. Faster Decisions." },
  { id: "attention-recession", title: "The Attention Recession" },
  { id: "budget-debate", title: "The Great Budget Debate" },
  { id: "ai-copilot", title: "AI as Co-Pilot or Black Box?" },
];
