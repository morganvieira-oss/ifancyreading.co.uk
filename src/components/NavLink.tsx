import Link from "next/link";

export type MenuState = "closed" | "open" | "closing";

export interface NavLinkProps {
  href: string;
  name: string;
  isSelected: boolean;
  variant: "desktop" | "mobile";
  animationState?: { menuState: MenuState; index: number };
}

const STAGGER_DELAY_MS = 100;

export function NavLink({
  href,
  name,
  isSelected,
  variant,
  animationState,
}: NavLinkProps) {
  const baseStyles = "text-green-01 border-b hover:border-primary";
  const selectedStyles = isSelected
    ? "border-primary font-bold text-primary"
    : "border-transparent font-medium hover:text-primary";

  if (variant === "desktop") {
    return (
      <Link href={href} className={`${baseStyles} pb-1 ${selectedStyles}`}>
        {name}
      </Link>
    );
  }

  const { menuState, index } = animationState!;
  const animationStyles =
    menuState === "open"
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-4";

  return (
    <Link
      href={href}
      className={`block py-2 ${baseStyles} transition-all duration-500 ${animationStyles} ${selectedStyles}`}
      style={{
        transitionDelay:
          menuState !== "closed" ? `${index * STAGGER_DELAY_MS}ms` : "0ms",
      }}
    >
      {name}
    </Link>
  );
}
