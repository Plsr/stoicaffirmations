"use client";

import { Shuffle } from "lucide-react";
import { useRouter } from "next/navigation";

export const NewQuoteButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.refresh()}
      className="mt-8 px-4 py-2 bg-neutral-200 dark:bg-neutral-800 dark:text-white rounded-md flex items-center"
    >
      <Shuffle className="w-4 h-4 mr-2" /> New Quote
    </button>
  );
};
