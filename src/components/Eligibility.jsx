import React from 'react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function Eligibility() {
  return (
    <section className="py-24 bg-[#18181B] text-white relative border-b border-[#27272A] overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase mb-2">
            07 / ELIGIBILITY & CONSTRAINTS
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            WHO'S <span className="text-[#F97316]">BUILDING?</span>
          </h2>
        </div>

        {/* High-Impact Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {HACKATHON_DATA.eligibilityStats.map((item, idx) => (
            <div
              key={item.label}
              className="bg-[#27272A]/40 border border-[#27272A] hover:border-[#F97316] p-6 rounded-xs transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="mb-6">
                <span className="font-mono text-xs text-[#52525B] block mb-2">
                  RULE 0{idx + 1}
                </span>
                
                {/* Huge Typography Stat */}
                <span className="font-heading font-black text-5xl sm:text-6xl text-[#F97316] tracking-tighter block group-hover:scale-105 transition-transform origin-left">
                  {item.stat}
                </span>
              </div>

              <div>
                <p className="font-heading font-bold text-sm text-white tracking-wide uppercase leading-tight">
                  {item.label}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#27272A] font-mono text-[9px] text-[#52525B]">
                STATUS: STRICT_PARAM
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
