import React from 'react';
import { ShieldAlert, FileText } from 'lucide-react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function Rules() {
  return (
    <section id="rules" className="py-24 bg-[#18181B] text-white relative border-b border-[#27272A] overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase mb-2">
            04 / HACKATHON RULES
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            BEFORE <br />
            <span className="text-[#F97316]">YOU BUILD.</span>
          </h2>
        </div>

        {/* Technical Document Container */}
        <div className="bg-[#27272A]/40 border border-[#27272A] rounded-xs overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="bg-[#27272A] p-4 px-6 flex items-center justify-between border-b border-[#52525B]/40">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#F97316]" />
              <span className="font-mono text-xs font-bold text-white tracking-wider uppercase">
                OFFICIAL_CODE_OF_CONDUCT.MD
              </span>
            </div>
            <span className="font-mono text-xs text-[#52525B]">
              REV_2026 // BIT
            </span>
          </div>

          {/* Numbered Rows List */}
          <div className="divide-y divide-[#27272A]">
            {HACKATHON_DATA.rules.map((ruleText, index) => {
              const ruleNum = (index + 1).toString().padStart(2, '0');
              return (
                <div
                  key={ruleNum}
                  className="p-5 sm:p-6 flex items-start gap-4 sm:gap-6 hover:bg-[#27272A]/70 transition-colors group"
                >
                  {/* Orange Counter */}
                  <span className="font-mono text-lg sm:text-xl font-bold text-[#F97316] group-hover:scale-110 transition-transform">
                    {ruleNum}
                  </span>

                  {/* Rule Content */}
                  <div className="flex-1">
                    <p className="font-sans text-sm sm:text-base text-[#E4E4E7] leading-relaxed">
                      {ruleText}
                    </p>
                  </div>

                  {/* Micro Indicator */}
                  <span className="hidden sm:inline font-mono text-[10px] text-[#52525B] group-hover:text-[#F97316] transition-colors">
                    MANDATORY
                  </span>
                </div>
              );
            })}
          </div>

          {/* Document Footer Warning Strip */}
          <div className="p-4 px-6 bg-[#27272A]/80 border-t border-[#27272A] flex items-center gap-3 text-xs font-mono text-[#E4E4E7]">
            <ShieldAlert className="w-4 h-4 text-[#F97316] flex-shrink-0" />
            <span>Strict compliance is required. Any breach of regulations will result in immediate disqualification.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
