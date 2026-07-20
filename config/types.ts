/**
 * The shared schema every microsite on events.socialsamosa.in conforms to.
 *
 * These types are the contract between the (generic) page templates in
 * `app/[microsite]/**` and the (per-event) content folders in `content/**`.
 * Nothing here is specific to any one event — adding a microsite means writing
 * a new object of this shape, never touching a route file.
 *
 * Everything must stay JSON-serialisable: a config crosses the server/client
 * boundary through MicrositeProvider, so no React components, functions or
 * class instances (map icons by string key in the component instead).
 */

/* ------------------------------------------------------------------ content */

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
  city: string;
  /** External registration form (Zoho, Typeform, …). Embedded on /register. */
  registerUrl: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  ordinal?: string;
  label: string;
}

export interface Session {
  id: string;
  title: string;
  blurb?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  kind: "break" | "keynote" | "panel" | "fireside" | "networking";
}

export interface JuryMember {
  id: string;
  name: string;
  role: string;
  company: string;
  /** Remote portrait (ImageKit). Falls back to initials when absent. */
  photo?: string;
}

export interface Partner {
  name: string;
  /** Optional hosted logo image (SVG/PNG). When set, overrides the built-in brand mark. */
  logo?: string;
}

export interface ContactPerson {
  email: string;
  phone: string;
}

export interface Contact {
  label: string;
  people: ContactPerson[];
}

export interface Platform {
  name: string;
  blurb: string;
  /** Brand logo rendered as a premium watermark behind the card. */
  logo?: string;
}

export interface Edition {
  year: string;
  theme: string;
  image?: string;
}

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

/* -------------------------------------------------------------------- theme */

/**
 * Design-token *values*. The token *names* live in `app/globals.css` under
 * `@theme` — that is what generates the Tailwind utilities (`text-gold`,
 * `bg-bg-raised`, …), so names must never move out of the stylesheet. The
 * utilities compile to `var(--color-gold)`, which means a microsite can
 * repaint the entire site by overriding the values at `:root`. Every field is
 * optional: omit one and the globals.css default stands.
 */
export interface MicrositeTheme {
  colors?: Partial<Record<ThemeColorToken, string>>;
  /** Full CSS `linear-gradient(...)` used by the metallic text/surface treatment. */
  gradient?: string;
  /** Keys into the font registry in `lib/fonts.ts`. */
  fonts?: {
    display?: string;
    body?: string;
  };
}

export type ThemeColorToken =
  | "bg"
  | "bg-raised"
  | "bg-sunken"
  | "line"
  | "text"
  | "text-muted"
  | "text-faint"
  | "gold"
  | "gold-deep"
  | "gold-light"
  | "gold-bronze";

/* --------------------------------------------------------------- navigation */

/** `href` is relative to the microsite root: "/agenda", "/#conversations", "/". */
export interface NavLink {
  label: string;
  href: string;
}

/** Sub-routes a microsite can switch on. Each maps to `app/[microsite]/<id>/`. */
export type PageId =
  | "overview"
  | "voices"
  | "agenda"
  | "ecosystem"
  | "partners"
  | "gallery"
  | "contact"
  | "register";

/** Home-page blocks, rendered in the order listed in `home.sections`. */
export type SectionId =
  | "hero"
  | "stats"
  | "overview"
  | "conversations"
  | "jury"
  | "agenda"
  | "ecosystem"
  | "partners"
  | "registerCTA";

/** Copy for one sub-route. Presence of the key is what enables the route. */
export interface PageCopy {
  /** <title>. The site name is appended by generateMetadata. */
  title: string;
  description?: string;
  kicker: string;
  heading: string;
  blurb?: string;
}

/* ------------------------------------------------------------------- config */

export interface MicrositeConfig {
  /** Canonical URL segment, case-sensitive as it should appear: "TheMarketingPulseSummit". */
  slug: string;
  event: EventInfo;
  seo: {
    title: string;
    description: string;
  };
  brand: {
    /** Wordmark shown in the nav, footer and intro loader. */
    logo: string;
    logoAlt: string;
    /** Wordmark for the light-background transactional emails. */
    mailLogo?: string;
    /** Hero background image. */
    heroImage?: string;
    /** Hero headline, split into the lines the mask-reveal animates. */
    heroLines: string[];
    /** Index of the line rendered in metallic gold. */
    heroAccentLine?: number;
  };
  theme?: MicrositeTheme;
  nav: NavLink[];
  home: { sections: SectionId[] };
  pages: Partial<Record<PageId, PageCopy>>;
  contact: {
    /** Inbox every enquiry from this microsite lands in. */
    inbox: string;
    /** Published contact people, grouped by enquiry type. */
    channels: Contact[];
    /** Options in the contact form's enquiry-type dropdown. */
    enquiryTypes: string[];
  };
  content: {
    stats?: Stat[];
    sessions?: Session[];
    agenda?: AgendaItem[];
    jury?: JuryMember[];
    partners?: Partner[];
    platforms?: Platform[];
    editions?: Edition[];
    photos?: GalleryPhoto[];
    videos?: GalleryVideo[];
    highlights?: Highlight[];
  };
}
