import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  return (
    <div id="contact" className="relative py-48 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 atmos-bg opacity-30 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase mb-12 block">
          Available for new challenges
        </span>
        
        <h2 className="text-4xl md:text-[7vw] font-black tracking-tighter leading-[0.8] mb-24">
          LET'S <span className="text-highlight">BUILD</span> THE <br />
          NEXT BIG <span className="text-glow">FRAMEWORK</span>.
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 px-6">
          <a 
            href="mailto:aamithussain.786@gmail.com" 
            className="group flex items-center gap-4 text-2xl md:text-4xl font-black tracking-tighter hover:text-blue-500 transition-colors"
          >
            <span>EMAIL</span>
            <ArrowUpRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/md-aamir-hussain07/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-2xl md:text-4xl font-black tracking-tighter hover:text-blue-500 transition-colors"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
          </a>
          
          <a 
            href="https://github.com/AamirHussainoo7" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-2xl md:text-4xl font-black tracking-tighter hover:text-blue-500 transition-colors"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={32} />
          </a>
        </div>

        <div className="mt-48 grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] text-left border-t border-white/5 pt-12">
          <div className="space-y-4">
            <p className="text-white/40 border-b border-white/5 pb-2">Diagnostic_Data</p>
            <p>LATENCY: 12ms</p>
            <p>TEL: +91 9399265348</p>
            <p>PACKAGE: STABLE_V2.4</p>
          </div>
          <div className="space-y-4">
            <p className="text-white/40 border-b border-white/5 pb-2">Network_Status</p>
            <p>ENCRYPTION: AES-256</p>
            <p>NODE: ASIA_SE_01</p>
            <p>TTL: 64</p>
          </div>
          <div className="space-y-4">
            <p className="text-white/40 border-b border-white/5 pb-2">System_Archive</p>
            <p>© 2026 ARCHIVE_CORE</p>
            <p>DESIGNED BY AAMIR</p>
            <p>BUILD_ID: 0x7F4E</p>
          </div>
          <div className="space-y-4">
            <p className="text-white/40 border-b border-white/5 pb-2">Global_Availability</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>LIVE_SIGNAL_ACTIVE</span>
            </div>
            <p>LONDON_UK</p>
            <p>NEW_YORK_US</p>
          </div>
        </div>
      </motion.div>

      {/* Decorative Scrolling Signal Line */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-1 opacity-20">
        <motion.div 
          className="w-[200%] h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};
