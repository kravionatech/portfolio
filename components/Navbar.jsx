"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "Services",
    "Portfolio",
    "About",
    "Testimonials",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0B0D12]/80 backdrop-blur-md border-b border-[#1F2430] py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-[#F2F4F8]"
        >
          Kraviona<span className="text-[#3A66FF]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9AA0AE]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#F2F4F8] relative group transition-colors"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3A66FF] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://kraviona.com"
            className="px-6 py-2.5 bg-[#3A66FF] text-[#F2F4F8] hover:bg-[#3A66FF]/90 rounded-full transition-all hover:scale-105"
          >
            Main Site
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#F2F4F8]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#151923] border-b border-[#1F2430] py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9AA0AE] hover:text-[#F2F4F8] py-2"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
