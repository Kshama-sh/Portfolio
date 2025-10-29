import React from 'react';

const TechStackSection = () => {
  const technologies = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  ];

  return (
    <section id="techstack" className="py-24 bg-[#0B1320] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Our Tech </span>
            <span className="text-cyan-400">Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build robust, scalable solutions.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-[#0F1827] rounded-xl hover:bg-[#1A2332] transition-all duration-300 hover:transform hover:scale-110 group"
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-gray-400 text-sm font-normal group-hover:text-cyan-400 transition-colors text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;