import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Printer, PenTool, UserCheck, Box, Leaf, ShieldCheck } from 'lucide-react';

export default function Hero({ heroData, onOpenQuote }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getImageUrl = (url) => {
    if (!url) return '/images/hero_botanical_mural.png';
    return url;
  };

  const mainTitle = heroData?.title || 'Transform Your Walls Into Something Remarkable';
  const mainDesc = heroData?.description || 'Professional wall printing for homes, businesses and creative spaces — bringing custom designs directly onto your walls with stunning precision.';
  const mainImage = getImageUrl(heroData?.image_url);
  const mobileImage = heroData?.mobile_image_url ? getImageUrl(heroData.mobile_image_url) : null;

  return (
    <section id="home" className="px-3 py-4 md:px-6 lg:px-8 lg:py-8 pt-24 sm:pt-28 lg:pt-32 bg-white text-[#080533] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. DESKTOP HERO (768px+) - Wide 16:7 Banner Layout                        */}
      {/* ========================================================================= */}
      <div className="hidden md:flex relative mx-auto w-full max-w-7xl aspect-[16/7] min-h-[480px] lg:min-h-[560px] overflow-hidden rounded-2xl lg:rounded-[2rem] bg-[#FAF7F2] border border-[#EAE3D6] shadow-xl shadow-slate-200/40 p-6 lg:p-12 items-center">
        
        {/* Right Side 16:7 Image Banner */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] xl:w-[55%] h-full z-0 overflow-hidden">
          <picture className="w-full h-full">
            {mobileImage && (
              <source
                media="(max-width: 767px)"
                srcSet={mobileImage}
              />
            )}
            <img
              src={mainImage}
              alt={mainTitle}
              className="w-full h-full object-cover object-[50%_center] aspect-[16/7]"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/placeholder-product.svg';
              }}
            />
          </picture>
          
          {/* Soft Left Cream Masking */}
          <div 
            className="absolute inset-y-0 left-0 w-[55%] pointer-events-none z-10"
            style={{
              background: 'linear-gradient(90deg, #FAF7F2 0%, rgba(250,247,242,0.95) 15%, rgba(250,247,242,0.65) 40%, rgba(250,247,242,0) 100%)'
            }}
          />
        </div>

        {/* Left Side Desktop Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-[54%] xl:w-[50%] space-y-5 lg:space-y-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F3ECE0] border border-[#D9CDB8] text-xs font-semibold text-[#080533] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#CF9F0E] shrink-0" />
              <span>Next-Gen Direct Wall Printing Technology</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#080533] leading-[1.08] font-heading tracking-tight max-w-[560px]">
            {mainTitle}
          </h1>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#526079] max-w-[480px] font-normal">
            {mainDesc}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F3ECE0] border border-[#E5DAC6] text-xs font-semibold text-[#080533]">
              <Printer className="w-4 h-4 text-[#080533] shrink-0" />
              <span>Wall Printing</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F3ECE0] border border-[#E5DAC6] text-xs font-semibold text-[#080533]">
              <PenTool className="w-4 h-4 text-[#080533] shrink-0" />
              <span>Custom Design</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F3ECE0] border border-[#E5DAC6] text-xs font-semibold text-[#080533]">
              <UserCheck className="w-4 h-4 text-[#080533] shrink-0" />
              <span>Professional Installation</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="h-[54px] px-8 rounded-2xl bg-[#D9A310] hover:bg-[#c4920c] text-[#080533] font-bold text-sm shadow-md shadow-[#CF9F0E]/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('work')}
              className="h-[54px] px-8 rounded-2xl bg-white hover:bg-slate-50 text-[#080533] font-bold text-sm border border-[#DDD6C8] shadow-xs transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Desktop Stats */}
          <div className="pt-5 border-t border-[#EAE2D3] grid grid-cols-3 gap-6 max-w-[520px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F3ECE0] text-[#080533] flex items-center justify-center shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-extrabold text-[#080533] font-heading leading-none">500+</div>
                <div className="text-[11px] text-[#6B7280] font-medium mt-1">Walls Printed</div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-l border-[#EAE2D3] pl-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3ECE0] text-[#080533] flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-extrabold text-[#080533] font-heading leading-none">100%</div>
                <div className="text-[11px] text-[#6B7280] font-medium mt-1">Eco UV Ink</div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-l border-[#EAE2D3] pl-6">
              <div className="w-10 h-10 rounded-xl bg-[#F3ECE0] text-[#080533] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-extrabold text-[#080533] font-heading leading-none">12+ Yrs</div>
                <div className="text-[11px] text-[#6B7280] font-medium mt-1">Durability</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE HERO (<768px) - Compact Native Mobile Banner & Structured Text  */}
      {/* ========================================================================= */}
      <div className="block md:hidden mx-auto w-full max-w-full space-y-4">
        
        {/* Compact Mobile Image Banner */}
        <div className="relative mx-3 w-auto h-[170px] sm:h-[210px] overflow-hidden rounded-xl bg-[#FAF7F2] border border-[#EAE3D6] shadow-sm">
          <picture className="w-full h-full">
            {mobileImage && (
              <source
                media="(max-width: 767px)"
                srcSet={mobileImage}
              />
            )}
            <img
              src={mainImage}
              alt={mainTitle}
              className="absolute inset-0 h-full w-full object-cover object-[50%_center]"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/placeholder-product.svg';
              }}
            />
          </picture>
        </div>

        {/* Structured Mobile Text Content Below Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-3 space-y-3.5 text-left"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECE0] border border-[#D9CDB8] text-[10px] font-semibold text-[#080533]">
            <Sparkles className="w-3 h-3 text-[#CF9F0E] shrink-0" />
            <span className="truncate">Next-Gen Direct Wall Printing</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-[#080533] leading-snug font-heading tracking-tight">
            {mainTitle}
          </h1>

          <p className="text-xs sm:text-sm leading-relaxed text-[#526079] font-normal">
            {mainDesc}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#F3ECE0] border border-[#E5DAC6] text-[10px] font-semibold text-[#080533]">
              <Printer className="w-3 h-3 text-[#080533] shrink-0" />
              <span>Wall Printing</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#F3ECE0] border border-[#E5DAC6] text-[10px] font-semibold text-[#080533]">
              <PenTool className="w-3 h-3 text-[#080533] shrink-0" />
              <span>Custom Design</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#F3ECE0] border border-[#E5DAC6] text-[10px] font-semibold text-[#080533]">
              <UserCheck className="w-3 h-3 text-[#080533] shrink-0" />
              <span>Installation</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-1">
            <button
              onClick={onOpenQuote}
              className="h-11 px-6 rounded-xl bg-[#D9A310] hover:bg-[#c4920c] text-[#080533] font-bold text-xs shadow-md shadow-[#CF9F0E]/20 transition-all flex items-center justify-center gap-2 group cursor-pointer w-full"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('work')}
              className="h-11 px-6 rounded-xl bg-white hover:bg-slate-50 text-[#080533] font-bold text-xs border border-[#DDD6C8] shadow-xs transition-all flex items-center justify-center gap-2 group cursor-pointer w-full"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="pt-3 border-t border-[#EAE2D3] grid grid-cols-3 gap-2 text-center">
            <div className="py-1">
              <div className="text-sm font-extrabold text-[#080533] font-heading">500+</div>
              <div className="text-[10px] text-[#6B7280] font-medium">Walls Printed</div>
            </div>
            <div className="py-1 border-l border-[#EAE2D3]">
              <div className="text-sm font-extrabold text-[#080533] font-heading">100%</div>
              <div className="text-[10px] text-[#6B7280] font-medium">Eco UV Ink</div>
            </div>
            <div className="py-1 border-l border-[#EAE2D3]">
              <div className="text-sm font-extrabold text-[#080533] font-heading">12+ Yrs</div>
              <div className="text-[10px] text-[#6B7280] font-medium">Durability</div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
