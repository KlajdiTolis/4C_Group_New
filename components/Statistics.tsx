import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Statistics: React.FC = () => {
  const { data } = useLanguage();

  const stats = [
    { value: '+20', label: data.labels.statsRooms },
    { value: '+30', label: data.labels.statsApartments },
    { value: '+20', label: data.labels.statsVillas },
  ];

  return (
    <section className="bg-brand-dark border-t border-white/10 text-white py-20 relative overflow-hidden">
       {/* Decorative subtle background pattern/gradient */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-dark via-brand-dark to-brand-gold/5 pointer-events-none"></div>
       
       <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="text-6xl md:text-7xl font-serif text-brand-gold mb-4 font-bold opacity-90 group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="h-0.5 w-12 bg-white/20 mb-4 group-hover:bg-brand-gold transition-colors duration-500"></div>
              <div className="text-sm md:text-base uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;