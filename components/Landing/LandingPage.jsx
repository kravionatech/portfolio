"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

// --- MOCK DATA ---
const projects = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web App",
    desc: "High-performance financial UI.",
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Core",
    category: "Full-Stack",
    desc: "Headless, SEO-optimized store.",
    link: "#",
  },
  {
    id: 3,
    title: "Healthcare SaaS",
    category: "UI/UX",
    desc: "Secure patient management system.",
    link: "#",
  },
  {
    id: 4,
    title: "Corporate Identity",
    category: "Brand",
    desc: "Complete digital rebranding.",
    link: "#",
  },
];

export default function KravionaPortfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navbar blur effect on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#050b14] text-white selection:bg-[#fd741e] selection:text-white font-sans">
      {/* ================= NAVBAR (Sticky & Transparent) ================= */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050b14]/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter">
            KRAVIONA<span className="text-[#fd741e]">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link
              href="#expertise"
              className="hover:text-white transition-colors"
            >
              Expertise
            </Link>
            <Link
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 bg-white text-black hover:bg-gray-200 rounded-full transition-colors"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ================= HERO SECTION (Clean & Typographic) ================= */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#094a84]/15 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-white/10 bg-white/5 text-[#fd741e] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
            Digital Engineering Studio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            We build web <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              products that perform.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Kraviona specializes in Next.js, MERN stack, and high-performance
            SEO architectures. Clean code, premium design, measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#work"
              className="px-8 py-4 bg-[#fd741e] text-white rounded-full font-semibold hover:bg-[#E88062] transition-colors shadow-lg shadow-[#fd741e]/20"
            >
              Explore Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= PORTFOLIO GRID (Featured Work) ================= */}
      <section
        id="work"
        className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Selected <span className="text-gray-500">Works.</span>
            </h2>
            <p className="text-gray-400">
              Recent projects engineered for scale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="relative w-full aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden mb-6 border border-white/5 group-hover:border-white/10 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-sm">
                  [Image: {project.title}]
                </div>
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Project Meta */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#fd741e] text-xs font-bold uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm">
                    {project.desc}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA / FOOTER ================= */}
      <footer
        id="contact"
        className="relative pt-32 pb-12 px-6 border-t border-white/5 overflow-hidden"
      >
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#094a84]/10 rounded-t-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              scale?
            </span>
          </h2>
          <Link
            href="mailto:contact@kraviona.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full text-lg font-semibold transition-colors"
          >
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} Kraviona. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
