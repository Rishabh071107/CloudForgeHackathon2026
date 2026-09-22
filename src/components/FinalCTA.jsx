import React from 'react';
import { ArrowRight, Calendar, MapPin, Building2 } from 'lucide-react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function FinalCTA() {
  const handleRegisterClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#18181B] text-white relative border-b border-[#27272A] overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F97316]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Large Typography */}
        <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tighter uppercase leading-[0.95] mb-4">
          ONE DAY. <br />
          ONE CHALLENGE. <br />
          <span className="text-[#F97316]">ONE OPPORTUNITY.</span>
        </h2>

        <p className="font-mono text-xl sm:text-2xl font-bold text-[#E4E4E7] tracking-wider uppercase mb-10">
          TO BUILD SOMETHING REAL.
        </p>

        {/* Orange Primary CTA Button */}
        <a
          href="#register"
          onClick={handleRegisterClick}
          className="bg-[#F97316] hover:bg-[#EA580C] text-[#18181B] font-mono font-bold text-base sm:text-lg uppercase tracking-wider px-10 py-5 rounded-xs transition-all duration-200 transform hover:-translate-y-1 flex items-center gap-3 shadow-2xl shadow-[#F97316]/30 mb-12 border border-[#F97316]"
        >
          REGISTER NOW <ArrowRight className="w-6 h-6" />
        </a>

        {/* Secondary Metadata Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#52525B] pt-8 border-t border-[#27272A] w-full max-w-2xl">
          <span className="flex items-center gap-1.5 text-[#E4E4E7]">
            <Calendar className="w-4 h-4 text-[#F97316]" /> {HACKATHON_DATA.date}
          </span>
          <span>//</span>
          <span className="flex items-center gap-1.5 text-[#E4E4E7]">
            <MapPin className="w-4 h-4 text-[#F97316]" /> {HACKATHON_DATA.venue}
          </span>
          <span>//</span>
          <span className="flex items-center gap-1.5 text-[#E4E4E7]">
            <Building2 className="w-4 h-4 text-[#F97316]" /> {HACKATHON_DATA.institution}
          </span>
        </div>

      </div>
    </section>
  );
}
