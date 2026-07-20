import type { Metadata } from "next";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Intro from "@/components/layout/Intro";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MicrositeProvider from "@/components/layout/MicrositeProvider";
import { getMicrosite, themeCss } from "@/lib/microsite";
import { fontFamilies } from "@/lib/fonts";
import { micrositeSlugs } from "@/config/microsites";

type Props = {
  params: Promise<{ microsite: string }>;
  children: React.ReactNode;
};

// Prerender every registered microsite at build time, and 404 anything else
// rather than rendering an unknown slug on demand.
export function generateStaticParams() {
  return micrositeSlugs().map((microsite) => ({ microsite }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ microsite: string }>;
}): Promise<Metadata> {
  const { microsite } = await params;
  const site = getMicrosite(microsite);

  return {
    title: site.seo.title,
    description: site.seo.description,
  };
}

export default async function MicrositeLayout({ params, children }: Props) {
  const { microsite } = await params;
  const site = getMicrosite(microsite);
  const fonts = fontFamilies(site.theme?.fonts);

  // The microsite's design tokens, applied at :root so html/body backgrounds,
  // ::selection and the scrollbar — all outside the React tree — pick them up.
  // globals.css declares the token names (that is what generates the Tailwind
  // utilities); this only overrides their values.
  const css = `:root{--font-display-src:${fonts.display};--font-body-src:${fonts.body};}${themeCss(site)}`;

  return (
    <MicrositeProvider site={site}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Intro>
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer site={site} />
        </SmoothScroll>
      </Intro>
    </MicrositeProvider>
  );
}
