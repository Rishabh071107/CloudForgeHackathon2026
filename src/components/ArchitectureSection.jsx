import React from 'react';
import { Shield, Layers, Cpu, Database, Eye, ArrowDown, Activity, Lock, RefreshCw, Zap } from 'lucide-react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function ArchitectureSection() {
  const pillars = [
    { title: "SCALABILITY", icon: Zap, desc: "Elastic auto-scaling compute fleets" },
    { title: "RELIABILITY", icon: RefreshCw, desc: "Fault-tolerant multi-zone routing" },
    { title: "SECURITY", icon: Lock, desc: "Zero-trust IAM & TLS encryption" },
    { title: "OBSERVABILITY", icon: Eye, desc: "Real-time metrics & distributed trace" },
  ];

  return (
    <section className="py-24 bg-[#18181B] text-white relative border-b border-[#27272A] overflow-hidden">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase mb-2">
            05 / ARCHITECTURE BLUEPRINT
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            DESIGN FOR <span className="text-[#F97316]">SCALE.</span>
          </h2>
        </div>

        {/* 4 Cloud Engineering Pillars Header Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#27272A]/60 border border-[#F97316]/30 p-4 rounded-xs flex flex-col justify-between hover:border-[#F97316] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#F97316] tracking-wider">
                    {pillar.title}
                  </span>
                  <IconComponent className="w-4 h-4 text-[#F97316]" />
                </div>
                <p className="font-sans text-xs text-[#52525B]">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Multi-Tier Infrastructure Flow Blueprint */}
        <div className="bg-[#27272A]/40 border border-[#27272A] p-6 sm:p-10 rounded-xs relative">
          
          <div className="flex items-center justify-between border-b border-[#27272A] pb-4 mb-8">
            <span className="font-mono text-xs text-[#F97316] tracking-widest uppercase flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#F97316]" />
              TECHNICAL ARCHITECTURE DAG DIAGRAM
            </span>
            <span className="font-mono text-xs text-[#52525B]">
              SPEC: HIGH_AVAILABILITY
            </span>
          </div>

          {/* Architecture Visual Diagram Flow */}
          <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
            
            {/* Tier 1: User */}
            <div className="bg-[#18181B] border border-[#52525B]/40 p-4 rounded-xs flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#F97316]" />
                <span className="font-heading font-bold text-sm text-white uppercase tracking-wider">USER</span>
              </div>
              <span className="font-mono text-xs text-[#52525B]">INGRESS / HTTPS TRAFFIC</span>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-5 h-5 text-[#F97316] animate-bounce" />
            </div>

            {/* Tier 2: Load Balancer */}
            <div className="bg-[#18181B] border border-[#F97316]/50 p-4 rounded-xs flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#F97316]" />
                <span className="font-heading font-bold text-sm text-white uppercase tracking-wider">LOAD BALANCER</span>
              </div>
              <span className="font-mono text-xs text-[#F97316]">ANYCAST ROUTING & TLS</span>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-5 h-5 text-[#F97316]" />
            </div>

            {/* Tier 3: API / Application Layer with Branching Microservices */}
            <div className="bg-[#27272A] border border-[#27272A] p-6 rounded-xs">
              <div className="flex items-center justify-between border-b border-[#52525B]/40 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#F97316]" />
                  <span className="font-heading font-bold text-sm text-white uppercase tracking-wider">
                    API / APPLICATION LAYER
                  </span>
                </div>
                <span className="font-mono text-xs text-[#52525B]">GATEWAY & AUTHENTICATION</span>
              </div>

              {/* Branching Microservices */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-[#18181B] border border-[#52525B]/30 p-3 rounded-xs text-center">
                  <span className="font-mono text-xs text-[#E4E4E7] block">AUTH SERVICE</span>
                  <span className="font-mono text-[9px] text-[#F97316]">JWT / OAuth2</span>
                </div>
                <div className="bg-[#18181B] border border-[#52525B]/30 p-3 rounded-xs text-center">
                  <span className="font-mono text-xs text-[#E4E4E7] block">CORE LOGIC API</span>
                  <span className="font-mono text-[9px] text-[#F97316]">gRPC / Rest</span>
                </div>
                <div className="bg-[#18181B] border border-[#52525B]/30 p-3 rounded-xs text-center">
                  <span className="font-mono text-xs text-[#E4E4E7] block">EVENT STREAM</span>
                  <span className="font-mono text-[9px] text-[#F97316]">Pub / Sub</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-5 h-5 text-[#F97316]" />
            </div>

            {/* Tier 4: Compute */}
            <div className="bg-[#18181B] border border-[#52525B]/40 p-4 rounded-xs flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-[#F97316]" />
                <span className="font-heading font-bold text-sm text-white uppercase tracking-wider">COMPUTE LAYER</span>
              </div>
              <span className="font-mono text-xs text-[#52525B]">SERVERLESS WORKERS & KUBERNETES</span>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-5 h-5 text-[#F97316]" />
            </div>

            {/* Tier 5: Data */}
            <div className="bg-[#18181B] border border-[#52525B]/40 p-4 rounded-xs flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-[#F97316]" />
                <span className="font-heading font-bold text-sm text-white uppercase tracking-wider">DATA STORAGE</span>
              </div>
              <span className="font-mono text-xs text-[#52525B]">MANAGED SQL / NOSQL & REDIS</span>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-5 h-5 text-[#F97316]" />
            </div>

            {/* Tier 6: Observability */}
            <div className="bg-[#F97316]/10 border border-[#F97316] p-4 rounded-xs flex items-center justify-between shadow-lg shadow-[#F97316]/10">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-[#F97316]" />
                <span className="font-heading font-bold text-sm text-[#F97316] uppercase tracking-wider">OBSERVABILITY & TELEMETRY</span>
              </div>
              <span className="font-mono text-xs text-[#E4E4E7]">REAL-TIME LOGGING & TRACING</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
