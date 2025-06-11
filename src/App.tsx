import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyProfile from './components/CompanyProfile';
import Services from './components/Services';
import Founder from './components/Founder';
import Timeline from './components/Timeline';
import ICP from './components/ICP';
import Analysis from './components/Analysis';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useNavigation } from './hooks/useNavigation';
import { useModal } from './hooks/useModal';

function App() {
  const { activeSection } = useNavigation();
  const { isModalOpen, modalContent, closeModal, openModal } = useModal();

  return (
    <div className="min-h-screen relative">
      <ThreeBackground />
      
      <div className="relative z-10">
        <Header activeSection={activeSection} />
        
        <main>
          <Hero />
          <CompanyProfile />
          <Services />
          <Founder />
          <Timeline onEventClick={openModal} />
          <ICP />
          <Analysis />
        </main>
        
        <Footer />
        
        <Modal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          content={modalContent} 
        />
      </div>
    </div>
  );
}

export default App;