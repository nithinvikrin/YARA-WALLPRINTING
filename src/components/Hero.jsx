import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Paintbrush, Cpu, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-72px)] pt-[116px] lg:pt-[124px] pb-12 lg:pb-16 flex items-center bg-white text-[#080533] overflow-hidden"
    >
      {/* Subtle warm neutral background accent */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[550px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'rgba(207, 159, 14, 0.04)' }}
      />

      {/* Main 1440px max-width container with 72px padding on desktop */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[72px] w-full relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          
          {/* LEFT CONTENT COLUMN: Max width 570px */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[570px] space-y-6 text-center lg:text-left mx-auto lg:mx-0 min-w-0"
          >
            {/* 1. Badge (positioned 45-50px below navbar with 22px margin bottom) */}
            <div className="mb-[22px]">
              <div className="inline-flex items-center gap-2 px-[14px] py-[8px] rounded-full border border-[#CF9F0E] text-[#CF9F0E] bg-white text-[12px] font-semibold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#CF9F0E] animate-pulse" />
                <span>Next-Gen Direct Wall Printing Technology</span>
              </div>
            </div>

            {/* 2. Headline (Natural 2-line wrapping on desktop) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] leading-[1.02] font-extrabold text-[#080533] font-heading tracking-[-2px] max-w-[560px] mx-auto lg:mx-0">
              Transform Your Walls
              <br className="hidden sm:inline" />
              {' '}Into <span className="text-[#CF9F0E]">Something Remarkable</span>
            </h1>

            {/* 3. Description (max-width 520px) */}
            <p className="text-[15px] sm:text-[17px] leading-[1.7] text-[#526079] max-w-[520px] font-normal mx-auto lg:mx-0 pt-1">
              Professional wall printing for homes, businesses and creative spaces — bringing custom designs directly onto your walls with stunning precision.
            </p>

            {/* 4. Features (Horizontal row on desktop, gap 24px) */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-1 text-[13px] font-semibold text-[#080533]">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#CF9F0E]" />
                <span>Wall Printing</span>
              </div>
              <div className="flex items-center gap-2">
                <Paintbrush className="w-4 h-4 text-[#CF9F0E]" />
                <span>Custom Design</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#CF9F0E]" />
                <span>Professional Installation</span>
              </div>
            </div>

            {/* 5. CTA Buttons (56px height, gap 16px) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto h-[56px] px-[30px] rounded-full bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-bold text-[15px] shadow-lg shadow-[#CF9F0E]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('work')}
                className="w-full sm:w-auto h-[56px] px-[30px] rounded-full bg-white hover:bg-slate-50 text-[#080533] font-bold text-[15px] border border-[#D8D8D8] transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Our Work</span>
              </button>
            </div>

            {/* 6. Statistics Grid (3 columns with subtle vertical dividers) */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 divide-x divide-slate-200 text-center lg:text-left mt-6">
              <div className="pr-3">
                <div className="text-[24px] sm:text-[26px] font-extrabold text-[#080533] font-heading leading-none">500+</div>
                <div className="text-[11px] text-[#6B7280] font-medium mt-1">Walls Printed</div>
              </div>
              <div className="px-3">
                <div className="text-[24px] sm:text-[26px] font-extrabold text-[#CF9F0E] font-heading leading-none">100%</div>
                <div className="text-[11px] text-[#6B7280] font-medium mt-1">Eco UV Ink</div>
              </div>
              <div className="pl-3">
                <div className="text-[24px] sm:text-[26px] font-extrabold text-[#080533] font-heading leading-none">12+ Yrs</div>
                <div className="text-[11px] text-[#6B7280] font-medium mt-1">Color Durability</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL COLUMN: Max width 700px x 570px */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-end"
          >
            <div className="relative w-full max-w-[700px] h-[340px] sm:h-[460px] lg:h-[570px] rounded-[28px] overflow-hidden shadow-2xl bg-slate-100 group border border-slate-200">
              
              {/* Premium Architectural Photography Image */}
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
                alt="Modern luxury interior with direct-to-wall printed botanical mural"
                className="w-full h-full object-cover object-right group-hover:scale-103 transition-transform duration-700"
              />

              {/* Smooth Left Edge White Fade Gradient Mask */}
              <div 
                className="hidden lg:block absolute inset-y-0 left-0 w-[45%] pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255,255,255,0.92) 12%, rgba(255,255,255,0.45) 32%, rgba(255,255,255,0) 100%)'
                }}
              />

              {/* Dark Navy Information Card (360px width, bottom 24px, right 24px) */}
              <div className="absolute bottom-6 right-6 z-20 p-4 rounded-[20px] bg-[#080533] text-white border border-[#CF9F0E]/40 shadow-xl flex items-center gap-3.5 max-w-[360px]">
                <div className="w-10 h-10 rounded-xl bg-[#CF9F0E] text-[#080533] flex items-center justify-center font-bold shrink-0 shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[13px] font-extrabold text-white font-heading">
                    Direct-To-Wall UV Printing
                  </div>
                  <div className="text-[11px] text-slate-300">
                    2880 DPI scratch & fade resistant ink finish
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
