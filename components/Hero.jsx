"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#F2F4F8]">
            Build Powerful Digital Experiences with{" "}
            <span className="text-[#3A66FF]">Kraviona</span>
          </h1>
          <p className="text-lg text-[#9AA0AE] max-w-lg leading-relaxed">
            We design, develop, and deliver modern websites, applications, and
            digital solutions that help businesses grow faster.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#3A66FF] hover:bg-[#3A66FF]/90 text-[#F2F4F8] font-medium rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(58,102,255,0.3)]"
            >
              Get Started
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 bg-[#151923] border border-[#1F2430] hover:border-[#3A66FF] text-[#F2F4F8] font-medium rounded-full transition-all hover:scale-105"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
        >
          {/* Abstract Floating Graphic (CSS only) */}
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#3A66FF] to-purple-600 blur-[100px] opacity-40 absolute"
          />
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full border border-[#1F2430] bg-[#151923]/50 backdrop-blur-sm rounded-3xl relative z-10 flex items-center justify-center"
          >
            <div className="text-[#9AA0AE] font-mono text-sm">
              [ Abstract Tech Illustration ]
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
