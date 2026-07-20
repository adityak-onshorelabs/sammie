import { Bricolage_Grotesque, Montserrat } from "next/font/google";

/**
 * Font registry. A microsite picks its faces by key in `theme.fonts`; the
 * layout maps them onto `--font-display-src` / `--font-body-src`, which the
 * `--font-display` / `--font-sans` theme tokens in globals.css build on.
 *
 * Adding a face: call the loader as its own module-scope const (next/font
 * rejects anything else, including a call inside an object literal), then list
 * it in the map below.
 */

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFonts = { bricolage } as const;
const bodyFonts = { montserrat } as const;

const DEFAULT_DISPLAY_FONT: keyof typeof displayFonts = "bricolage";
const DEFAULT_BODY_FONT: keyof typeof bodyFonts = "montserrat";

/** CSS `font-family` values for a microsite's chosen faces. */
export function fontFamilies(fonts?: { display?: string; body?: string }) {
  const display =
    displayFonts[fonts?.display as keyof typeof displayFonts] ??
    displayFonts[DEFAULT_DISPLAY_FONT];
  const body =
    bodyFonts[fonts?.body as keyof typeof bodyFonts] ??
    bodyFonts[DEFAULT_BODY_FONT];

  return {
    display: display.style.fontFamily,
    body: body.style.fontFamily,
  };
}
