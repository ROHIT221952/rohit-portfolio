import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Mail, FileText, X, Copy, Check, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FloatingDockProps {
  onOpenResume?: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ onOpenResume }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const emailPopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (emailPopRef.current && !emailPopRef.current.contains(e.target as Node)) {
        setIsEmailOpen(false);
      }
    };
    if (isEmailOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEmailOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

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
                download="rohit_kumar_resume.pdf"
                className="w-10 h-10 rounded-full bg-primary-blue/20 hover:bg-primary-blue/30 text-primary-cyan border border-primary-blue/40 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-[0_0_15px_rgba(56,119,255,0.25)] group relative"
                aria-label="Download Resume"
              >
                <FileText className="w-4 h-4" />
                <span className="sr-only">Download Resume</span>
              </a>
            )}

            {/* Quick Email Popover / Direct Actions */}
            <div className="relative" ref={emailPopRef}>
              <button
                type="button"
                onClick={() => setIsEmailOpen((prev) => !prev)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 group relative cursor-pointer ${
                  isEmailOpen
                    ? 'bg-primary-blue text-white border border-primary-cyan shadow-[0_0_15px_rgba(37,217,255,0.4)] scale-105'
                    : 'bg-surface hover:bg-surface-hover text-text-secondary hover:text-white border border-border-subtle'
                }`}
                aria-label="Quick Email"
                aria-expanded={isEmailOpen}
              >
                <Mail className="w-4 h-4" />
                <span className="sr-only">Quick Email</span>
                {/* Tooltip */}
                {!isEmailOpen && (
                  <span className="hidden sm:block absolute right-12 bg-[#080D1A] text-white text-[11px] font-mono py-1 px-2 rounded-md border border-border-subtle whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    Quick Email
                  </span>
                )}
              </button>

              {/* Quick Email Popover Modal */}
              <AnimatePresence>
                {isEmailOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-14 bottom-0 w-72 sm:w-80 p-3.5 sm:p-4 rounded-2xl bg-[#080D1A]/95 backdrop-blur-xl border border-primary-blue/40 shadow-[0_15px_40px_rgba(0,0,0,0.85)] z-50 text-left"
                  >
                    <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-border-subtle">
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-primary-cyan" />
                        <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white">
                          Quick Email
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsEmailOpen(false)}
                        className="p-1 rounded-lg text-text-muted hover:text-white hover:bg-surface-hover transition-colors cursor-pointer"
                        title="Close"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Email display + 1-click Copy */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-surface border border-border-subtle mb-2.5">
                      <span className="text-xs font-mono text-text-secondary truncate select-all pr-2">
                        {PERSONAL_INFO.email}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="flex items-center gap-1 px-2 py-1 rounded-lg bg-surface-elevated hover:bg-surface-hover text-xs font-mono text-primary-cyan border border-primary-cyan/30 transition-colors shrink-0 cursor-pointer"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 text-[10px] font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span className="text-[10px]">Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Action: Open in Gmail */}
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${encodeURIComponent('Project Inquiry - Rohit Kumar')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsEmailOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-surface hover:bg-primary-blue/20 border border-border-subtle hover:border-primary-blue/40 text-xs text-text-secondary hover:text-white transition-all group/opt"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                        <div>
                          <span className="font-semibold text-white block leading-tight">Open in Gmail</span>
                          <span className="text-[10px] text-text-muted">Webmail compose window</span>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover/opt:text-primary-cyan transition-colors" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
