"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data with high-quality default images
const projects = [
  {
    id: 1,
    title: "Fintech Dashboard UI",
    category: "Web Application",
    description:
      "A high-performance financial dashboard built with Next.js and real-time data integration.",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full-Stack Development",
    description:
      "A headless e-commerce solution focusing on ultra-fast load times and SEO optimization.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Healthcare SaaS",
    category: "UI/UX & Frontend",
    description:
      "A secure and accessible patient management system designed for modern clinics.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Corporate Web Identity",
    category: "Brand & Web",
    description:
      "A complete digital rebranding and custom web presence for an enterprise client.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
    link: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0a0f16]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Selected <span className="text-gray-500">Works.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              A collection of digital products and web experiences engineered
              for performance and scalability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-white hover:text-[#fd741e] transition-colors border-b border-white/20 hover:border-[#fd741e] pb-1"
            >
              View all projects <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col"
            >
              {/* Image Container with Zoom Effect */}
              <Link
                href={project.link}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 mb-6"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 2} // Preload first two images for better LCP
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              </Link>

              {/* Project Info */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-[#fd741e] text-sm font-medium mb-2 uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                    <Link href={project.link}>{project.title}</Link>
                  </h3>
                  <p className="text-gray-400 font-light text-base line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Arrow Icon that moves on hover */}
                <Link
                  href={project.link}
                  className="w-12 h-12 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
