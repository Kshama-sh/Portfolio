import React from 'react';
import { Code, Database, Layers, Brain } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { services } from '../data/mock';

const iconMap = {
  Code: Code,
  Database: Database,
  Layers: Layers,
  Brain: Brain,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-1/4 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl bottom-1/4 right-1/4"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-4">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive solutions tailored to your needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;