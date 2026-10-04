import React from 'react';
import { motion } from 'framer-motion';
import {
  FileSearch,
  Network,
  Code,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  FileSearch,
  Network,
  Code,
  ShieldCheck,
  Rocket
};

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="relative py-24 sm:py-32 bg-background cosmic-grid overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary-blue/5 rounded-full blur-[170px] pointer-events-none" />

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
            06 — ENGINEERING PROCESS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4"
          >
            How I Build Software Products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-base max-w-2xl"
          >
            A disciplined, test-driven, and AI-accelerated engineering lifecycle from initial problem modeling to global cloud deployment.
          </motion.p>
        </div>

        {/* 5 Sequential Workflow Cards with Animated Connector */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-blue via-primary-cyan to-primary-violet opacity-30 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {WORKFLOW_STEPS.map((step, index) => {
              const IconComponent = iconMap[step.iconName] || Code;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="glass-panel-elevated p-6 rounded-2xl border border-border-subtle hover:border-primary-cyan/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading font-extrabold text-2xl text-primary-cyan/60 group-hover:text-primary-cyan transition-colors">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-surface border border-primary-blue/30 flex items-center justify-center text-primary-blue group-hover:text-white group-hover:bg-primary-blue/20 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-base text-white mb-2 group-hover:text-primary-cyan transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet details */}
                  <div className="space-y-1.5 pt-4 border-t border-border-subtle/60">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-primary-blue mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
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
