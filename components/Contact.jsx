"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-[#1F2430] bg-[#151923]/30"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F2F4F8] mb-4">
            Let's Work Together
          </h2>
          <p className="text-[#9AA0AE]">
            Have a project in mind? Fill out the form below and we'll get back
            to you within 24 hours.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-[#151923] p-8 md:p-10 rounded-3xl border border-[#1F2430] shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#9AA0AE]">
                Full Name
              </label>
              <input
                required
                type="text"
                className="bg-[#0B0D12] border border-[#1F2430] text-[#F2F4F8] px-4 py-3 rounded-xl focus:outline-none focus:border-[#3A66FF] transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#9AA0AE]">
                Email Address
              </label>
              <input
                required
                type="email"
                className="bg-[#0B0D12] border border-[#1F2430] text-[#F2F4F8] px-4 py-3 rounded-xl focus:outline-none focus:border-[#3A66FF] transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="text-sm font-medium text-[#9AA0AE]">
              Phone (Optional)
            </label>
            <input
              type="tel"
              className="bg-[#0B0D12] border border-[#1F2430] text-[#F2F4F8] px-4 py-3 rounded-xl focus:outline-none focus:border-[#3A66FF] transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label className="text-sm font-medium text-[#9AA0AE]">
              Message
            </label>
            <textarea
              required
              rows="5"
              className="bg-[#0B0D12] border border-[#1F2430] text-[#F2F4F8] px-4 py-3 rounded-xl focus:outline-none focus:border-[#3A66FF] transition-colors resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#3A66FF] hover:bg-[#3A66FF]/90 text-[#F2F4F8] font-bold rounded-xl transition-all hover:scale-[1.02]"
          >
            Send Message
          </button>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-green-400 font-medium"
            >
              Message sent successfully! We'll be in touch soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
