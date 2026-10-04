import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail, FileText } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FloatingDockProps {
  onOpenResume?: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ onOpenResume }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 250);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent(Math.min(100, Math.round((scrollY / totalHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 select-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-2 bg-[#060B18]/90 backdrop-blur-xl border border-primary-blue/30 p-1.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
          >
            {/* WhatsApp Quick Chat */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-[0_0_15px_rgba(16,185,129,0.3)] group relative"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="sr-only">Chat on WhatsApp</span>
              {/* Tooltip */}
              <span className="hidden sm:block absolute right-12 bg-[#080D1A] text-white text-[11px] font-mono py-1 px-2 rounded-md border border-border-subtle whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                WhatsApp Chat
              </span>
            </a>

            {/* Quick Resume View */}
            {onOpenResume ? (
              <button
                type="button"
                onClick={onOpenResume}
                className="w-10 h-10 rounded-full bg-primary-blue/20 hover:bg-primary-blue/30 text-primary-cyan border border-primary-blue/40 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-[0_0_15px_rgba(56,119,255,0.25)] group relative"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4" />
                <span className="sr-only">View Resume</span>
                {/* Tooltip */}
                <span className="hidden sm:block absolute right-12 bg-[#080D1A] text-white text-[11px] font-mono py-1 px-2 rounded-md border border-border-subtle whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                  View Résumé
                </span>
              </button>
            ) : (
              <a
                href={PERSONAL_INFO.resumePath}
                download="Rohit-Kumar-Resume.pdf"
                className="w-10 h-10 rounded-full bg-primary-blue/20 hover:bg-primary-blue/30 text-primary-cyan border border-primary-blue/40 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-[0_0_15px_rgba(56,119,255,0.25)] group relative"
                aria-label="Download Resume"
              >
                <FileText className="w-4 h-4" />
                <span className="sr-only">Download Resume</span>
              </a>
            )}

            {/* Email Direct */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 rounded-full bg-surface hover:bg-surface-hover text-text-secondary hover:text-white border border-border-subtle flex items-center justify-center transition-all duration-200 transform hover:scale-110 group relative"
              aria-label="Email Rohit"
            >
              <Mail className="w-4 h-4" />
              <span className="sr-only">Email Rohit</span>
              {/* Tooltip */}
              <span className="hidden sm:block absolute right-12 bg-[#080D1A] text-white text-[11px] font-mono py-1 px-2 rounded-md border border-border-subtle whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                Quick Email
              </span>
            </a>

            {/* Back to Top with Scroll Indicator */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-surface-elevated hover:bg-surface-hover text-primary-cyan border border-primary-cyan/40 flex items-center justify-center transition-all duration-200 transform hover:scale-110 relative group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              {/* Circular progress track SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  className="stroke-transparent"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  className="stroke-primary-cyan transition-all duration-100"
                  strokeWidth="2"
                  strokeDasharray={113}
                  strokeDashoffset={113 - (113 * scrollPercent) / 100}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="sr-only">Scroll to top</span>
              {/* Tooltip */}
              <span className="hidden sm:block absolute right-12 bg-[#080D1A] text-white text-[11px] font-mono py-1 px-2 rounded-md border border-border-subtle whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                Top ({scrollPercent}%)
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
