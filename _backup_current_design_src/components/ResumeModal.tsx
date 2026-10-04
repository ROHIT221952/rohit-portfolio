import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#080D18] border border-primary-blue/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#050A14] border-b border-border-subtle">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-blue/20 border border-primary-blue/40 flex items-center justify-center text-primary-cyan">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                  Rohit Kumar — Curriculum Vitae
                </h3>
                <p className="text-[11px] font-mono text-text-secondary">
                  Full-Stack Developer | WordPress Expert | Technical SEO &amp; Digital Marketer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Rohit-Kumar-Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary-blue/20 hover:bg-primary-blue/30 text-primary-cyan border border-primary-blue/40 transition-colors"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-surface-elevated hover:bg-surface-hover text-text-secondary hover:text-white transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-surface-elevated hover:bg-rose-500/20 text-text-secondary hover:text-rose-400 transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 w-full h-[70vh] bg-[#030610] relative">
            <iframe
              src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0`}
              title="Rohit Kumar Resume"
              className="w-full h-full border-0"
            />
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-3 bg-[#050A14] border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-secondary">
            <span>Contact: {PERSONAL_INFO.email}</span>
            <span className="text-primary-cyan">Available for immediate hiring</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
