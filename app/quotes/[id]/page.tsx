import { quotes } from "@/util/data/quotes";
import { Shuffle } from "lucide-react";
import Link from "next/link";

const pseudoRandom = () => Math.floor(Math.random() * quotes.length);

export default function QuotePage({ params }: { params: { id: string } }) {
  const quote = quotes[parseInt(params.id)];

  if (!quote) {
    // TODO: Better handling
    return <div>Quote not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6">
        <Link className="flex items-center" href="#">
          Sotic Affirmations
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="space-y-2 mb-8 max-w-screen-lg">
          <div className="text-4xl font-bold leading-10">{quote.quote}</div>
          <div className="text-gray-500 dark:text-gray-400">
            — {quote.author}
          </div>
        </div>
        <Link
          href={`/quotes/${pseudoRandom()}`}
          className="mt-8 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 dark:text-white rounded-md flex items-center"
        >
          <Shuffle className="w-4 h-4 mr-2" /> New Quote
        </Link>
      </main>
    </div>
  );
}
