import React from 'react';
import { Hotel } from '../types';
import { ArrowRight, Wifi, Coffee, Waves } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
  reversed?: boolean;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel, reversed = false }) => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[600px] overflow-hidden group">
      {/* Image Section */}
      <div className={`w-full md:w-1/2 relative overflow-hidden h-[400px] md:h-auto ${reversed ? 'md:order-2' : ''}`}>
        <img 
          src={hotel.image} 
          alt={hotel.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 uppercase text-xs tracking-widest font-bold">
            {hotel.location}
        </div>
      </div>

      {/* Content Section */}
      <div className={`w-full md:w-1/2 bg-white flex flex-col justify-center p-8 md:p-16 lg:p-24 ${reversed ? 'md:order-1' : ''}`}>
        <span className="text-brand-gold uppercase tracking-widest text-sm mb-4">{hotel.shortDesc}</span>
        <h3 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">{hotel.name}</h3>
        <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
          {hotel.description}
        </p>
        
        <div className="flex space-x-6 mb-10 text-brand-dark/60">
            <div className="flex flex-col items-center gap-2">
                <Waves size={20} />
                <span className="text-xs uppercase">Views</span>
            </div>
             <div className="flex flex-col items-center gap-2">
                <Wifi size={20} />
                <span className="text-xs uppercase">Wifi</span>
            </div>
             <div className="flex flex-col items-center gap-2">
                <Coffee size={20} />
                <span className="text-xs uppercase">Dining</span>
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div>
                 <p className="text-xs text-gray-400 uppercase tracking-wide">Starting from</p>
                 <p className="text-2xl font-serif text-brand-dark">€{hotel.priceStart}<span className="text-sm font-sans text-gray-500"> / night</span></p>
            </div>
            <button className="flex items-center gap-2 text-brand-dark hover:text-brand-gold transition-colors uppercase tracking-widest text-sm font-bold group-hover:translate-x-2 duration-300">
            Explore Hotel <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;