
import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToRSVP = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('rsvp');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-wedding-cream flex items-center justify-center overflow-hidden py-20">
      
      {/* Decorative Corner Frames - Top Left */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 pointer-events-none z-10">
         <img src="https://www.svgrepo.com/show/530595/corner-decoration.svg" className="w-full h-full text-wedding-gold opacity-80 rotate-180 filter invert-[76%] sepia-[31%] saturate-[763%] hue-rotate-[357deg] brightness-[96%] contrast-[92%]" alt="decoration" />
      </div>
      {/* Decorative Corner Frames - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 pointer-events-none z-10">
         <img src="https://www.svgrepo.com/show/530595/corner-decoration.svg" className="w-full h-full text-wedding-gold opacity-80 filter invert-[76%] sepia-[31%] saturate-[763%] hue-rotate-[357deg] brightness-[96%] contrast-[92%]" alt="decoration" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center border-4 border-double border-wedding-gold p-8 md:p-16 relative bg-white/80 backdrop-blur-sm shadow-2xl rounded-lg">
          
          {/* Top Motif */}
          <div className="mb-6 flex justify-center">
            <img src="/images/127.jpg" alt="Ganesha" className="h-24 w-auto opacity-80" />
          </div>

          <p className="text-deep-maroon font-serif italic text-lg md:text-xl mb-4">
            || Shree Ganeshay Namah ||
          </p>

          <p className="text-gray-600 uppercase tracking-widest text-sm md:text-base mb-6 font-semibold">
            With the blessings of our parents, we invite you to celebrate the union of
          </p>

          <h1 className="text-6xl md:text-8xl font-decorative text-wedding-red mb-4 drop-shadow-sm leading-tight">
            Abhay <br/> 
            <span className="text-4xl md:text-5xl text-wedding-gold font-script">&</span> <br/>
            Tannu
          </h1>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px bg-wedding-gold w-16"></div>
            <Heart className="text-deep-maroon w-6 h-6 fill-current" />
            <div className="h-px bg-wedding-gold w-16"></div>
          </div>

          <p className="text-deep-maroon text-xl md:text-2xl font-serif font-bold mb-2">
            February 04 - 10, 2026
          </p>
          <p className="text-gray-700 font-sans tracking-wide mb-10">
            Buxar, Bihar
          </p>
          
          <a 
            href="#rsvp"
            onClick={scrollToRSVP}
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-wedding-gold transition duration-300 ease-out border-2 border-wedding-gold rounded-full shadow-md hover:shadow-xl"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-wedding-gold via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
            <span className="relative group-hover:text-white font-decorative tracking-widest text-lg">Bless Us With Your Presence</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
