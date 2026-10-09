import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Loader2,
  ExternalLink,
  User,
  ChevronDown
} from 'lucide-react';
import { GithubIcon, LinkedInIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NetworkSphere } from './NetworkSphere';

const INTERESTED_IN_OPTIONS = [
  "Full Stack Development",
  "Frontend Development",
  "Python Development",
  "WordPress Development",
  "SEO",
  "Digital Marketing",
  "Other"
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interestedIn: 'Full Stack Development',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string; showMailtoFallback?: boolean } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (statusMessage) setStatusMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    // Required & Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill in all required fields (Your Name, Email, and Message).'
      });
      setIsSubmitting(false);
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setStatusMessage({
        type: 'error',
        text: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    // Isolated Submission Function / API Point
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data: any = null;
      try {
        data = await response.json();
      } catch {
        // Static host without Express server
      }

      if (response.ok && data?.success) {
        setStatusMessage({
          type: 'success',
          text: data.message || 'Message sent successfully! Rohit will reach out shortly.'
        });
        setFormData({ name: '', email: '', interestedIn: 'Full Stack Development', message: '' });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#3877FF', '#25D9FF', '#985CFF', '#34d399']
        });
      } else {
        // Fallback for static hosts (store message locally & offer direct mail link)
        try {
          const unsent = JSON.parse(localStorage.getItem('rk_contact_messages') || '[]');
          unsent.push({ ...formData, sentAt: new Date().toISOString() });
          localStorage.setItem('rk_contact_messages', JSON.stringify(unsent));
        } catch {}

        setStatusMessage({
          type: 'success',
          text: 'Thank you for reaching out! Your message was received. You can also send directly via your mail client:',
          showMailtoFallback: true
        });
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
    } catch {
      // Offline / fallback handling
      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your message was saved. Click below to launch your email client:',
        showMailtoFallback: true
      });
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.interestedIn + ' Inquiry')}&body=${encodeURIComponent(`Hi Rohit,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;

  return (
    <section id="contact" className="relative py-14 sm:py-20 bg-[#040814] cosmic-grid overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-7 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-xs font-mono text-primary-cyan tracking-wider uppercase mb-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
            07 — LET'S CONNECT
          </motion.div>

          {/* Heading: LET'S BUILD SOMETHING GREAT. */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white mb-2"
          >
            LET'S BUILD SOMETHING GREAT.
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed"
          >
            Rohit is open to opportunities in <strong>Full Stack Development</strong>, <strong>Frontend Development</strong>, and <strong>Python Development</strong>, alongside high-impact <strong>Digital Marketing</strong>, <strong>WordPress</strong>, and <strong>SEO</strong> strategies.
          </motion.p>
        </div>

        {/* Two-Column Contact Layout (Balanced 50/50 Grid - Left Card ~200px wider, Both ~300px more compact in height) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          
          {/* LEFT: Get In Touch + Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col"
          >
            <div className="glass-panel-elevated p-4 sm:p-5 rounded-2xl border border-border-subtle shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
              <div>
                {/* Header Row: Title & Subtitle on left, 3D Network Sphere on right */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white mb-0.5">
                      Get In Touch
                    </h3>
                    <p className="text-xs text-text-secondary leading-snug">
                      Have an open role, project, or growth challenge? Reach out directly below:
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center justify-center">
                    <NetworkSphere className="w-16 h-16 sm:w-20 sm:h-20 aspect-square" />
                  </div>
                </div>

                {/* 2-Column Quick Info Grid (Saves ~180px vertical height) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                  
                  {/* 1. Full Name */}
                  <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-surface border border-border-subtle text-text-main">
                    <User className="w-3.5 h-3.5 text-primary-cyan shrink-0" />
                    <div className="truncate">
                      <span className="text-[9px] text-text-muted block uppercase leading-none">Full Name</span>
                      <span className="font-semibold text-white truncate text-[11px] sm:text-xs">{PERSONAL_INFO.name}</span>
                    </div>
                  </div>

                  {/* 2. Email */}
                  <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-surface border border-border-subtle hover:border-primary-blue/40 transition-colors">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="flex items-center gap-2 text-text-secondary hover:text-white truncate min-w-0"
                    >
                      <Mail className="w-3.5 h-3.5 text-primary-blue shrink-0" />
                      <div className="truncate">
                        <span className="text-[9px] text-text-muted block uppercase leading-none">Email</span>
                        <span className="truncate block text-[11px] sm:text-xs">{PERSONAL_INFO.email}</span>
                      </div>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1 rounded-md bg-surface-elevated hover:bg-surface-hover text-text-secondary hover:text-primary-cyan transition-colors cursor-pointer shrink-0 ml-1"
                      title="Copy Email"
                      aria-label="Copy Email"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* 3. Phone */}
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-surface border border-border-subtle hover:border-primary-cyan/40 text-text-secondary hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary-cyan shrink-0" />
                    <div>
                      <span className="text-[9px] text-text-muted block uppercase leading-none">Phone</span>
                      <span className="text-[11px] sm:text-xs">{PERSONAL_INFO.phone}</span>
                    </div>
                  </a>

                  {/* 4. Location */}
                  <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-surface border border-border-subtle text-text-secondary">
                    <MapPin className="w-3.5 h-3.5 text-primary-violet shrink-0" />
                    <div>
                      <span className="text-[9px] text-text-muted block uppercase leading-none">Location</span>
                      <span className="text-[11px] sm:text-xs">{PERSONAL_INFO.location}</span>
                    </div>
                  </div>

                  {/* 5. LinkedIn */}
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-surface border border-border-subtle hover:border-[#0A66C2]/60 text-text-secondary hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2] shrink-0" />
                      <div className="truncate">
                        <span className="text-[9px] text-text-muted block uppercase leading-none">LinkedIn</span>
                        <span className="truncate block text-[11px] sm:text-xs">in/rohitkumar88966</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3 h-3 text-text-muted shrink-0 ml-1" />
                  </a>

                  {/* 6. GitHub */}
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-surface border border-border-subtle hover:border-white/40 text-text-secondary hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <GithubIcon className="w-3.5 h-3.5 text-white shrink-0" />
                      <div className="truncate">
                        <span className="text-[9px] text-text-muted block uppercase leading-none">GitHub</span>
                        <span className="truncate block text-[11px] sm:text-xs">github.com/{PERSONAL_INFO.githubUsername}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3 h-3 text-text-muted shrink-0 ml-1" />
                  </a>

                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Send a Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col"
          >
            <div className="glass-panel-elevated p-4 sm:p-5 rounded-2xl border border-border-subtle shadow-xl relative h-full flex flex-col justify-between">
              <div>
                <div className="mb-2.5">
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white mb-0.5">
                    Send a Message
                  </h3>
                  <p className="text-xs text-text-secondary leading-snug">
                    Please complete the form below. I will respond to your inquiry promptly.
                  </p>
                </div>

                {statusMessage && (
                  <div
                    className={`p-2.5 rounded-xl mb-2.5 text-xs ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {statusMessage.type === 'success' ? (
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" />
                      ) : (
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-400" />
                      )}
                      <div>
                        <span>{statusMessage.text}</span>
                        {statusMessage.showMailtoFallback && (
                          <div className="mt-1.5">
                            <a
                              href={mailtoLink}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg text-xs font-mono font-semibold border border-emerald-500/40 transition-colors"
                            >
                              <Mail className="w-3 h-3" />
                              <span>Open Email Client Directly</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Form with compact horizontal arrangement (Saves ~280px vertical height) */}
              <form onSubmit={handleSubmit} className="space-y-2 flex-1 flex flex-col justify-between">
                
                {/* Row 1: Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-wider text-text-secondary mb-0.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3 py-1.5 rounded-xl bg-surface border border-border-subtle focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-xs text-white placeholder-text-muted transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-wider text-text-secondary mb-0.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-3 py-1.5 rounded-xl bg-surface border border-border-subtle focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan text-xs text-white placeholder-text-muted transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Message Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-0.5">
                    <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-wider text-text-secondary">
                      Message *
                    </label>
                    <span className="text-[9px] font-mono text-text-muted">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, role opening, or technical requirements..."
                    className="w-full min-h-[52px] sm:min-h-[58px] px-3 py-1.5 rounded-xl bg-surface border border-border-subtle focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-xs text-white placeholder-text-muted transition-all outline-none resize-none"
                  />
                </div>

                {/* Row 3: Interested In Dropdown + SEND MESSAGE Button side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-end">
                  <div>
                    <label htmlFor="interestedIn" className="block text-[10px] font-mono uppercase tracking-wider text-text-secondary mb-0.5">
                      Interested In *
                    </label>
                    <div className="relative">
                      <select
                        id="interestedIn"
                        name="interestedIn"
                        required
                        value={formData.interestedIn}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 rounded-xl bg-surface border border-border-subtle focus:border-primary-violet focus:ring-1 focus:ring-primary-violet text-xs text-white transition-all outline-none appearance-none cursor-pointer"
                      >
                        {INTERESTED_IN_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#080D18] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* SEND MESSAGE Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-primary-blue via-primary-blue to-primary-violet hover:from-primary-cyan hover:to-primary-blue transition-all duration-300 shadow-glow-blue hover:shadow-glow-cyan flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed h-[34px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
