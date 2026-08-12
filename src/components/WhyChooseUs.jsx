import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Zap, ShieldCheck, UserCheck, LayoutGrid, CheckCircle } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const reasons = [
    {
      icon: Sparkles,
      title: 'High-Quality Printing',
      description: 'Ultra-crisp 2880 DPI direct printing with vivid colors, precise micro-details, and rich contrast.',
    },
    {
      icon: Layers,
      title: 'Custom Designs',
      description: 'Full creative freedom — print any artwork, photo, vector pattern, graphic or custom brand identity.',
    },
    {
      icon: ShieldCheck,
      title: 'Durable Finish',
      description: 'UV-cured waterproof inks that are instantly dry, scratch-resistant, washable and non-fading for 12+ years.',
    },
    {
      icon: Zap,
      title: 'Fast Installation',
      description: 'Efficient setup and direct wall printing completed in hours without dust, chemical smell, or wall damage.',
    },
    {
      icon: UserCheck,
      title: 'Professional Service',
      description: 'End-to-end expertise from wall inspection and surface preparation to color calibration and final delivery.',
    },
    {
      icon: LayoutGrid,
      title: 'Suitable for Different Spaces',
      description: 'Prints on plaster, concrete, brick, wood, glass, acrylic, metal, wallpaper, and textured tiles.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white text-[#080533] relative overflow-hidden border-t border-b border-[#E5E5E5]">
      {/* Background Subtle Accent */}
      <div className="absolute bottom-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#CF9F0E]/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>THE ADVANTAGE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#080533] tracking-tight">
            Why Choose Professional{' '}
            <span className="text-[#CF9F0E]">Wall Printing?</span>
          </h2>

          <p className="text-[#526079] text-xs sm:text-base lg:text-lg leading-relaxed">
            Say goodbye to peeling wallpaper and messy paint templates. Direct wall printing is the modern solution for striking visual walls.
          </p>
        </div>

        {/* 3-Column Grid for Tablet & Desktop / 1-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E5E5] hover:border-[#CF9F0E]/50 shadow-xs hover:shadow-lg transition-all group flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-[#080533] text-[#CF9F0E] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-md shrink-0">
                  <IconComponent className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-[#080533] font-heading group-hover:text-[#CF9F0E] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#526079] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Banner Card below */}
        <div className="mt-8 sm:mt-12">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E5E5] shadow-xl bg-[#080533] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-[#CF9F0E] font-bold text-xs sm:text-sm">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
                <span>100% Odorless & Safe for Homes & Hospitals</span>
              </div>
              <h4 className="text-xl sm:text-3xl font-extrabold text-white font-heading">
                Instant UV-Cured Waterproof Inks
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Our eco-friendly inks dry instantly under UV light, making rooms immediately ready for occupation without fumes or drying delay.
              </p>
            </div>
            
            <button
              onClick={onOpenQuote}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#CF9F0E] text-[#080533] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#b88b0a] transition-all shadow-lg shrink-0 w-full sm:w-auto"
            >
              Book Your Project
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
