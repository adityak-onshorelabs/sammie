export interface GalleryPhoto {
  id: string;
  /** Drop an image URL to replace the placeholder tile. */
  src?: string;
  caption?: string;
  /** Layout emphasis for the masonry grid. */
  size?: "tall" | "wide";
}

export interface GalleryVideo {
  id: string;
  title: string;
  /** YouTube video id; renders an embed when set, a play-placeholder otherwise. */
  youtubeId?: string;
}

export interface Highlight {
  year: string;
  title: string;
  body: string;
}

// Placeholder set; swap `src` / `youtubeId` for real media as it arrives.
export const photos: GalleryPhoto[] = [
  { id: "p1", size: "tall", caption: "On stage" },
  { id: "p2", caption: "The audience" },
  { id: "p3", size: "wide", caption: "Networking floor" },
  { id: "p4", caption: "Panel discussion" },
  { id: "p5", caption: "Backstage" },
  { id: "p6", size: "tall", caption: "Keynote moment" },
  { id: "p7", size: "wide", caption: "The room" },
  { id: "p8", caption: "Conversations" },
  { id: "p9", caption: "High tea" },
];

export const videos: GalleryVideo[] = [
  { id: "v1", title: "2025 Edition Highlights" },
  { id: "v2", title: "Opening Keynote" },
  { id: "v3", title: "Panel: Brand vs Performance" },
];

export const highlights: Highlight[] = [
  {
    year: "2025",
    title: "Beyond Attention",
    body: "500+ marketing leaders on where attention goes next.",
  },
  {
    year: "2024",
    title: "Marketing Rewired",
    body: "The playbooks that broke and the ones that replaced them.",
  },
  {
    year: "2023",
    title: "New Age. New Rules.",
    body: "How India's brands rewrote the rules of engagement.",
  },
];
