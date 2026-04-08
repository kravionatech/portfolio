"use client";
import { motion } from 'framer-motion';
import { Code, Smartphone, Layout, LineChart, Megaphone, Wrench } from 'lucide-react';

const services = [
  { icon: <Code size={32} />, title: 'Web Development', desc: 'Custom, high-performance websites built with modern frameworks.' },
  { icon: <Smartphone size={32} />, title: 'App Development', desc: 'Native and cross-platform mobile applications for iOS and Android.' },
  { icon: <Layout size={32} />, title: 'UI UX Design', desc: 'Intuitive, pixel-perfect interfaces designed for user engagement.' },
  { icon: <LineChart size={32} />, title: 'SEO Optimization', desc: 'Data-driven strategies to rank your website higher on search engines.' },
  { icon: <Megaphone size={32} />, title: 'Digital Marketing', desc: 'Targeted campaigns to grow your audience and increase conversions.' },
  { icon: <Wrench size={32} />, title: 'Maintenance Support', desc: 'Reliable updates, security patches, and ongoing technical support.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 border-t border-[#1F2430]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F2F4F8] mb-4">Our Services</h2>
          <p className="text-[#9AA0AE] max-w-2xl mx-auto">End-to-end digital solutions tailored for your business needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#151923] border border-[#1F2430] p-8 rounded-2xl group hover:border-[#3A66FF] transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(58,102,255,0.15)]"
            >
              <div className="text-[#3A66FF] mb-6">{srv.icon}</div>
              <h3 className="text-xl font-bold text-[#F2F4F8] mb-3">{srv.title}</h3>
              <p className="text-[#9AA0AE] leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}