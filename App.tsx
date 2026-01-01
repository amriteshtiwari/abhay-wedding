
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import CoupleProfileSection from './components/CoupleProfile';
import Timeline from './components/Timeline';
import DressAdvisor from './components/DressAdvisor';
import RSVP from './components/RSVP';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen font-serif selection:bg-wedding-red selection:text-white bg-wedding-cream">
      {/* Sacred Invocation Top Bar */}
      <div className="bg-deep-maroon text-wedding-gold text-center py-2 z-50 relative">
        <p className="font-decorative text-sm md:text-base tracking-widest">|| श्री गणेशाय नमः ||</p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-40 bg-wedding-cream/95 backdrop-blur-md border-b border-wedding-gold/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo / Monogram */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="font-decorative text-3xl text-wedding-red font-bold tracking-tighter">A <span className="text-wedding-gold">&</span> T</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#couple" className="text-deep-maroon hover:text-wedding-red transition-colors text-sm font-bold uppercase tracking-widest">Couple</a>
              <a href="#events" className="text-deep-maroon hover:text-wedding-red transition-colors text-sm font-bold uppercase tracking-widest">Shubh Vivah</a>
              <a href="#stylist" className="text-deep-maroon hover:text-wedding-red transition-colors text-sm font-bold uppercase tracking-widest">Shringar</a>
              <a href="#rsvp" className="px-6 py-2 border border-wedding-red text-wedding-red hover:bg-wedding-red hover:text-white transition-all text-sm font-bold uppercase tracking-widest rounded-full">RSVP</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu} 
                className="text-deep-maroon hover:text-wedding-red focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-wedding-cream border-b border-wedding-gold/20 shadow-lg py-6 flex flex-col items-center space-y-6 z-40 animate-fade-in-up">
            <a href="#couple" onClick={closeMenu} className="text-deep-maroon hover:text-wedding-red text-lg font-bold uppercase tracking-widest">Couple</a>
            <a href="#events" onClick={closeMenu} className="text-deep-maroon hover:text-wedding-red text-lg font-bold uppercase tracking-widest">Shubh Vivah</a>
            <a href="#stylist" onClick={closeMenu} className="text-deep-maroon hover:text-wedding-red text-lg font-bold uppercase tracking-widest">Shringar</a>
            <a href="#rsvp" onClick={closeMenu} className="px-8 py-3 bg-deep-maroon text-wedding-gold hover:bg-wedding-red transition-all text-sm font-bold uppercase tracking-widest rounded-full shadow-md">RSVP</a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <CoupleProfileSection />
        <Timeline />
        <DressAdvisor />
        <RSVP />
      </main>

      <footer className="bg-deep-maroon text-wedding-gold py-16 text-center border-t-4 border-wedding-gold relative overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="mb-8">
            <span className="text-4xl font-decorative">|| शुभम भवतु ||</span>
          </div>
          <p className="font-decorative text-3xl mb-4">Abhay & Tannu</p>
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-8">Forever & Always</p>
          <p className="text-xs text-white/40 font-sans">
            &copy; 2026 TEAM CODING HALT.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
