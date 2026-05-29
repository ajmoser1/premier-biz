import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCallBar } from "@/components/StickyCallBar";
import { localBusinessJsonLd, makeMetadata } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = makeMetadata({
  title: "Same-Day Exterior Cleaning in Chicagoland",
  description:
    "Premier Home Services provides same-day pressure washing, window cleaning, gutter cleaning, landscaping, and roof cleaning in Chicagoland.",
});
metadata.verification = {
  google: "jagAu6RYMgumy-U-ceJfsyI8nNCGbJRkQqRecSQ20ak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#f8f6f1] text-[#1a1a1a] font-sans">
        <Header />
        <main className="mx-auto w-full min-w-0 max-w-6xl flex-1 px-4 pb-5 pt-2 md:pb-8 md:pt-3">{children}</main>
        <Footer />
        <StickyCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
