import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Printer, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenQuote }) {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Palette,
      title: 'Custom Designs',
      desc: 'Bring your own artwork, corporate logos, or collaborate with our designers for tailored visual concepts.',
    },
    {
      icon: Printer,
      title: 'Professional Printing',
      desc: 'Industrial vertical wall printing equipment delivering up to 2880 DPI resolution directly onto walls.',
    },
    {
      icon: ShieldCheck,
      title: 'Durable Results',
      desc: 'Instant UV-cured inks engineered for 12+ years indoor and 5+ years outdoor fade & scratch resistance.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white text-[#080533] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with overlay accents */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src="/images/about_wall_printer.png"
                alt="Precision direct wall printing machine in action"
                className="w-full h-[320px] sm:h-[460px] lg:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#080533]/80 via-transparent to-transparent opacity-80" />

              {/* Floating Quality Badge */}
              <div className="absolute top-6 right-6 p-4 rounded-2xl bg-[#080533]/90 backdrop-blur-md border border-[#CF9F0E]/40 text-center">
                <span className="text-3xl font-extrabold text-[#CF9F0E] font-heading block">2880</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold">DPI Resolution</span>
              </div>

              {/* Bottom Feature Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#080533]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#CF9F0E] text-[#080533] flex items-center justify-center font-bold shrink-0">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">No Wallpaper, No Film, Pure Ink</h4>
                    <p className="text-xs text-slate-300">Prints directly on brick, concrete, drywall, glass, wood & metal.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
              <span>ABOUT US</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080533] font-heading leading-tight">
              We Turn Blank Walls Into{' '}
              <span className="text-[#CF9F0E]">Powerful Visual Experiences</span>
            </h2>

            {/* Concise Introduction */}
            <p className="text-[#526079] text-base sm:text-lg leading-relaxed">
              We specialize in state-of-the-art vertical wall printing technology, transforming static indoor and outdoor surfaces into high-impact artworks. Whether you want to revitalize your home living space or enhance your corporate office environment, our direct-to-wall printing delivers flawless, vibrant, and durable results without mess or fumes.
            </p>

            {/* 3 Feature Items */}
            <div className="space-y-4 pt-2">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-white hover:bg-slate-50 border border-[#E8E8E8] hover:border-[#CF9F0E]/50 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#080533] text-[#CF9F0E] flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#080533] font-heading">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#526079] mt-1 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={scrollToServices}
                className="px-8 py-3.5 rounded-full bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-bold text-sm shadow-lg shadow-[#CF9F0E]/20 hover:scale-[1.02] transition-all flex items-center gap-2 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#080533] border-2 border-[#080533] font-bold text-sm transition-all shadow-sm"
              >
                Request Consultation
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
