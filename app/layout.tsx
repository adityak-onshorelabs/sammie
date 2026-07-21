import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Runs before first paint: decides whether this load shows the intro loader.
// First load this tab session -> show; a Ctrl/Cmd+Shift+R hard reload sets
// `introForce` -> show every time; a plain Ctrl+R reload finds `introSeen`
// -> skip. All state is per-session (sessionStorage). Sets data-intro so the
// CSS shield covers content with zero flash.
const introDecisionScript = `(function(){try{var d=document.documentElement,s=window.sessionStorage,f=s.getItem('introForce');if(f)s.removeItem('introForce');var show=f||!s.getItem('introSeen');d.dataset.intro=show?'1':'0';if(show)s.setItem('introSeen','1');}catch(e){document.documentElement.dataset.intro='0';}})();`;

// Platform-level fallback. Every microsite overrides both from its own config,
// so this is only ever seen on non-microsite routes.
export const metadata: Metadata = {
  title: "Social Samosa Events",
  description: "Industry events and summits from Social Samosa.",
};

// Deliberately thin: no fonts, chrome or branding here. Everything site-specific
// belongs to `app/[microsite]/layout.tsx`, so a second microsite can look nothing
// like the first. Only the pre-paint intro decision and its shield stay global —
// the script must run before any nested layout streams in.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introDecisionScript }} />
      </head>
      <body className="min-h-dvh bg-bg text-text">
        <div id="intro-shield" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
