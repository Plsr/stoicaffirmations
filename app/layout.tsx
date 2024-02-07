import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sotic Affirmations",
  description:
    "A collection of quotes from Stoic philosophers to help you get through tough times.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Sotic Affirmations",
    description:
      "A collection of quotes from Stoic philosophers to help you get through tough times.",
    images: ["og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
