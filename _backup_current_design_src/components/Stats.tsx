import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Server, Zap, Code2 } from 'lucide-react';
import { STATS } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Server,
  Zap,
  Code2
};

const StatCard: React.FC<{
  stat: (typeof STATS)[0];
  index: number;
}> = ({ stat, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || stat.numericValue === undefined) return;

    let start = 0;
    const end = stat.numericValue;
    const duration = 1500; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.numericValue]);

  const IconComponent = iconMap[stat.iconName] || Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-panel-elevated p-6 sm:p-8 rounded-2xl border border-border-subtle hover:border-primary-blue/60 transition-all duration-300 shadow-xl group relative overflow-hidden"
    >
      {/* Background soft glow on hover */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary-blue/10 rounded-full blur-2xl group-hover:bg-primary-cyan/20 transition-all pointer-events-none" />

      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-surface/90 border border-primary-blue/30 flex items-center justify-center text-primary-cyan group-hover:text-white group-hover:bg-primary-blue/20 transition-all shadow-md">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted px-2 py-0.5 rounded bg-surface border border-border-subtle">
          Metric 0{index + 1}
        </span>
      </div>

      {/* Main Stat Number */}
      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-2 tracking-tight group-hover:text-primary-cyan transition-colors flex items-baseline">
        {stat.numericValue !== undefined ? (
          <>
            <span>{count}</span>
            <span className="text-primary-blue ml-0.5">{stat.suffix}</span>
          </>
        ) : (
          <span className="gradient-text-blue-cyan">{stat.value}</span>
        )}
      </div>

      <h3 className="text-sm sm:text-base font-bold text-text-main mb-1">
        {stat.label}
      </h3>

      <p className="text-xs font-mono text-text-secondary">
        {stat.description}
      </p>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="relative py-16 bg-[#040814] border-y border-border-subtle/70 z-20">
      <div className="max-w-[1440px] xl:max-w-[1560px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
