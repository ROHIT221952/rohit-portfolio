import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Code2, Eye } from 'lucide-react';
import { LinkedInIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Workflow', href: '#workflow' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled background state
      setIsScrolled(window.scrollY > 30);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section detection
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary-blue via-primary-cyan to-primary-violet z-50 transition-all duration-75 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030610]/90 backdrop-blur-md border-b border-border-subtle shadow-lg shadow-black/40 py-2.5 sm:py-3'
            : 'bg-transparent py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex items-center justify-between">
          {/* Brand Left Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-full p-1"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-blue/60 group-hover:border-primary-cyan transition-colors shadow-sm">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-300"
                  loading="eager"
                  width="40"
                  height="40"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#030610] rounded-full shadow-[0_0_8px_#34d399]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wide text-text-main flex items-center gap-1 group-hover:text-primary-cyan transition-colors">
                {PERSONAL_INFO.name}
                <span className="text-primary-blue">.</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-text-secondary tracking-wider uppercase -mt-0.5">
                {PERSONAL_INFO.shortTitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#080D18]/70 border border-border-subtle/80 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-text-secondary hover:text-text-main hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary-blue/30 to-primary-violet/30 border border-primary-blue/50 rounded-full -z-10 shadow-[0_0_12px_rgba(56,119,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* LinkedIn Quick Link */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex p-2 rounded-full bg-surface-card hover:bg-surface-hover border border-border-subtle hover:border-[#0A66C2]/60 text-[#0A66C2] transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-primary-blue to-primary-violet hover:from-primary-cyan hover:to-primary-blue rounded-full shadow-[0_0_15px_rgba(56,119,255,0.35)] hover:shadow-[0_0_20px_rgba(37,217,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-text-secondary hover:text-white bg-surface-card border border-border-subtle focus:outline-none focus:ring-2 focus:ring-primary-blue"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-primary-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#080D18]/95 backdrop-blur-xl border-b border-border-subtle p-6 shadow-2xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-primary-blue/20 text-primary-cyan border border-primary-blue/40 font-semibold'
                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Code2 className="w-4 h-4 text-primary-cyan" />}
                  </a>
                );
              })}

              <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary-blue to-primary-violet rounded-xl shadow-lg"
                >
                  Hire Rohit
                </a>

                {onOpenResume && (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full text-center py-3 text-xs font-semibold tracking-wide text-primary-cyan bg-primary-blue/15 border border-primary-blue/40 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Résumé Modal</span>
                  </button>
                )}

                <a
                  href={PERSONAL_INFO.resumePath}
                  download="rohit_kumar_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 text-xs font-semibold tracking-wide text-text-secondary hover:text-white bg-surface-elevated border border-border-subtle rounded-xl"
                >
                  Download Résumé (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
