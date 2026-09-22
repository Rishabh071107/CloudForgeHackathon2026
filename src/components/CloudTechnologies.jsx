import React, { useState } from 'react';
import { Cloud, Server, Container, GitBranch, Cpu, Database, Brain, Shield, Network, Info } from 'lucide-react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function CloudTechnologies() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categoryIcons = {
    'cloud-platforms': Server,
    'serverless': Cpu,
    'containers': Container,
    'devops': GitBranch,
    'apis': Network,
    'cloud-databases': Database,
    'ai-ml': Brain,
    'cybersecurity': Shield,
    'distributed-systems': Cloud
  };

  return (
    <section id="technologies" className="py-24 bg-[#18181B] text-white relative border-b border-[#27272A] overflow-hidden">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase mb-2">
            04 / TECHNOLOGIES
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95] mb-4">
            YOUR CLOUD. <br />
            <span className="text-[#F97316]">YOUR STACK.</span>
          </h2>

          {/* Important Technology Note */}
          <div className="flex items-center gap-2 bg-[#27272A] border border-[#52525B]/40 px-4 py-2.5 rounded-xs max-w-2xl text-xs font-mono text-[#E4E4E7]">
            <Info className="w-4 h-4 text-[#F97316] flex-shrink-0" />
            <span>
              Note: Participants are free to select relevant cloud technologies aligned with their chosen problem statement. You are not required to use all categories.
            </span>
          </div>
        </div>

        {/* Central Hub & Ecosystem Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          
          {/* Central Hub Display Node (Desktop Left) */}
          <div className="lg:col-span-4 bg-[#27272A]/70 border border-[#F97316]/40 p-8 rounded-xs text-center flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F97316]/20 to-transparent blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-20 h-20 bg-[#F97316] text-[#18181B] rounded-xs flex items-center justify-center mb-6 shadow-lg shadow-[#F97316]/30 animate-pulse">
              <Cloud className="w-10 h-10" />
            </div>

            <span className="font-mono text-xs text-[#F97316] tracking-widest uppercase mb-1 font-bold">
              CENTRAL HUB
            </span>
            <h3 className="font-heading font-black text-3xl text-white tracking-wider mb-2">
              CLOUD CORE
            </h3>
            <p className="font-mono text-xs text-[#52525B]">
              FLEXIBLE • SCALABLE • AGNOSTIC
            </p>

            <div className="mt-6 pt-4 border-t border-[#52525B]/40 w-full text-center">
              <span className="font-mono text-[10px] text-[#E4E4E7] block">
                {hoveredCategory 
                  ? `FOCUS: ${hoveredCategory.toUpperCase()}` 
                  : 'HOVER OVER A CATEGORY TO INSPECT'}
              </span>
            </div>
          </div>

          {/* Technology Cards Grid (Desktop Right 8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HACKATHON_DATA.technologyCategories.map((tech) => {
              const IconComponent = categoryIcons[tech.id] || Cloud;
              const isSelected = hoveredCategory === tech.title;

              return (
                <div
                  key={tech.id}
                  onMouseEnter={() => setHoveredCategory(tech.title)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`p-5 bg-[#18181B] border transition-all duration-300 rounded-xs cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#F97316] bg-[#27272A] shadow-lg shadow-[#F97316]/10 -translate-y-1'
                      : 'border-[#27272A] hover:border-[#52525B]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xs transition-colors ${
                      isSelected ? 'bg-[#F97316] text-[#18181B]' : 'bg-[#27272A] text-[#F97316]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-[#52525B] uppercase">
                      TECH // HUB
                    </span>
                  </div>

                  <div>
                    <h4 className="font-heading font-extrabold text-base text-white tracking-wide mb-1">
                      {tech.title}
                    </h4>
                    <p className="font-sans text-xs text-[#52525B] leading-relaxed">
                      {tech.description}
                    </p>
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
