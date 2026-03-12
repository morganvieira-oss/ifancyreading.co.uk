import Link from "next/link";

export function GoHomeSection() {
  return (
    <div className="py-8 text-center">
      <p className="text-primary mb-4 text-lg">i'm scared. let's go home.</p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="bg-primary text-bg hover:bg-secondary inline-block px-8 py-3 font-semibold transition-colors"
        >
          go home
        </Link>
      </div>
    </div>
  );
}
