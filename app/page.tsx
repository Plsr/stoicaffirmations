import { Quote } from "@/components/Quote";
import { quotes } from "@/util/data/quotes";
import { Metadata } from "next";
import Link from "next/link";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sotic Affirmations",
      },
    ],
  },
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6">
        <Link className="flex items-center" href="#">
          Sotic Affirmations
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <Quote initalQuoteIndex={Math.floor(Math.random() * quotes.length)} />
      </main>
    </div>
  );
}
