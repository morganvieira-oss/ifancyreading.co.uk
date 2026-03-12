import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { GoHomeSection } from "@/components/GoHomeSection";

export const metadata: Metadata = {
  title: "quiz",
  description: "answer a few questions and find your next book.",
  openGraph: {
    title: "quiz ~ i fancy reading",
    description: "a few questions stand between you and your next read.",
  },
};

export default function UnderConstruction() {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <Hero
        title="not quite ready."
        subtitle="this page is still being built"
      />

      <div className="space-y-8 text-primary pb-16">
        <p>check back soon x</p>

        <hr className="border-green-02 my-8" />

        <GoHomeSection />
      </div>
    </main>
  );
}
