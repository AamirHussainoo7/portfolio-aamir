import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code2, Layers, Cpu } from 'lucide-react';
import { ParticleBackground } from '../ui/ParticleBackground';

/* ─── Typing text with loop ─────────────────── */
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

/* ─── Animated counter ────────────────────────── */
const AnimatedCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-2xl md:text-3xl font-bold shimmer-text">
        {count}{suffix}
      </span>
      <p className="text-xs text-muted mt-1">{label}</p>
    </motion.div>
  );
};

/* ─── Magnetic social icon ─────────────────────── */
const MagneticIcon = ({ href, icon: Icon, delay: d }: { href: string; icon: any; delay: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 30 });
  const springY = useSpring(y, { stiffness: 150, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.12);
    y.set((e.clientY - centerY) * 0.12);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
      className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-muted hover:text-accent hover:bg-accent/10 hover:border-accent/20 transition-all duration-200"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: d }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={18} />
    </motion.a>
  );
};

/* ─── Interactive Code Terminal ─────────────────── */
const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentSnippet, setCurrentSnippet] = useState(0);

  const snippets = [
    {
      file: 'developer.js',
      lines: [
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
      ],
    },
    {
      file: 'skills.py',
      lines: [
        { prefix: 'class', code: ' Engineer:', color: 'text-purple-400' },
        { prefix: '  def', code: ' __init__(self):', color: 'text-yellow-400' },
        { prefix: '    self.', code: 'frontend = "React"', color: 'text-green-400' },
        { prefix: '    self.', code: 'backend = "Django"', color: 'text-green-400' },
        { prefix: '    self.', code: 'ai = "OpenAI API"', color: 'text-green-400' },
        { prefix: '    self.', code: 'db = "PostgreSQL"', color: 'text-green-400' },
        { prefix: '', code: '', color: '' },
        { prefix: '  def', code: ' build(self, idea):', color: 'text-yellow-400' },
        { prefix: '    return', code: ' f"Shipping {idea}!"', color: 'text-emerald-400' },
        { prefix: '>', code: ' engineer.build("next big thing")', color: 'text-accent' },
      ],
    },
    {
      file: 'deploy.sh',
      lines: [
        { prefix: '#!/bin/bash', code: '', color: 'text-muted' },
        { prefix: 'echo', code: ' "🚀 Deploying..."', color: 'text-green-400' },
        { prefix: 'docker', code: ' build -t portfolio .', color: 'text-yellow-400' },
        { prefix: 'docker', code: ' push registry/app', color: 'text-yellow-400' },
        { prefix: 'kubectl', code: ' apply -f deploy.yml', color: 'text-cyan-400' },
        { prefix: 'echo', code: ' "✅ Live at v2.0"', color: 'text-emerald-400' },
        { prefix: '', code: '', color: '' },
        { prefix: '#', code: ' Zero downtime achieved', color: 'text-muted' },
        { prefix: '#', code: ' 99.9% uptime SLA ✓', color: 'text-muted' },
        { prefix: '>', code: ' Deployment successful!', color: 'text-accent' },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= 10) { clearInterval(timer); return prev; }
        return prev + 1;
      });
    }, 250);
    return () => clearInterval(timer);
  }, [currentSnippet]);

  // Cycle snippets
  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setVisibleLines(0);
      setCurrentSnippet(prev => (prev + 1) % snippets.length);
    }, 8000);
    return () => clearInterval(cycleTimer);
  }, []);

  const snippet = snippets[currentSnippet];

  return (
    <div className="code-window animate-float relative shimmer-border">
      <div className="code-window-bar">
        <div className="code-dot bg-red-500/70" />
        <div className="code-dot bg-yellow-500/70" />
        <div className="code-dot bg-green-500/70" />
        <span className="ml-3 text-[11px] text-muted/50 font-mono">{snippet.file}</span>
        {/* Snippet switcher dots */}
        <div className="ml-auto flex gap-1.5">
          {snippets.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentSnippet(i); setVisibleLines(0); }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === currentSnippet ? 'bg-accent scale-125' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="p-5 space-y-1 text-[13px] leading-relaxed min-h-[260px]">
        {snippet.lines.map((line, i) => (
          <motion.div
            key={`${currentSnippet}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            animate={i < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
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

/* ─── Hero Section ────────────────────────────── */
export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.3, y: 0.5 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center pt-24 pb-16"
      onMouseMove={handleMouseMove}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground particleCount={50} speed={0.2} maxDistance={100} />
      </div>

      {/* Mouse-reactive gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
        style={{
          background: `
            radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(600px circle at ${100 - mousePos.x * 100}% ${100 - mousePos.y * 100}%, rgba(34, 211, 238, 0.04) 0%, transparent 50%)
          `,
        }}
      />

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
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Muhammed
            </motion.span>
            <motion.span 
              className="block text-gradient-accent"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.3 }}
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
                className="btn-primary btn-glow text-center inline-flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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

            {/* Magnetic social icons */}
            <div className="flex items-center gap-4">
              <MagneticIcon href="https://github.com/AamirHussainoo7" icon={Github} delay={0.7} />
              <MagneticIcon href="https://www.linkedin.com/in/md-aamir-hussain07/" icon={Linkedin} delay={0.8} />
              <MagneticIcon href="mailto:aamithussain.786@gmail.com" icon={Mail} delay={0.9} />
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

      {/* Stats counters */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex justify-center gap-12 md:gap-20">
          <AnimatedCounter end={3} suffix="+" label="Live Projects" />
          <AnimatedCounter end={10} suffix="+" label="Technologies" />
          <AnimatedCounter end={2} suffix="" label="Internships" />
        </div>
      </motion.div>
    </section>
  );
};
