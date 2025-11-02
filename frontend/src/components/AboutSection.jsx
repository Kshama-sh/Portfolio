import React from "react";
import { Github, Linkedin } from "lucide-react";
import { teamMembers } from "../data/mock";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1320] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Meet The{" "}
            </span>
            <span className="text-cyan-400 drop-shadow-[0_4px_12px_rgba(6,182,212,0.4)]">
              Team
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Two passionate developers united by a mission to build exceptional
            software solutions that make a difference.
          </p>
        </div>

        {/* Team members */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#0F1827] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-semibold mb-4 text-sm drop-shadow-[0_2px_4px_rgba(6,182,212,0.3)]">
                  {member.role}
                </p>

                <div className="space-y-1 mb-4 text-sm">
                  <p className="text-gray-300">5+ Years Experience</p>
                  <p className="text-gray-300">AI-Powered Web Products</p>
                </div>

                {/* Expertise badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.slice(0, 2).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[#1A2332] text-gray-300 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex gap-3">
                  <a
                    href={member.github || "#"}
                    className="w-10 h-10 rounded-full bg-[#1A2332] flex items-center justify-center hover:bg-[#1e2838] transition-colors group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href={member.linkedin || "#"}
                    className="w-10 h-10 rounded-full bg-[#1A2332] flex items-center justify-center hover:bg-[#1e2838] transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
