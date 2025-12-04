import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const InfoSection: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section className="bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row h-auto md:min-h-[600px]">
        {/* Text Content */}
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-brand-cream/30">
          <div className="max-w-xl mx-auto md:mx-0">
             <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight">
              {data.labels.sanctuaryTitle} <br/>
              <span className="italic text-brand-gold">{data.labels.sanctuarySubtitle}</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
              {data.labels.sanctuaryText1}
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 font-light text-lg">
               {data.labels.sanctuaryText2}
            </p>
            <button className="text-brand-dark border-b border-brand-dark pb-1 uppercase tracking-widest text-xs font-bold hover:text-brand-gold hover:border-brand-gold transition-colors self-start">
              {data.labels.readStory}
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop" 
            alt="Mediterranean Lifestyle"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
