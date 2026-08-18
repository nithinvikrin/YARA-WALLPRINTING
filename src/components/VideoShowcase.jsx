import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, X, Truck, Printer, ShieldCheck, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function VideoShowcase({ onOpenQuote }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // High quality wall printing & transport showcase video loop
  const sampleVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-paint-splash-on-a-white-wall-41618-large.mp4";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const transportFeatures = [
    {
      icon: Truck,
      title: 'Ultra-Portable Transport',
      desc: 'Fits effortlessly into standard vehicle trunks or vans for fast on-site delivery and quick location deployment.',
    },
    {
      icon: Printer,
      title: '5-Minute Track Assembly',
      desc: 'Modular lightweight vertical rail system locks together smoothly in under 5 minutes without complex tools.',
    },
    {
      icon: Sparkles,
      title: 'Auto Surface Sensors',
      desc: '3D laser distance sensors continuously detect wall bumps and curves for consistent millimeter-accurate printing.',
    },
    {
      icon: ShieldCheck,
      title: 'Direct UV Ink Curing',
      desc: 'Prints directly on concrete, brick, drywall, glass, and wood with instant eco-friendly UV lamp curing.',
    },
  ];

  return (
    <section id="video" className="py-12 sm:py-16 lg:py-24 3xl:py-32 bg-[#080533] text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] 3xl:w-[1000px] h-[600px] 3xl:h-[1000px] bg-[#CF9F0E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-16 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#CF9F0E]/15 border border-[#CF9F0E]/40 text-xs sm:text-sm font-extrabold text-[#CF9F0E] uppercase tracking-wider">
            <Truck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#CF9F0E]" />
            <span>MACHINE TRANSPORT & LIVE PRINTING</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl 3xl:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight">
            See How Yara Wall Printer Works{' '}
            <span className="text-[#CF9F0E]">On-Site</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base lg:text-lg 3xl:text-2xl leading-relaxed">
            From compact vehicle transport to quick assembly and direct wall printing. Watch our industrial wall printing machine in action.
          </p>
        </div>

        {/* Video Showcase Box - 16:9 Aspect Ratio Main Player */}
        <div className="relative rounded-2xl sm:rounded-3xl 3xl:rounded-[2.5rem] overflow-hidden border border-[#CF9F0E]/30 bg-black/60 shadow-2xl shadow-[#CF9F0E]/10 mb-12 sm:mb-16">
          
          {/* Main Video Element */}
          <div className="relative aspect-video w-full max-h-[700px] 3xl:max-h-[1000px] bg-slate-950 flex items-center justify-center">
            <video
              ref={videoRef}
              src={sampleVideoUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080533]/90 via-transparent to-black/40 pointer-events-none" />

            {/* Video Controls Overlay Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 3xl:bottom-10 3xl:left-10 3xl:right-10 flex items-center justify-between z-20 bg-[#080533]/80 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 sm:w-12 sm:h-12 3xl:w-16 3xl:h-16 rounded-full bg-[#CF9F0E] text-[#080533] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-md font-bold cursor-pointer"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-5 sm:w-6 3xl:w-8 h-5 sm:h-6 3xl:h-8" /> : <Play className="w-5 sm:w-6 3xl:w-8 h-5 sm:h-6 3xl:h-8 ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-9 h-9 sm:w-10 sm:h-10 3xl:w-14 3xl:h-14 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-4 sm:w-5 3xl:w-7 h-4 sm:h-5 3xl:h-7" /> : <Volume2 className="w-4 sm:w-5 3xl:w-7 h-4 sm:h-5 3xl:h-7" />}
                </button>

                <div className="hidden sm:block text-left">
                  <div className="text-xs sm:text-sm 3xl:text-lg font-bold text-white font-heading">
                    Yara Wall Printing Machine in Action
                  </div>
                  <div className="text-[10px] sm:text-xs 3xl:text-sm text-slate-300">
                    Transportable • Quick Setup • Direct-to-Wall UV Print
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-[#CF9F0E] hover:text-[#080533] text-white font-bold text-xs sm:text-sm 3xl:text-base border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4 3xl:w-5 3xl:h-5" />
                  <span className="hidden sm:inline">Fullscreen Mode</span>
                </button>

                <button
                  onClick={onOpenQuote}
                  className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-[#CF9F0E] hover:bg-[#b88b0a] text-[#080533] font-bold text-xs sm:text-sm 3xl:text-base shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Demo</span>
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Top Left Floating Video Tag */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#CF9F0E]/40 text-[10px] sm:text-xs 3xl:text-sm font-bold text-[#CF9F0E]">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>LIVE WALL PRINT SHOWCASE</span>
            </div>
          </div>
        </div>

        {/* 4 Transport & Setup Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 3xl:gap-8">
          {transportFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 3xl:p-8 rounded-2xl sm:rounded-3xl bg-[#0f0b4b]/60 backdrop-blur-md border border-white/10 hover:border-[#CF9F0E]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#CF9F0E]/10"
              >
                <div className="w-10 sm:w-12 3xl:w-16 h-10 sm:h-12 3xl:h-16 rounded-xl sm:rounded-2xl bg-[#CF9F0E] text-[#080533] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 sm:w-6 3xl:w-8 h-5 sm:h-6 3xl:h-8" />
                </div>
                <h3 className="text-base sm:text-lg 3xl:text-2xl font-bold text-white font-heading mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm 3xl:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-full max-w-5xl 3xl:max-w-7xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-[#CF9F0E] hover:text-[#080533] transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <video
                ref={modalVideoRef}
                src={sampleVideoUrl}
                autoPlay
                controls
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
