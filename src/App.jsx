import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VideoShowcase from './components/VideoShowcase';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Applications from './components/Applications';
import CTABanner from './components/CTABanner';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#080533] font-sans selection:bg-[#CF9F0E] selection:text-[#080533]">
      {/* Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Single Page Content */}
      <main className="bg-white">
        <Hero onOpenQuote={handleOpenQuote} />
        <About onOpenQuote={handleOpenQuote} />
        <VideoShowcase onOpenQuote={handleOpenQuote} />
        <Services onOpenQuote={handleOpenQuote} />
        <WhyChooseUs onOpenQuote={handleOpenQuote} />
        <Portfolio onOpenQuote={handleOpenQuote} />
        <Process onOpenQuote={handleOpenQuote} />
        <Applications onOpenQuote={handleOpenQuote} />
        <CTABanner onOpenQuote={handleOpenQuote} />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Interactive Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
