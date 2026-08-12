import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Paintbrush, Cpu, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/hero_wall_printer.png',
      tag: 'Live Tech',
      title: 'Precision Direct-To-Wall Vertical Printing Technology',
      subtitle: '2880 DPI Ultra-High Resolution Output',
    },
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
      tag: 'Residential',
      title: 'Custom Feature Walls & High-Impact Murals',
      subtitle: 'Transform Living Rooms, Bedrooms & Nurseries',
    },
    {
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
      tag: 'Commercial',
      title: 'Corporate Office Branding & Retail Visuals',
      subtitle: 'Durable, Instant UV-Cured Washable Surface Ink',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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

          {/* Right Column: Auto-Scrolling 3 Image Visual Slider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#CF9F0E]/30 to-[#080533]/10 blur-xl opacity-75" />
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px]"
                  >
                    <img
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].title}
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Bottom One-Line Matter Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#080533]/90 backdrop-blur-md border border-[#CF9F0E]/40 flex items-center justify-between shadow-xl">
                      <div className="flex items-center gap-3 pr-2 overflow-hidden">
                        <div className="w-10 h-10 rounded-full bg-[#CF9F0E] fill-[#080533] flex items-center justify-center text-[#080533] font-bold shrink-0">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div className="truncate">
                          <div className="text-sm font-extrabold text-white truncate">
                            {heroSlides[currentSlide].title}
                          </div>
                          <div className="text-xs text-slate-300 truncate">
                            {heroSlides[currentSlide].subtitle}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded bg-[#CF9F0E]/20 text-[#CF9F0E] uppercase tracking-wider shrink-0">
                        {heroSlides[currentSlide].tag}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Controls: Dots & Arrows */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                    className="w-8 h-8 rounded-full bg-black/50 text-white hover:bg-[#CF9F0E] hover:text-[#080533] flex items-center justify-center transition-colors shadow-md"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                    className="w-8 h-8 rounded-full bg-black/50 text-white hover:bg-[#CF9F0E] hover:text-[#080533] flex items-center justify-center transition-colors shadow-md"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Dots Indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === idx ? 'w-6 bg-[#CF9F0E]' : 'w-2 bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
