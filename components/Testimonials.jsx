"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    text: "Kraviona completely transformed our digital presence. The new platform is blazing fast and our conversion rates have doubled.",
  },
  {
    name: "David Chen",
    role: "Founder, StartupX",
    text: "Professional, communicative, and technically brilliant. They delivered the MVP a week ahead of schedule.",
  },
  {
    name: "Emma Watson",
    role: "Marketing Director",
    text: "The attention to UI/UX detail is unmatched. They perfectly captured our brand identity in the new design.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 border-t border-[#1F2430]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F2F4F8] mb-4">
            Client Feedback
          </h2>
          <p className="text-[#9AA0AE] max-w-2xl mx-auto">
            Don't just take our word for it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#151923] border border-[#1F2430] p-8 rounded-2xl"
            >
              <div className="flex gap-1 text-[#3A66FF] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-[#F2F4F8] text-lg leading-relaxed mb-8 italic">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F2430] rounded-full flex items-center justify-center text-[#9AA0AE] font-bold">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#F2F4F8]">{rev.name}</h4>
                  <p className="text-sm text-[#9AA0AE]">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
