import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App bg-slate-900">
      <Header />
      <HeroSection />
      <AboutSection />
      {/* More sections will be added */}
    </div>
  );
}

export default App;