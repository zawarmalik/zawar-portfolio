import React from 'react';
import { experienceList } from '../data/portfolioData';

const ExperienceCard = ({ item, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-black/25 backdrop-blur-md border border-white/15 rounded-3xl p-7 md:p-8 hover:scale-[1.02] hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex flex-wrap justify-between items-center gap-2 mb-5">
        <span className="text-white/60 text-xs font-mono font-bold tracking-widest uppercase">
          {item.duration}
        </span>
        <span className="bg-white/10 text-white text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-white/20">
          {item.badge}
        </span>
      </div>
      <h3 className="text-white text-2xl font-black mb-1 tracking-tight">
        {item.role}
      </h3>
      <p className="text-red-200 text-sm font-black tracking-wide uppercase mb-2">
        {item.organization}
      </p>
      {item.location && (
        <p className="text-white/50 text-xs font-semibold tracking-wide mb-4">
          📍 {item.location}
        </p>
      )}

      {item.points && item.points.length > 0 && (
        <ul className="space-y-2.5 mt-4 text-white/80 text-sm leading-relaxed border-t border-white/10 pt-4">
          {item.points.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="text-red-300 font-bold mt-0.5 text-sm select-none">▸</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">

      {/* Torn paper divider at top (transition from dark Projects section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-xl mx-auto">
            Digital agency leadership, national survey operations, and mission-critical data systems where the outcomes mattered.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {experienceList.map((item, index) => (
            <ExperienceCard key={item.organization} item={item} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Experience;
