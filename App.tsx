import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { LanguageProvider } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Home = () => {
  return (
    <>
      <Hero />
      <HotelGrid />
      <InfoSection />
      <Facilities />
      <ImageSlider />
      <ExploreMore />
      <Reviews />
    </>
  );
};

const AppContent: React.FC = () => {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotel/:id" element={<HotelDetailPage />} />
            </Routes>
        </main>

        <Footer />
        <ConciergeModal />
        </div>
    </BrowserRouter>
  );
};

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;