import React, { useState, useEffect } from "react";
import { ArrowRight, Code, Zap } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const skills = [
    "Full-Stack Development",
    "AI/ML Solutions",
    "Cloud Architecture",
    "Modern Web Apps",
  ];

  useEffect(() => {
    let currentText = "";
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
            if (currentText === "") {
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-20 -left-20 animate-pulse hue-shift z-0"></div>
        <div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-20 -right-20 animate-pulse hue-shift z-0"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse hue-shift z-0"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* Psychedelic conic gradient ring */}
        <div className="psy-ring z-0"></div>
        {/* Grain overlay */}
        <div className="grain-overlay pointer-events-none z-0"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 z-0"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-20">
        <div className="max-w-5xl mx-auto text-center relative z-20">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">
              Available for Projects
            </span>
          </div> */}

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight text-glow-strong">
            We Build Modern
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300% mt-2 text-glow-strong">
              Web Apps
            </span>
          </h1>

          {/* Typing animation */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <div className="flex items-center gap-3">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
              <p className="text-2xl md:text-3xl lg:text-4xl font-mono text-cyan-300 text-glow-soft">
                {displayText}
                <span className="animate-blink">|</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed text-glow-faint">
            Your Tech Vision, Engineered With Precision
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 group btn-glow relative z-20"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-6 text-lg rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 btn-outline-glow relative z-20"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto relative z-20">
            <div className="text-center relative z-20">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 text-glow-stat">
                2+
              </div>
              <div className="text-slate-400 text-sm md:text-base">Years</div>
            </div>
            <div className="text-center relative z-20">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 text-glow-stat">
                5+
              </div>
              <div className="text-slate-400 text-sm md:text-base">
                Projects Delivered
              </div>
            </div>
            <div className="text-center relative z-20">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 text-glow-stat">
                100%
              </div>
              <div className="text-slate-400 text-sm md:text-base">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300% {
          background-size: 300%;
        }
        /* Subtle hue shift for background blobs */
        @keyframes hueRotate {
          0% {
            filter: hue-rotate(0deg) saturate(110%);
          }
          50% {
            filter: hue-rotate(20deg) saturate(130%);
          }
          100% {
            filter: hue-rotate(0deg) saturate(110%);
          }
        }
        .hue-shift {
          animation: hueRotate 8s ease-in-out infinite;
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        /* Text glow styles */
        .text-glow-strong {
          text-shadow: 0 2px 8px rgba(15, 185, 255, 0.35),
            0 0 24px rgba(59, 130, 246, 0.25), 0 0 2px rgba(255, 255, 255, 0.4);
        }
        .text-glow-soft {
          text-shadow: 0 1px 6px rgba(34, 211, 238, 0.25),
            0 0 12px rgba(59, 130, 246, 0.15);
        }
        .text-glow-faint {
          text-shadow: 0 1px 4px rgba(148, 163, 184, 0.25);
        }
        .text-glow-stat {
          text-shadow: 0 2px 10px rgba(34, 211, 238, 0.35),
            0 0 18px rgba(56, 189, 248, 0.25);
        }
        /* Button glow */
        .btn-glow:hover {
          box-shadow: 0 10px 20px rgba(56, 189, 248, 0.25),
            0 0 0 6px rgba(34, 211, 238, 0.15);
        }
        .btn-outline-glow:hover {
          box-shadow: 0 10px 20px rgba(56, 189, 248, 0.15),
            inset 0 0 20px rgba(34, 211, 238, 0.15);
        }
        /* Psychedelic ring */
        @keyframes spinSlow {
          to {
            transform: rotate(360deg);
          }
        }
        .psy-ring {
          position: absolute;
          width: 140vmin;
          height: 140vmin;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          background: conic-gradient(
            from 0deg,
            rgba(34, 211, 238, 0.06) 0deg,
            rgba(59, 130, 246, 0.06) 120deg,
            rgba(165, 180, 252, 0.06) 240deg,
            rgba(34, 211, 238, 0.06) 360deg
          );
          filter: blur(40px) saturate(130%);
          animation: spinSlow 60s linear infinite;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        /* Grain overlay */
        .grain-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.6"/></svg>');
          background-size: 200px 200px;
          mix-blend-mode: overlay;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
