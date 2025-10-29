import React from 'react';
import { Code, Database, Layers, Brain } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Code: Code,
  Database: Database,
  Layers: Layers,
  Brain: Brain,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-[#0B1320] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">What We </span>
            <span className="text-cyan-400">Build</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive solutions tailored to your needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-[#0F1827] rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-cyan-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#1A2332] text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;