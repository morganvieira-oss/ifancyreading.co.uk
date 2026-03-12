import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { GoHomeSection } from "@/components/GoHomeSection";

export const metadata: Metadata = {
  title: "page not found",
  description: "this page doesn't exist. sorry about that.",
};

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4">
      <Hero
        title="page not found."
        subtitle="its not you, its more than likely me."
      />

      <div className="space-y-8 text-primary pb-16">
        <p>
          i've probably fucked something up somewhere. either way, this page
          doesn't exist.
        </p>

        <hr className="border-green-02 my-8" />

        <GoHomeSection />
      </div>
    </main>
  );
}
