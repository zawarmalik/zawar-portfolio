import React from 'react';
import { coreCompetencies, softSkillsList } from '../data/portfolioData';

const PillarCard = ({ pillar, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-white rounded-3xl p-7 md:p-8 border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(255,42,42,0.1)] hover:border-red-500/40 transition-all duration-500 flex flex-col justify-between group"
  >
    <div>
      <div className="flex items-center justify-between mb-5">
        <span className="text-3xl p-3 bg-red-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
          {pillar.icon}
        </span>
        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
          {pillar.badge}
        </span>
      </div>

      <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-4 group-hover:text-[#ff2a2a] transition-colors">
        {pillar.title}
      </h3>

      <ul className="space-y-3">
        {pillar.points.map((pt, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium leading-relaxed">
            <span className="text-[#ff2a2a] font-bold text-base leading-none mt-0.5 select-none">✔</span>
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SoftSkillCard = ({ skill, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-[#fbfbfb] border border-gray-200/80 rounded-2xl p-5 hover:scale-[1.02] hover:bg-white hover:border-[#ff2a2a]/30 hover:shadow-[0_15px_35px_rgba(255,42,42,0.07)] transition-all duration-300 group flex flex-col items-start justify-between min-h-[190px]"
  >
    <div>
      <div className="text-2xl mb-3 p-2.5 bg-gray-100 rounded-xl group-hover:bg-[#ff2a2a]/10 group-hover:scale-110 transition-all duration-300 inline-block">
        {skill.icon}
      </div>
      <h4 className="text-gray-900 text-base font-black tracking-tight mb-1.5 uppercase">
        {skill.name}
      </h4>
      <p className="text-gray-500 text-xs md:text-sm font-medium leading-relaxed">
        {skill.desc}
      </p>
    </div>
  </div>
);

const SoftSkills = () => {
  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      
      {/* Top paper divider (torn SVG transition from dark section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-14 md:mb-18 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Core Competencies & Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
            Project Handling & Problem Solving
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            The three pillars behind my work: scoping and delivering real PRDs, scientific problem solving with evidence, and translating complex data into plain-English decisions.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {coreCompetencies.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Grounded Fieldwork & Professional Strengths */}
        <div data-aos="fade-up" className="mb-8 text-center">
          <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase mb-2">
            Fieldwork & Professional Track Record
          </h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto font-medium">
            Grounded in 3+ years of door-to-door survey operations, database governance, and cross-functional leadership.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;
