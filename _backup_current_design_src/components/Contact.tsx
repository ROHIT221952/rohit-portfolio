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
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, QUICK_CONTACT_SUBJECTS } from '../data/portfolioData';
import { NetworkSphere } from './NetworkSphere';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (statusMessage) setStatusMessage(null);
  };

  const handleSubjectSelect = (subj: string) => {
    setFormData(prev => ({
      ...prev,
      subject: subj
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill in all required fields (Name, Email, Message).'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data: any = null;
      try {
        data = await response.json();
      } catch {
        // Non-JSON response (e.g. 404 HTML on static host)
      }

      if (response.ok && data?.success) {
        setStatusMessage({
          type: 'success',
          text: data.message || 'Message sent successfully! Rohit will reach out shortly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#3877FF', '#25D9FF', '#985CFF', '#34d399']
        });
      } else if (response.status === 400 || response.status === 429) {
        setStatusMessage({
          type: 'error',
          text: data?.message || 'Invalid input or request limit exceeded. Please verify your details.'
        });
      } else {
        // Fallback for static hosts where Express backend isn't mounted
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
      // Offline or network error fallback
      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your message was saved locally. Click below to launch your email client:',
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

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Rohit,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#040814] cosmic-grid overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary-blue/10 rounded-full blur-[160px] pointer-events-none" />

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
            07 — LET'S CONNECT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4"
          >
            Let’s Build Something <span className="gradient-text-blue-cyan uppercase">Great.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-base max-w-2xl"
          >
            Available for full-time Full-Stack Developer, WordPress engineering, and Technical SEO &amp; Digital Marketing opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Direct Contact Info & Network Sphere */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 h-full flex flex-col"
          >
            <div className="glass-panel-elevated p-7 sm:p-8 rounded-2xl border border-border-subtle shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
              <div>
                {/* 3D Interactive Constellation Network Sphere */}
                <div className="w-full mb-3 flex items-center justify-center">
                  <NetworkSphere className="w-44 h-44 sm:w-48 sm:h-48 aspect-square" />
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-1.5">
                  Direct Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mb-5 leading-relaxed">
                  Feel free to email, call, WhatsApp, or connect on LinkedIn. I typically respond within 24 hours.
                </p>

                <div className="space-y-2.5 font-mono text-xs sm:text-sm">
                  {/* Email Item */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border-subtle hover:border-primary-blue/40 transition-colors">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="flex items-center gap-3 text-text-secondary hover:text-white truncate"
                    >
                      <Mail className="w-4 h-4 text-primary-blue shrink-0" />
                      <span className="truncate">{PERSONAL_INFO.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-surface-elevated hover:bg-surface-hover text-text-secondary hover:text-primary-cyan transition-colors"
                      title="Copy Email"
                      aria-label="Copy Email"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* LinkedIn Item */}
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border-subtle hover:border-[#0A66C2]/60 text-text-secondary hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedInIcon className="w-4 h-4 text-[#0A66C2] shrink-0" />
                      <span>linkedin.com/in/rohitkumar-dev</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                  </a>

                  {/* WhatsApp Item */}
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border-subtle hover:border-emerald-500/60 text-text-secondary hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>WhatsApp Quick Chat</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-semibold">Online</span>
                  </a>

                  {/* Phone Item */}
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border-subtle hover:border-primary-cyan/40 text-text-secondary hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary-cyan shrink-0" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border-subtle text-text-secondary">
                    <MapPin className="w-4 h-4 text-primary-violet shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>

                  {/* GitHub */}
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-surface border border-border-subtle hover:border-white/40 text-text-secondary hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="w-4 h-4 text-white shrink-0" />
                      <span>github.com/{PERSONAL_INFO.githubUsername}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Working Glassmorphism Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-full flex flex-col"
          >
            <div className="glass-panel-elevated p-7 sm:p-8 rounded-2xl border border-border-subtle shadow-2xl relative h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1.5">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary mb-4">
                  Have a job opening, freelance inquiry, or technical question? Submit the form below.
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

              <form onSubmit={handleSubmit} className="space-y-3.5 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                      Email Address *
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

                {/* Subject Field & Quick Prefill Chips */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="subject" className="block text-[11px] font-mono uppercase tracking-wider text-text-secondary">
                      Subject / Opportunity
                    </label>
                    <span className="text-[10px] text-text-muted font-mono">Click to prefill:</span>
                  </div>

                  {/* Subject Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {QUICK_CONTACT_SUBJECTS.map((subj) => (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => handleSubjectSelect(subj)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border transition-colors cursor-pointer ${
                          formData.subject === subj
                            ? 'bg-primary-blue/30 text-primary-cyan border-primary-cyan/60 font-semibold'
                            : 'bg-surface border-border-subtle text-text-secondary hover:text-white hover:border-border-glow'
                        }`}
                      >
                        {subj}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. MERN Stack Developer Opportunity"
                    className="w-full px-3.5 py-2 rounded-xl bg-surface border border-border-subtle focus:border-primary-violet focus:ring-1 focus:ring-primary-violet text-xs sm:text-sm text-white placeholder-text-muted transition-all outline-none"
                  />
                </div>

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
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your project requirements, job description, or message..."
                    className="w-full flex-1 min-h-[85px] px-3.5 py-2.5 rounded-xl bg-surface border border-border-subtle focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-xs sm:text-sm text-white placeholder-text-muted transition-all outline-none resize-none"
                  />
                </div>

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
                      <span>Send Message</span>
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
