import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Download,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Terminal,
  Code2,
  Copy,
  Check,
  Eye
} from 'lucide-react';
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [terminalTab, setTerminalTab] = useState<'config' | 'stack' | 'contact'>('config');
  const [copiedCode, setCopiedCode] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getTerminalSnippet = () => {
    switch (terminalTab) {
      case 'config':
        return `const developer = {
  name: "${PERSONAL_INFO.name}",
  roles: [
    "Full-Stack Developer",
    "WordPress Expert",
    "Technical SEO & Digital Marketer"
  ],
  status: "Available Immediately"
};`;
      case 'stack':
        return `// Technical Specialization
const technologies = [
  "React.js", "TypeScript", "Node.js",
  "Express.js", "MongoDB", "WordPress",
  "Technical SEO", "Digital Marketing"
];`;
      case 'contact':
        return `// Direct Contact Handshake
const contact = {
  email: "${PERSONAL_INFO.email}",
  phone: "${PERSONAL_INFO.phone}",
  whatsapp: "${PERSONAL_INFO.whatsappNumber}",
  location: "${PERSONAL_INFO.location}"
};`;
    }
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(getTerminalSnippet());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen lg:max-h-[960px] xl:max-h-[1050px] pt-16 pb-2 sm:pt-20 sm:pb-3 lg:pt-16 lg:pb-2 flex flex-col justify-between items-center overflow-hidden cosmic-grid"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[900px] h-[650px] md:h-[900px] bg-gradient-radial from-primary-blue/15 via-primary-violet/8 to-transparent rounded-full pointer-events-none blur-3xl" />

      <div className="max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Badges / Status Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-2.5">
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
              <span>Hi, I’m</span>
              <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
              <span className="inline-block animate-bounce">👋</span>
            </motion.p>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.25rem] 2xl:text-[3.75rem] tracking-tight leading-[1.08] mb-2 sm:mb-2.5"
            >
              <span className="block text-white uppercase">FULL-STACK</span>
              <span className="block gradient-text-blue-cyan uppercase glow-text-blue">
                DEVELOPER
              </span>
            </motion.h1>

            {/* Supporting Role Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="inline-block px-3 py-1 mb-2.5 sm:mb-3 rounded-md bg-primary-blue/10 border border-primary-blue/30 text-xs sm:text-sm font-mono font-semibold tracking-wider text-primary-cyan uppercase"
            >
              {PERSONAL_INFO.supportingRole}
            </motion.div>

            {/* Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-4 sm:mb-5"
            >
              {PERSONAL_INFO.heroBio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-gradient-to-r from-primary-blue via-primary-blue to-primary-violet hover:from-primary-cyan hover:to-primary-blue rounded-xl shadow-[0_0_20px_rgba(56,119,255,0.35)] hover:shadow-[0_0_30px_rgba(37,217,255,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Featured Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-primary-cyan bg-primary-blue/15 hover:bg-primary-blue/25 border border-primary-blue/40 hover:border-primary-cyan rounded-xl transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview CV</span>
                </button>
              )}

              <a
                href={PERSONAL_INFO.resumePath}
                download="Rohit-Kumar-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-text-main bg-surface-elevated/90 hover:bg-surface-hover border border-border-subtle hover:border-primary-cyan/60 rounded-xl transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5 text-primary-cyan" />
                <span>Resume PDF</span>
              </a>
            </motion.div>

            {/* Verified Quick Contact Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3.5 pt-2.5 sm:pt-3 border-t border-border-subtle/60 text-[11px] sm:text-xs text-text-secondary font-mono"
            >
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-primary-cyan transition-colors"
                title="Email Rohit"
              >
                <Mail className="w-3.5 h-3.5 text-primary-blue" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

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

              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-primary-cyan transition-colors"
                title="Call Rohit"
              >
                <Phone className="w-3.5 h-3.5 text-primary-cyan" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={PERSONAL_INFO.vpnSite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary-violet transition-colors"
                title="VPN Expert Guide"
              >
                <Globe className="w-3.5 h-3.5 text-primary-violet" />
                <span>VPNExpertGuide.com</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Hero Column: Authentic Profile with Cosmic Orbital System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0"
          >
            {/* Orbital Rings System */}
            <div className="relative w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] lg:w-[270px] lg:h-[270px] xl:w-[300px] xl:h-[300px] flex items-center justify-center">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-blue/20 via-primary-violet/20 to-primary-cyan/20 blur-2xl pointer-events-none" />

              {/* Animated Orbital Ring 1 */}
              <div className="orbit-ring orbit-ring-1" />

              {/* Animated Orbital Ring 2 */}
              <div className="orbit-ring orbit-ring-2" />

              {/* Animated Orbital Ring 3 */}
              <div className="orbit-ring orbit-ring-3" />

              {/* Orbiting Satellite Particle */}
              <div className="absolute w-full h-full animate-spin-slow pointer-events-none">
                <div className="absolute top-2 left-1/2 w-2.5 h-2.5 rounded-full bg-primary-cyan shadow-[0_0_12px_#25D9FF]" />
                <div className="absolute bottom-6 left-1/4 w-2 h-2 rounded-full bg-primary-violet shadow-[0_0_10px_#985CFF]" />
              </div>

              {/* Central Portrait Frame */}
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-52 lg:h-52 xl:w-56 xl:h-56 rounded-full p-1.5 sm:p-2 bg-gradient-to-b from-primary-cyan/50 via-primary-blue/30 to-primary-violet/50 shadow-[0_0_35px_rgba(56,119,255,0.35)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#080D18] relative border border-white/10 flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt="Rohit Kumar - Full-Stack Developer"
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
                  {/* Subtle inner shadow & lighting vignette */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 pointer-events-none bg-gradient-to-t from-[#030610]/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge 1: MERN FULL STACK */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-2 -left-3 sm:left-0 z-20 animate-float"
              >
                <div className="glass-panel-elevated px-3 py-1.5 rounded-xl border border-primary-blue/40 shadow-glow-blue flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary-blue/20 flex items-center justify-center border border-primary-blue/40 text-primary-cyan">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-text-secondary">Core Architecture</span>
                    <span className="block text-[11px] font-bold text-white tracking-wide">MERN FULL STACK</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: WORDPRESS & SEO */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -bottom-2 -right-3 sm:right-0 z-20 animate-float-delayed"
              >
                <div className="glass-panel-elevated px-3 py-1.5 rounded-xl border border-primary-violet/40 shadow-glow-violet flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-primary-violet/20 flex items-center justify-center border border-primary-violet/40 text-primary-violet">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-text-secondary">Specialization</span>
                    <span className="block text-[11px] font-bold text-white tracking-wide">WORDPRESS &amp; SEO</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Cosmic Code Terminal Box */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-3 sm:mt-3.5 w-full max-w-sm lg:max-w-md glass-panel rounded-xl overflow-hidden border border-border-subtle shadow-xl"
            >
              {/* Terminal Title Bar & Tabs */}
              <div className="bg-[#050914] px-3 py-1.5 border-b border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                  <Terminal className="w-3 h-3 text-primary-cyan ml-1 hidden sm:inline-block" />
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setTerminalTab('config')}
                    className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono transition-colors ${
                      terminalTab === 'config'
                        ? 'bg-primary-blue/20 text-primary-cyan border border-primary-blue/40'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    config.ts
                  </button>
                  <button
                    type="button"
                    onClick={() => setTerminalTab('stack')}
                    className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono transition-colors ${
                      terminalTab === 'stack'
                        ? 'bg-primary-blue/20 text-primary-cyan border border-primary-blue/40'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    stack.ts
                  </button>
                  <button
                    type="button"
                    onClick={() => setTerminalTab('contact')}
                    className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono transition-colors ${
                      terminalTab === 'contact'
                        ? 'bg-primary-blue/20 text-primary-cyan border border-primary-blue/40'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    contact.sh
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCopySnippet}
                  className="text-[10px] sm:text-[11px] font-mono text-text-secondary hover:text-primary-cyan flex items-center gap-1 bg-surface-elevated hover:bg-surface-hover px-2 py-0.5 rounded border border-border-subtle transition-colors cursor-pointer"
                  title="Copy code snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-2.5 sm:p-3 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-text-secondary bg-[#040712]/90">
                {terminalTab === 'config' && (
                  <div>
                    <p>
                      <span className="text-primary-violet font-semibold">const</span>{' '}
                      <span className="text-primary-cyan">developer</span> = &#123;
                    </p>
                    <p className="pl-3.5">
                      <span className="text-text-main">name</span>: <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>,
                    </p>
                    <p className="pl-3.5">
                      <span className="text-text-main">stack</span>: <span className="text-emerald-400">"MERN + TypeScript"</span>,
                    </p>
                    <p className="pl-3.5">
                      <span className="text-text-main">focus</span>: <span className="text-emerald-400">"Scalable Web Platforms"</span>,
                    </p>
                    <p className="pl-3.5">
                      <span className="text-text-main">status</span>: <span className="text-emerald-400">"Available Immediately"</span>
                    </p>
                    <p>&#125;;</p>
                  </div>
                )}

                {terminalTab === 'stack' && (
                  <div>
                    <p className="text-text-muted mb-0.5">// Core Technical Ecosystem</p>
                    <p>
                      <span className="text-primary-violet font-semibold">export const</span>{' '}
                      <span className="text-primary-cyan">coreStack</span> = [
                    </p>
                    <p className="pl-3.5 text-emerald-400">"React.js", "TypeScript", "Node.js",</p>
                    <p className="pl-3.5 text-emerald-400">"Express.js", "MongoDB", "Tailwind CSS",</p>
                    <p className="pl-3.5 text-emerald-400">"REST APIs", "AI Integrations"</p>
                    <p>];</p>
                  </div>
                )}

                {terminalTab === 'contact' && (
                  <div>
                    <p className="text-text-muted mb-0.5">#!/bin/bash — Direct Handshake</p>
                    <p className="text-text-main">
                      <span className="text-primary-cyan">curl</span> -X POST https://rohitkumar.dev/api/contact \
                    </p>
                    <p className="pl-3.5 text-text-secondary">
                      -H <span className="text-emerald-400">"Content-Type: application/json"</span> \
                    </p>
                    <p className="pl-3.5 text-text-secondary">
                      -d '{`{"email": "${PERSONAL_INFO.email}"}`}'
                    </p>
                    <p className="text-emerald-400 mt-0.5"># Ready to collaborate!</p>
                  </div>
                )}
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-1.5 sm:mt-2 mb-1 flex flex-col items-center gap-1 text-text-secondary hover:text-white transition-colors shrink-0"
      >
        <a
          href="#tech-strip"
          className="flex flex-col items-center gap-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest"
          aria-label="Scroll to explore"
        >
          <span className="text-primary-cyan tracking-widest">Scroll To Explore</span>
          <ChevronDown className="w-3.5 h-3.5 text-primary-blue animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
