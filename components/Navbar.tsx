import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo4C } from './Logos';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, data } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    isScrolled ? 'bg-brand-dark/95 backdrop-blur-sm py-2 shadow-lg' : 'bg-gradient-to-b from-black/60 to-transparent py-6'
  }`;

  const textClass = 'text-white';

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate('home');
    setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
      setLanguage(language === 'en' ? 'al' : 'en');
  };

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 z-50 cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
            <Logo4C className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
          <span className={`font-serif text-xl md:text-2xl font-bold tracking-widest ${textClass} ml-2`}>
            4C <span className="text-brand-gold">GROUP</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {data.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm uppercase tracking-widest hover:text-brand-gold transition-colors ${textClass} font-medium`}
            >
              {link.name}
            </a>
          ))}
          <button className={`border border-white/30 px-6 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300 ${textClass}`}>
            {data.labels.bookNow}
          </button>
          
          <button 
            onClick={toggleLanguage}
            className={`${textClass} hover:text-brand-gold transition-colors flex items-center gap-1 font-bold text-sm`}
          >
            <Globe size={18} />
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <Logo4C className="w-24 h-24 text-white mb-4" />
            {data.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white text-2xl font-serif hover:text-brand-gold"
            >
              {link.name}
            </a>
          ))}
           <button className="bg-brand-gold text-brand-dark px-8 py-3 text-lg uppercase font-bold tracking-widest">
            {data.labels.bookStay}
          </button>
          <button 
            onClick={toggleLanguage}
            className="text-white flex items-center gap-2 text-xl"
          >
            <Globe size={24} /> {language === 'en' ? 'English' : 'Shqip'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
