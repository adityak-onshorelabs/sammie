export interface Session {
  id: string;
  title: string;
  blurb?: string;
}

// "The Conversations" — card titles from the event brochure.
export const sessions: Session[] = [
  { id: "reality-check", title: "The Marketing Reality Check" },
  { id: "culture-content-commerce", title: "Culture, Content and Commerce" },
  { id: "regional-internet", title: "Regional Internet, National Brands" },
  { id: "festivals-fandoms", title: "Festivals and Fandoms" },
  { id: "ai-muscle", title: "Building AI Muscle" },
  { id: "media-moves-markets", title: "Media That Moves Markets" },
];
