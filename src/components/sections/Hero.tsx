import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [started, text]);

  return <>{displayed}<span className="cursor-blink text-accent">|</span></>;
};

const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= 10) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(timer);
  }, []);

  const lines = [
    { prefix: 'const', code: ' developer = {', color: 'text-purple-400' },
    { prefix: '  name:', code: ' "Aamir Hussain",', color: 'text-green-400' },
    { prefix: '  role:', code: ' "Full Stack & AI",', color: 'text-green-400' },
    { prefix: '  stack:', code: ' ["React", "Node",', color: 'text-yellow-400' },
    { prefix: '        ', code: ' "Django", "OpenAI"],', color: 'text-yellow-400' },
    { prefix: '  focus:', code: ' "Scalable Systems",', color: 'text-green-400' },
    { prefix: '  status:', code: ' "Available" ✓', color: 'text-emerald-400' },
    { prefix: '};', code: '', color: 'text-purple-400' },
    { prefix: '', code: '', color: '' },
    { prefix: '>', code: ' Ready to build...', color: 'text-accent' },
  ];

  return (
    <div className="code-window animate-float">
      <div className="code-window-bar">
        <div className="code-dot bg-red-500/70" />
        <div className="code-dot bg-yellow-500/70" />
        <div className="code-dot bg-green-500/70" />
        <span className="ml-3 text-[11px] text-muted/50 font-mono">developer.js</span>
      </div>
      <div className="p-5 space-y-1 text-[13px] leading-relaxed min-h-[260px]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <span className="text-white/30 w-7 text-right mr-4 select-none text-xs leading-relaxed">{i < visibleLines ? i + 1 : ''}</span>
            <span>
              <span className={line.prefix.trim().startsWith('>') ? 'text-accent' : 'text-purple-400'}>{line.prefix}</span>
              <span className={line.color}>{line.code}</span>
            </span>
          </motion.div>
        ))}
        {visibleLines >= 10 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex mt-2"
          >
            <span className="text-white/30 w-7 text-right mr-4 select-none text-xs">$</span>
            <span className="text-accent cursor-blink">_</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-24 pb-16">
      {/* Subtle background glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 glow-dot" />
            <span className="text-sm text-muted">Available for opportunities</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 leading-[1.08]">
            <motion.span 
              className="block text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Muhammed
            </motion.span>
            <motion.span 
              className="block text-gradient-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Aamir Hussain
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
              Full Stack Developer & <span className="text-foreground font-medium">AI Builder</span> crafting 
              scalable web applications, intelligent systems, and modern user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a 
                href="#projects" 
                className="btn-primary text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-outline text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.a>
            </div>

            <div className="flex items-center gap-4">
              {[
                { href: "https://github.com/AamirHussainoo7", icon: Github },
                { href: "https://www.linkedin.com/in/md-aamir-hussain07/", icon: Linkedin },
                { href: "mailto:aamithussain.786@gmail.com", icon: Mail },
              ].map((social, i) => (
                <motion.a 
                  key={social.href}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-muted hover:text-accent hover:bg-accent/10 hover:border-accent/20 transition-all duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — Animated Code Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <CodeTerminal />
        </motion.div>
      </div>
    </section>
  );
};
