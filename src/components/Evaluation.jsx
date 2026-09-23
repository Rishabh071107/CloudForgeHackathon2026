import React from 'react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function Evaluation() {
  return (
    <section id="evaluation" className="py-24 bg-[#18181B] text-white relative border-b border-[#27272A] overflow-hidden">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase mb-2">
            03 / EVALUATION METRICS
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            WHAT MAKES <br />
            <span className="text-[#F97316]">A STRONG SOLUTION?</span>
          </h2>
        </div>

        {/* 6 Evaluation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HACKATHON_DATA.evaluationCriteria.map((item) => (
            <div
              key={item.number}
              className="bg-[#27272A]/50 border border-[#27272A] hover:border-[#F97316] p-8 rounded-xs transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Large Orange Number */}
                <span className="font-mono text-5xl font-black text-[#F97316] block mb-4 group-hover:scale-105 transition-transform origin-left">
                  {item.number}
                </span>

                {/* Criteria Title */}
                <h3 className="font-heading font-bold text-xl text-white tracking-wide uppercase mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Criteria Detail */}
                <p className="font-sans text-sm text-[#E4E4E7]/90 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-8 pt-4 border-t border-[#27272A] flex items-center justify-between font-mono text-[10px] text-[#52525B]">
                <span>CRITERION // {item.number}</span>
                <span className="text-[#F97316] group-hover:text-white transition-colors">JUDGING MATRIX</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
