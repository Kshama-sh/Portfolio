import React from "react";
import { Target, Sparkles, Award } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Target,
      title: "Focused Excellence",
      description:
        "As a two-person team, every project receives our undivided attention and expertise. No middlemen, just direct collaboration.",
    },
    {
      icon: Sparkles,
      title: "Cutting-Edge Tech",
      description:
        "We stay at the forefront of technology, leveraging the last frameworks, tools, and AI innovations to build future-proof solutions.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "11+ combined years of experience and 50+ successful projects across diverse industries speak to our commitment to quality.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0b1320] via-[#0b1320] to-[#0a0f1d]">
      {/* Background glow and vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[80vmin] h-[80vmin] rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[120vmin] h-[60vmin] rounded-[9999px] bg-[#081024] blur-3xl opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_110%,rgba(0,0,0,0.55),transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          <span className="text-white title-glow-white">Why Choose </span>
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent title-glow-cyan">
            Us
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-6 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:border-cyan-400/30 transition-all duration-300 group overflow-hidden backdrop-saturate-125"
              >
                {/* edges and top sheen */}
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60"></div>
                <div className="pointer-events-none absolute inset-y-6 left-0 w-px bg-white/5 group-hover:bg-cyan-300/20 transition-colors"></div>
                <div className="pointer-events-none absolute inset-y-6 right-0 w-px bg-white/5 group-hover:bg-cyan-300/20 transition-colors"></div>
                {/* soft spotlight */}
                <div className="absolute -z-10 left-1/2 top-6 -translate-x-1/2 w-56 h-56 rounded-full bg-cyan-500/10 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),rgba(34,211,238,0.08)_60%,transparent_70%)] ring-1 ring-cyan-400/20 icon-glow">
                  <IconComponent className="w-7 h-7 text-cyan-400 drop-shadow-[0_4px_12px_rgba(34,211,238,0.45)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 soft-shadow">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {reason.description}
                </p>
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

export default WhyChooseSection;
