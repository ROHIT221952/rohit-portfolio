import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  ShieldCheck,
  Sparkles,
  Gauge,
  GraduationCap,
  Globe2,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO, ABOUT_CARDS } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  ShieldCheck,
  Sparkles,
  Gauge
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-background cosmic-grid overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-violet/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-xs font-mono text-primary-cyan tracking-wider uppercase mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
            01 — ABOUT ME
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white max-w-3xl"
          >
            {PERSONAL_INFO.aboutHeadline}
          </motion.h2>
        </div>

        {/* Top Split: Professional Bio & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel-elevated p-7 sm:p-8 rounded-2xl border border-border-subtle shadow-xl flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 flex items-center gap-2.5">
                <span className="w-2 h-6 bg-gradient-to-b from-primary-cyan to-primary-blue rounded-full inline-block" />
                Full-Stack Engineer &amp; Digital Growth Specialist
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
                {PERSONAL_INFO.aboutBio}
              </p>
            </div>

            <div className="space-y-3.5 pt-5 border-t border-border-subtle/80">
              {/* Secondary Note for WordPress/SEO */}
              <div className="flex items-start gap-3 bg-surface/80 p-3.5 rounded-xl border border-primary-violet/20">
                <Globe2 className="w-5 h-5 text-primary-violet shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-text-secondary font-medium">
                  {PERSONAL_INFO.secondaryNote}
                </p>
              </div>

              {/* Education Highlight */}
              <div className="flex items-start gap-3 bg-surface/80 p-3.5 rounded-xl border border-primary-blue/20">
                <GraduationCap className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-text-secondary font-medium">
                  {PERSONAL_INFO.educationNote}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-primary-cyan hover:text-white transition-colors"
              >
                <span>Explore Technical Stack</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Core Values Summary Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4 h-full"
          >
            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-border-subtle flex items-center gap-4 flex-1 hover:border-primary-blue/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary-blue/20 flex items-center justify-center border border-primary-blue/40 text-primary-cyan shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-heading font-bold text-base mb-1">Production-Driven Mindset</h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Building applications with clear folder architecture, clean environment management, and tested end-to-end user flows.
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-border-subtle flex items-center gap-4 flex-1 hover:border-primary-violet/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary-violet/20 flex items-center justify-center border border-primary-violet/40 text-primary-violet shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-heading font-bold text-base mb-1">API Security & Validation</h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Strict JWT authorization, encrypted secrets, MongoDB query sanitization, and structured HTTP error responses.
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-border-subtle flex items-center gap-4 flex-1 hover:border-primary-cyan/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary-cyan/20 flex items-center justify-center border border-primary-cyan/40 text-primary-cyan shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-heading font-bold text-base mb-1">Modern AI Model Integration</h4>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Integrating OpenAI & Google Gemini APIs with token quotas and responsive streaming feedback.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 4 Detailed Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon] || Code2;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-panel-elevated p-6 rounded-2xl border border-border-subtle hover:border-primary-blue/50 transition-all duration-300 shadow-lg group relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: card.color }}
                />

                <div
                  className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center border transition-all duration-300"
                  style={{
                    backgroundColor: `${card.color}15`,
                    borderColor: `${card.color}40`,
                    color: card.color
                  }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                <h4 className="text-white font-heading font-bold text-lg mb-2.5 group-hover:text-primary-cyan transition-colors">
                  {card.title}
                </h4>

                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
