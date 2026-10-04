import React from 'react';
import { Mail, FileText, ArrowUp, Globe } from 'lucide-react';
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050D] border-t border-border-subtle pt-16 pb-12 overflow-hidden z-20">
      <div className="max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Main Top Footer Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-border-subtle/60">
          
          {/* Brand Left */}
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-tr from-primary-blue via-primary-cyan to-primary-violet p-[1.5px] shadow-glow-blue">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top rounded-[10px]"
                  loading="lazy"
                  width="48"
                  height="48"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#02050D] rounded-full shadow-[0_0_8px_#34d399]" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white tracking-wide">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono text-primary-cyan">
                {PERSONAL_INFO.primaryRole}
              </p>
              <p className="text-[10px] font-mono text-text-muted mt-0.5">
                B.Tech CSE (2025) • Kanpur, India
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs font-mono text-text-secondary">
            <a href="#hero" className="hover:text-primary-cyan transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-cyan transition-colors">About</a>
            <a href="#skills" className="hover:text-primary-cyan transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary-cyan transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary-cyan transition-colors">Experience</a>
            <a href="#education" className="hover:text-primary-cyan transition-colors">Education</a>
            <a href="#workflow" className="hover:text-primary-cyan transition-colors">Workflow</a>
            <a href="#contact" className="hover:text-primary-cyan transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* LinkedIn */}
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

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface border border-border-subtle text-text-secondary hover:text-white hover:border-white/40 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface border border-border-subtle text-text-secondary hover:text-emerald-400 hover:border-emerald-500/60 transition-colors"
              aria-label="WhatsApp Chat"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-surface border border-border-subtle text-text-secondary hover:text-primary-cyan hover:border-primary-cyan/40 transition-colors"
              aria-label="Email Rohit"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* VPN Site */}
            <a
              href={PERSONAL_INFO.vpnSite}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-surface border border-border-subtle text-text-secondary hover:text-primary-violet hover:border-primary-violet/40 transition-colors"
              aria-label="VPN Expert Guide"
              title="VPN Expert Guide"
            >
              <Globe className="w-4 h-4 text-primary-violet" />
            </a>

            {/* Resume Button */}
            {onOpenResume ? (
              <button
                type="button"
                onClick={onOpenResume}
                className="p-2.5 rounded-xl bg-surface border border-border-subtle text-text-secondary hover:text-primary-cyan hover:border-primary-cyan/40 transition-colors cursor-pointer"
                aria-label="View Resume"
                title="View Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
            ) : (
              <a
                href={PERSONAL_INFO.resumePath}
                download="Rohit-Kumar-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-surface border border-border-subtle text-text-secondary hover:text-primary-violet hover:border-primary-violet/40 transition-colors"
                aria-label="Download Resume PDF"
                title="Download Resume PDF"
              >
                <FileText className="w-4 h-4" />
              </a>
            )}

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

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>© {currentYear} {PERSONAL_INFO.name} • Available for Full-Time Roles</span>
          </div>
          <div className="tracking-widest text-[11px] font-semibold text-primary-cyan/80 uppercase">
            DESIGNED &amp; ENGINEERED FOR SCALABILITY &amp; PERFORMANCE.
          </div>
        </div>

      </div>
    </footer>
  );
};
