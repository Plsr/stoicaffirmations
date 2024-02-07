"use client";

import { quotes } from "@/util/data/quotes";
import { Shuffle } from "lucide-react";
import { useState } from "react";

const pseudoRandom = () => Math.floor(Math.random() * quotes.length);

export const Quote = ({ initalQuoteIndex }: { initalQuoteIndex: number }) => {
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(initalQuoteIndex);
  const quote = quotes[randomQuoteIndex];

  return (
    <>
      <div className="space-y-2 mb-8">
        <div className="text-4xl font-bold leading-none">{quote.quote}</div>
        <div className="text-gray-500 dark:text-gray-400">— {quote.author}</div>
      </div>
      <button
        onClick={() => setRandomQuoteIndex(pseudoRandom())}
        className="mt-8 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 dark:text-white rounded-md flex items-center"
      >
        <Shuffle className="w-4 h-4 mr-2" /> New Quote
      </button>
    </>
  );
};
