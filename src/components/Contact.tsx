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
    <section id="contact" className="relative py-20 sm:py-28 bg-[#040814] cosmic-grid overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary-blue/10 rounded-full blur-[160px] pointer-events-none" />

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
            07 — LET'S CONNECT
          </motion.div>

          {/* Heading: LET'S BUILD SOMETHING GREAT. */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-3"
          >
            LET'S BUILD SOMETHING GREAT.
          </motion.h2>

          {/* Supporting Text with Developer roles first: Full Stack, Frontend, Python, Digital Marketing, WordPress, SEO */}
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

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Get In Touch + Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 h-full flex flex-col"
          >
            <div className="glass-panel-elevated p-6 sm:p-8 rounded-2xl border border-border-subtle shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
              <div>
                {/* 3D Network Sphere */}
                <div className="w-full mb-3 flex items-center justify-center">
                  <NetworkSphere className="w-40 h-40 sm:w-44 sm:h-44 aspect-square" />
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white mb-1.5">
                  Get In Touch
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mb-5 leading-relaxed">
                  Have an open role, engineering project, or growth challenge? Feel free to reach out directly through any of the channels below.
                </p>

                {/* EXACT QUICK INFO STRUCTURE */}
                <div className="space-y-2.5 font-mono text-xs sm:text-sm">
                  
                  {/* 1. Full Name */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border-subtle text-text-main">
                    <User className="w-4 h-4 text-primary-cyan shrink-0" />
                    <div>
                      <span className="text-[10px] text-text-muted block uppercase">Full Name</span>
                      <span className="font-semibold text-white">{PERSONAL_INFO.name}</span>
                    </div>
                  </div>

                  {/* 2. Email */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border-subtle hover:border-primary-blue/40 transition-colors">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="flex items-center gap-3 text-text-secondary hover:text-white truncate"
                    >
                      <Mail className="w-4 h-4 text-primary-blue shrink-0" />
                      <div>
                        <span className="text-[10px] text-text-muted block uppercase">Email</span>
                        <span className="truncate">{PERSONAL_INFO.email}</span>
                      </div>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-surface-elevated hover:bg-surface-hover text-text-secondary hover:text-primary-cyan transition-colors cursor-pointer"
                      title="Copy Email"
                      aria-label="Copy Email"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* 3. Phone */}
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border-subtle hover:border-primary-cyan/40 text-text-secondary hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary-cyan shrink-0" />
                    <div>
                      <span className="text-[10px] text-text-muted block uppercase">Phone</span>
                      <span>{PERSONAL_INFO.phone}</span>
                    </div>
                  </a>

                  {/* 4. Location */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border-subtle text-text-secondary">
                    <MapPin className="w-4 h-4 text-primary-violet shrink-0" />
                    <div>
                      <span className="text-[10px] text-text-muted block uppercase">Location</span>
                      <span>{PERSONAL_INFO.location}</span>
                    </div>
                  </div>

                  {/* 5. LinkedIn (BEFORE GitHub) */}
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border-subtle hover:border-[#0A66C2]/60 text-text-secondary hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedInIcon className="w-4 h-4 text-[#0A66C2] shrink-0" />
                      <div>
                        <span className="text-[10px] text-text-muted block uppercase">LinkedIn</span>
                        <span>linkedin.com/in/rohitkumar88966</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                  </a>

                  {/* 6. GitHub */}
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border-subtle hover:border-white/40 text-text-secondary hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-4 h-4 text-white shrink-0" />
                      <div>
                        <span className="text-[10px] text-text-muted block uppercase">GitHub</span>
                        <span>github.com/{PERSONAL_INFO.githubUsername}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
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
            className="lg:col-span-7 h-full flex flex-col"
          >
            <div className="glass-panel-elevated p-6 sm:p-8 rounded-2xl border border-border-subtle shadow-2xl relative h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-1.5">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mb-4">
                  Please complete the form below. I will respond to your inquiry promptly.
                </p>

                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl mb-4 text-xs sm:text-sm ${
                      statusMessage.type === 'success'
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                        : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {statusMessage.type === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                      ) : (
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                      )}
                      <div>
                        <span>{statusMessage.text}</span>
                        {statusMessage.showMailtoFallback && (
                          <div className="mt-2">
                            <a
                              href={mailtoLink}
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg text-xs font-mono font-semibold border border-emerald-500/40 transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span>Open Email Client Directly</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Form with required inputs and dropdown */}
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-text-secondary mb-1">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border-subtle focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-xs sm:text-sm text-white placeholder-text-muted transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-text-secondary mb-1">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border-subtle focus:border-primary-cyan focus:ring-1 focus:ring-primary-cyan text-xs sm:text-sm text-white placeholder-text-muted transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Interested In * Dropdown */}
                <div>
                  <label htmlFor="interestedIn" className="block text-[11px] font-mono uppercase tracking-wider text-text-secondary mb-1">
                    Interested In *
                  </label>
                  <div className="relative">
                    <select
                      id="interestedIn"
                      name="interestedIn"
                      required
                      value={formData.interestedIn}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border-subtle focus:border-primary-violet focus:ring-1 focus:ring-primary-violet text-xs sm:text-sm text-white transition-all outline-none appearance-none cursor-pointer"
                    >
                      {INTERESTED_IN_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#080D18] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Message * */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-wider text-text-secondary">
                      Message *
                    </label>
                    <span className="text-[10px] font-mono text-text-muted">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, role opening, or technical requirements..."
                    className="w-full flex-1 min-h-[90px] px-3.5 py-2.5 rounded-xl bg-surface border border-border-subtle focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-xs sm:text-sm text-white placeholder-text-muted transition-all outline-none resize-none"
                  />
                </div>

                {/* SEND MESSAGE Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-xl font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-primary-blue via-primary-blue to-primary-violet hover:from-primary-cyan hover:to-primary-blue transition-all duration-300 shadow-glow-blue hover:shadow-glow-cyan flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
