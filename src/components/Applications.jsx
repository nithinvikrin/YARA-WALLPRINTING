import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, UtensilsCrossed, Hotel, ShoppingBag, GraduationCap, Store, Sparkles, ArrowRight } from 'lucide-react';

export default function Applications({ onOpenQuote }) {
  const spaces = [
    {
      title: 'Homes',
      subtitle: 'Living rooms, bedrooms & nurseries',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Offices',
      subtitle: 'Boardrooms, lobbies & open plans',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Restaurants',
      subtitle: 'Dining rooms, bars & cafés',
      icon: UtensilsCrossed,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Hotels',
      subtitle: 'Suite headboards & lounges',
      icon: Hotel,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Retail Stores',
      subtitle: 'Window backdrops & displays',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Schools',
      subtitle: 'Libraries & educational murals',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Commercial Spaces',
      subtitle: 'Showrooms & fitness centers',
      icon: Store,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Creative Studios',
      subtitle: 'Photography & podcast backdrops',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="applications" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-white text-[#080533] relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto px-3 sm:px-6 lg:px-8 3xl:px-16 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>VERSATILITY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#080533] font-heading tracking-tight">
            Made For Any Space
          </h2>

          <p className="text-[#526079] text-xs sm:text-base lg:text-lg">
            Our precision wall printers operate smoothly across diverse residential, commercial, and institutional environments.
          </p>
        </div>

        {/* 8 Category Grid: 2 cols on mobile, 4 cols on desktop, 1:1 Aspect ratio */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
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
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-2xl border border-[#E8E8E8] aspect-square w-full flex flex-col justify-end"
              >
                {/* Background Image 1:1 */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-square"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080533] via-[#080533]/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Content */}
                <div className="relative p-3 sm:p-5 space-y-1 sm:space-y-2 z-10">
                  <div className="w-7 sm:w-10 h-7 sm:h-10 rounded-lg sm:rounded-2xl bg-[#CF9F0E] text-[#080533] flex items-center justify-center font-bold mb-1 sm:mb-3 shadow-md group-hover:scale-110 transition-transform">
                    <IconComp className="w-3.5 sm:w-5 h-3.5 sm:h-5" />
                  </div>
                  <h3 className="text-xs sm:text-xl font-bold text-white font-heading group-hover:text-[#CF9F0E] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-300 font-medium line-clamp-1">
                    {item.subtitle}
                  </p>
                  
                  <div className="pt-1 flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#CF9F0E] group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
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
