import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, MapPin } from 'lucide-react';

export default function Portfolio({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Residential', 'Office', 'Restaurant', 'Retail', 'Hospitality', 'Creative Walls'];

  const projects = [
    {
      id: 1,
      title: 'Botanical Sanctuary Living Room',
      category: 'Residential',
      location: 'Amsterdam Penthouse',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      description: 'Custom botanical wall printing spanning 18m² across a double-height residential living room wall.',
    },
    {
      id: 2,
      title: 'Tech Innovation HQ Brand Wall',
      category: 'Office',
      location: 'Rotterdam Innovation Hub',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      description: 'Corporate logo, values, and circuit board digital artwork printed directly onto polished concrete walls.',
    },
    {
      id: 3,
      title: 'Artisan Bistro Floral Mural',
      category: 'Restaurant',
      location: 'Utrecht Dining District',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      description: 'Vibrant hand-drawn style floral graphics printed on raw brick restaurant dining area.',
    },
    {
      id: 4,
      title: 'Luxury Boutique Showcase Wall',
      category: 'Retail',
      location: 'The Hague Fashion Promenade',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      description: 'Gold monochrome geometric patterns printed on black matte display walls.',
    },
    {
      id: 5,
      title: 'Grand Hotel Reception Accent',
      category: 'Hospitality',
      location: 'Eindhoven Luxury Hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      description: 'Custom landscape artwork printed behind front desk check-in area across textured plaster wall.',
    },
    {
      id: 6,
      title: 'Cosmic Abstract Studio Wall',
      category: 'Creative Walls',
      location: 'Design Studio Atelier',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      description: 'Experimental fluid art explosion printed directly on a studio feature wall.',
    },
    {
      id: 7,
      title: 'Modern Master Bedroom Accent',
      category: 'Residential',
      location: 'Haarlem Villa',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description: 'Monochrome mountain silhouette printed directly on plaster behind king headboard.',
    },
    {
      id: 8,
      title: 'Co-Working Space Wall Blueprint',
      category: 'Office',
      location: 'Central Creative Hub',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      description: 'Architectural blueprint artwork stretching 22 meters in main open workspace.',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-white text-[#080533] relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto px-3 sm:px-6 lg:px-8 3xl:px-16 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>PORTFOLIO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#080533] tracking-tight">
            Our Work
          </h2>

          <p className="text-[#526079] text-xs sm:text-base lg:text-lg">
            See how blank walls become powerful visual spaces. Browse our completed direct-to-wall printing projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 overflow-x-auto pb-2 scrollbar-none max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${
                activeFilter === cat
                  ? 'bg-[#CF9F0E] text-[#080533] shadow-md scale-105 font-bold'
                  : 'bg-slate-100 text-[#526079] hover:bg-[#080533] hover:text-white border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid: 1:1 Aspect Ratio Images */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-[#E8E8E8] shadow-xs hover:shadow-2xl aspect-square w-full"
              >
                {/* 1:1 Square Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-square"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080533] via-[#080533]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#080533]/80 backdrop-blur-md border border-[#CF9F0E]/40 text-[9px] sm:text-[10px] font-extrabold text-[#CF9F0E] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 flex flex-col justify-end">
                  <h3 className="text-xs sm:text-base font-bold text-white font-heading group-hover:text-[#CF9F0E] transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-300 mt-1.5 sm:mt-2">
                    <span className="flex items-center gap-1 truncate max-w-[80%]">
                      <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#CF9F0E] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </span>
                    <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#CF9F0E] text-[#080533] flex items-center justify-center font-bold group-hover:scale-110 transition-transform shrink-0">
                      <ArrowUpRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#080533] border border-[#CF9F0E]/40 rounded-2xl sm:rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative my-auto max-h-[90vh] flex flex-col md:flex-row"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 z-20 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#CF9F0E] hover:text-[#080533] transition-colors"
                >
                  <X className="w-5 sm:w-6 h-5 sm:h-6" />
                </button>

                <div className="md:w-3/5 relative min-h-[220px] sm:min-h-[300px] aspect-square">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>

                <div className="md:w-2/5 p-5 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#CF9F0E]/20 border border-[#CF9F0E]/40 text-xs font-bold text-[#CF9F0E]">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <MapPin className="w-4 h-4 text-[#CF9F0E]" />
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onOpenQuote();
                      }}
                      className="w-full py-3 rounded-full bg-[#CF9F0E] text-[#080533] font-bold text-xs sm:text-sm shadow-lg hover:bg-[#b88b0a] transition-all"
                    >
                      Request Similar Print
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
