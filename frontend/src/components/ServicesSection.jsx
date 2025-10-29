import React from "react";
import { Code, Database, Layers, Brain } from "lucide-react";
import { services } from "../data/mock";

const iconMap = {
  Code: Code,
  Database: Database,
  Layers: Layers,
  Brain: Brain,
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0b1320] via-[#0b1320] to-[#0a0f1d]"
    >
      {/* Background glow and vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[90vmin] h-[90vmin] rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(1100px_420px_at_50%_110%,rgba(0,0,0,0.55),transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white title-glow-white">What We </span>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent title-glow-cyan">
              Build
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300/90 max-w-3xl mx-auto soft-shadow">
            From concept to deployment, we deliver comprehensive solutions
            tailored to your needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="relative rounded-2xl p-8 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:border-cyan-400/30 transition-all duration-300 group overflow-hidden backdrop-saturate-125"
              >
                {/* top sheen and edges */}
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60"></div>
                <div className="pointer-events-none absolute inset-y-8 left-0 w-px bg-white/5 group-hover:bg-cyan-300/20 transition-colors"></div>
                <div className="pointer-events-none absolute inset-y-8 right-0 w-px bg-white/5 group-hover:bg-cyan-300/20 transition-colors"></div>
                {/* soft spotlight */}
                <div className="absolute -z-10 left-1/2 top-10 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-500/10 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),rgba(34,211,238,0.08)_60%,transparent_70%)] ring-1 ring-cyan-400/20 icon-glow">
                  <IconComponent className="w-8 h-8 text-cyan-400 drop-shadow-[0_4px_12px_rgba(34,211,238,0.45)]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 soft-shadow">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-full text-sm text-slate-300 bg-[#111827]/40 border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
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

      <style jsx>{`
        .title-glow-white {
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.18),
            0 0 30px rgba(0, 0, 0, 0.35);
        }
        .title-glow-cyan {
          text-shadow: 0 3px 14px rgba(34, 211, 238, 0.45),
            0 0 30px rgba(34, 211, 238, 0.25);
        }
        .soft-shadow {
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.45);
        }
        .icon-glow {
          box-shadow: inset 0 0 0 1px rgba(34, 211, 238, 0.15),
            0 10px 30px rgba(34, 211, 238, 0.12);
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
