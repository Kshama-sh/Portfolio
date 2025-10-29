import React from 'react';
import { teamMembers } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#0B1320] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Meet The </span>
            <span className="text-cyan-400">Team</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Two passionate developers united by a mission to build exceptional software solutions that make a difference.
          </p>
        </div>

        {/* Team members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-[#0F1827] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Image container */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-6">{member.role}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-gray-300">5+ Years Experience</p>
                  <p className="text-gray-300">AI-Powered Web Products</p>
                </div>
                
                {/* Expertise badges */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.slice(0, 2).map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-[#1A2332] text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
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