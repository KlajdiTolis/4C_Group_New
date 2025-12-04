import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row h-auto md:min-h-[600px]">
        {/* Text Content */}
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-brand-cream/30">
          <div className="max-w-xl mx-auto md:mx-0">
             <h2 className="text-3xl md:text-5xl font-serif text-brand-dark mb-8 leading-tight">
              A Sanctuary of <br/>
              <span className="italic text-brand-gold">Mediterranean Luxury</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
              The 4C Group collection is designed with first-class facilities and is subject to the highest standards of hospitality. Whether you seek the vibrant city life of Tirana or the serene waves of the Riviera, our properties offer a seamless blend of comfort and elegance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 font-light text-lg">
               With strategically located properties across Albania, we offer the perfect infrastructure for both leisure and business travelers. From the nearby Marina Village boutiques to the historic amphitheaters, every stay promises a new discovery.
            </p>
            <button className="text-brand-dark border-b border-brand-dark pb-1 uppercase tracking-widest text-xs font-bold hover:text-brand-gold hover:border-brand-gold transition-colors self-start">
              Read Our Story
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