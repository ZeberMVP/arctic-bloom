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
    <div className="flex-1 ml-10 gap-2 flex-col sm:flex-row sm:space-x-4 lg:space-x-16 font-medium italic text-black navbar-end">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={
              isActive
                ? "font-bold sm:font-medium sm:border-b-2 border-black"
                : undefined
            }
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
