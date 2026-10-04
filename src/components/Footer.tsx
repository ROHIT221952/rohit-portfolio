import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedInIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050D] border-t border-border-subtle pt-12 pb-10 overflow-hidden z-20">
      <div className="max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-subtle/50">
          
          {/* Brand Left */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-gradient-to-tr from-primary-blue via-primary-cyan to-primary-violet p-[1.5px] shadow-glow-blue">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top rounded-[10px]"
                  loading="lazy"
                  width="44"
                  height="44"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#02050D] rounded-full shadow-[0_0_8px_#34d399]" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base text-white tracking-wide">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-primary-cyan">
                MERN Stack Foundations | Full Stack Developer
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-text-secondary">
            <a href="#hero" className="hover:text-primary-cyan transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-cyan transition-colors">About</a>
            <a href="#skills" className="hover:text-primary-cyan transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary-cyan transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary-cyan transition-colors">Experience</a>
            <a href="#education" className="hover:text-primary-cyan transition-colors">Education</a>
            <a href="#workflow" className="hover:text-primary-cyan transition-colors">Workflow</a>
            <a href="#contact" className="hover:text-primary-cyan transition-colors">Contact</a>
          </nav>

          {/* ONLY LINKEDIN + GITHUB + BACK TO TOP */}
          <div className="flex items-center gap-2.5">
            {/* 1. LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface border border-border-subtle text-text-secondary hover:text-primary-cyan hover:border-[#0A66C2]/60 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
            </a>

            {/* 2. GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface border border-border-subtle text-text-secondary hover:text-white hover:border-white/40 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-white" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-surface-elevated border border-primary-blue/30 text-primary-cyan hover:text-white hover:bg-primary-blue/30 transition-colors ml-1 cursor-pointer"
              aria-label="Scroll to top"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Minimal Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-muted text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>© {currentYear} {PERSONAL_INFO.name} • Available for Full-Time Roles</span>
          </div>
          <div className="text-[11px] text-primary-cyan/80">
            MERN Stack Foundations • Full Stack Development • WordPress &amp; SEO
          </div>
        </div>

      </div>
    </footer>
  );
};
