import React, { useState, useEffect } from 'react';
import { SLIDER_IMAGES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDER_IMAGES.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group">
      {SLIDER_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt={`Slide ${index}`} 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-sm z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-sm z-10"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {SLIDER_IMAGES.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
            />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;