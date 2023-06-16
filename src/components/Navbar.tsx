import Navigation from "@/components/Navigation";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "BLOG", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
  ];

  return (
    <nav className="navbar bg-white border-b-2 border-b-gray-300 pl-8 sm:px-16 sm:py-10">
      <div className="flex-none">
        <Link href="/">
          <h3 className="text-2xl  sm:text-3xl lg:text-4xl font-playfair font-semibold text-black">
            ARCTIC BLOOM
          </h3>
        </Link>
      </div>
      <Navigation navLinks={navLinks} />
    </nav>
  );
};

export default Navbar;
