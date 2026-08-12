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
    <section className="py-14 sm:py-20 lg:py-24 bg-white text-[#080533] relative overflow-hidden border-t border-b border-[#E5E5E5]">
      {/* Background Subtle Accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#CF9F0E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>THE ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#080533]">
            Why Choose Professional{' '}
            <span className="text-[#CF9F0E]">Wall Printing?</span>
          </h2>

          <p className="text-[#526079] text-base sm:text-lg">
            Say goodbye to peeling wallpaper and messy paint templates. Direct wall printing is the modern solution for striking visual walls.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 6 Feature Blocks Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#CF9F0E]/50 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#080533] text-[#CF9F0E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#080533] font-heading group-hover:text-[#CF9F0E] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526079] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Large Visual Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E5E5] shadow-2xl group bg-white">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                alt="Precision direct wall printing on architectural surface"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080533]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#080533]/90 backdrop-blur-md rounded-2xl border border-[#CF9F0E]/40 space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-[#CF9F0E] font-bold text-sm">
                  <CheckCircle className="w-5 h-5" />
                  <span>Eco-Friendly UV Inks</span>
                </div>
                <h4 className="text-lg font-bold text-white font-heading">
                  100% Odorless & Safe for Homes & Hospitals
                </h4>
                <p className="text-xs text-slate-300">
                  Our inks dry instantly under UV light, making rooms immediately ready for occupation.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="w-full py-2.5 rounded-xl bg-[#CF9F0E] text-[#080533] font-bold text-xs uppercase tracking-wider hover:bg-[#b88b0a] transition-colors shadow-md"
                >
                  Book Your Project
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
