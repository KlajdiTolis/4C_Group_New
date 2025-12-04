import React from 'react';
import { HOTELS } from '../constants';
import { Info, Building, BedDouble, MapPin } from 'lucide-react';

interface HotelGridProps {
    onNavigate: (hotelId: string) => void;
}

const HotelGrid: React.FC<HotelGridProps> = ({ onNavigate }) => {
  return (
    <section id="hotels" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Our Hotels</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Experience Excellence Across Albania</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOTELS.map((hotel, index) => (
            <div 
                key={hotel.id} 
                onClick={() => onNavigate(hotel.id)}
                className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/20"
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-gray-900">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/20 opacity-90"></div>

              {/* Top Right Pill Tag */}
              <div className="absolute top-6 right-6 bg-[#d1bfa1] text-brand-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg transform transition-transform group-hover:scale-105">
                Hospitality
              </div>

              {/* Center Content (Hidden by default, shown on hover/always depending on design) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full uppercase text-xs tracking-widest hover:bg-white hover:text-brand-dark transition-all">
                    View Details
                 </button>
              </div>

              {/* Bottom Card Bar */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                     {/* Location with Icon */}
                    <div className="flex items-center gap-2 text-brand-gold mb-2">
                        <MapPin size={14} />
                        <span className="text-xs uppercase tracking-widest font-bold">
                        {hotel.location}
                        </span>
                    </div>
                    
                    {/* Hotel Name with Icon */}
                    <div className="flex items-center gap-3 mb-1">
                         {index === 0 ? <BedDouble className="text-white/80" size={20} /> : <Building className="text-white/80" size={20} />}
                         <h3 className="text-white font-serif text-2xl md:text-3xl leading-none">{hotel.name}</h3>
                    </div>
                    
                    <p className="text-white/60 text-xs mt-2 line-clamp-2 max-w-[90%] font-light">
                      {hotel.shortDesc}
                    </p>
                  </div>

                  {/* Info Button Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#d1bfa1]/20 backdrop-blur-sm border border-[#d1bfa1]/40 flex items-center justify-center text-[#d1bfa1] group-hover:bg-[#d1bfa1] group-hover:text-brand-dark transition-colors duration-300">
                    <Info size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelGrid;