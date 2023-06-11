import Navigation from "@/components/Navigation";

const Navbar = () => {
  const navLinks = [
    { name: "BLOG", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "LINKS", href: "/links" },
    { name: "PROJECTS", href: "/projects" },
  ];
  return (
    <nav className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-8 mx-auto bg-white border-b-2 border-b-gray-300">
      <div>
        <h3 className="text-3xl font-playfair font-semibold text-black">
          ARTIC BLOOM
        </h3>
      </div>
      <Navigation navLinks={navLinks} />
      <div className="flex lg:hidden">
        <div className="space-y-2 mt-2">
          <span className="block w-8 h-0.5 bg-black animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-black animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-black animate-pulse"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
