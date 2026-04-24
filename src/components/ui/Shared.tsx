import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("max-w-7xl mx-auto px-6 md:px-12", className)}>
    {children}
  </div>
);

export const SectionHeading = ({ title, subtitle, number }: { title: string; subtitle?: string; number?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24"
  >
    {number && <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase mb-4 block">{number}</span>}
    <h2 className="text-3xl md:text-6xl font-black mb-10 leading-none tracking-tighter">
      {title}
    </h2>
    {subtitle && <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
      {subtitle}
    </p>}
    <div className="w-24 h-px bg-white/10 mt-16" />
  </motion.div>
);

export const Card = ({ children, className, noPadding = false }: { children: React.ReactNode; className?: string; noPadding?: boolean }) => (
  <div className={cn("card-creative", noPadding && "p-0", className)}>
    {children}
  </div>
);

export const Badge = ({ children, className }: { children: React.ReactNode; className?: string; [key: string]: any }) => (
  <span className={cn("px-2 py-0.5 rounded-sm text-[10px] font-mono bg-white/5 border border-border text-accent uppercase", className)}>
    {children}
  </span>
);
