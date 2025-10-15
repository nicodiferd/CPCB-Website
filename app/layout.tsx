import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Display font for headings
const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cal Poly Club Baseball | CPCB Mustangs",
  description: "Cal Poly Club Baseball competes in NCBA Division 1, Southern Pacific West Conference. 2x SoPac Regional Champions, 8x SoPac West Division Champions.",
  keywords: ["Cal Poly", "Club Baseball", "NCBA", "SoPac West", "CPCB Mustangs", "College Baseball"],
  authors: [{ name: "Cal Poly Club Baseball" }],
  openGraph: {
    title: "Cal Poly Club Baseball | CPCB Mustangs",
    description: "2x SoPac Regional Champions, 8x SoPac West Division Champions. Follow our season!",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <Header />

        <main id="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
