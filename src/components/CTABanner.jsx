import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, PhoneCall } from 'lucide-react';

export default function CTABanner({ onOpenQuote }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white text-[#080533] relative overflow-hidden border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-12 lg:p-16 text-center space-y-6 sm:space-y-8 shadow-sm relative overflow-hidden">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#CF9F0E] animate-pulse" />
            <span>READY TO TRANSFORM YOUR ENVIRONMENT?</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#080533] font-heading leading-tight max-w-4xl mx-auto">
            Your Wall Is More Than Just a Wall.
          </h2>

          {/* Supporting Text */}
          <p className="text-[#526079] text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            Create a space that gets noticed with custom professional wall printing. Durable, vivid, and printed in a single day.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-extrabold text-base shadow-lg hover:scale-[1.03] transition-all flex items-center justify-center gap-3 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white hover:bg-slate-50 text-[#080533] font-bold text-base border border-[#080533] transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#CF9F0E]" />
              <span>Talk to Us</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
