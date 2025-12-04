import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { data } = useLanguage();

  return (
    <section className="py-24 px-6 bg-brand-cream text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4 block">{data.labels.promise}</span>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8">Redefining Albanian Hospitality</h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto mb-10"></div>
        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12">
          {data.labels.sanctuaryText1}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-brand-green/10">
                <h3 className="font-serif text-2xl text-brand-green mb-2">Excellence</h3>
                <p className="text-sm text-gray-500">World-class service standards tailored to your needs.</p>
            </div>
            <div className="p-6 border border-brand-green/10">
                <h3 className="font-serif text-2xl text-brand-green mb-2">Authenticity</h3>
                <p className="text-sm text-gray-500">Deeply rooted in Albanian culture and tradition.</p>
            </div>
            <div className="p-6 border border-brand-green/10">
                <h3 className="font-serif text-2xl text-brand-green mb-2">Location</h3>
                <p className="text-sm text-gray-500">Prime destinations offering the best views and access.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
