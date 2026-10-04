import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Code2,
  Layers,
  Wind,
  Workflow,
  FileCode,
  Palette,
  LayoutGrid,
  Server,
  Cpu,
  Network,
  KeyRound,
  Shield,
  Database,
  Binary,
  Table,
  GitBranch,
  Send,
  Terminal,
  Triangle,
  Globe,
  Compass,
  Sliders,
  Sparkles,
  Search as SearchIcon,
  FileCheck,
  Target,
  BarChart3,
  LineChart,
  Atom,
  X
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from './BrandIcons';
import { SKILLS, SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Atom,
  Code2,
  Layers,
  Code,
  Wind,
  Workflow,
  FileCode,
  Palette,
  LayoutGrid,
  Server,
  Cpu,
  Network,
  KeyRound,
  Shield,
  Database,
  Binary,
  Table,
  GitBranch,
  Github: GithubIcon,
  Send,
  Figma: FigmaIcon,
  Terminal,
  Triangle,
  Globe,
  Compass,
  Sliders,
  Sparkles,
  Search: SearchIcon,
  FileCheck,
  Target,
  BarChart3,
  LineChart
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const isAllView = selectedCategory === 'all' && searchQuery.trim() === '';
  const developerSkills = SKILLS.filter(s => s.category !== 'cms_seo');
  const cmsSeoSkills = SKILLS.filter(s => s.category === 'cms_seo');

  const filteredSkills = SKILLS.filter(skill => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderSkillCard = (skill: typeof SKILLS[0]) => {
    const IconComponent = iconMap[skill.iconName] || Code;
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
        whileHover={{ y: -3, transition: { duration: 0.15 } }}
        key={skill.name}
        className="glass-panel p-3 sm:p-3.5 rounded-xl border border-border-subtle hover:border-primary-blue/50 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden shadow-sm"
      >
        {/* Subtle top glow indicator */}
        <div
          className="absolute top-0 left-1/4 right-1/4 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: skill.glowColor, boxShadow: `0 0 10px ${skill.glowColor}` }}
        />

        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm"
          style={{
            backgroundColor: `${skill.glowColor}15`,
            color: skill.glowColor
          }}
        >
          <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
        </div>

        <h3 className="text-white font-heading font-semibold text-xs sm:text-[13px] mb-1 group-hover:text-primary-cyan transition-colors tracking-tight line-clamp-1">
          {skill.name}
        </h3>

        <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface-elevated border border-border-subtle/60">
          {skill.level}
        </span>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="relative py-16 sm:py-20 bg-background cosmic-grid overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-xs font-mono text-primary-cyan tracking-wider uppercase mb-2.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
            02 — TECHNICAL TOOLKIT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white mb-2"
          >
            Skills &amp; Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-xs sm:text-sm max-w-xl"
          >
            Proficient in modern full-stack development, TypeScript, reactive frontend architectures, RESTful API security, and database modeling.
          </motion.p>
        </div>

        {/* Live Search & Filter Controls */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <SearchIcon className="w-3.5 h-3.5 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills e.g. React, TypeScript, Node, MongoDB, WordPress..."
              className="w-full pl-9 pr-9 py-2 rounded-xl bg-surface-elevated/90 border border-border-subtle focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan text-xs text-white placeholder-text-muted transition-all outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-white p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-primary-blue to-primary-violet text-white font-bold shadow-[0_0_12px_rgba(56,119,255,0.4)] border border-primary-cyan/40 scale-105'
                    : 'bg-surface-elevated text-text-secondary hover:text-white hover:bg-surface-hover border border-border-subtle'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        {isAllView ? (
          <div className="space-y-8">
            {/* 1. Developer Skills Group (UPAR) */}
            <div>
              <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-border-subtle/60">
                <div className="w-6 h-6 rounded-md bg-primary-blue/15 flex items-center justify-center text-primary-cyan">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-heading font-bold text-white tracking-wide">
                  Core Developer &amp; Software Engineering Skills
                </h3>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-cyan">
                  {developerSkills.length} Technologies
                </span>
              </div>

              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5"
              >
                <AnimatePresence>
                  {developerSkills.map(renderSkillCard)}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* 2. WordPress & SEO Group (USKE NICHE) */}
            <div>
              <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-border-subtle/60">
                <div className="w-6 h-6 rounded-md bg-primary-violet/15 flex items-center justify-center text-primary-violet">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-heading font-bold text-white tracking-wide">
                  WordPress Architecture &amp; Technical SEO
                </h3>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary-violet/10 border border-primary-violet/20 text-primary-violet">
                  {cmsSeoSkills.length} Technologies
                </span>
              </div>

              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5"
              >
                <AnimatePresence>
                  {cmsSeoSkills.map(renderSkillCard)}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5"
          >
            <AnimatePresence>
              {filteredSkills.map(renderSkillCard)}
            </AnimatePresence>
          </motion.div>
        )}

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl border border-border-subtle max-w-md mx-auto">
            <p className="text-sm font-mono text-text-secondary mb-3">No matching skills found for "{searchQuery}"</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-4 py-1.5 rounded-lg bg-primary-blue/20 text-primary-cyan border border-primary-blue/40 text-xs font-mono hover:bg-primary-blue/30 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Note at bottom of skills */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-text-muted">
            Showing {filteredSkills.length} of {SKILLS.length} verified technical competencies
          </p>
        </div>

      </div>
    </section>
  );
};
