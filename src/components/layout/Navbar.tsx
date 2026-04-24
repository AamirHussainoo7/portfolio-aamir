import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[50] px-6 py-8 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/5 px-8 py-4 rounded-full pointer-events-auto">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-black tracking-tighter text-xl text-foreground">AAMIR</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Works', 'Credentials', 'Journey', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase() === 'works' ? 'projects' : item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a 
          href="https://drive.google.com/file/d/1EhTPHJtUI-jRrq87ME8wtyhNa_sMA2d4/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 group bg-foreground text-background rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
        >
          Resume.v1
        </a>
      </div>
    </motion.nav>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-black text-2xl tracking-tighter mb-2">Build_Core <span className="text-white/20">V1.0.2</span></p>
          <p className="text-[10px] font-mono text-white/20 tracking-widest uppercase">Designed & Crafted by Aamir Hussain</p>
        </div>
        
        <div className="flex gap-12">
          <a href="https://github.com/AamirHussainoo7" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
            Github
          </a>
          <a href="https://www.linkedin.com/in/md-aamir-hussain07/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:aamithussain.786@gmail.com" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
