import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Paintbrush, Cpu, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-white text-[#080533]">
      {/* Background Decorative Subtle Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CF9F0E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-slate-100/50 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#080533 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Pill badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs sm:text-sm font-extrabold text-[#CF9F0E] shadow-sm uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-[#CF9F0E] animate-pulse" />
              <span>Next-Gen Direct Wall Printing Technology</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-[#080533] leading-[1.1] font-heading tracking-tight">
              Transform Your Walls Into{' '}
              <span className="text-[#CF9F0E]">
                Something Remarkable
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#526079] max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Professional wall printing for homes, businesses and creative spaces — bringing custom designs directly onto your walls with stunning precision.
            </p>

            {/* Key Value Proposition Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#080533]">
                <Cpu className="w-4 h-4 text-[#CF9F0E]" />
                <span>Wall Printing</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#080533]">
                <Paintbrush className="w-4 h-4 text-[#CF9F0E]" />
                <span>Custom Design</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#080533]">
                <ShieldCheck className="w-4 h-4 text-[#CF9F0E]" />
                <span>Professional Installation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-bold text-base shadow-xl shadow-[#CF9F0E]/25 hover:scale-[1.03] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('work')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-[#080533] font-bold text-base border-2 border-[#080533] transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>View Our Work</span>
              </button>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-center lg:justify-start gap-8">
              <div>
                <div className="text-2xl font-extrabold text-[#080533] font-heading">500+</div>
                <div className="text-xs text-[#526079] font-semibold">Walls Printed</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-2xl font-extrabold text-[#CF9F0E] font-heading">100%</div>
                <div className="text-xs text-[#526079] font-semibold">Eco UV Ink</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div className="text-2xl font-extrabold text-[#080533] font-heading">12+ Yrs</div>
                <div className="text-xs text-[#526079] font-semibold">Color Durability</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#CF9F0E]/30 to-[#080533]/10 blur-xl opacity-75" />
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl">
                <img
                  src="/images/hero_wall_printer.png"
                  alt="State of the art vertical wall printer operating on custom mural artwork"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover object-center"
                />
                
                {/* Image Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#080533]/90 backdrop-blur-md border border-[#CF9F0E]/40 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#CF9F0E] flex items-center justify-center text-[#080533] font-bold">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Direct-To-Wall UV Printing</div>
                      <div className="text-xs text-slate-300">Scratch & light resistant finish</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-[#CF9F0E]/20 text-[#CF9F0E] uppercase tracking-wider">
                    Live Tech
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
