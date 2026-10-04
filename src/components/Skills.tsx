import React, { useState, useEffect } from 'react';
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
  X,
  FileText,
  Share2,
  Mail,
  Video,
  TrendingUp
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from './BrandIcons';
import { SKILLS, SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillItem } from '../types';

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
  LineChart,
  FileText,
  Share2,
  Mail,
  Video,
  TrendingUp
};

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Listen to custom navigation events from About summary buttons
  useEffect(() => {
    const handleCategoryFilter = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedFilter(customEvent.detail);
      }
    };
    window.addEventListener('filter-skills-category', handleCategoryFilter);
    return () => {
      window.removeEventListener('filter-skills-category', handleCategoryFilter);
    };
  }, []);

  // Filter skills based on selected category or search
  const filteredSkills = SKILLS.filter(skill => {
    // Search matching
    const matchesSearch = searchQuery.trim() === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.level.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // Filter matching
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'development') return skill.category === 'development';
    if (selectedFilter === 'cms_seo') return skill.category === 'cms_seo';
    if (selectedFilter === 'digital_marketing') return skill.category === 'digital_marketing';
    if (selectedFilter === 'tools_analytics') return !!skill.isToolOrAnalytics;
    return true;
  });

  // Dynamic count calculation
  const totalSkillsCount = SKILLS.length;

  const renderSkillCard = (skill: SkillItem, index: number) => {
    const IconComponent = iconMap[skill.iconName] || Code;
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
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

        <h4 className="text-white font-heading font-semibold text-xs sm:text-[13px] mb-1 group-hover:text-primary-cyan transition-colors tracking-tight line-clamp-1">
          {skill.name}
        </h4>

        <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface-elevated border border-border-subtle/60">
          {skill.level}
        </span>
      </motion.div>
    );
  };

  // Subgroups for Development
  const devFrontend = SKILLS.filter(s => s.subgroup === 'frontend');
  const devBackend = SKILLS.filter(s => s.subgroup === 'backend');
  const devDatabase = SKILLS.filter(s => s.subgroup === 'database');
  const devProgramming = SKILLS.filter(s => s.subgroup === 'programming');
  const devTools = SKILLS.filter(s => s.subgroup === 'tools');

  // Groups for CMS/SEO and Digital Marketing
  const wpSeoSkills = SKILLS.filter(s => s.category === 'cms_seo');
  const digitalMarketingSkills = SKILLS.filter(s => s.category === 'digital_marketing');

  const isStructuredView = selectedFilter === 'all' && searchQuery.trim() === '';

  return (
    <section id="skills" className="relative py-16 sm:py-24 bg-background cosmic-grid overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-blue/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-xs font-mono text-primary-cyan tracking-wider uppercase mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
            02 — TECHNICAL TOOLKIT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white mb-2"
          >
            SKILLS &amp; TECHNOLOGIES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-xs sm:text-sm md:text-base max-w-2xl"
          >
            Modern development, WordPress, SEO and digital marketing capabilities.
          </motion.p>
        </div>

        {/* Live Search Control */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <SearchIcon className="w-3.5 h-3.5 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills e.g. React, Python, Node, WordPress, SEO..."
              className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-surface-elevated/90 border border-border-subtle focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan text-xs text-white placeholder-text-muted transition-all outline-none"
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
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-primary-blue to-primary-violet text-white font-bold shadow-[0_0_15px_rgba(56,119,255,0.4)] border border-primary-cyan/40 scale-105'
                    : 'bg-surface-elevated text-text-secondary hover:text-white hover:bg-surface-hover border border-border-subtle'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Skills Grid View */}
        {isStructuredView ? (
          /* Structured Three Career Area Flow */
          <div className="space-y-12">
            
            {/* AREA 1: DEVELOPMENT & ENGINEERING */}
            <div className="glass-panel-elevated p-5 sm:p-7 rounded-2xl border border-border-subtle">
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-border-subtle/70">
                <div className="w-8 h-8 rounded-lg bg-primary-blue/20 border border-primary-blue/40 flex items-center justify-center text-primary-cyan">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-white tracking-wide">
                    DEVELOPMENT &amp; ENGINEERING
                  </h3>
                  <span className="text-[10px] font-mono text-text-secondary">
                    Frontend, Backend, Database, Python Programming &amp; Developer Tooling
                  </span>
                </div>
              </div>

              {/* Subgroups */}
              <div className="space-y-6">
                
                {/* 1. FRONTEND */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-primary-cyan mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
                    FRONTEND
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
                    {devFrontend.map(renderSkillCard)}
                  </div>
                </div>

                {/* 2. BACKEND */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-primary-blue mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                    BACKEND
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
                    {devBackend.map(renderSkillCard)}
                  </div>
                </div>

                {/* 3. DATABASE */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    DATABASE
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {devDatabase.map(renderSkillCard)}
                  </div>
                </div>

                {/* 4. PROGRAMMING - PYTHON (PROMINENT & CLEAR) */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-amber-400 mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    PROGRAMMING
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                    {devProgramming.map(renderSkillCard)}
                  </div>
                </div>

                {/* 5. TOOLS / DEVELOPMENT */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-text-secondary mb-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-violet" />
                    TOOLS / DEVELOPMENT
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
                    {devTools.map(renderSkillCard)}
                  </div>
                </div>

              </div>
            </div>

            {/* AREA 2: WORDPRESS & SEO */}
            <div className="glass-panel-elevated p-5 sm:p-7 rounded-2xl border border-border-subtle">
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-border-subtle/70">
                <div className="w-8 h-8 rounded-lg bg-primary-violet/20 border border-primary-violet/40 flex items-center justify-center text-primary-violet">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-white tracking-wide">
                    WORDPRESS &amp; SEO
                  </h3>
                  <span className="text-[10px] font-mono text-text-secondary">
                    CMS Architecture, Page Builders, Technical Audits &amp; Search Visibility
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
                {wpSeoSkills.map(renderSkillCard)}
              </div>
            </div>

            {/* AREA 3: DIGITAL MARKETING */}
            <div className="glass-panel-elevated p-5 sm:p-7 rounded-2xl border border-border-subtle">
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-border-subtle/70">
                <div className="w-8 h-8 rounded-lg bg-primary-cyan/20 border border-primary-cyan/40 flex items-center justify-center text-primary-cyan">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-white tracking-wide">
                    DIGITAL MARKETING
                  </h3>
                  <span className="text-[10px] font-mono text-text-secondary">
                    Performance Marketing, Automation, Content Strategy &amp; CRO Analytics
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
                {digitalMarketingSkills.map(renderSkillCard)}
              </div>
            </div>

          </div>
        ) : (
          /* Filtered or Searched Grid View */
          <div>
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map(renderSkillCard)}
              </AnimatePresence>
            </motion.div>

            {filteredSkills.length === 0 && (
              <div className="text-center py-12 glass-panel rounded-2xl border border-border-subtle max-w-md mx-auto">
                <p className="text-sm font-mono text-text-secondary mb-3">
                  No matching skills found for "{searchQuery}"
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
                  className="px-4 py-1.5 rounded-lg bg-primary-blue/20 text-primary-cyan border border-primary-blue/40 text-xs font-mono hover:bg-primary-blue/30 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Dynamic Skill Count Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-text-muted">
            Showing {filteredSkills.length} of {totalSkillsCount} verified technical &amp; digital marketing competencies
          </p>
        </div>

      </div>
    </section>
  );
};
