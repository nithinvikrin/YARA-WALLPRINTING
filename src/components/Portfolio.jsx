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
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
      description: 'Custom botanical wall printing spanning 18m² across a double-height residential living room wall.',
    },
    {
      id: 2,
      title: 'Tech Innovation HQ Brand Wall',
      category: 'Office',
      location: 'Rotterdam Innovation Hub',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
      description: 'Corporate logo, values, and circuit board digital artwork printed directly onto polished concrete walls.',
    },
    {
      id: 3,
      title: 'Artisan Bistro Floral Mural',
      category: 'Restaurant',
      location: 'Utrecht Dining District',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      description: 'Vibrant hand-drawn style floral graphics printed on raw brick restaurant dining area.',
    },
    {
      id: 4,
      title: 'Luxury Boutique Showcase Wall',
      category: 'Retail',
      location: 'The Hague Fashion Promenade',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
      description: 'Gold monochrome geometric patterns printed on black matte display walls.',
    },
    {
      id: 5,
      title: 'Grand Hotel Reception Accent',
      category: 'Hospitality',
      location: 'Eindhoven Luxury Hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      description: 'Custom landscape artwork printed behind front desk check-in area across textured plaster wall.',
    },
    {
      id: 6,
      title: 'Cosmic Abstract Studio Wall',
      category: 'Creative Walls',
      location: 'Design Studio Atelier',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=80',
      description: 'Experimental fluid art explosion printed directly on a studio feature wall.',
    },
    {
      id: 7,
      title: 'Modern Master Bedroom Accent',
      category: 'Residential',
      location: 'Haarlem Villa',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      description: 'Monochrome mountain silhouette printed directly on plaster behind king headboard.',
    },
    {
      id: 8,
      title: 'Co-Working Space Wall Blueprint',
      category: 'Office',
      location: 'Central Creative Hub',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      description: 'Architectural blueprint artwork stretching 22 meters in main open workspace.',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-14 sm:py-20 lg:py-24 bg-white text-[#080533] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080533]/5 border border-[#CF9F0E]/40 text-xs font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <span>PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#080533]">
            Our Work
          </h2>

          <p className="text-[#526079] text-base sm:text-lg">
            See how blank walls become powerful visual spaces. Browse our completed direct-to-wall printing projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#CF9F0E] text-[#080533] shadow-md scale-105 font-bold'
                  : 'bg-slate-100 text-[#526079] hover:bg-[#080533] hover:text-white border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                className="group relative rounded-3xl overflow-hidden cursor-pointer border border-[#E8E8E8] shadow-md hover:shadow-2xl aspect-[4/5]"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080533] via-[#080533]/50 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#080533]/80 backdrop-blur-md border border-[#CF9F0E]/40 text-[10px] font-extrabold text-[#CF9F0E] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#CF9F0E] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-slate-300 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#CF9F0E]" />
                      {project.location}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#CF9F0E] text-[#080533] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#080533] border border-[#CF9F0E]/40 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative max-h-[90vh] flex flex-col md:flex-row"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#CF9F0E] hover:text-[#080533] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="md:w-3/5 relative min-h-[280px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-2/5 p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#CF9F0E]/20 border border-[#CF9F0E]/40 text-xs font-bold text-[#CF9F0E]">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white font-heading">
                      {selectedProject.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <MapPin className="w-4 h-4 text-[#CF9F0E]" />
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onOpenQuote();
                      }}
                      className="w-full py-3 rounded-full bg-[#CF9F0E] text-[#080533] font-bold text-sm shadow-lg hover:bg-[#b88b0a] transition-all"
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
