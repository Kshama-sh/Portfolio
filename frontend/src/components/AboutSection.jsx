import React from 'react';
import { Award, Users, Sparkles, Target } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { teamMembers } from '../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl bottom-0 left-0"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-4">
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet The <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Two passionate developers united by a mission to build exceptional software solutions that make a difference.
          </p>
        </div>

        {/* Team members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image container with gradient overlay */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Name and role overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-300 mb-4 leading-relaxed">{member.bio}</p>
                  
                  {/* Expertise badges */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary"
                        className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why choose us */}
        <div className="max-w-6xl mx-auto mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-cyan-400">Us</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Focused Excellence</h4>
              <p className="text-slate-400 leading-relaxed">
                As a two-person team, every project receives our undivided attention and expertise. No middlemen, just direct collaboration.
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Cutting-Edge Tech</h4>
              <p className="text-slate-400 leading-relaxed">
                We stay at the forefront of technology, leveraging the latest frameworks, tools, and AI innovations to build future-proof solutions.
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">Proven Track Record</h4>
              <p className="text-slate-400 leading-relaxed">
                11+ combined years of experience and 50+ successful projects across diverse industries speak to our commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;