import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1320]">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] top-40 left-1/4 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] bottom-40 right-1/4 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">We Build Modern</span>
            <span className="block relative mt-2">
              {/* Soft glow behind text */}
              <span className="absolute inset-0 blur-[60px] opacity-50 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400"></span>
              {/* Main text */}
              <span className="relative text-cyan-400 drop-shadow-[0_4px_12px_rgba(6,182,212,0.6)]">Web Apps</span>
            </span>
          </h1>

          {/* Sub-headline 1 */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            AI-powered software for founders & tech-driven teams
          </p>

          {/* Sub-headline 2 */}
          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            A two-person powerhouse delivering cutting-edge web applications, AI-powered solutions, and scalable cloud infrastructure
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8 py-6 text-base rounded-lg transition-all duration-300"
            >
              Build With Us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-6 text-base rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              View Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">11+</div>
              <div className="text-gray-400 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;