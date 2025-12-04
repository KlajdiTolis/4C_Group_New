import React from 'react';
import { REVIEWS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-gold uppercase tracking-widest text-sm font-bold block mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif">Guest Experiences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/5 p-8 border border-white/10 hover:border-brand-gold/50 transition-colors duration-300 rounded-lg backdrop-blur-sm">
              <Quote className="text-brand-gold mb-6 opacity-50" size={32} />
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex justify-between items-end border-t border-white/10 pt-6">
                <div>
                  <h4 className="font-serif text-lg">{review.name}</h4>
                  <p className="text-xs text-brand-gold uppercase tracking-wide">{review.location}</p>
                </div>
                <div className="flex text-brand-gold space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;