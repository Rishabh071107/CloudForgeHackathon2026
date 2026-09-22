import React, { useState } from 'react';
import { User, Shield, Terminal, Cpu, Database, Cloud, Activity, CheckCircle } from 'lucide-react';

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 'user',
      title: 'USER',
      label: 'REQUEST',
      subtext: 'Client Layer',
      icon: User,
      metric: 'HTTP/3 SSL',
      detail: 'Global End-User Ingress & Client Traffic'
    },
    {
      id: 'lb',
      title: 'LOAD BALANCER',
      label: 'TRAFFIC',
      subtext: 'Edge Router',
      icon: Shield,
      metric: '100k req/s',
      detail: 'TLS Termination & Anycast Routing'
    },
    {
      id: 'api',
      title: 'API',
      label: 'GATEWAY',
      subtext: 'Rest / gRPC',
      icon: Terminal,
      metric: '< 15ms Latency',
      detail: 'Auth Middleware & Service Discovery'
    },
    {
      id: 'compute',
      title: 'COMPUTE',
      label: 'SCALE',
      subtext: 'Containers',
      icon: Cpu,
      metric: 'Auto-Scaling',
      detail: 'Serverless Worker Fleet & Pod Clusters'
    },
    {
      id: 'data',
      title: 'DATA',
      label: 'STORAGE',
      subtext: 'SQL / NoSQL',
      icon: Database,
      metric: '99.999% SLA',
      detail: 'Distributed Replica Clusters & Redis Cache'
    },
    {
      id: 'deploy',
      title: 'DEPLOY',
      label: 'RELEASE',
      subtext: 'CI/CD Pipeline',
      icon: Cloud,
      metric: 'Zero Downtime',
      detail: 'Automated Blue/Green Cloud Deployment'
    }
  ];

  return (
    <div className="w-full relative bg-[#18181B] border border-[#27272A] rounded-sm p-4 sm:p-6 lg:p-8 bg-grid-pattern overflow-hidden shadow-2xl">
      
      {/* Visual Header Tag */}
      <div className="flex items-center justify-between border-b border-[#27272A] pb-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F97316] animate-ping" />
          <span className="font-mono text-xs text-[#F97316] tracking-wider uppercase font-semibold">
            CLOUD ARCHITECTURE VISUALIZATION
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#52525B]">
          <Activity className="w-3.5 h-3.5 text-[#F97316]" />
          <span>STATUS: LIVE_PIPELINE</span>
        </div>
      </div>

      {/* Desktop SVG & Canvas View */}
      <div className="hidden lg:block relative py-6">
        {/* Animated Connecting SVG Pipeline */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 900 140" fill="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.4" />
            </linearGradient>
            
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Infrastructure Connection Path */}
          <path
            d="M 60 70 L 210 70 L 360 70 L 510 70 L 660 70 L 810 70"
            stroke="url(#lineGrad)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />

          {/* Animated Data Packets flowing through pipeline */}
          <circle r="4" fill="#F97316" className="glow-orange-sm">
            <animateMotion path="M 60 70 L 810 70" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#EA580C">
            <animateMotion path="M 60 70 L 810 70" dur="4s" begin="1.3s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="#FAFAF9">
            <animateMotion path="M 60 70 L 810 70" dur="4s" begin="2.6s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* Nodes Grid */}
        <div className="grid grid-cols-6 gap-3 relative z-10">
          {nodes.map((node, index) => {
            const IconComponent = node.icon;
            const isHovered = activeNode === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`flex flex-col items-center text-center p-3 rounded-xs border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'bg-[#27272A] border-[#F97316] shadow-lg shadow-[#F97316]/20 -translate-y-1'
                    : 'bg-[#18181B]/90 border-[#27272A] hover:border-[#52525B]'
                }`}
              >
                {/* Node Top Micro Tag */}
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#F97316] mb-2 px-1.5 py-0.5 bg-[#F97316]/10 border border-[#F97316]/30 rounded-xs">
                  {node.label}
                </span>

                {/* Icon Circle */}
                <div
                  className={`w-12 h-12 rounded-xs flex items-center justify-center mb-3 transition-colors ${
                    isHovered ? 'bg-[#F97316] text-[#18181B]' : 'bg-[#27272A] text-[#E4E4E7]'
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Node Title & Subtext */}
                <h4 className="font-heading font-bold text-xs text-white tracking-wide">{node.title}</h4>
                <p className="font-mono text-[10px] text-[#52525B] mt-0.5">{node.subtext}</p>

                {/* Node Metric */}
                <div className="mt-3 pt-2 border-t border-[#27272A] w-full flex items-center justify-center gap-1 text-[10px] font-mono text-[#E4E4E7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                  {node.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Stacked Flow View (Simplified for responsiveness) */}
      <div className="block lg:hidden py-2">
        <div className="flex flex-col space-y-3">
          {nodes.map((node, index) => {
            const IconComponent = node.icon;
            return (
              <React.Fragment key={node.id}>
                <div className="flex items-center justify-between bg-[#27272A]/70 border border-[#27272A] p-3 rounded-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#F97316]/20 border border-[#F97316]/40 text-[#F97316] flex items-center justify-center rounded-xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-xs text-white">{node.title}</span>
                        <span className="font-mono text-[8px] px-1 py-0.2 bg-[#F97316]/10 text-[#F97316] rounded-xs">
                          {node.label}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#52525B]">{node.subtext}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-[#E4E4E7] bg-[#18181B] px-2 py-1 rounded-xs border border-[#27272A]">
                    {node.metric}
                  </span>
                </div>

                {index < nodes.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <div className="w-[1px] h-4 bg-[#F97316]/60 border-l border-dashed border-[#F97316]" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="mt-4 pt-3 border-t border-[#27272A] flex flex-wrap items-center justify-between text-[10px] font-mono text-[#52525B] gap-2">
        <div className="flex items-center gap-4">
          <span className="text-[#E4E4E7] flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-[#F97316]" /> PROD_READY_INFRASTRUCTURE
          </span>
          <span className="hidden sm:inline">// ZERO_DOWNTIME_ORCHESTRATION</span>
        </div>
        <div className="text-[#F97316] font-semibold tracking-wider">
          BIT // CLOUD_FORGE_ARCH_v2.0
        </div>
      </div>

    </div>
  );
}
