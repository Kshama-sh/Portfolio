import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Zap } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = ['Full-Stack Development', 'AI/ML Solutions', 'Cloud Architecture', 'Modern Web Apps'];
  
  useEffect(() => {
    let currentText = '';
    let charIndex = 0;
    const currentSkill = skills[currentSkillIndex];
    
    const typingInterval = setInterval(() => {
      if (charIndex < currentSkill.length) {
        currentText += currentSkill[charIndex];
        setDisplayText(currentText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          // Erase text
          const eraseInterval = setInterval(() => {
            currentText = currentText.slice(0, -1);
            setDisplayText(currentText);
            if (currentText === '') {
              clearInterval(eraseInterval);
              setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [currentSkillIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Available for Projects</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            Crafting Digital
            <span className="block relative mt-2">
              {/* Glow layer - soft diffused radial light behind text */}
              <span className="absolute inset-0 blur-3xl opacity-60 bg-gradient-to-r from-blue-400/40 via-cyan-400/60 to-blue-400/40 animate-gradient bg-300%"></span>
              
              {/* Secondary glow for depth */}
              <span className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-cyan-300/30 via-blue-300/50 to-cyan-300/30 animate-gradient bg-300%" style={{ animationDelay: '0.5s' }}></span>
              
              {/* Main text with premium gradient */}
              <span className="relative bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-200 bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                Excellence
              </span>
            </span>
          </h1>

          {/* Typing animation */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
              <p className="text-2xl md:text-3xl lg:text-4xl font-mono text-cyan-300">
                {displayText}
                <span className="animate-blink">|</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            A two-person powerhouse delivering cutting-edge web applications, AI-powered solutions, and scalable cloud infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('portfolio')}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 group"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-6 text-lg rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">11+</div>
              <div className="text-slate-400 text-sm md:text-base">Years Combined</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-slate-400 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-slate-400 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300% {
          background-size: 300%;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;