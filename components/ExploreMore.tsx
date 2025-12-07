import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Check, ArrowRight } from 'lucide-react';

interface ExploreItem {
    title: string;
    image: string;
    description: string;
    longDescription: string;
    features: string[];
}

const ExploreMore: React.FC = () => {
  const { data } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<ExploreItem | null>(null);

  return (
    <section id="experiences" className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-16">{data.labels.exploreTitle}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.exploreItems.map((item, idx) => (
            <div 
                key={idx} 
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-[400px] overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
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
              <div className="text-center mt-4">
                  <span className="text-brand-gold text-xs uppercase tracking-widest font-bold border-b border-transparent group-hover:border-brand-gold transition-colors inline-block pb-1">
                      {data.labels.viewDetails}
                  </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedItem(null)}></div>
            <div className="relative bg-white w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl animate-fade-in-up max-h-[90vh] flex flex-col md:flex-row">
                 <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur transition-colors"
                >
                    <X size={20} />
                </button>
                
                {/* Image Side */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                     <img 
                        src={selectedItem.image} 
                        alt={selectedItem.title} 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                    <div className="absolute bottom-4 left-4 text-white md:hidden">
                        <h3 className="text-2xl font-serif">{selectedItem.title}</h3>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                    <h3 className="text-3xl font-serif text-brand-dark mb-6 hidden md:block">{selectedItem.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-8 text-lg">
                        {selectedItem.longDescription}
                    </p>

                    <div className="bg-brand-cream/50 p-6 rounded-lg mb-8">
                        <h4 className="font-serif text-lg mb-4 text-brand-dark">Highlights</h4>
                        <div className="grid grid-cols-1 gap-3">
                            {selectedItem.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-700">
                                    <div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center text-white shrink-0">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={() => setSelectedItem(null)} // In a real app, this might navigate or open a booking form
                        className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-sm hover:text-brand-dark transition-colors"
                    >
                        Explore Opportunities <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default ExploreMore;