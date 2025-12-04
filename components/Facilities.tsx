import React from 'react';
import { FACILITIES } from '../constants';
import { Wifi, Car, Utensils, Waves, Sparkles, Bell } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi size={36} strokeWidth={1} />,
  Car: <Car size={36} strokeWidth={1} />,
  Utensils: <Utensils size={36} strokeWidth={1} />,
  Waves: <Waves size={36} strokeWidth={1} />,
  Sparkles: <Sparkles size={36} strokeWidth={1} />,
  Bell: <Bell size={36} strokeWidth={1} />,
};

const Facilities: React.FC = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Facilities & Services</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          With round-the-clock service and premium amenities, our dedicated team ensures your every need is met so you can enjoy your Albanian experience to the fullest.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 justify-items-center">
          {FACILITIES.map((facility, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer w-full">
              <div className="w-28 h-28 rounded-full border border-sky-100 flex items-center justify-center text-gray-400 group-hover:border-brand-gold group-hover:text-brand-gold group-hover:scale-110 transition-all duration-500 mb-6 bg-white shadow-sm hover:shadow-md">
                {iconMap[facility.icon] || <Sparkles size={36} strokeWidth={1} />}
              </div>
              <span className="text-gray-600 font-light text-sm tracking-widest uppercase group-hover:text-brand-dark transition-colors duration-300">
                {facility.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;