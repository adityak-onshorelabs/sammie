export interface AgendaItem {
  time: string;
  title: string;
  kind: "break" | "keynote" | "panel" | "fireside" | "networking";
}

// "Programme at a Glance — A Day of Ideas That Move Markets"
export const agenda: AgendaItem[] = [
  { time: "09:30 AM", title: "Registration & Networking", kind: "networking" },
  { time: "10:00 AM", title: "Opening Keynote", kind: "keynote" },
  { time: "10:30 AM", title: "Panel: Brand as Performance Is Dead. Now What?", kind: "panel" },
  { time: "11:30 AM", title: "Networking Break", kind: "break" },
  { time: "12:00 PM", title: "Panel: AI as Co-Pilot or Black Box?", kind: "panel" },
  { time: "01:00 PM", title: "Lunch & Networking", kind: "networking" },
  { time: "02:00 PM", title: "Fireside Chat: Leading in the Attention Economy", kind: "fireside" },
  { time: "03:00 PM", title: "Panel: The Great Budget Debate", kind: "panel" },
  { time: "04:00 PM", title: "Closing Keynote", kind: "keynote" },
  { time: "04:30 PM", title: "Networking High Tea", kind: "networking" },
];
