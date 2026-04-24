import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const SplashLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Play sound effect using Web Audio API
    const playSound = (isIntro = false) => {
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        if (isIntro) {
          // Deep cinematic entry hum
          const oscillator = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          oscillator.type = 'sawtooth';
          oscillator.frequency.setValueAtTime(40, audioCtx.currentTime); // Low bass
          oscillator.frequency.exponentialRampToValueAtTime(60, audioCtx.currentTime + 2);
          
          gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.5);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 3);
          
          oscillator.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          
          oscillator.start();
          oscillator.stop(audioCtx.currentTime + 3);

          // Digital click/beep
          const beep = audioCtx.createOscillator();
          const beepGain = audioCtx.createGain();
          beep.type = 'square';
          beep.frequency.setValueAtTime(1000, audioCtx.currentTime);
          beepGain.gain.setValueAtTime(0.1, audioCtx.currentTime);
          beepGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
          beep.connect(beepGain);
          beepGain.connect(audioCtx.destination);
          beep.start();
          beep.stop(audioCtx.currentTime + 0.1);
        } else {
          // Standard transition ping
          const oscillator = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 1.5);
          gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.1);
          gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2);
          oscillator.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          oscillator.start();
          oscillator.stop(audioCtx.currentTime + 2);
        }
      } catch (e) {
        console.warn("Audio blocked by browser policy");
      }
    };

    const handleInteraction = () => {
      playSound(true); // Play the cooler intro sound
      window.removeEventListener('click', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);

    // Browsers block audio until interaction, so we wait for 3s then exit
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 1000);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleInteraction);
    };
  }, [onComplete]);

  const name = "AAMIR HUSSAIN";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Glitch Effects */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
          </motion.div>

          <div className="relative">
            <div className="flex gap-[0.5vw]">
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`text-[8vw] md:text-[6vw] font-black tracking-tighter ${char === " " ? "w-[4vw]" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            
            <motion.div 
              className="absolute -inset-4 bg-white/5 blur-3xl rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          <motion.div 
            className="mt-12 text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Initialising Build_Core
          </motion.div>

          {/* Glitch Bars */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-white/20"
                initial={{ top: `${Math.random() * 100}%`, left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ 
                  duration: 0.2, 
                  repeat: Infinity, 
                  repeatDelay: Math.random() * 2,
                  delay: Math.random() 
                }}
              />
            ))}
          </div>

          <motion.button 
            onClick={() => window.dispatchEvent(new MouseEvent('click'))}
            className="mt-12 px-6 py-2 border border-white/10 rounded-full text-white/40 text-[10px] uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:text-white transition-all group"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            <span className="group-hover:text-glow">Activate Audio Systems</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
