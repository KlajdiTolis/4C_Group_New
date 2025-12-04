import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HotelGrid from './components/HotelGrid';
import InfoSection from './components/InfoSection';
import Facilities from './components/Facilities';
import ImageSlider from './components/ImageSlider';
import ExploreMore from './components/ExploreMore';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ConciergeModal from './components/ConciergeModal';
import HotelDetailPage from './components/HotelDetailPage';
import { HOTELS } from './constants';

function App() {
  const [currentView, setCurrentView] = useState<'home' | string>('home');

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const selectedHotel = HOTELS.find(h => h.id === currentView);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
            <>
                <Hero />
                <HotelGrid onNavigate={handleNavigate} />
                <InfoSection />
                <Facilities />
                <ImageSlider />
                <ExploreMore />
                <Reviews />
            </>
        ) : (
            selectedHotel && (
                <HotelDetailPage 
                    hotel={selectedHotel} 
                    onBack={() => handleNavigate('home')} 
                />
            )
        )}
      </main>

      <Footer />
      <ConciergeModal />
    </div>
  );
}

export default App;