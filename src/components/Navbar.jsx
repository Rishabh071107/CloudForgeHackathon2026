import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Cpu } from 'lucide-react';
import { HACKATHON_DATA } from '../data/hackathonData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Format', href: '#format' },
    { name: 'Evaluation', href: '#evaluation' },
    { name: 'Rules', href: '#rules' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#18181B]/90 backdrop-blur-md border-b border-[#27272A] py-3 shadow-2xl'
          : 'bg-transparent py-5 border-b border-[#27272A]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            aria-label="Cloud Forge 2026 Home"
          >
            <div className="w-10 h-10 bg-[#F97316] text-[#18181B] font-mono font-bold flex items-center justify-center rounded-xs group-hover:bg-[#EA580C] transition-colors shadow-lg shadow-[#F97316]/20">
              <Cpu className="w-5 h-5 text-[#18181B]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg text-white tracking-wider flex items-center gap-1.5">
                CF <span className="text-[#52525B]">//</span> {HACKATHON_DATA.title}
              </span>
              <span className="font-mono text-[10px] text-[#F97316] tracking-widest uppercase">
                INTRA-COLLEGE HACKATHON
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-xs xl:text-sm font-mono tracking-wider text-[#E4E4E7] hover:text-[#F97316] transition-colors uppercase relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#register"
              onClick={(e) => handleNavClick(e, '#register')}
              className="bg-[#F97316] hover:bg-[#EA580C] text-[#18181B] font-mono font-bold text-xs xl:text-sm uppercase tracking-wider px-5 py-2.5 rounded-xs transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-[#F97316]/20 border border-[#F97316]"
            >
              REGISTER <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E4E4E7] hover:text-[#F97316] hover:bg-[#27272A] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#18181B]/95 backdrop-blur-xl border-b border-[#27272A] p-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-mono tracking-widest text-[#E4E4E7] hover:text-[#F97316] py-2 border-b border-[#27272A]/50 flex items-center justify-between uppercase"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#52525B]">// 0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
            <a
              href="#register"
              onClick={(e) => handleNavClick(e, '#register')}
              className="mt-4 bg-[#F97316] text-[#18181B] font-mono font-bold text-center text-sm uppercase tracking-wider py-3 rounded-xs flex items-center justify-center gap-2 shadow-lg shadow-[#F97316]/20"
            >
              REGISTER NOW <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
