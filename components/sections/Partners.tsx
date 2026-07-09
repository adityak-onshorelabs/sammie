import { siMeta, siGoogle, siYoutube, siX, siZerodha } from "simple-icons";
import Marquee from "@/components/ui/Marquee";
import GoldRule from "@/components/ui/GoldRule";
import { partners } from "@/data/partners";

// LinkedIn and Amazon were removed from simple-icons on brand request; inline their marks.
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";
const AMAZON_PATH =
  "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.41-3.006.615-4.436.615-2.203 0-4.28-.385-6.226-1.155-1.943-.77-3.687-1.85-5.208-3.22-.09-.075-.135-.15-.135-.21 0-.045.02-.09.06-.135zm6.774-8.83c0-.99.242-1.83.726-2.52.484-.69 1.15-1.21 1.997-1.56.776-.315 1.726-.54 2.85-.674.383-.045 1.008-.104 1.876-.18v-.36c0-.9-.098-1.51-.294-1.83-.293-.435-.756-.652-1.39-.652h-.174c-.463.045-.863.19-1.2.435-.336.24-.554.586-.653 1.02-.06.27-.196.42-.41.45l-2.37-.3c-.226-.06-.34-.18-.34-.36 0-.045.008-.09.023-.135.226-1.185.798-2.055 1.716-2.61.918-.555 1.99-.855 3.216-.9h.526c1.57 0 2.797.405 3.68 1.215.135.135.256.28.362.435.106.155.19.29.253.405.062.115.12.275.173.48.053.205.09.35.113.435.023.085.04.24.05.465.01.225.016.36.016.405v3.855c0 .273.04.522.12.75.08.226.157.39.232.49.075.1.196.264.362.492.06.09.09.174.09.252 0 .09-.045.174-.135.252-.936.81-1.446 1.253-1.53 1.33-.135.106-.3.12-.495.045-.166-.135-.31-.264-.435-.39-.124-.126-.212-.213-.263-.263-.05-.05-.14-.16-.27-.33-.13-.17-.22-.29-.27-.36-.71.78-1.41 1.267-2.1 1.463-.435.135-.972.202-1.612.202-.98 0-1.784-.3-2.412-.9-.628-.6-.942-1.45-.942-2.55zm3.324-.39c0 .494.124.892.372 1.194.248.302.578.453.99.453.036 0 .088-.006.157-.017.068-.012.114-.018.138-.018.523-.135.926-.464 1.21-.988.135-.24.24-.503.315-.788.075-.285.116-.514.123-.686.007-.172.01-.457.01-.855v-.36c-.826 0-1.454.056-1.884.166-1.26.36-1.89 1.116-1.89 2.267zm10.078 6.94c.03-.045.075-.09.135-.135.375-.255.734-.427 1.076-.517.564-.15 1.114-.234 1.65-.252.147-.012.288-.003.42.027.66.06 1.056.168 1.185.324.06.09.09.226.09.405v.157c0 .525-.144 1.143-.43 1.853-.286.71-.685 1.283-1.196 1.718-.075.06-.143.09-.203.09-.033 0-.06-.006-.09-.018-.09-.045-.11-.126-.06-.243.606-1.425.91-2.415.91-2.97 0-.174-.033-.303-.096-.386-.16-.187-.61-.28-1.35-.28-.27 0-.588.018-.954.054-.396.045-.76.09-1.09.135-.09 0-.152-.015-.18-.045-.03-.03-.036-.06-.02-.09.006-.075.03-.135.06-.18z";

const brandPath: Record<string, string> = {
  Meta: siMeta.path,
  Google: siGoogle.path,
  LinkedIn: LINKEDIN_PATH,
  YouTube: siYoutube.path,
  "Amazon Ads": AMAZON_PATH,
  X: siX.path,
  Zerodha: siZerodha.path,
};

export default function Partners() {
  const logos = partners.map((p) => {
    const path = brandPath[p.name];
    return (
      <div
        key={p.name}
        className="flex h-10 items-center text-text-faint transition-colors duration-300 hover:text-text"
      >
        {p.name === "YouTube" ? (
          // Composite wordmark: clean play glyph + text (the image inverts to a blob).
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-current">
              <path d={siYoutube.path} />
            </svg>
            <span className="font-sans text-2xl font-semibold tracking-tight">
              YouTube
            </span>
          </span>
        ) : p.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.logo}
            alt={`${p.name} logo`}
            className="h-7 w-auto max-w-[150px] object-contain opacity-65 brightness-0 invert transition-opacity duration-300 hover:opacity-100"
          />
        ) : path ? (
          <svg
            viewBox="0 0 24 24"
            role="img"
            aria-label={p.name}
            className="h-8 w-8 fill-current"
          >
            <path d={path} />
          </svg>
        ) : (
          <span className="font-display text-2xl font-semibold uppercase tracking-wide">
            {p.name}
          </span>
        )}
      </div>
    );
  });

  return (
    <section className="border-t border-line py-20">
      <div className="mx-auto mb-10 flex max-w-7xl items-center gap-3 px-6">
        <GoldRule width="2rem" />
        <span className="kicker">Our Partners</span>
      </div>
      <Marquee items={logos} />
    </section>
  );
}
