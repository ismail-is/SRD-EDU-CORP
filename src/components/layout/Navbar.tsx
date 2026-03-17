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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-1"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          {/* Logo container: optimized for all screens */}
          <div 
            className={`relative flex-shrink-0 transition-all duration-300 max-w-[70vw] ${
              isScrolled
                ? "h-20 w-[240px] sm:h-20 sm:w-[280px] md:h-20 md:w-[280px] lg:h-24 lg:w-[320px]" 
                : "h-24 w-[280px] sm:h-28 sm:w-[340px] md:h-28 md:w-[360px] lg:h-36 lg:w-[460px]"
            }`}
          >
            <Image 
              src="/SRD_logo.png" 
              alt="SRD EDU CORP Logo" 
              fill
              quality={100}
              className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, (max-width: 1024px) 360px, 460px"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-gray-800 hover:text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 bg-primary text-white hover:text-white px-6 py-2.5 rounded-full text-[15px] font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none z-50 relative p-2 md:p-3 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <HiX size={26} className="text-gray-900"/> : <HiMenu size={26} className="text-gray-900"/>}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 pb-8 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 font-medium text-lg hover:text-primary hover:bg-primary/5 transition-colors w-full rounded-xl py-3 px-4 border-b border-gray-50 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="#contact"
                  className="bg-primary text-white w-full py-4 rounded-xl flex items-center justify-center font-semibold hover:bg-primary/90 transition-colors shadow-md text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
