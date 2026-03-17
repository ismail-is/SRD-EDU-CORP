"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Programs", href: "#programs" },
  { name: "Vision", href: "#vision" },
  { name: "Partners", href: "#partners" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-1"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          {/* Logo container */}
          <div 
            className={`relative shrink-0 transition-all duration-300 ${
              isScrolled
                ? "h-14 w-[180px] sm:h-16 sm:w-[220px] md:h-20 md:w-[280px] lg:h-24 lg:w-[320px]"
                : "h-20 w-[220px] sm:h-24 sm:w-[280px] md:h-28 md:w-[340px] lg:h-36 lg:w-[420px]"
            }`}
          >
            <Image 
              src="/SRD_logo.png" 
              alt="SRD EDU CORP Logo" 
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 420px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl lg:hidden flex flex-col pt-4 pb-8 px-6 border-t border-gray-100 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 font-medium text-lg hover:text-primary hover:bg-gray-50 transition-colors w-full rounded-lg py-3 px-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-primary text-white w-full py-4 mt-4 rounded-xl text-center font-medium hover:bg-primary-light transition-colors shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
