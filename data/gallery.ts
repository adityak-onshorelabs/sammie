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
  /** Self-hosted video URL (e.g. an ImageKit .mp4); alternative to youtubeId. */
  src?: string;
  /** Portrait (9:16) clip such as a YouTube Short; renders a taller, narrower frame. */
  vertical?: boolean;
  /** Custom poster image. Falls back to the YouTube / ImageKit thumbnail when omitted. */
  poster?: string;
}

export interface Highlight {
  year: string;
  title: string;
  body: string;
}

// Real gallery images from ImageKit. Source JPEGs are ~20MB each, so we request a
// web-sized, auto-optimised render (?tr=w-1000) rather than the originals.
const GALLERY_IK =
  "https://ik.imagekit.io/adityakamarouthu/Onshorelabs/Social%20Samosa/SAMMIE/Gallery";
const galleryImg = (name: string) => `${GALLERY_IK}/${name}.JPG?tr=w-1000`;

// Order is tuned so the tall/wide tiles fill the 3-column grid with no gaps.
export const photos: GalleryPhoto[] = [
  { id: "awards-night", src: galleryImg("awards-night"), size: "tall", caption: "Awards night" },
  { id: "the-room", src: galleryImg("the-room"), size: "wide", caption: "The room" },
  { id: "conversations", src: galleryImg("conversations"), size: "wide", caption: "Panel in session" },
  { id: "on-stage", src: galleryImg("on-stage"), caption: "On stage" },
  { id: "keynote-moment", src: galleryImg("keynote-moment"), caption: "Keynote moment" },
  { id: "networking-floor", src: galleryImg("networking-floor"), caption: "On the floor" },
];

export const videos: GalleryVideo[] = [
  { id: "v1", title: "6th Edition Highlights", youtubeId: "TqjePH5_h5A" },
  {
    id: "v2",
    title: "Summit Reel",
    vertical: true,
    src: `${GALLERY_IK}/Video-499.mp4`,
  },
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
