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
          <span className="text-white">Why Choose </span>
          <span className="text-cyan-400">Us</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="bg-[#0F1827] rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;