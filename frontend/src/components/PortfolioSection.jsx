import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Full-Stack', 'Frontend', 'Backend', 'AI/ML'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="portfolio" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-0 right-1/4"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl bottom-0 left-1/4"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-4">
            <Filter className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of our recent work across various technologies and industries.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? 'default' : 'outline'}
              className={`rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-slate-900 shadow-lg shadow-cyan-500/30'
                  : 'border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 bg-slate-800/30'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Project image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold"
                  >
                    View Details
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-slate-800/50 text-slate-300 border border-slate-700/50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs"
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;