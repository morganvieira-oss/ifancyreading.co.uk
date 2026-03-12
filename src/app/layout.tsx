import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lekton, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const lekton = Lekton({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lekton",
});

export const metadata: Metadata = {
  title: {
    default: "i fancy reading",
    template: "%s ~ i fancy reading",
  },
  description: "answer a few questions. get a book recommendation. that's it.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "i fancy reading",
    title: "i fancy reading",
    description:
      "answer a few questions. get a book recommendation. that's it.",
  },
  twitter: {
    card: "summary_large_image",
    title: "i fancy reading",
    description:
      "answer a few questions. get a book recommendation. that's it.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} ${lekton.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </head>
      <body className="bg-bg min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
