import { Quote } from "@/components/Quote";
import { quotes } from "@/util/data/quotes";
import Link from "next/link";

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
