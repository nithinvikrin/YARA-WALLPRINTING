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
      title: 'Residential Wall Printing',
      description: 'Create personalized walls for bedrooms, living rooms, children\'s rooms, nurseries and home accent walls.',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Commercial Wall Printing',
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
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-white text-[#080533] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>OUR SERVICES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080533] font-heading">
            Our Wall Printing Services
          </h2>

          <p className="text-[#526079] text-base sm:text-lg leading-relaxed">
            From personal spaces to large commercial environments, we create custom wall designs that make an impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8E8E8] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image container with aspect ratio 16:9 */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 right-4 w-11 h-11 rounded-xl bg-[#080533] text-[#CF9F0E] border border-[#CF9F0E]/30 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-7 space-y-3">
                    <h3 className="text-xl font-bold text-[#080533] font-heading group-hover:text-[#CF9F0E] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#526079] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-7 pb-7 pt-2">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#080533] group-hover:text-[#CF9F0E] transition-colors"
                  >
                    <span>Request Quote</span>
                    <div className="w-7 h-7 rounded-full bg-[#080533]/5 group-hover:bg-[#CF9F0E] group-hover:text-[#080533] flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-bold text-base shadow-lg transition-all"
          >
            <span>Need a Custom Wall Printing Solution?</span>
            <span className="text-[#080533] font-black underline">Get a Free Quote</span>
          </button>
        </div>

      </div>
    </section>
  );
}
