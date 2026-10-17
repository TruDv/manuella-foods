import type { Metadata } from "next";
import { Geist, Instrument_Serif, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://manuellafoods.co.uk"
  ),
  title: {
    default: "Manuella Foods — African & Caribbean Wholesale, Delivered",
    template: "%s | Manuella Foods",
  },
  description:
    "African and Caribbean wholesale staples, ordered online and delivered direct to your kitchen door. Trade customers only. Watford-based, delivering across North & West London and the M1/M25 corridor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geist.variable} ${instrumentSerif.variable} ${bricolage.variable}`}
    >
      <body className="min-h-screen bg-cream antialiased">{children}</body>
    </html>
  );
}