import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="font-serif text-3xl font-bold tracking-widest block">
               4C <span className="text-brand-gold">GROUP</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the finest hospitality in Albania. From the coast to the capital, we are your home away from home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Our Hotels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Special Offers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dining & Bars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events & Weddings</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-brand-gold" /> Tirana, Albania</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-brand-gold" /> +355 4 222 3333</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-brand-gold" /> info@4cgroup.al</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive exclusive offers and news.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-brand-gold" />
              <button className="bg-brand-gold text-brand-dark px-4 py-2 font-bold uppercase text-xs tracking-wider hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 4C Group Albania. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;