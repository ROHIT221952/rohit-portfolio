import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Compass
} from 'lucide-react';
import { HOBBIES } from '../data/portfolioData';

const hobbyIcons: Record<string, React.ElementType> = {
  BookOpen,
  Sparkles,
  Compass
};

export const About: React.FC = () => {
  const handleScrollToSection = (targetId: string, categoryFilter?: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (categoryFilter) {
      window.dispatchEvent(new CustomEvent('filter-skills-category', { detail: categoryFilter }));
    }
  };

  return (
    <section id="about" className="relative py-16 sm:py-24 bg-background cosmic-grid overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-violet/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-xs font-mono text-primary-cyan tracking-wider uppercase mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
            01 — OVERVIEW
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white"
          >
            PROFESSIONAL SUMMARY
          </motion.h2>
        </div>

        {/* TWO EQUAL-WIDTH BALANCED PREMIUM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-14">
          
          {/* CARD 1: FULL STACK DEVELOPMENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel-elevated p-6 sm:p-8 rounded-2xl border border-border-subtle hover:border-primary-blue/50 transition-all duration-300 shadow-xl flex flex-col justify-between h-full group"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-border-subtle/70">
                <div className="w-11 h-11 rounded-xl bg-primary-blue/15 border border-primary-blue/40 flex items-center justify-center text-primary-cyan shadow-glow-blue shrink-0">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary-cyan block">
                    Core Engineering
                  </span>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-primary-cyan transition-colors">
                    FULL STACK DEVELOPMENT
                  </h3>
                </div>
              </div>

              {/* Concise Bullet Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary mb-6 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-cyan shrink-0 mt-0.5" />
                  <span><strong>MERN Stack Architecture:</strong> Robust apps built with MongoDB, Express.js, React.js, and Node.js.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-cyan shrink-0 mt-0.5" />
                  <span><strong>Modern Frameworks:</strong> React.js, Next.js, and Redux Toolkit for structured global state.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-cyan shrink-0 mt-0.5" />
                  <span><strong>API Engineering &amp; Auth:</strong> Secure RESTful endpoints with JWT tokens and protected routing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-cyan shrink-0 mt-0.5" />
                  <span><strong>Responsive UI Development:</strong> Pixel-perfect styling using Tailwind CSS, Bootstrap, and HTML5/CSS3.</span>
                </li>
              </ul>
            </div>

            {/* Aligned Action Button */}
            <div className="pt-4 border-t border-border-subtle/60">
              <button
                type="button"
                onClick={() => handleScrollToSection('skills', 'development')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white bg-primary-blue/20 hover:bg-primary-blue/35 border border-primary-blue/40 hover:border-primary-cyan transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Development</span>
                <ArrowRight className="w-4 h-4 text-primary-cyan" />
              </button>
            </div>
          </motion.div>

          {/* CARD 2: DIGITAL MARKETING & SEO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel-elevated p-6 sm:p-8 rounded-2xl border border-border-subtle hover:border-primary-violet/50 transition-all duration-300 shadow-xl flex flex-col justify-between h-full group"
          >
            <div>
              {/* Card Header & Icon */}
              <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-border-subtle/70">
                <div className="w-11 h-11 rounded-xl bg-primary-violet/15 border border-primary-violet/40 flex items-center justify-center text-primary-violet shadow-glow-violet shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary-violet block">
                    Digital Visibility &amp; Growth
                  </span>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white group-hover:text-primary-violet transition-colors">
                    DIGITAL MARKETING &amp; SEO
                  </h3>
                </div>
              </div>

              {/* Concise Bullet Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary mb-6 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-violet shrink-0 mt-0.5" />
                  <span><strong>WordPress Website Management:</strong> End-to-end CMS setup, Elementor, Astra, and custom CSS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-violet shrink-0 mt-0.5" />
                  <span><strong>Technical &amp; On-Page SEO:</strong> Keyword research, content hierarchy, schema markup, and internal linking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-violet shrink-0 mt-0.5" />
                  <span><strong>Website Performance:</strong> Core Web Vitals tuning, caching strategies, and speed optimization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-violet shrink-0 mt-0.5" />
                  <span><strong>Telemetry &amp; Analytics:</strong> Search indexing, traffic monitoring via Google Analytics &amp; Search Console.</span>
                </li>
              </ul>
            </div>

            {/* Aligned Action Button */}
            <div className="pt-4 border-t border-border-subtle/60">
              <button
                type="button"
                onClick={() => handleScrollToSection('skills', 'cms_seo')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white bg-primary-violet/20 hover:bg-primary-violet/35 border border-primary-violet/40 hover:border-primary-violet transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Digital Marketing</span>
                <ArrowRight className="w-4 h-4 text-primary-violet" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* HOBBIES SECTION (EXACTLY 3 EQUAL-WIDTH CARDS) */}
        <div>
          <div className="text-center mb-5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted">
              Personal Interests &amp; Habits
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {HOBBIES.map((hobby, idx) => {
              const IconComp = hobbyIcons[hobby.iconName] || Sparkles;
              return (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-4 sm:p-5 rounded-xl border border-border-subtle flex items-center gap-3.5 hover:border-primary-blue/40 transition-colors h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-blue/15 border border-primary-blue/30 flex items-center justify-center text-primary-cyan shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-heading font-semibold text-sm">
                      {hobby.title}
                    </h4>
                    <p className="text-[11px] font-mono text-text-secondary mt-0.5">
                      {hobby.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
