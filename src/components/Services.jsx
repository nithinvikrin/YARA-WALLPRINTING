import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Home, Building2, Briefcase, UtensilsCrossed, Frame, ArrowUpRight } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const servicesList = [
    {
      title: 'Custom Wall Printing',
      description: 'Print artwork, graphics, patterns and designs directly onto walls with precision digital UV ink rendering.',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Residential Printing',
      description: 'Create personalized walls for bedrooms, living rooms, children\'s rooms, nurseries and home accent walls.',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Commercial Printing',
      description: 'Transform offices, retail store environments, showrooms, and commercial real estate spaces with professional graphics.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Office Branding',
      description: 'Display company branding, corporate values, motivational murals, and creative visuals throughout workspaces.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Restaurant & Hospitality',
      description: 'Create memorable, photo-worthy interiors for restaurants, cafés, boutique hotels, and hospitality venues.',
      icon: UtensilsCrossed,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Feature Walls',
      description: 'Turn an ordinary blank wall into a visual centerpiece with high-definition custom artwork and textures.',
      icon: Frame,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white text-[#080533] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>OUR SERVICES</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#080533] font-heading tracking-tight">
            Our Wall Printing Services
          </h2>

          <p className="text-[#526079] text-xs sm:text-base lg:text-lg leading-relaxed">
            From personal spaces to large commercial environments, we create custom wall designs that make an impact.
          </p>
        </div>

        {/* Services Grid: 2 columns on mobile, 2-3 on tablet, 3-4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E8E8] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Image container with 1:1 Aspect Ratio */}
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-xl bg-[#080533] text-[#CF9F0E] border border-[#CF9F0E]/30 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-3">
                    <h3 className="text-sm sm:text-xl font-bold text-[#080533] font-heading group-hover:text-[#CF9F0E] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#526079] text-[11px] sm:text-sm leading-normal line-clamp-3 sm:line-clamp-none">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-3 pb-3 sm:px-6 sm:pb-6 pt-1">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-extrabold text-[#080533] group-hover:text-[#CF9F0E] transition-colors"
                  >
                    <span>Request Quote</span>
                    <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#080533]/5 group-hover:bg-[#CF9F0E] group-hover:text-[#080533] flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-16 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-bold text-xs sm:text-base shadow-lg transition-all w-full sm:w-auto"
          >
            <span>Need a Custom Wall Printing Solution?</span>
            <span className="text-[#080533] font-black underline">Get a Free Quote</span>
          </button>
        </div>

      </div>
    </section>
  );
}
