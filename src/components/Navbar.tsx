"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NavLink, MenuState } from "./NavLink";
import Link from "next/link";

const NAV_LINKS = [
  { name: "quiz", href: "/quiz" },
  { name: "about", href: "/about" },
];

const MENU_CLOSE_DURATION_MS = 700;

export function Navbar() {
  const [menuState, setMenuState] = useState<MenuState>("closed");
  const pathname = usePathname();

  const toggleMenu = () => {
    if (menuState === "open") {
      setMenuState("closing");
      setTimeout(() => setMenuState("closed"), MENU_CLOSE_DURATION_MS);
    } else {
      setMenuState("open");
    }
  };

  const isMenuVisible = menuState !== "closed";

  return (
    <nav className="border-primary bg-bg border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-primary text-xl font-semibold">
            i fancy reading
          </Link>
          <div className="hidden space-x-8 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                name={link.name}
                isSelected={pathname === link.href}
                variant="desktop"
              />
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="text-green-01 hover:text-primary p-2 font-medium hover:font-bold md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuVisible ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`grid transition-all duration-500 ease-in-out md:hidden ${
            menuState === "open"
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
          style={{ transitionDelay: menuState === "closing" ? "500ms" : "0ms" }}
        >
          <div className="overflow-hidden">
            <div className="pb-4">
              {NAV_LINKS.map((link, index) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  name={link.name}
                  isSelected={pathname === link.href}
                  variant="mobile"
                  animationState={{ menuState, index }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
