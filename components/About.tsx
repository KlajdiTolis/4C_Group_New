import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-cream text-center">
      <div className="max-w-4xl mx-auto">
        <span className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4 block">Our Philosophy</span>
        <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8">Redefining Albanian Hospitality</h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto mb-10"></div>
        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12">
          The 4C Group is dedicated to showcasing the diverse beauty of Albania through our collection of premium hotels. 
          Whether it's the untouched coastline of the south, the historic charm of Durrës, or the vibrant energy of Tirana, 
          we provide a consistent standard of excellence, comfort, and authentic local experiences.
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