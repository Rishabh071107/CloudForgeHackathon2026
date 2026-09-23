import React from 'react';
import { Clock, Lightbulb, Code, Send, PlayCircle, ArrowRight } from 'lucide-react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function HackathonFormat() {
  const stepIcons = [Clock, Lightbulb, Code, Send, PlayCircle];

  return (
    <section id="format" className="py-20 bg-[#18181B] text-white relative border-b border-[#27272A] overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase mb-2">
            02 / FORMAT & TIMELINE
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-[0.95]">
            FROM PROBLEM <span className="text-[#F97316]">TO PROTOTYPE.</span>
          </h2>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative pt-6 pb-4">
          
          {/* Connecting Horizontal Orange Pipeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[60px] right-[60px] h-[2px] bg-gradient-to-r from-[#F97316] via-[#EA580C] to-[#F97316] z-0" />

          {/* Horizontal Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {HACKATHON_DATA.formatTimeline.map((item, idx) => {
              const IconComp = stepIcons[idx];
              return (
                <div key={item.phase} className="flex flex-col group">
                  
                  {/* Top Node Indicator */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#18181B] border-2 border-[#F97316] text-[#F97316] group-hover:bg-[#F97316] group-hover:text-[#18181B] flex items-center justify-center rounded-xs transition-colors duration-300 shadow-lg shadow-[#F97316]/20 flex-shrink-0 z-10">
                      <IconComp className="w-5 h-5" />
                    </div>
                    {/* Connecting Arrow for mobile/tablet flex */}
                    {idx < HACKATHON_DATA.formatTimeline.length - 1 && (
                      <div className="lg:hidden flex-1 h-[2px] bg-[#27272A] group-hover:bg-[#F97316] ml-4 transition-colors" />
                    )}
                  </div>

                  {/* Horizontal Timeline Card */}
                  <div className="bg-[#27272A]/40 border border-[#27272A] group-hover:border-[#F97316]/60 p-5 rounded-xs transition-all duration-300 hover:-translate-y-1 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[10px] font-bold text-[#F97316] tracking-widest uppercase bg-[#F97316]/10 px-2 py-0.5 border border-[#F97316]/30 rounded-xs">
                          PHASE 0{idx + 1}
                        </span>
                        <span className="font-mono text-[10px] text-[#52525B]">
                          {item.phase}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-base text-white tracking-wide uppercase mt-2 mb-2">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs text-[#E4E4E7]/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#27272A] flex items-center justify-between font-mono text-[9px] text-[#52525B]">
                      <span>STAGE // 0{idx + 1}</span>
                      <ArrowRight className="w-3 h-3 text-[#F97316] transform group-hover:translate-x-1 transition-transform" />
                    </div>
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
