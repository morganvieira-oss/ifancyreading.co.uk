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
    <nav className="border-b border-primary bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-primary">
            i fancy reading
          </Link>
          <div className="hidden md:flex space-x-8">
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
            className="md:hidden p-2 text-green-01 font-medium hover:text-primary hover:font-bold"
            aria-label="Toggle menu"
          >
            {isMenuVisible ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`md:hidden grid transition-all duration-500 ease-in-out ${
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
