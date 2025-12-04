import React, { useState } from 'react';
import { Hotel } from '../types';
import { Wifi, Car, Utensils, Waves, Sparkles, Bell, MapPin, Star, User, Maximize, ArrowLeft, Building, Dumbbell, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface HotelDetailPageProps {
  hotel: Hotel;
  onBack: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi size={32} strokeWidth={1} />,
  Car: <Car size={32} strokeWidth={1} />,
  Utensils: <Utensils size={32} strokeWidth={1} />,
  Waves: <Waves size={32} strokeWidth={1} />,
  Sparkles: <Sparkles size={32} strokeWidth={1} />,
  Bell: <Bell size={32} strokeWidth={1} />,
  Building: <Building size={32} strokeWidth={1} />,
  Dumbbell: <Dumbbell size={32} strokeWidth={1} />,
};

const HotelDetailPage: React.FC<HotelDetailPageProps> = ({ hotel, onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % hotel.gallery.length);
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? hotel.gallery.length - 1 : prev - 1));

  return (
    <div className="animate-fade-in">
      {/* 1. Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={hotel.image} 
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <button 
          onClick={onBack}
          className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
        >
          <ArrowLeft size={18} /> <span className="text-sm uppercase tracking-widest">Back to Collection</span>
        </button>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] mb-4 font-bold text-sm md:text-base animate-fade-in-up">
            {hotel.location}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
            {hotel.name}
          </h1>
          <p className="text-white/90 max-w-lg text-lg font-light leading-relaxed animate-fade-in-up delay-200">
             {hotel.shortDesc}
          </p>
        </div>
      </div>

      {/* 2. Room Selection - Simplified */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-dark mb-4">Accommodations</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Choose Your Comfort</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hotel.rooms.map((room, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-sm shadow-xl aspect-[4/3] cursor-pointer">
                {/* Image */}
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col items-center text-center">
                   <h3 className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-2 drop-shadow-lg">{room.name}</h3>
                   <div className="h-0.5 w-12 bg-brand-gold scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Short Description */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <div className="w-16 h-1 bg-brand-gold mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight max-w-4xl">
              "{hotel.description}"
            </h2>
            <p className="text-gray-500 text-lg font-light italic">
              — The 4C Group Promise
            </p>
        </div>
      </section>

      {/* 4. What awaits you (Amenities) - Masonry Style */}
      <section className="py-24 bg-brand-cream/50">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="md:w-1/3 sticky top-32">
                  <h2 className="text-5xl font-serif text-brand-dark mb-6">What awaits<br/>you</h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                     Experience the exceptional amenities and services curated specifically for your stay at {hotel.name}.
                  </p>
                  <div className="w-24 h-1 bg-brand-gold"></div>
               </div>
               
               <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                  {hotel.amenitiesList.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 group hover:-translate-y-1 ${idx % 2 === 0 ? 'border-brand-gold' : 'border-brand-dark'} ${idx % 3 === 0 ? 'md:col-span-2' : ''}`}
                      >
                         <div className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                            {iconMap[item.icon] || <Sparkles size={32} strokeWidth={1} />}
                         </div>
                         <h4 className="font-serif text-2xl text-brand-dark mb-3 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                         <p className="text-gray-500 leading-relaxed font-light">{item.description}</p>
                      </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 5. Visit us & Location */}
      <section className="py-0 flex flex-col md:flex-row h-[500px]">
          <div className="w-full md:w-1/2 bg-brand-dark text-white p-16 flex flex-col justify-center">
             <span className="text-brand-gold uppercase tracking-widest text-sm mb-4">Visit Us</span>
             <h2 className="text-4xl font-serif mb-8">Location & Contact</h2>
             <div className="space-y-6 text-gray-300 font-light">
                <div className="flex items-center gap-4">
                   <MapPin className="text-brand-gold" size={24} />
                   <span>{hotel.mapLocation.address}</span>
                </div>
                <div className="flex items-center gap-4">
                   <Car className="text-brand-gold" size={24} />
                   <span>Valet parking available</span>
                </div>
             </div>
             <button className="mt-12 self-start border-b border-brand-gold text-brand-gold pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
                Get Directions
             </button>
          </div>
          <div className="w-full md:w-1/2 bg-gray-200 relative">
             <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Map Placeholder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 p-4 rounded-full shadow-xl">
                   <MapPin className="text-brand-dark" size={32} />
                </div>
             </div>
          </div>
      </section>

      {/* 6. Carousel (Gallery) */}
      <section className="relative h-[600px] bg-black group">
         {hotel.gallery.map((img, idx) => (
             <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                <img src={img} alt="Gallery" className="w-full h-full object-cover opacity-80" />
             </div>
         ))}
         <div className="absolute inset-0 flex items-center justify-between px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-white text-white hover:text-brand-dark transition-all flex items-center justify-center"><ChevronLeft size={24} /></button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-white text-white hover:text-brand-dark transition-all flex items-center justify-center"><ChevronRight size={24} /></button>
         </div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {hotel.gallery.map((_, idx) => (
               <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/30'}`}></div>
            ))}
         </div>
      </section>

      {/* 7. Reviews */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl font-serif text-brand-dark mb-16">This is what our guests say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
               {hotel.reviews.map((review) => (
                   <div key={review.id} className="bg-brand-cream/30 p-10 rounded-2xl relative">
                       <Quote className="absolute top-6 left-6 text-brand-gold/20" size={48} />
                       <p className="relative z-10 text-gray-600 italic leading-relaxed mb-6 font-serif text-lg">"{review.text}"</p>
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-brand-gold font-bold">
                             {review.name.charAt(0)}
                          </div>
                          <div>
                             <h4 className="font-bold text-brand-dark">{review.name}</h4>
                             <div className="flex text-brand-gold text-xs">
                                {[...Array(review.rating)].map((_,i) => <Star key={i} size={12} fill="currentColor" />)}
                             </div>
                          </div>
                       </div>
                   </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default HotelDetailPage;