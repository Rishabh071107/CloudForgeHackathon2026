import React from 'react';
import { ArrowRight, Code, Presentation, Lightbulb } from 'lucide-react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function EventIntro() {
  const stageIcons = [Lightbulb, Code, Presentation];

  return (
    <section id="about" className="py-20 bg-[#FAFAF9] text-[#18181B] relative overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase mb-2">
            {HACKATHON_DATA.eventIntro.label}
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#18181B] tracking-tight uppercase leading-[0.95] max-w-3xl mb-6">
            ONE DAY. <br />
            REAL PROBLEMS. <br />
            <span className="text-[#F97316]">REAL SOLUTIONS.</span>
          </h2>
          <p className="font-sans text-base sm:text-xl text-[#52525B] leading-relaxed max-w-3xl border-l-2 border-[#F97316] pl-4">
            "{HACKATHON_DATA.eventIntro.description}"
          </p>
        </div>

        {/* Pipeline Visual Stages */}
        <div className="relative mt-12">
          
          {/* Thin Horizontal Connecting Orange Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F97316] via-[#EA580C] to-[#F97316] -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {HACKATHON_DATA.eventIntro.stages.map((stage, idx) => {
              const IconComp = stageIcons[idx];
              return (
                <div
                  key={stage.number}
                  className="bg-white border border-[#E4E4E7] p-8 rounded-xs shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
                >
                  {/* Stage Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-4xl font-extrabold text-[#F97316] group-hover:scale-110 transition-transform">
                      {stage.number}
                    </span>
                    <div className="w-12 h-12 bg-[#18181B] text-[#F97316] flex items-center justify-center rounded-xs shadow-inner">
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-heading font-extrabold text-2xl text-[#18181B] tracking-wide mb-3 uppercase">
                    {stage.title}
                  </h3>

                  {/* Stage Description */}
                  <p className="font-sans text-sm text-[#52525B] leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Micro Indicator */}
                  <div className="mt-6 pt-4 border-t border-[#E4E4E7] flex items-center justify-between text-xs font-mono text-[#F97316]">
                    <span>STAGE // {stage.number}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
