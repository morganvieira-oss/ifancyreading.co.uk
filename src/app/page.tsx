import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "i fancy reading",
  description: "answer a few questions. get a book recommendation. that's it.",
  openGraph: {
    title: "i fancy reading",
    description: "not sure what to read? same. answer a few questions and get a book recommendation.",
  },
};

export default function Home() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center mb-16">
      <Hero title="i fancy reading." subtitle="but i don't know what" />

      <p className="text-primary text-lg mb-2">
        answer a few questions. get a book recommendation. that's it.
      </p>
      <p className="text-green-01 mb-10">
        no account needed. no endless lists. just one book to try.
      </p>

      <Link
        href="/quiz"
        className="bg-primary text-bg px-8 py-3 font-semibold hover:bg-secondary transition-colors"
      >
        let's go
      </Link>
    </main>
  );
}
