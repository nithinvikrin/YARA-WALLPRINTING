import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, UtensilsCrossed, Hotel, ShoppingBag, GraduationCap, Store, Sparkles, ArrowRight } from 'lucide-react';

export default function Applications({ onOpenQuote }) {
  const spaces = [
    {
      title: 'Homes',
      subtitle: 'Living rooms, bedrooms & kids nurseries',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Offices',
      subtitle: 'Boardrooms, lobbies & open plan areas',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Restaurants',
      subtitle: 'Dining rooms, bars & café feature walls',
      icon: UtensilsCrossed,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Hotels',
      subtitle: 'Suite headboards, hallways & lounge spaces',
      icon: Hotel,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Retail Stores',
      subtitle: 'Window backdrops & brand display walls',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Schools',
      subtitle: 'Libraries, halls & educational murals',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Commercial Spaces',
      subtitle: 'Showrooms, fitness centers & health clinics',
      icon: Store,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Creative Studios',
      subtitle: 'Photography, podcast & design backdrops',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="applications" className="py-14 sm:py-20 lg:py-24 bg-white text-[#080533] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>VERSATILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080533] font-heading">
            Made For Any Space
          </h2>

          <p className="text-[#526079] text-base sm:text-lg">
            Our precision wall printers operate smoothly across diverse residential, commercial, and institutional environments.
          </p>
        </div>

        {/* 8 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {spaces.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={onOpenQuote}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-[#E8E8E8] aspect-[3/4] flex flex-col justify-end"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080533] via-[#080533]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Content */}
                <div className="relative p-6 space-y-2 z-10">
                  <div className="w-10 h-10 rounded-2xl bg-[#CF9F0E] text-[#080533] flex items-center justify-center font-bold mb-3 shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#CF9F0E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {item.subtitle}
                  </p>
                  
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#CF9F0E] group-hover:translate-x-1 transition-transform">
                    <span>Explore Options</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
