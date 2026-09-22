import React from 'react';
import { ArrowRight, ChevronDown, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { HACKATHON_DATA } from '../data/hackathonData';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-[#18181B] relative pt-24 pb-16 flex flex-col justify-center overflow-hidden border-b border-[#27272A]">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Badging */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/30 px-3 py-1 rounded-xs font-semibold">
            {HACKATHON_DATA.institution}
          </span>
          <span className="text-[#52525B] font-mono text-xs hidden sm:inline">//</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#E4E4E7] bg-[#27272A] border border-[#52525B]/40 px-3 py-1 rounded-xs">
            {HACKATHON_DATA.categoryLabel}
          </span>
        </div>

        {/* Main Grid: Typography Left, Interactive Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* Giant Geometric Heading */}
            <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.9] mb-4">
              CLOUD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#EA580C] to-white">
                FORGE
              </span> <br />
              <span className="text-[#52525B] font-mono text-4xl sm:text-6xl lg:text-7xl font-bold">
                2026
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-mono text-lg sm:text-xl font-bold text-[#F97316] tracking-wider mb-4 uppercase">
              {HACKATHON_DATA.tagline}
            </p>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-[#E4E4E7]/90 leading-relaxed max-w-xl mb-8">
              "{HACKATHON_DATA.heroDescription}"
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('#register');
                }}
                className="bg-[#F97316] hover:bg-[#EA580C] text-[#18181B] font-mono font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xs transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl shadow-[#F97316]/25 border border-[#F97316]"
              >
                REGISTER NOW <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#format"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('#format');
                }}
                className="bg-[#27272A] hover:bg-[#52525B]/40 text-[#E4E4E7] hover:text-white font-mono font-medium text-sm uppercase tracking-wider px-6 py-4 rounded-xs border border-[#52525B]/50 transition-all flex items-center justify-center gap-2"
              >
                EXPLORE HACKATHON <ChevronDown className="w-4 h-4 text-[#F97316]" />
              </a>
            </div>

            {/* Key Event Metadata Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#27272A]">
              <div className="bg-[#27272A]/50 p-3 rounded-xs border border-[#27272A]">
                <div className="flex items-center gap-1.5 text-[#F97316] font-mono text-[10px] uppercase mb-1">
                  <Calendar className="w-3.5 h-3.5" /> DATE
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white">{HACKATHON_DATA.date}</div>
              </div>

              <div className="bg-[#27272A]/50 p-3 rounded-xs border border-[#27272A]">
                <div className="flex items-center gap-1.5 text-[#F97316] font-mono text-[10px] uppercase mb-1">
                  <MapPin className="w-3.5 h-3.5" /> VENUE
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white">{HACKATHON_DATA.venue}</div>
              </div>

              <div className="bg-[#27272A]/50 p-3 rounded-xs border border-[#27272A]">
                <div className="flex items-center gap-1.5 text-[#F97316] font-mono text-[10px] uppercase mb-1">
                  <Clock className="w-3.5 h-3.5" /> FORMAT
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white">{HACKATHON_DATA.duration} • {HACKATHON_DATA.mode}</div>
              </div>

              <div className="bg-[#27272A]/50 p-3 rounded-xs border border-[#27272A]">
                <div className="flex items-center gap-1.5 text-[#F97316] font-mono text-[10px] uppercase mb-1">
                  <Users className="w-3.5 h-3.5" /> TEAM SIZE
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white">{HACKATHON_DATA.teamSize}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Abstract Cloud Visualization */}
          <div className="lg:col-span-6">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
