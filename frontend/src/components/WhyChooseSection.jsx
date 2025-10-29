import React from 'react';
import { Target, Sparkles, Award } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Target,
      title: 'Focused Excellence',
      description: 'As a two-person team, every project receives our undivided attention and expertise. No middlemen, just direct collaboration.'
    },
    {
      icon: Sparkles,
      title: 'Cutting-Edge Tech',
      description: 'We stay at the forefront of technology, leveraging the last frameworks, tools, and AI innovations to build future-proof solutions.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '11+ combined years of experience and 50+ successful projects across diverse industries speak to our commitment to quality.'
    }
  ];

  return (
    <section className="py-24 bg-[#0B1320] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Why Choose </span>
          <span className="text-cyan-400 drop-shadow-[0_4px_12px_rgba(6,182,212,0.4)]">Us</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="bg-[#0F1827] rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;