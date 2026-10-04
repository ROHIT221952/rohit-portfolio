import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-14 sm:py-20 bg-background cosmic-grid overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[140px] pointer-events-none" />

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
            04 — CAREER TRAJECTORY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white mb-2"
          >
            Work &amp; Training Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-xs sm:text-sm max-w-2xl"
          >
            A chronological timeline of intensive full-stack software development training, independent engineering projects, and professional CMS/SEO execution.
          </motion.p>
        </div>

        {/* Full-Width Timeline Cards */}
        <div className="relative">
          {/* Vertical Line for Desktop/Tablet */}
          <div className="hidden md:block absolute top-6 bottom-6 left-6 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary-blue via-primary-cyan to-primary-violet opacity-30" />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative md:pl-16 group"
              >
                {/* Timeline Node Icon */}
                <div className="hidden md:flex absolute top-6 left-6 w-5 h-5 rounded-full bg-[#080D18] border-2 border-primary-blue group-hover:border-primary-cyan items-center justify-center -translate-x-1/2 transition-colors z-10 shadow-[0_0_12px_rgba(56,119,255,0.4)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
                </div>

                {/* Experience Card */}
                <div className="glass-panel-elevated p-4 sm:p-5 lg:p-6 rounded-xl border border-border-subtle hover:border-primary-blue/50 transition-all duration-300 shadow-xl relative overflow-hidden">
                  {/* Top Bar for Card */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold rounded-full bg-primary-blue/20 text-primary-cyan border border-primary-blue/40 uppercase">
                        {exp.badge}
                      </span>
                      {exp.isCurrent && (
                        <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs font-mono text-text-secondary">
                      <Calendar className="w-3.5 h-3.5 text-primary-blue" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div className="mb-2.5">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-primary-cyan transition-colors mb-0.5">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-primary-violet">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-text-secondary">
                        <MapPin className="w-3.5 h-3.5 text-primary-cyan" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-text-main text-xs sm:text-sm font-medium mb-3 italic">
                    "{exp.description}"
                  </p>

                  {/* Bullet points from Resume */}
                  <div className="space-y-1.5 mb-4">
                    {exp.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-text-secondary leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-blue shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle/60">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono rounded-md bg-surface border border-border-subtle text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
