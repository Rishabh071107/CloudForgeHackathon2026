import React from 'react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function EventDetails() {
  return (
    <section className="py-24 bg-[#18181B] text-white relative border-b border-[#27272A] overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase mb-2">
            02 / SPECIFICATIONS
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-7xl tracking-tighter text-white uppercase">
            THE <span className="text-[#F97316]">SPRINT</span>
          </h2>
          <div className="w-24 h-[2px] bg-[#F97316] mt-4" />
        </div>

        {/* Structured Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272A] border border-[#27272A]">
          {HACKATHON_DATA.sprintDetails.map((detail, index) => (
            <div
              key={detail.label}
              className="bg-[#18181B] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#27272A]/50 transition-colors group relative"
            >
              {/* Corner Orange Accent Accent */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Top Index & Label */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase">
                  {detail.label}
                </span>
                <span className="font-mono text-xs text-[#52525B]">
                  [0{index + 1}]
                </span>
              </div>

              {/* Oversized Typographic Value */}
              <div>
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase group-hover:text-[#F97316] transition-colors leading-tight block">
                  {detail.value}
                </span>
              </div>

              {/* Bottom Technical Status */}
              <div className="mt-8 pt-4 border-t border-[#27272A]/80 flex items-center justify-between font-mono text-[10px] text-[#52525B]">
                <span>VERIFIED</span>
                <span className="text-[#F97316]">// BIT_PARAM</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
