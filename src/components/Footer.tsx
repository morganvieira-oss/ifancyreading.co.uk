"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SITE_LINKS = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "quiz", href: "/quiz" },
];

const UK_RESOURCES = [
  {
    name: "find your local library",
    href: "https://www.gov.uk/local-library-services",
  },
  { name: "waterstones", href: "https://www.waterstones.com/" },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-primary bg-bg mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="max-w-xs">
            <h4 className="text-xl font-semibold text-primary mb-4">
              i fancy reading
            </h4>
            <p className="text-green-01">
              a simple site to help you find your next book. no algorithms, no
              accounts, no ads. just a quiz and a recommendation.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-1 font-lekton">
                this site
              </h4>
              <ul className="space-y-2 text-green-01">
                {SITE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`border-b transition-colors ${
                        pathname === link.href
                          ? "border-primary font-bold text-primary"
                          : "border-transparent font-medium hover:text-primary hover:border-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-1 font-lekton">
                resources
              </h4>
              <ul className="space-y-2 text-green-01">
                {UK_RESOURCES.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
