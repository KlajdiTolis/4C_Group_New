import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CONTENT } from '../constants';
import { Hotel, Review } from '../types';

type Language = 'en' | 'al';

interface Data {
    hotels: Hotel[];
    navLinks: { name: string; href: string }[];
    facilities: { name: string; icon: string }[];
    exploreItems: { title: string; image: string; description: string }[];
    reviews: Review[];
    labels: {
        bookNow: string;
        bookStay: string;
        welcome: string;
        luxuryResorts: string;
        scrollExplore: string;
        ourHotels: string;
        excellence: string;
        hospitality: string;
        viewDetails: string;
        startingFrom: string;
        night: string;
        exploreHotel: string;
        sanctuaryTitle: string;
        sanctuarySubtitle: string;
        sanctuaryText1: string;
        sanctuaryText2: string;
        readStory: string;
        facilitiesTitle: string;
        facilitiesText: string;
        exploreTitle: string;
        testimonials: string;
        guestExperiences: string;
        footerText: string;
        contactUs: string;
        newsletter: string;
        newsletterText: string;
        subscribe: string;
        rightsReserved: string;
        privacyPolicy: string;
        termsOfService: string;
        backToCollection: string;
        accommodations: string;
        chooseComfort: string;
        promise: string;
        whatAwaits: string;
        whatAwaitsText: string;
        visitUs: string;
        locationContact: string;
        valetParking: string;
        getDirections: string;
        guestsSay: string;
        roomDetail: string;
        roomFeatures: string;
        bookRoom: string;
        conciergeTitle: string;
        conciergeSubtitle: string;
        conciergeInput: string;
        conciergeGreeting: string;
    }
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  data: Data;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    data: CONTENT[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
