export interface EventInfo {
  name: string;
  edition: string;
  theme: string;
  tagline: string;
  keywords: string[];
  intro: string;
  overview: string[];
  topics: string[];
  date: string;
  time: string;
  venue: string;
  city: string;
  registerUrl: string;
}

export const event: EventInfo = {
  name: "The Marketing Pulse Summit",
  edition: "7th Edition",
  theme: "What Drives India's Marketing Economy",
  tagline: "Attention. Growth. Culture.",
  keywords: ["Attention", "Growth", "Culture", "Commerce"],
  intro:
    "Join India's leading CMOs and Marketing Heads for the conversations shaping the future of marketing in India.",
  overview: [
    "India's marketing economy is no longer driven by a single force.",
    "Consumer behaviour is evolving faster than planning cycles. New media is changing how discovery happens. Commerce is collapsing the path to purchase. And AI is transforming how marketing is planned, created and measured.",
    "As old marketing rules give way to new realities, the brands that win will be the ones that understand how these forces work together.",
    "At SAMMIE: The Marketing Pulse Summit, India's leading CMOs and Marketing Heads come together to challenge conventional thinking, share practical perspectives and examine the decisions that will shape the next chapter of marketing in India.",
  ],
  topics: [
    "The Marketing Reality Check: Beyond the Binary",
    "Culture, Content, Commerce: What Makes India Buy",
    "Regional Internet, National Brands: Rethinking India's Attention Map",
    "Festivals, Fandoms, and the Battle for Attention",
    "Building AI Muscle: What CMOs Must Get Right Before AI Scales",
    "Media That Moves Markets: CTV, Programmatic and Retail Media",
    "Quick Commerce, Faster Decisions: The New Rules of Marketing Agility",
  ],
  date: "30 July 2026",
  time: "2 PM onwards",
  venue: "Venue to be announced",
  city: "Mumbai, India",
  registerUrl:
    "https://zfrmz.in/q5OlyiNk8DQHrRvG8SMm?referrername=web",
};
