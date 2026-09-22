import React from 'react';
import { Cpu, Terminal } from 'lucide-react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function Footer() {
  const footerLinks = [
    { name: 'Format', href: '#format' },
    { name: 'Evaluation', href: '#evaluation' },
    { name: 'Rules', href: '#rules' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#18181B] text-white border-t border-[#27272A] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-[#27272A]">
          
          {/* Left Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-[#F97316] text-[#18181B] font-mono font-bold flex items-center justify-center rounded-xs">
                <Cpu className="w-4 h-4 text-[#18181B]" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-wider">
                {HACKATHON_DATA.title}
              </span>
            </div>
            <span className="font-mono text-xs text-[#F97316] tracking-widest uppercase">
              {HACKATHON_DATA.tagline}
            </span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-start md:justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-xs text-[#52525B] hover:text-[#F97316] transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Meta */}
          <div className="flex flex-col items-start md:items-end">
            <span className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              {HACKATHON_DATA.date}
            </span>
            <span className="font-mono text-xs text-[#52525B] uppercase">
              BIT • LEARNING CENTRE
            </span>
          </div>

        </div>

        {/* Bottom Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#52525B] gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#F97316]" />
            <span className="text-[#F97316] font-semibold">CLOUD_FORGE_2026 // BUILD_PIPELINE</span>
          </div>
          <div>
            <span>BANNARI AMMAN INSTITUTE OF TECHNOLOGY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
