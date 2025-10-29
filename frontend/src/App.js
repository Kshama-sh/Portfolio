import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyChooseSection from './components/WhyChooseSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App bg-[#0B1320]">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <PortfolioSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;