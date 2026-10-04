import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '../data/portfolioData';
import { AIStoryMockup, EcommerceMockup, VPNGuiMockup } from './ProjectMockups';

const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI Applications' },
  { id: 'mern', label: 'MERN Full-Stack' },
  { id: 'cms', label: 'WordPress & SEO' },
];

const renderMockup = (type: string) => {
  switch (type) {
    case 'ai-story':
      return <AIStoryMockup />;
    case 'ecommerce':
      return <EcommerceMockup />;
    case 'vpn-guide':
      return <VPNGuiMockup />;
    default:
      return <AIStoryMockup />;
  }
};

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return p.id.includes('ai');
    if (activeFilter === 'mern') return p.id.includes('ecommerce') || p.id.includes('ai');
    if (activeFilter === 'cms') return p.id.includes('vpn');
    return true;
  });

  return (
    <section id="projects" className="relative py-14 sm:py-20 bg-[#040814] cosmic-grid overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-blue/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-primary-violet/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-[11px] font-mono text-primary-cyan tracking-wider uppercase mb-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
            03 — SELECTED WORK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white mb-2"
          >
            Featured Software Projects &amp; Professional Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-xs sm:text-sm max-w-2xl leading-relaxed mb-5"
          >
            Real production-ready web platforms demonstrating MERN stack architecture, AI model integration, and high-performance CMS engineering.
          </motion.p>

          {/* Project Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.id
                    ? 'bg-primary-blue text-white font-bold shadow-[0_0_12px_rgba(56,119,255,0.4)] border border-primary-cyan/40'
                    : 'bg-surface-elevated text-text-secondary hover:text-white border border-border-subtle'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dedicated Case-Study Rows */}
        <div className="space-y-6 sm:space-y-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass-panel-elevated p-4 sm:p-5 lg:p-6 rounded-2xl border border-border-subtle hover:border-primary-blue/40 transition-all duration-300 shadow-xl relative overflow-hidden group"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-blue via-primary-cyan to-primary-violet opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
                  
                  {/* Project Info Column (Always Left) */}
                  <div className="lg:col-span-6 flex flex-col items-start">
                    
                    {/* Badge & Category */}
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-primary-cyan bg-primary-blue/15 border border-primary-blue/30 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {project.badge}
                      </span>
                      <span className="text-[10px] font-mono text-text-secondary">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white mb-0.5 group-hover:text-primary-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-mono text-primary-violet mb-2">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed mb-2.5">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights / Points (top 3 highest impact) */}
                    <div className="space-y-1 mb-3 w-full">
                      {project.points.slice(0, 3).map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 text-xs text-text-secondary leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-cyan shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1 mb-3.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-surface border border-border-subtle text-text-secondary hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Live Action CTAs: Live Project + GitHub Source */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary-blue to-primary-violet hover:from-primary-cyan hover:to-primary-blue shadow-glow-blue transition-all duration-300 transform hover:-translate-y-0.5 group/btn"
                      >
                        <span>{project.previewType === 'vpn-guide' ? 'Visit Live Site' : 'View Live Project'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-semibold tracking-wider text-text-secondary hover:text-white bg-surface-elevated hover:bg-surface-hover border border-border-subtle hover:border-white/40 transition-all duration-300 transform hover:-translate-y-0.5"
                          title="View Source Code on GitHub"
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-white" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Browser Mockup Column (Always Right) */}
                  <div className="lg:col-span-6 w-full">
                    <div className="relative transform transition-transform duration-500 hover:scale-[1.015]">
                      {/* Glow halo behind mockup */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-primary-violet/20 rounded-2xl blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                      {renderMockup(project.previewType)}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

