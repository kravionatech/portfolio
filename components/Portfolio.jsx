"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    desc: "A high-converting online store built with Next.js.",
    tags: ["Next.js", "Tailwind", "Stripe"],
  },
  {
    title: "Business Landing Page",
    desc: "Lead generation platform for a B2B startup.",
    tags: ["React", "Framer Motion"],
  },
  {
    title: "Dashboard System",
    desc: "Complex data visualization admin panel.",
    tags: ["React", "D3.js", "Node"],
  },
  {
    title: "Portfolio Website",
    desc: "Award-winning creative portfolio.",
    tags: ["Next.js", "GSAP"],
  },
  {
    title: "Booking Platform",
    desc: "Real-time reservation system.",
    tags: ["MERN Stack", "Redis"],
  },
  {
    title: "SaaS Application",
    desc: "Cloud-based project management tool.",
    tags: ["Next.js", "PostgreSQL"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 border-t border-[#1F2430] bg-[#0B0D12]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F2F4F8] mb-4">
            Selected Work
          </h2>
          <p className="text-[#9AA0AE] max-w-2xl mx-auto">
            Showcasing our recent projects and digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#151923] border border-[#1F2430]"
            >
              <div className="h-60 bg-[#1F2430] relative overflow-hidden flex items-center justify-center">
                {/* Fallback Image Box */}
                <div className="text-[#9AA0AE] font-mono">
                  [ Project Image ]
                </div>
                <div className="absolute inset-0 bg-[#3A66FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold tracking-wider uppercase border border-white px-4 py-2 rounded-full">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F2F4F8] mb-2 group-hover:text-[#3A66FF] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-[#9AA0AE] mb-4 text-sm">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 bg-[#0B0D12] text-[#3A66FF] rounded-full border border-[#1F2430]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
