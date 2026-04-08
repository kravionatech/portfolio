"use client";
import { motion } from 'framer-motion';

const stats = [
  { number: '50+', label: 'Projects' },
  { number: '30+', label: 'Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '100%', label: 'Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#1F2430]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-[500px] bg-[#151923] rounded-3xl border border-[#1F2430] flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute w-full h-full bg-gradient-to-br from-[#3A66FF]/10 to-transparent"></div>
          <div className="text-[#9AA0AE] font-mono z-10">[ Team / Office Illustration ]</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F2F4F8] mb-6">Who We Are</h2>
          <p className="text-[#9AA0AE] text-lg leading-relaxed mb-10">
            Kraviona is a modern digital solutions company focused on building high-performance websites and applications. We combine creativity, technology, and strategy to help businesses succeed in the digital world.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-[#151923] border border-[#1F2430] p-6 rounded-2xl">
                <h4 className="text-3xl font-bold text-[#3A66FF] mb-1">{stat.number}</h4>
                <p className="text-[#9AA0AE] text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}