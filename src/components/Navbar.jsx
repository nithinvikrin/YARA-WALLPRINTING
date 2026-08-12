import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sparkles, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'work', 'process', 'applications', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Our Work', href: '#work', id: 'work' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080533]/90 backdrop-blur-md py-3 shadow-xl border-b border-[#CF9F0E]/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Text Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#CF9F0E] to-[#9B7300] flex items-center justify-center text-[#080533] font-black text-xl shadow-lg shadow-[#CF9F0E]/20 group-hover:scale-105 transition-transform">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-xl text-white font-heading">
                WALL<span className="text-[#CF9F0E]">PRINTING</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-medium -mt-1">
                Precision Direct-To-Wall
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#080533]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#080533] bg-[#CF9F0E] font-semibold shadow-md'
                      : 'text-slate-200 hover:text-[#CF9F0E] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18005557788"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-[#CF9F0E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#CF9F0E]" />
              <span>+1 (800) 555-7788</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#CF9F0E] to-[#e6b825] px-6 py-2.5 text-sm font-bold text-[#080533] shadow-lg shadow-[#CF9F0E]/25 hover:shadow-[#CF9F0E]/40 hover:scale-[1.02] transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Get a Quote</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-1.5 text-xs font-bold bg-[#CF9F0E] text-[#080533] rounded-full shadow-md"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#080533]/95 backdrop-blur-xl border-b border-[#CF9F0E]/30 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#CF9F0E] text-[#080533]'
                      : 'text-slate-200 hover:bg-white/5 hover:text-[#CF9F0E]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3 bg-gradient-to-r from-[#CF9F0E] to-[#e6b825] text-[#080533] font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get a Free Quote</span>
                </button>
                <a
                  href="tel:+18005557788"
                  className="flex items-center justify-center gap-2 py-2 text-sm text-slate-300 font-medium"
                >
                  <Phone className="w-4 h-4 text-[#CF9F0E]" />
                  <span>+1 (800) 555-7788</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
