import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BusinessAreas from './components/BusinessAreas';
import WarangStudio from './components/WarangStudio';
import Vision from './components/Vision';
import Footer from './components/Footer';
import ServiceDetail, { matmatchData, nowhereData, msmData } from './components/ServiceDetail';
import AdminNews from './components/AdminNews';
import { ContentProvider } from './context/ContentContext';

const App: React.FC = () => {
  const [currentService, setCurrentService] = useState<string | null>(null);
  const logoClickCount = useRef(0);
  const lastClickTime = useRef(0);

  const handleLogoClick = () => {
    const now = Date.now();
    if (now - lastClickTime.current > 1000) {
      logoClickCount.current = 1;
    } else {
      logoClickCount.current += 1;
    }
    
    lastClickTime.current = now;

    if (logoClickCount.current >= 5) {
      setCurrentService('admin-news');
      logoClickCount.current = 0;
    }
  };

  return (
    <ContentProvider>
      {currentService === 'matmatch' ? (
        <ServiceDetail data={matmatchData} onBack={() => setCurrentService(null)} />
      ) : currentService === 'nowhere' ? (
        <ServiceDetail data={nowhereData} onBack={() => setCurrentService(null)} />
      ) : currentService === 'msm' ? (
        <ServiceDetail data={msmData} onBack={() => setCurrentService(null)} />
      ) : currentService === 'admin-news' ? (
        <AdminNews onBack={() => setCurrentService(null)} />
      ) : (
        <div className="min-h-screen bg-[#0A1929]">
          <Navbar onLogoClick={handleLogoClick} />
          <main>
            <Hero />
            <About />
            <BusinessAreas onNavigate={(id) => setCurrentService(id)} />
            <WarangStudio />
            <Vision />
          </main>
          <Footer />
        </div>
      )}
    </ContentProvider>
  );
};

export default App;
