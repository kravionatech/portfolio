"use client";
import { motion } from "framer-motion";
import { Zap, Monitor, ShieldCheck, LifeBuoy } from "lucide-react";

const reasons = [
  {
    icon: <Zap size={28} />,
    title: "Fast Delivery",
    desc: "Optimized workflows ensuring your product hits the market quickly.",
  },
  {
    icon: <Monitor size={28} />,
    title: "Modern Design",
    desc: "Sleek, premium interfaces that build trust with your users.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Systems",
    desc: "Enterprise-grade security standards applied to every build.",
  },
  {
    icon: <LifeBuoy size={28} />,
    title: "Reliable Support",
    desc: "24/7 dedicated assistance even after the project is launched.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 border-t border-[#1F2430] bg-[#151923]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F2F4F8] mb-4">
            Why Choose Us
          </h2>
          <p className="text-[#9AA0AE] max-w-2xl mx-auto">
            We deliver excellence at every stage of development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0B0D12] border border-[#1F2430] p-8 rounded-2xl hover:border-[#3A66FF]/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-[#151923] rounded-xl flex items-center justify-center text-[#3A66FF] mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#F2F4F8] mb-3">
                {item.title}
              </h3>
              <p className="text-[#9AA0AE] text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
