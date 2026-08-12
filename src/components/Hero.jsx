import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Printer, PenTool, UserCheck, Box, Leaf, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 lg:pt-[104px] pb-12 bg-white text-[#080533]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Hero Card Container */}
        <div className="relative rounded-[32px] sm:rounded-[36px] bg-[#FAF7F2] border border-[#EAE3D6] shadow-xl shadow-slate-200/40 p-6 sm:p-10 lg:p-14 overflow-hidden min-h-[580px] lg:min-h-[620px] flex items-center">
          
          {/* Right Side Interior Photography Image with Soft Left Fade (Desktop) */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[54%] h-full z-0 overflow-hidden">
            <img
              src="/images/hero_botanical_mural.png"
              alt="Luxury modern living room with custom direct-to-wall printed botanical tree mural"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Left Edge Soft Cream Fade Overlay Mask */}
            <div 
              className="absolute inset-y-0 left-0 w-[55%] pointer-events-none z-10"
              style={{
                background: 'linear-gradient(90deg, #FAF7F2 0%, rgba(250,247,242,0.95) 15%, rgba(250,247,242,0.65) 40%, rgba(250,247,242,0) 100%)'
              }}
            />
          </div>

          {/* Left Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-full lg:w-[52%] space-y-6 sm:space-y-7"
          >
            {/* 1. Top Outline Pill Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3ECE0] border border-[#D9CDB8] text-xs font-semibold text-[#080533] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#CF9F0E]" />
                <span>Next-Gen Direct Wall Printing Technology</span>
              </div>
            </div>

            {/* 2. Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#080533] leading-[1.08] font-heading tracking-[-1.5px] max-w-[540px]">
              Transform Your Walls{' '}
              <span className="block text-[#CF9F0E]">
                Into Something Remarkable
              </span>
            </h1>

            {/* 3. Description Paragraph */}
            <p className="text-sm sm:text-base lg:text-[16px] leading-[1.7] text-[#526079] max-w-[480px] font-normal">
              Professional wall printing for homes, businesses and creative spaces — bringing custom designs directly onto your walls with stunning precision.
            </p>

            {/* 4. Three Feature Items Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#F3ECE0] border border-[#E5DAC6] text-xs font-semibold text-[#080533]">
                <Printer className="w-4 h-4 text-[#080533]" />
                <span>Wall Printing</span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#F3ECE0] border border-[#E5DAC6] text-xs font-semibold text-[#080533]">
                <PenTool className="w-4 h-4 text-[#080533]" />
                <span>Custom Design</span>
              </div>

              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#F3ECE0] border border-[#E5DAC6] text-xs font-semibold text-[#080533]">
                <UserCheck className="w-4 h-4 text-[#080533]" />
                <span>Professional Installation</span>
              </div>
            </div>

            {/* 5. CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="h-[54px] px-8 rounded-2xl bg-[#D9A310] hover:bg-[#c4920c] text-[#080533] font-bold text-sm shadow-md shadow-[#CF9F0E]/20 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('work')}
                className="h-[54px] px-8 rounded-2xl bg-white hover:bg-slate-50 text-[#080533] font-bold text-sm border border-[#DDD6C8] shadow-xs transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* 6. Statistics Row */}
            <div className="pt-6 border-t border-[#EAE2D3] grid grid-cols-3 gap-3 sm:gap-6 max-w-[520px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F3ECE0] text-[#080533] flex items-center justify-center shrink-0">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#080533] font-heading leading-none">
                    500+
                  </div>
                  <div className="text-[11px] text-[#6B7280] font-medium mt-1">
                    Walls Printed
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-[#EAE2D3] pl-3 sm:pl-6">
                <div className="w-10 h-10 rounded-xl bg-[#F3ECE0] text-[#080533] flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#080533] font-heading leading-none">
                    100%
                  </div>
                  <div className="text-[11px] text-[#6B7280] font-medium mt-1">
                    Eco UV Ink
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-[#EAE2D3] pl-3 sm:pl-6">
                <div className="w-10 h-10 rounded-xl bg-[#F3ECE0] text-[#080533] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#080533] font-heading leading-none">
                    12+ Yrs
                  </div>
                  <div className="text-[11px] text-[#6B7280] font-medium mt-1">
                    Color Durability
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Visual Image Reflow */}
            <div className="block lg:hidden pt-4 rounded-2xl overflow-hidden">
              <img
                src="/images/hero_botanical_mural.png"
                alt="Luxury modern living room with custom direct-to-wall printed botanical tree mural"
                className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl border border-[#EAE3D6]"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
