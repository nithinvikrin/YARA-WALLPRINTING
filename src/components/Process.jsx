import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Compass, Sparkles, Printer, CheckCircle2 } from 'lucide-react';

export default function Process({ onOpenQuote }) {
  const steps = [
    {
      num: '01',
      title: 'Consultation',
      description: 'Understand your wall measurements, texture, lighting, and visual goals.',
      icon: MessageSquare,
    },
    {
      num: '02',
      title: 'Design',
      description: 'Select from our catalog or upload custom high-resolution graphics.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Preparation',
      description: 'Clean wall surface, set up laser alignment, and mask surrounding trim.',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Wall Printing',
      description: 'Print artwork directly onto the wall with precision industrial UV inks.',
      icon: Printer,
    },
    {
      num: '05',
      title: 'Final Result',
      description: 'Final quality inspection, instant UV drying, and pristine workspace handoff.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-16 lg:py-24 bg-white text-[#080533] relative border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>OUR PROCESS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#080533] tracking-tight">
            How It Works
          </h2>

          <p className="text-[#526079] text-xs sm:text-base lg:text-lg">
            A simple, seamless 5-step journey from initial consultation to a pristine finished wall artwork.
          </p>
        </div>

        {/* Steps Timeline Container */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#CF9F0E]/50 to-transparent -translate-y-6 z-0" />

          {/* Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white hover:bg-white border border-[#E8E8E8] hover:border-[#CF9F0E]/50 shadow-xs hover:shadow-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 relative flex flex-col justify-between group transition-all"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#CF9F0E] font-heading">
                        {step.num}
                      </span>
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl sm:rounded-2xl bg-[#080533] text-[#CF9F0E] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <IconComp className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-xl font-bold text-[#080533] font-heading mb-1.5 sm:mb-2 group-hover:text-[#CF9F0E] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[11px] sm:text-sm text-[#526079] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#CF9F0E]">
                    <span>Step {step.num} of 05</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-10 sm:mt-16 text-center">
          <button
            onClick={onOpenQuote}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-bold text-xs sm:text-base shadow-lg hover:scale-[1.02] transition-all w-full sm:w-auto"
          >
            Start Step 01: Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
