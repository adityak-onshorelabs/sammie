import type { Metadata } from "next";
import { Bricolage_Grotesque, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

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
    >
      <body className="min-h-dvh bg-bg text-text">
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
