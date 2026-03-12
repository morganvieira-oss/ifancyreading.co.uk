import Link from "next/link";

export function GoHomeSection() {
  return (
    <div className="text-center py-8">
      <p className="text-primary text-lg mb-4">i'm scared. let's go home.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-block bg-primary text-bg px-8 py-3 font-semibold hover:bg-secondary transition-colors"
        >
          go home
        </Link>
      </div>
    </div>
  );
}
