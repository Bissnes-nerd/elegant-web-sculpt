
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tight">
          AGENCY
        </a>
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="relative text-sm font-medium text-gray-800 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
  >
    {children}
  </a>
);

export default Navbar;
