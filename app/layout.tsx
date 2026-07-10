import type { Metadata } from "next";
import { Bricolage_Grotesque, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Intro from "@/components/layout/Intro";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

// Runs before first paint: decides whether this load shows the intro loader.
// First load this tab session -> show; a Ctrl/Cmd+Shift+R hard reload sets
// `introForce` -> show every time; a plain Ctrl+R reload finds `introSeen`
// -> skip. All state is per-session (sessionStorage). Sets data-intro so the
// CSS shield covers content with zero flash.
const introDecisionScript = `(function(){try{var d=document.documentElement,s=window.sessionStorage,f=s.getItem('introForce');if(f)s.removeItem('introForce');var show=f||!s.getItem('introSeen');d.dataset.intro=show?'1':'0';if(show)s.setItem('introSeen','1');}catch(e){document.documentElement.dataset.intro='0';}})();`;

const display = Bricolage_Grotesque({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Montserrat({
  variable: "--font-body-src",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Marketing Pulse Summit — SAMMIE",
  description:
    "What drives India's marketing economy. India's leading CMOs, marketing leaders and founders decode the forces shaping modern marketing. 7th edition.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introDecisionScript }} />
      </head>
      <body className="min-h-dvh bg-bg text-text">
        <div id="intro-shield" aria-hidden />
        <Intro>
          <SmoothScroll>
            <Nav />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </Intro>
      </body>
    </html>
  );
}
