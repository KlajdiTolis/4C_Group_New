import React from 'react';
import { EXPLORE_ITEMS } from '../constants';

const ExploreMore: React.FC = () => {
  return (
    <section id="experiences" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-16">Explore More</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPLORE_ITEMS.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[400px] overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-serif uppercase tracking-wider text-center px-4 border-2 border-white/0 group-hover:border-white/80 py-4 transition-all duration-500">
                        {item.title}
                    </h3>
                </div>
              </div>
              <p className="text-gray-600 text-center font-light px-4">
                  {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;