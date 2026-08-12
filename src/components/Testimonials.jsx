import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
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
    <section id="testimonials" className="py-14 sm:py-20 lg:py-24 bg-white text-[#080533] relative border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>CLIENT REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#080533]">
            What Our Clients Say
          </h2>

          <p className="text-[#526079] text-base sm:text-lg">
            Read authentic feedback from homeowners, interior designers, and corporate business leaders.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#E5E5E5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-6">
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#CF9F0E]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#CF9F0E]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-300 group-hover:text-[#CF9F0E] transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-[#526079] text-sm sm:text-base leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#CF9F0E]"
                />
                <div>
                  <h3 className="text-base font-bold text-[#080533] font-heading group-hover:text-[#CF9F0E] transition-colors flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle className="w-4 h-4 text-[#CF9F0E]" />
                  </h3>
                  <p className="text-xs text-[#526079] font-medium">
                    {item.role} — <span className="text-[#080533] font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
