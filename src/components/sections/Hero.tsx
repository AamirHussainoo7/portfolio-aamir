import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Shared';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 mb-24">
      {/* Background Name Reveal (Watermark style) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] whitespace-nowrap"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.02 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h2 className="text-[25vw] font-black tracking-tighter">AAMIR HUSSAIN</h2>
      </motion.div>

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-white/20" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/40">Build_Core // V1.0</span>
          </div>

          <h1 className="text-5xl md:text-[7vw] font-black leading-[0.85] tracking-tighter mb-12">
            <span className="block text-white">Muhammed</span>
            <span className="text-highlight">Aamir Hussain</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-md">
              Full Stack Developer & <span className="text-white font-medium">AI Builder</span>. 
              I architect systems where performance meets scalable intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="#projects" 
                className="group relative px-10 py-5 bg-white text-black rounded-full font-bold uppercase text-xs tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span className="relative z-10">Explore Works</span>
                <motion.div 
                  className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                />
              </a>
              <a 
                href="#contact" 
                className="px-10 py-5 border border-white/10 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all text-center"
              >
                Connect
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Micro-data */}
      <div className="absolute right-0 bottom-0 text-right opacity-20 hidden md:block">
        <div className="font-mono text-[10px] space-y-2 uppercase tracking-tighter">
          <p>Coord: 40.7128° N, 74.0060° W</p>
          <p>Status: Ready_to_deploy</p>
          <p>Kernel: Optimised_V5</p>
        </div>
      </div>
    </section>
  );
};
