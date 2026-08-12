import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const testimonials = [
    {
      name: 'Elena Rostova',
      role: 'Interior Architect',
      company: 'Studio Rostova, Amsterdam',
      rating: 5,
      review: 'The print quality on our clients 15-meter office lobby feature wall exceeded all expectations. Crisp vector line details, zero ink smell, and completed in under 6 hours. Absolutely remarkable technology.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Marcus Vance',
      role: 'Commercial Developer',
      company: 'Vance Real Estate Group',
      rating: 5,
      review: 'We converted blank concrete hallway walls into custom branding art across 4 floors. Traditional wallpaper would have peeled; direct printing bonded perfectly to the textured concrete.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Sophia van Dijk',
      role: 'Homeowner',
      company: 'Residential Villa, Utrecht',
      rating: 5,
      review: 'We had a high-resolution botanical mural printed on our double-height living room wall. Guests are blown away when they touch the wall and realize it’s printed directly on plaster!',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24 bg-white text-[#080533] relative border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>CLIENT REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#080533] tracking-tight">
            What Our Clients Say
          </h2>

          <p className="text-[#526079] text-xs sm:text-base lg:text-lg">
            Read authentic feedback from homeowners, interior designers, and corporate business leaders.
          </p>
        </div>

        {/* 1-Col Mobile, 2-Col Tablet, 3-Col Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E5E5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Top Quote Icon & Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#CF9F0E]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-[#CF9F0E]" />
                      ))}
                    </div>
                    <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-slate-300 group-hover:text-[#CF9F0E] transition-colors" />
                  </div>

                  {/* Review Text */}
                  <div>
                    <p className={`text-[#526079] text-xs sm:text-base leading-relaxed italic ${!isExpanded ? 'line-clamp-4 md:line-clamp-none' : ''}`}>
                      "{item.review}"
                    </p>
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                      className="md:hidden mt-2 text-xs font-bold text-[#CF9F0E] hover:underline"
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  </div>
                </div>

                {/* Author Footer */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 flex items-center gap-3 sm:gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover border-2 border-[#CF9F0E] shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-[#080533] font-heading group-hover:text-[#CF9F0E] transition-colors flex items-center gap-1 truncate">
                      <span className="truncate">{item.name}</span>
                      <CheckCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#CF9F0E] shrink-0" />
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#526079] font-medium truncate">
                      {item.role} — <span className="text-[#080533] font-semibold">{item.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
