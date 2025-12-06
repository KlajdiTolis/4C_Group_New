import React, { useState } from 'react';
import { Hotel, Room, Activity } from '../types';
import { Wifi, Car, Utensils, Waves, Sparkles, Bell, MapPin, Star, User, Maximize, ArrowLeft, Building, Dumbbell, Quote, ChevronLeft, ChevronRight, X, Check, TicketPercent, Clock, Tag, Calendar, Users, Loader, ArrowRight } from 'lucide-react';
import { LogoMuseum, LogoValamar, Logo4C } from './Logos';
import { useLanguage } from '../contexts/LanguageContext';

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

const getHotelLogo = (id: string) => {
    switch (id) {
        case 'museum':
            return <LogoMuseum className="w-48 h-48 md:w-64 md:h-64 text-white drop-shadow-2xl" />;
        case 'valamar':
            return <LogoValamar className="w-48 h-48 md:w-64 md:h-64 text-white drop-shadow-2xl" />;
        default:
            return null;
    }
};

const HotelDetailPage: React.FC<HotelDetailPageProps> = ({ hotel, onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [roomImageIndex, setRoomImageIndex] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  
  // Booking State
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [isChecking, setIsChecking] = useState(false);
  const [availabilityMsg, setAvailabilityMsg] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const { data, language } = useLanguage();

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % hotel.gallery.length);
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? hotel.gallery.length - 1 : prev - 1));

  const handleRoomClick = (room: Room) => {
    setSelectedRoom(room);
    setRoomImageIndex(0);
  };

  const nextRoomSlide = () => {
    if (selectedRoom) {
      const images = selectedRoom.gallery || [selectedRoom.image];
      setRoomImageIndex(prev => (prev + 1) % images.length);
    }
  };

  const prevRoomSlide = () => {
    if (selectedRoom) {
      const images = selectedRoom.gallery || [selectedRoom.image];
      setRoomImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleCheckAvailability = (e: React.FormEvent) => {
      e.preventDefault();
      setAvailabilityMsg(null);

      if (!checkInDate || !checkOutDate) {
          setAvailabilityMsg({ type: 'error', text: language === 'en' ? 'Please select valid check-in and check-out dates.' : 'Ju lutemi zgjidhni data të vlefshme check-in dhe check-out.' });
          return;
      }

      setIsChecking(true);

      // Simulate API Interaction
      setTimeout(() => {
          setIsChecking(false);
          // Mock success for demonstration
          setAvailabilityMsg({ 
              type: 'success', 
              text: language === 'en' 
                ? `Great news! Rooms are available for ${guestCount} guests.` 
                : `Lajm i mirë! Dhomat janë të disponueshme për ${guestCount} të ftuar.`
          });
      }, 1500);
  };

  const HotelLogo = getHotelLogo(hotel.id);
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="animate-fade-in relative">
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
          <ArrowLeft size={18} /> <span className="text-sm uppercase tracking-widest">{data.labels.backToCollection}</span>
        </button>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <span className="text-brand-gold uppercase tracking-[0.3em] mb-8 font-bold text-sm md:text-base animate-fade-in-up">
            {hotel.location}
          </span>
          
          <div className="animate-fade-in-up delay-100 mb-8">
            {HotelLogo ? (
                HotelLogo
            ) : (
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white drop-shadow-2xl">
                    {hotel.name}
                </h1>
            )}
          </div>

          <p className="text-white/90 max-w-lg text-lg font-light leading-relaxed animate-fade-in-up delay-200">
             {hotel.shortDesc}
          </p>
        </div>
      </div>

      {/* 1.5 Booking/Availability Bar */}
      <div className="relative z-30 -mt-20 px-6 mb-12">
        <div className="container mx-auto max-w-5xl bg-white shadow-2xl rounded-sm p-6 md:p-8">
            <form className="flex flex-col md:flex-row gap-6 items-center" onSubmit={handleCheckAvailability}>
                
                <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-bold">{data.labels.checkIn}</label>
                    <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-brand-gold" />
                        <input 
                            type="date" 
                            min={today}
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            className="w-full focus:outline-none text-brand-dark font-serif text-lg bg-transparent uppercase" 
                        />
                    </div>
                </div>

                <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                     <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-bold">{data.labels.checkOut}</label>
                    <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-brand-gold" />
                        <input 
                            type="date" 
                            min={checkInDate || today}
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            className="w-full focus:outline-none text-brand-dark font-serif text-lg bg-transparent uppercase" 
                        />
                    </div>
                </div>

                <div className="flex-1 w-full md:w-48 pb-4 md:pb-0">
                     <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-bold">{data.labels.guests}</label>
                     <div className="flex items-center gap-3">
                        <Users size={18} className="text-brand-gold" />
                        <select 
                            value={guestCount}
                            onChange={(e) => setGuestCount(e.target.value)}
                            className="w-full focus:outline-none text-brand-dark font-serif text-lg bg-transparent cursor-pointer"
                        >
                            <option value="1">1 {language === 'en' ? 'Guest' : 'Person'}</option>
                            <option value="2">2 {data.labels.guests}</option>
                            <option value="3">3 {data.labels.guests}</option>
                            <option value="4">4+ {data.labels.guests}</option>
                        </select>
                    </div>
                </div>

                <button 
                    type="submit" 
                    disabled={isChecking}
                    className="w-full md:w-auto bg-brand-gold text-white px-8 py-4 uppercase tracking-widest hover:bg-brand-dark transition-colors duration-300 font-bold text-sm whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[200px]"
                >
                    {isChecking ? (
                        <>
                            <Loader className="animate-spin" size={16} />
                            <span>Checking...</span>
                        </>
                    ) : (
                        data.labels.checkAvailability
                    )}
                </button>
            </form>
            
            {/* Availability Feedback Message */}
            {availabilityMsg && (
                <div className={`mt-6 p-4 rounded-sm text-sm font-medium flex items-center gap-3 animate-fade-in ${availabilityMsg.type === 'success' ? 'bg-green-50 text-green-800 border-l-4 border-green-500' : 'bg-red-50 text-red-800 border-l-4 border-red-500'}`}>
                    {availabilityMsg.type === 'success' ? <Check size={18} /> : <X size={18} />}
                    {availabilityMsg.text}
                </div>
            )}
        </div>
      </div>

      {/* 2. Room Selection - Simplified */}
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-dark mb-4">{data.labels.accommodations}</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs">{data.labels.chooseComfort}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hotel.rooms.map((room, idx) => (
              <div 
                key={idx} 
                onClick={() => handleRoomClick(room)}
                className="group relative overflow-hidden rounded-sm shadow-xl aspect-[4/3] cursor-pointer"
              >
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
                   <p className="text-white/80 text-sm mt-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">{data.labels.viewDetails}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 SPECIAL OFFER SECTION */}
      {hotel.specialOffer && (
        <section className="bg-brand-dark text-white py-16 relative overflow-hidden">
             {/* Decorative Elements */}
             <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-brand-gold/20 opacity-50"></div>
             <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-brand-gold/20 opacity-50"></div>
             
             <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto border border-brand-gold/30 p-8 md:p-12 rounded-lg bg-white/5 backdrop-blur-sm">
                    {/* Left: Title & Description */}
                    <div className="md:w-3/5 text-center md:text-left">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                            <TicketPercent className="text-brand-gold" size={28} />
                            <span className="text-brand-gold uppercase tracking-widest text-sm font-bold">{data.labels.exclusiveOffer}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif mb-4">{hotel.specialOffer.title}</h3>
                        <p className="text-gray-300 font-light text-lg leading-relaxed mb-6">
                            {hotel.specialOffer.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-400 justify-center md:justify-start">
                           {hotel.specialOffer.validUntil && (
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-brand-gold" />
                                    <span>{data.labels.offerEnds} {hotel.specialOffer.validUntil}</span>
                                </div>
                           )}
                           {hotel.specialOffer.code && (
                                <div className="flex items-center gap-2">
                                    <Tag size={16} className="text-brand-gold" />
                                    <span>{data.labels.useCode} <span className="text-white font-mono font-bold tracking-wider">{hotel.specialOffer.code}</span></span>
                                </div>
                           )}
                        </div>
                    </div>

                    {/* Right: Value & CTA */}
                    <div className="md:w-2/5 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                        <div className="text-5xl md:text-6xl font-serif text-brand-gold mb-2 text-center leading-none">
                            {hotel.specialOffer.value}
                        </div>
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">Limited Availability</p>
                        <button className="bg-brand-gold text-brand-dark px-8 py-3 uppercase tracking-widest font-bold hover:bg-white transition-colors w-full md:w-auto">
                            {data.labels.bookNow}
                        </button>
                    </div>
                </div>
             </div>
        </section>
      )}

      {/* 3. Short Description */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <div className="w-16 h-1 bg-brand-gold mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight max-w-4xl">
              "{hotel.description}"
            </h2>
            <p className="text-gray-500 text-lg font-light italic">
              — {data.labels.promise}
            </p>
        </div>
      </section>

      {/* 4. What awaits you (Amenities) - Masonry Style */}
      <section className="py-24 bg-brand-cream/50 overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-start">
               <div className="md:w-1/3 sticky top-32">
                  <h2 className="text-5xl font-serif text-brand-dark mb-6">{data.labels.whatAwaits}<br/>you</h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                     {data.labels.whatAwaitsText} {hotel.name}.
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

      {/* 4.5 Cultural Activities (New Section) */}
      {hotel.activities && (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-brand-dark mb-4">{data.labels.culturalActivities}</h2>
                    <p className="text-gray-500 uppercase tracking-widest text-xs">{data.labels.discoverHeritage}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hotel.activities.map((activity, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => setSelectedActivity(activity)}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden rounded-lg mb-4 shadow-lg">
                                <img 
                                    src={activity.image} 
                                    alt={activity.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <h4 className="text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">{activity.title}</h4>
                            <p className="text-gray-500 text-sm font-light leading-relaxed mb-4 line-clamp-2">{activity.shortDescription}</p>
                            <button className="text-brand-gold uppercase text-xs tracking-widest font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                {data.labels.viewDetails} <ArrowRight size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* 5. Visit us & Location */}
      <section className="py-0 flex flex-col md:flex-row h-[500px]">
          <div className="w-full md:w-1/2 bg-brand-dark text-white p-16 flex flex-col justify-center">
             <span className="text-brand-gold uppercase tracking-widest text-sm mb-4">{data.labels.visitUs}</span>
             <h2 className="text-4xl font-serif mb-8">{data.labels.locationContact}</h2>
             <div className="space-y-6 text-gray-300 font-light">
                <div className="flex items-center gap-4">
                   <MapPin className="text-brand-gold" size={24} />
                   <span>{hotel.mapLocation.address}</span>
                </div>
                <div className="flex items-center gap-4">
                   <Car className="text-brand-gold" size={24} />
                   <span>{data.labels.valetParking}</span>
                </div>
             </div>
             <button className="mt-12 self-start border-b border-brand-gold text-brand-gold pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
                {data.labels.getDirections}
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
      <section className="py-24 bg-brand-cream">
         <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl font-serif text-brand-dark mb-16">{data.labels.guestsSay}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
               {hotel.reviews.slice(0, 3).map((review) => (
                   <div key={review.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative border border-gray-100 flex flex-col h-full">
                       <Quote className="text-brand-gold opacity-30 mb-6" size={40} />
                       <p className="text-gray-600 italic leading-relaxed mb-8 flex-grow font-serif text-lg">"{review.text}"</p>
                       <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                          <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shrink-0">
                             {review.name.charAt(0)}
                          </div>
                          <div>
                             <h4 className="font-bold text-brand-dark text-sm">{review.name}</h4>
                             <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{review.location}</p>
                             <div className="flex text-brand-gold gap-0.5">
                                {[...Array(review.rating)].map((_,i) => <Star key={i} size={14} fill="currentColor" />)}
                             </div>
                          </div>
                       </div>
                   </div>
               ))}
            </div>
         </div>
      </section>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedRoom(null)}></div>
            <div className="relative bg-white w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-fade-in-up max-h-[90vh]">
                <button 
                    onClick={() => setSelectedRoom(null)}
                    className="absolute top-4 right-4 z-20 bg-white text-brand-dark p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                    <X size={20} />
                </button>
                
                {/* Image Side with Carousel */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto group">
                     {/* Images */}
                     {(selectedRoom.gallery || [selectedRoom.image]).map((img, idx) => (
                        <div key={idx} className={`absolute inset-0 transition-opacity duration-500 ${idx === roomImageIndex ? 'opacity-100' : 'opacity-0'}`}>
                           <img src={img} alt={`${selectedRoom.name} - View ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                     ))}
                     
                     {/* Controls */}
                     {(selectedRoom.gallery && selectedRoom.gallery.length > 1) && (
                       <>
                         <button 
                            onClick={prevRoomSlide} 
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-brand-dark transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
                         >
                            <ChevronLeft size={20} />
                         </button>
                         <button 
                            onClick={nextRoomSlide} 
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-brand-dark transition-all flex items-center justify-center opacity-0 group-hover:opacity-100"
                         >
                            <ChevronRight size={20} />
                         </button>
                         
                         {/* Dots */}
                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {selectedRoom.gallery.map((_, idx) => (
                               <div 
                                  key={idx} 
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === roomImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                               ></div>
                            ))}
                         </div>
                       </>
                     )}
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                     <div className="mb-2 text-brand-gold uppercase tracking-widest text-xs font-bold">{data.labels.roomDetail}</div>
                     <h3 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">{selectedRoom.name}</h3>
                     <p className="text-gray-500 mb-8 font-light leading-relaxed">
                        {language === 'en' ? `Experience the epitome of comfort in our ${selectedRoom.name}. Designed with modern elegance and traditional touches to ensure a restful stay.` : `Përjetoni kulmin e rehatisë në ${selectedRoom.name} tonë. Projektuar me elegancë moderne dhe prekje tradicionale për të siguruar një qëndrim të qetë.`}
                     </p>
                     
                     <div className="flex items-end gap-2 mb-8 border-b border-gray-100 pb-8">
                        <span className="text-4xl font-serif text-brand-dark">€{selectedRoom.price}</span>
                        <span className="text-gray-400 mb-1">/ {data.labels.night}</span>
                     </div>

                     <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center gap-3 text-gray-700">
                            <Maximize size={20} className="text-brand-gold" />
                            <span className="text-sm font-medium">{selectedRoom.size}</span>
                        </div>
                         <div className="flex items-center gap-3 text-gray-700">
                            <User size={20} className="text-brand-gold" />
                            <span className="text-sm font-medium">{selectedRoom.capacity}</span>
                        </div>
                     </div>

                     <div className="mb-8">
                        <h4 className="font-serif text-lg mb-4">{data.labels.roomFeatures}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {selectedRoom.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-brand-cream flex items-center justify-center text-brand-gold shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                     </div>

                     <button className="w-full bg-brand-dark text-white py-4 uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors text-sm rounded-sm">
                        {data.labels.bookRoom}
                     </button>
                </div>
            </div>
        </div>
      )}

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedActivity(null)}></div>
            <div className="relative bg-white w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl animate-fade-in-up">
                 <button 
                    onClick={() => setSelectedActivity(null)}
                    className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur transition-colors"
                >
                    <X size={20} />
                </button>
                
                <div className="h-64 md:h-80 relative">
                     <img src={selectedActivity.image} alt={selectedActivity.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                         <span className="bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm mb-3 inline-block">
                             {data.labels.activityDetails}
                         </span>
                         <h3 className="text-3xl md:text-5xl font-serif">{selectedActivity.title}</h3>
                     </div>
                </div>
                
                <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 text-brand-gold mb-6 border-b border-gray-100 pb-6">
                         <div className="flex items-center gap-2">
                             <Clock size={20} />
                             <span className="font-medium">{data.labels.duration}: <span className="text-brand-dark">{selectedActivity.duration}</span></span>
                         </div>
                     </div>
                     <p className="text-gray-600 text-lg leading-relaxed font-light">
                         {selectedActivity.fullDescription}
                     </p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default HotelDetailPage;