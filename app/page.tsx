import { NewQuoteButton } from "@/components/NewQuoteButton";
import Link from "next/link";

export const metadata = {
  title: "Sotic Affirmations",
  description:
    "A collection of quotes from Stoic philosophers to help you get through tough times.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function Component() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6">
        <Link className="flex items-center" href="#">
          Sotic Affirmations
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="space-y-2 mb-8">
          <div className="text-4xl font-bold leading-none">{quote.quote}</div>
          <div className="text-gray-500 dark:text-gray-400">
            — {quote.author}
          </div>
        </div>
        <NewQuoteButton />
      </main>
    </div>
  );
}

const quotes = [
  {
    author: "Marcus Aurelius",
    quote:
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
  },
  {
    author: "Seneca",
    quote: "Difficulties strengthen the mind, as labor does the body.",
  },
  {
    author: "Marcus Aurelius",
    quote:
      "Choose not to be harmed—and you won’t feel harmed. Don’t feel harmed—and you haven’t been.",
  },
  {
    author: "Seneca",
    quote: "We suffer more often in imagination than in reality.",
  },
  {
    author: "Seneca",
    quote:
      "He who fears death will never do anything worth of a man who is alive.",
  },
  {
    author: "Epictetus",
    quote:
      "It’s not what happens to you, but how you react to it that matters.",
  },
  {
    author: "Epictetus",
    quote:
      "Don’t seek for everything to happen as you wish, but rather wish that everything happens as it actually will—then your life will flow well.",
  },
  {
    author: "Marcus Aurelius",
    quote:
      "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
  },
  { author: "Epictetus", quote: "Only the educated are free." },
  {
    author: "Seneca",
    quote:
      "No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have.",
  },
  {
    author: "Epictetus",
    quote:
      "Man is not worried by real problems so much as by his imagined anxieties about real problems.",
  },
  { author: "Heraclitus", quote: "To be even minded is the greatest virtue." },
  {
    author: "Epictetus",
    quote:
      "Do not be disturbed by the clamor of the world that passes away. Let death and exile, and all other things which appear terrible, be daily before your eyes, but chiefly death; and you will never entertain any abject thought, nor too eagerly covet anything.",
  },
  {
    author: "Epictetus",
    quote:
      "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
  },
  {
    author: "Seneca",
    quote:
      "Begin at once to live, and count each separate day as a separate life.",
  },
  {
    author: "Seneca",
    quote: "It does not matter what you bear, but how you bear it.",
  },
  {
    author: "Marcus Aurelius",
    quote: "Loss is nothing else but change, and change is Nature's delight.",
  },
  {
    author: "Seneca",
    quote:
      "He suffers more than necessary, who suffers before it is necessary.",
  },
  {
    author: "Viktor Frankl",
    quote:
      "When we are no longer able to change a situation, we are challenged to change ourselves.",
  },
];
