import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  Code2,
  Check,
  Sparkles,
  Eye,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedInIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 pb-12 sm:pt-24 sm:pb-16 flex flex-col justify-center items-center overflow-hidden cosmic-grid"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[850px] h-[600px] md:h-[850px] bg-gradient-radial from-primary-blue/15 via-primary-violet/8 to-transparent rounded-full pointer-events-none blur-3xl" />

      <div className="max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability & Location Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated/90 border border-primary-blue/30 text-[10px] sm:text-xs font-mono tracking-wide text-primary-cyan shadow-[0_0_15px_rgba(37,217,255,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-card border border-border-subtle text-[10px] sm:text-xs font-mono text-text-secondary">
                <MapPin className="w-3 h-3 text-primary-blue" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-text-secondary text-sm sm:text-base font-medium flex items-center gap-2 mb-1"
            >
              <span>Hi, I'm</span>
              <span className="inline-block animate-bounce">👋</span>
            </motion.p>

            {/* Candidate Name H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] tracking-tight text-white mb-3"
            >
              ROHIT KUMAR
            </motion.h1>

            {/* PRIMARY ROLE LINE */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary-blue/15 border border-primary-blue/40 text-primary-cyan font-heading font-bold text-xs sm:text-sm md:text-base tracking-wide shadow-[0_0_15px_rgba(56,119,255,0.25)] mb-2"
            >
              <Code2 className="w-4 h-4 text-primary-cyan shrink-0" />
              <span>MERN Stack Foundations | Full Stack Developer</span>
            </motion.div>

            {/* SECONDARY ROLE LINE (UNDERNEATH) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.48, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary-violet/10 border border-primary-violet/30 text-primary-violet font-mono text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary-violet shrink-0" />
              <span>Digital Marketing &amp; SEO Executive | WordPress Website Management</span>
            </motion.div>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-5"
            >
              I build responsive web applications, solve real-world problems, and create performance-focused digital experiences using modern web technologies. I also work with WordPress, SEO, analytics, and digital marketing to improve website visibility and user experience.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-gradient-to-r from-primary-blue via-primary-blue to-primary-violet hover:from-primary-cyan hover:to-primary-blue rounded-xl shadow-[0_0_20px_rgba(56,119,255,0.35)] hover:shadow-[0_0_30px_rgba(37,217,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Featured Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Rohit-Kumar-Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-primary-cyan bg-primary-blue/15 hover:bg-primary-blue/25 border border-primary-blue/40 hover:border-primary-cyan rounded-xl transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                title="Download Resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-text-secondary hover:text-white bg-surface-elevated/90 hover:bg-surface-hover border border-border-subtle hover:border-white/30 rounded-xl transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                  title="Preview Resume in Browser"
                >
                  <Eye className="w-3.5 h-3.5 text-primary-cyan" />
                  <span>Preview CV</span>
                </button>
              )}

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-text-main bg-surface-elevated/90 hover:bg-surface-hover border border-border-subtle hover:border-primary-cyan/60 rounded-xl transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Quick Contact Links Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="flex flex-wrap items-center gap-3 pt-3 border-t border-border-subtle/60 text-xs text-text-secondary font-mono"
            >
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary-cyan transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              <span className="text-border-subtle">•</span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-white" />
                <span>GitHub</span>
              </a>

              <span className="text-border-subtle">•</span>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-primary-cyan transition-colors"
                title="Email Rohit"
              >
                <Mail className="w-3.5 h-3.5 text-primary-blue" />
                <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
                <span className="sm:hidden">Email</span>
              </a>

              <span className="text-border-subtle">•</span>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-primary-cyan transition-colors"
                title="Call Rohit"
              >
                <Phone className="w-3.5 h-3.5 text-primary-cyan" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Hero Column: Authentic Profile Photo & EXACT "AVAILABLE FOR" Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0"
          >
            {/* Orbital Halo & Profile Frame */}
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[280px] lg:h-[280px] xl:w-[310px] xl:h-[310px] flex items-center justify-center">
              
              {/* Soft Animated Glow Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-blue/25 via-primary-violet/20 to-primary-cyan/25 blur-2xl pointer-events-none animate-pulse" />

              {/* Animated Orbital Rings */}
              <div className="orbit-ring orbit-ring-1" />
              <div className="orbit-ring orbit-ring-2" />

              {/* Central Portrait Frame */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-56 lg:h-56 xl:w-60 xl:h-60 rounded-full p-2 bg-gradient-to-b from-primary-cyan/50 via-primary-blue/30 to-primary-violet/50 shadow-[0_0_35px_rgba(56,119,255,0.4)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#080D18] relative border border-white/15 flex items-center justify-center shadow-inner">
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt="Rohit Kumar - Full Stack Developer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
                      width="400"
                      height="400"
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-blue/30 to-primary-violet/30 text-white font-heading font-extrabold text-4xl tracking-wider select-none">
                      <span>RK</span>
                      <span className="text-[10px] font-mono text-primary-cyan tracking-widest uppercase mt-1">
                        Rohit Kumar
                      </span>
                    </div>
                  )}
                  {/* Subtle lighting vignette */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none bg-gradient-to-t from-[#030610]/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge 1: MERN FULL STACK */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-1 -left-2 sm:left-0 z-20 animate-float"
              >
                <div className="glass-panel-elevated px-3 py-1.5 rounded-xl border border-primary-blue/40 shadow-glow-blue flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary-blue/20 flex items-center justify-center border border-primary-blue/40 text-primary-cyan">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono uppercase tracking-wider text-text-secondary">Core Focus</span>
                    <span className="block text-[10px] sm:text-[11px] font-bold text-white tracking-wide">MERN FULL STACK</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: WORDPRESS & SEO */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -bottom-1 -right-2 sm:right-0 z-20 animate-float-delayed"
              >
                <div className="glass-panel-elevated px-3 py-1.5 rounded-xl border border-primary-violet/40 shadow-glow-violet flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary-violet/20 flex items-center justify-center border border-primary-violet/40 text-primary-violet">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono uppercase tracking-wider text-text-secondary">Specialization</span>
                    <span className="block text-[10px] sm:text-[11px] font-bold text-white tracking-wide">WORDPRESS &amp; SEO</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* EXACT REQUIRED "AVAILABLE FOR" CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="w-full max-w-sm glass-panel-elevated p-4 sm:p-4.5 rounded-2xl border border-border-subtle mt-4 sm:mt-5 shadow-xl"
            >
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-border-subtle/70">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary-cyan">
                  AVAILABLE FOR
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Immediate
                </span>
              </div>

              <div className="space-y-2">
                {/* 1. Full Stack Development */}
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-surface border border-border-subtle text-text-main font-medium text-xs">
                  <Check className="w-3.5 h-3.5 text-primary-cyan shrink-0" strokeWidth={2.2} />
                  <span>Full Stack Development</span>
                </div>

                {/* 2. WordPress - SEO */}
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-surface border border-border-subtle text-text-main font-medium text-xs">
                  <Check className="w-3.5 h-3.5 text-primary-violet shrink-0" strokeWidth={2.2} />
                  <span>WordPress - SEO</span>
                </div>

                {/* 3. Digital Marketing */}
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-surface border border-border-subtle text-text-main font-medium text-xs">
                  <Check className="w-3.5 h-3.5 text-text-muted shrink-0" strokeWidth={2.2} />
                  <span>Digital Marketing</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll To Explore Indicator (Compact & Subtle) */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-4 sm:mt-5 z-20 flex flex-col items-center"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-0.5 cursor-pointer select-none"
          aria-label="Scroll to explore"
        >
          <span className="font-mono text-[9.5px] sm:text-[10px] tracking-[0.2em] text-[#25D9FF] font-semibold uppercase drop-shadow-[0_0_6px_rgba(37,217,255,0.35)] group-hover:text-white transition-colors">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-3 h-3 text-[#3877FF] group-hover:text-[#25D9FF] animate-bounce transition-colors" strokeWidth={2.2} />
        </a>
      </motion.div>
    </section>
  );
};
