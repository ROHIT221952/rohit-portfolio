import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

// Stylized QSpiders brand emblem matching the education icon frame
const QSpidersLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Stylized Spider / Q Node Icon */}
    <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
    <path d="M6 6l3 3" />
    <path d="M18 18l-3-3" />
    <path d="M18 6l-3 3" />
    <path d="M6 18l3-3" />
    <circle cx="12" cy="5" r="1.5" fill="currentColor" />
  </svg>
);

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-14 sm:py-20 bg-[#040814] cosmic-grid overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-xs font-mono text-primary-cyan tracking-wider uppercase mb-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
            05 — ACADEMICS &amp; CREDENTIALS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white mb-2"
          >
            Education &amp; Certification
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-xs sm:text-sm max-w-2xl"
          >
            Formal engineering foundations paired with rigorous project-based industry certification.
          </motion.p>
        </div>

        {/* Education & Certification Cards */}
        <div className="space-y-5 sm:space-y-6">
          
          {/* 1. Formal Higher Education Card */}
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel-elevated p-5 sm:p-6 lg:p-7 rounded-2xl border border-border-subtle hover:border-primary-blue/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-border-subtle/70">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-primary-blue/20 border border-primary-blue/40 flex items-center justify-center text-primary-cyan shrink-0 shadow-glow-blue">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-primary-cyan bg-primary-blue/15 px-2 py-0.5 rounded-full border border-primary-blue/30">
                        Formal Engineering Degree
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-base sm:text-lg lg:text-xl text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-primary-violet mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs font-mono text-text-secondary">
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1 rounded-lg border border-border-subtle text-primary-cyan">
                    <Calendar className="w-3.5 h-3.5 text-primary-blue" />
                    Graduated: June 2025
                  </span>
                  <span className="flex items-center gap-1.5 bg-surface px-3 py-1 rounded-lg border border-border-subtle">
                    <MapPin className="w-3.5 h-3.5 text-primary-violet" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3">
                {edu.description}
              </p>

              <div className="space-y-1.5">
                {edu.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-cyan shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* 2. Compact Certification Card */}
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
              className="glass-panel-elevated p-5 sm:p-6 rounded-2xl border border-border-subtle hover:border-primary-violet/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* LEFT: QSpiders Logo & Placement */}
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-violet/25 to-primary-blue/20 border border-primary-violet/40 flex items-center justify-center text-primary-violet shrink-0 shadow-glow-violet">
                    <QSpidersLogo className="w-6 h-6 text-primary-violet" />
                  </div>

                  {/* RIGHT: Full Stack Web Development | QSpiders, Noida (2026) */}
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-primary-violet bg-primary-violet/15 px-2 py-0.5 rounded-full border border-primary-violet/30">
                        Professional Certification
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
                      Full Stack Web Development
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-primary-cyan mt-0.5">
                      QSpiders, Noida (2026)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                  <span className="bg-surface px-3 py-1 rounded-lg border border-border-subtle flex items-center gap-1.5 text-primary-violet font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    Completed: 2026
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3.5 mt-3.5 border-t border-border-subtle/60">
                {cert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono rounded-md bg-surface border border-primary-violet/30 text-primary-violet"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};
