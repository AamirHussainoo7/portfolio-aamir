import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("max-w-6xl mx-auto px-6 md:px-10", className)}>
    {children}
  </div>
);

export const SectionHeading = ({ title, subtitle, number }: { title: string; subtitle?: string; number?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-14"
  >
    {number && <span className="text-xs font-medium tracking-wide text-accent uppercase mb-3 block">{number}</span>}
    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
      {title}
    </h2>
    {subtitle && <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
      {subtitle}
    </p>}
  </motion.div>
);

export const Card = ({ children, className, noPadding = false }: { children: React.ReactNode; className?: string; noPadding?: boolean }) => (
  <div className={cn("card-glass", noPadding && "p-0", className)}>
    {children}
  </div>
);

export const Badge = ({ children, className }: { children: React.ReactNode; className?: string; [key: string]: any }) => (
  <span className={cn("pill", className)}>
    {children}
  </span>
);
