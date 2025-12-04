import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { data } = useLanguage();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
         <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Hotel Pool at Sunset"
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h2 className="text-white text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up font-bold drop-shadow-lg">
          {data.labels.welcome}
        </h2>
        <div className="mb-8 animate-fade-in-up delay-100">
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-2 drop-shadow-2xl">
             4C Group
           </h1>
           <div className="h-1 w-24 bg-brand-gold mx-auto"></div>
        </div>
        <p className="text-white/90 max-w-lg text-xl mb-12 animate-fade-in-up delay-200 font-light drop-shadow-md tracking-wide">
           {data.labels.luxuryResorts}
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce hidden md:block z-10">
        <span className="text-xs uppercase tracking-widest">{data.labels.scrollExplore}</span>
      </div>
    </div>
  );
};

export default Hero;
