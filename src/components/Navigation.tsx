"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

interface NavigationProps {
  navLinks: NavLink[];
}

export default function Navigation({ navLinks }: NavigationProps) {
  const pathname = usePathname();

  return (
    <div className="hidden space-x-16 mt-2 lg:flex font-medium italic text-black">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={isActive ? "border-b-2 border-black" : undefined}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
