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
  ChevronDown,
  Layers,
  TrendingUp
} from 'lucide-react';
import { GithubIcon, LinkedInIcon, WordPressIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-14 pb-3 sm:pt-16 sm:pb-4 flex flex-col justify-center items-center overflow-hidden cosmic-grid"
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-5 lg:mt-7"
          >
            {/* Authentic Profile Cutout with Background-Free Portrait & Full Orbital System */}
            <div className="relative w-full max-w-[285px] sm:max-w-[310px] lg:max-w-[325px] flex items-center justify-center">
              
              {/* Soft Ambient Radial Backlight Glow (Centered on portrait) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[54%] w-[310px] sm:w-[340px] h-[310px] sm:h-[340px] rounded-full bg-gradient-to-tr from-primary-blue/20 via-primary-violet/15 to-primary-cyan/20 blur-3xl pointer-events-none" />

              {/* Complete Futuristic Circular Orbit System (Full Circles passing behind photo & emerging at arms/hands) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[54%] pointer-events-none z-0 flex items-center justify-center">
                
                {/* 1. Primary Complete Circular Orbit Track with Satellite Nodes */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}
                  className="w-[375px] h-[375px] sm:w-[405px] sm:h-[405px] lg:w-[430px] lg:h-[430px] rounded-full border border-white/20 relative shadow-[0_0_12px_rgba(255,255,255,0.05)]"
                >
                  {/* Top Apex Node (Green/Cyan, exactly as in SS2) */}
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  {/* Upper Right Orbit Node (White glowing dot, as in SS2) */}
                  <span className="absolute top-[32%] -right-1 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                  {/* Lower Left Arm Node (Cyan glowing dot, as in SS2) */}
                  <span className="absolute bottom-[28%] -left-1 w-2 h-2 rounded-full bg-primary-cyan shadow-[0_0_8px_#25D9FF]" />
                  {/* Lower Right Arm Node (Violet dot, as in SS2) */}
                  <span className="absolute bottom-[20%] right-5 w-1.5 h-1.5 rounded-full bg-primary-violet shadow-[0_0_6px_#985CFF]" />
                </motion.div>

                {/* 2. Secondary Tilted Elliptical Orbit Track with Revolving Satellite Node (-22deg tilt) */}
                <svg 
                  viewBox="0 0 430 295"
                  className="absolute w-[395px] h-[270px] sm:w-[430px] sm:h-[295px] lg:w-[455px] lg:h-[310px] -rotate-[22deg] overflow-visible pointer-events-none"
                >
                  <defs>
                    <path
                      id="tiltedOrbitTrack"
                      d="M 429,147.5 A 214,146.5 0 1,1 1,147.5 A 214,146.5 0 1,1 429,147.5"
                    />
                  </defs>

                  {/* Stationary Orbit Stroke Track */}
                  <use
                    href="#tiltedOrbitTrack"
                    fill="none"
                    stroke="rgba(37,217,255,0.25)"
                    strokeWidth="1"
                  />

                  {/* Revolving Cyan Satellite Node (starts right at user marked spot and glides continuously around track) */}
                  <circle r="4" fill="#25D9FF" style={{ filter: 'drop-shadow(0 0 8px #25D9FF)' }}>
                    <animateMotion dur="65s" repeatCount="indefinite">
                      <mpath href="#tiltedOrbitTrack" />
                    </animateMotion>
                  </circle>

                  {/* Revolving Secondary Violet Satellite Node (opposite side) */}
                  <circle r="2.5" fill="#985CFF" style={{ filter: 'drop-shadow(0 0 6px #985CFF)' }}>
                    <animateMotion dur="65s" repeatCount="indefinite" begin="-32.5s">
                      <mpath href="#tiltedOrbitTrack" />
                    </animateMotion>
                  </circle>
                </svg>

                {/* 3. Tertiary Concentric Tech Ring with Subtle Opacity Breathe */}
                <motion.div 
                  animate={{ opacity: [0.25, 0.55, 0.25] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-[250px] h-[250px] sm:w-[275px] sm:h-[275px] lg:w-[290px] lg:h-[290px] rounded-full border border-dashed border-white/15" 
                />
              </div>

              {/* Subtle Red Telemetry Wireframe Sphere Accent (Bottom-Right, emerging at right hand like SS2) */}
              <div className="absolute bottom-2 -right-3.5 sm:-right-5.5 w-12 h-12 rounded-full bg-gradient-to-br from-red-500/25 via-primary-violet/15 to-transparent blur-[0.5px] border border-red-500/40 flex items-center justify-center pointer-events-none z-0 shadow-[0_0_15px_rgba(239,68,68,0.25)]">
                <div className="w-6.5 h-6.5 rounded-full border border-dashed border-red-400/60 animate-spin-slow" />
                <div className="absolute w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
              </div>

              {/* Profile Image (100% COMPLETELY STATIC - Compact & Perfectly Proportioned) */}
              <div className="relative z-10 w-full flex items-center justify-center">
                {!imageError ? (
                  <img
                    src="./assets/rohit-profile-cutout.png"
                    alt="Rohit Kumar - Full Stack Developer"
                    onError={() => setImageError(true)}
                    className="w-full max-w-[235px] sm:max-w-[255px] lg:max-w-[270px] xl:max-w-[280px] h-auto object-contain object-top drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] block"
                    width="400"
                    height="490"
                    loading="eager"
                  />
                ) : (
                  <div className="w-48 h-48 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-blue/30 to-primary-violet/30 text-white font-heading font-extrabold text-2xl tracking-wider select-none">
                    <span>RK</span>
                    <span className="text-[9px] font-mono text-primary-cyan tracking-widest uppercase mt-1">
                      Rohit Kumar
                    </span>
                  </div>
                )}
              </div>

              {/* Floating Badge 1: MERN (Top-Left, visually stable with subtle micro-float) */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-3 -left-3 sm:-left-5 z-20"
              >
                <div className="bg-[#090E1A]/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-xl border border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.6)] flex items-center gap-1.5 hover:border-emerald-400/50 transition-colors">
                  <div className="w-3.5 h-3.5 rounded-md bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 text-emerald-400">
                    <Layers className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wider">MERN</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: WORDPRESS (Right, shifted 3px left) */}
              <motion.div
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[calc(50%+155px)] sm:left-[calc(50%+171px)] lg:left-[calc(50%+181px)] top-[calc(46%-4px)] sm:top-[calc(46%-6px)] lg:top-[calc(46%-8px)] -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="bg-[#090E1A]/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-xl border border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.6)] flex items-center gap-1.5 hover:border-primary-cyan/50 transition-colors">
                  <div className="w-3.5 h-3.5 rounded-md bg-white/10 flex items-center justify-center border border-white/20 text-white">
                    <WordPressIcon size={11} className="text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wider">WORDPRESS</span>
                </div>
              </motion.div>

              {/* Floating Badge 3: SEO (Lower-Left, visually stable with subtle micro-float) */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-6 -left-2 sm:-left-4 z-20"
              >
                <div className="bg-[#090E1A]/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-xl border border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.6)] flex items-center gap-1.5 hover:border-amber-400/50 transition-colors">
                  <div className="w-3.5 h-3.5 rounded-md bg-amber-500/20 flex items-center justify-center border border-amber-500/30 text-amber-400">
                    <TrendingUp className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wider">SEO</span>
                </div>
              </motion.div>
            </div>

            {/* EXACT REQUIRED "AVAILABLE FOR" CARD (Compact & Seamlessly Connected Flush Below Image) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="w-full max-w-[265px] sm:max-w-[285px] lg:max-w-[305px] xl:max-w-[315px] glass-panel-elevated p-2.5 sm:p-3 rounded-xl border border-border-subtle -mt-1 sm:-mt-2 shadow-lg z-20 relative"
            >
              <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-border-subtle/70">
                <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-primary-cyan">
                  AVAILABLE FOR
                </span>
                <span className="flex items-center gap-1 text-[8.5px] font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Immediate
                </span>
              </div>

              <div className="space-y-1">
                {/* 1. Full Stack Development */}
                <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-surface border border-border-subtle text-text-main font-medium text-[10.5px]">
                  <Check className="w-2.5 h-2.5 text-primary-cyan shrink-0" strokeWidth={2.4} />
                  <span>Full Stack Development</span>
                </div>

                {/* 2. WordPress - SEO */}
                <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-surface border border-border-subtle text-text-main font-medium text-[10.5px]">
                  <Check className="w-2.5 h-2.5 text-primary-violet shrink-0" strokeWidth={2.4} />
                  <span>WordPress - SEO</span>
                </div>

                {/* 3. Digital Marketing */}
                <div className="flex items-center gap-2 px-2 py-0.5 rounded-md bg-surface border border-border-subtle text-text-main font-medium text-[10.5px]">
                  <Check className="w-2.5 h-2.5 text-text-muted shrink-0" strokeWidth={2.4} />
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
        className="mt-2 sm:mt-3 z-20 flex flex-col items-center"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-0.5 cursor-pointer select-none"
          aria-label="Scroll to explore"
        >
          <span className="font-mono text-[9px] sm:text-[9.5px] tracking-[0.2em] text-[#25D9FF] font-semibold uppercase drop-shadow-[0_0_6px_rgba(37,217,255,0.35)] group-hover:text-white transition-colors">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-3 h-3 text-[#3877FF] group-hover:text-[#25D9FF] animate-bounce transition-colors" strokeWidth={2.2} />
        </a>
      </motion.div>
    </section>
  );
};
