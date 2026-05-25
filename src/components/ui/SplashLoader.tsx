import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const SplashLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [showName, setShowName] = useState(false);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bootLines = [
      '> initializing system...',
      '> loading modules: react, node, django',
      '> connecting APIs: OpenAI, REST, JWT',
      '> compiling portfolio...',
      '> status: ready ✓',
    ];

    // Slowed-down timing
    const t1 = setTimeout(() => { setLines([bootLines[0]]); setProgress(20); }, 300);
    const t2 = setTimeout(() => { setLines(prev => [...prev, bootLines[1]]); setProgress(40); }, 750);
    const t3 = setTimeout(() => { setLines(prev => [...prev, bootLines[2]]); setProgress(60); }, 1200);
    const t4 = setTimeout(() => { setLines(prev => [...prev, bootLines[3]]); setProgress(80); }, 1650);
    const t5 = setTimeout(() => { setLines(prev => [...prev, bootLines[4]]); setProgress(100); }, 2100);

    const t6 = setTimeout(() => setShowName(true), 2700);
    const t7 = setTimeout(() => setVisible(false), 4200);
    const t8 = setTimeout(() => onComplete(), 4600);

    return () => {
      [t1, t2, t3, t4, t5, t6, t7, t8].forEach(clearTimeout);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-[#0a0a0f] flex items-center justify-center transition-opacity duration-400"
      style={{ opacity: showName && !visible ? 0 : 1 }}
    >
      <div className="w-full max-w-lg px-6">
        {!showName ? (
          <div className="font-mono text-sm space-y-2">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={line.includes('✓') ? 'text-emerald-400' : 'text-white/70'}
              >
                {line}
              </motion.p>
            ))}
            <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse mt-1" />
            {/* Progress bar */}
            <div className="mt-4 w-full h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-accent-cyan"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </div>
        ) : (
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white">Aamir </span>
              <span className="text-gradient-accent">Hussain</span>
            </motion.h1>
            <motion.p
              className="text-sm text-white/50 mt-4 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Developer & AI Builder
            </motion.p>
            <motion.div
              className="w-16 h-[2px] mx-auto mt-4"
              style={{ background: 'linear-gradient(to right, #3b82f6, #22d3ee)' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
