import { motion, useInView } from 'motion/react';
import { SectionHeading } from '../ui/Shared';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Award, CheckCircle } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

/* Animated count-up for "200+" */
const CountUp = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [isInView, target]);

  return <span ref={ref} className="shimmer-text font-bold">{count}{suffix}</span>;
};

/* Animated checkmark SVG */
const AnimatedCheck = ({ delay = 0 }: { delay: number }) => (
  <motion.div
    initial={{ scale: 0, rotate: -45 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ delay, type: 'spring', stiffness: 300, damping: 15 }}
  >
    <CheckCircle className="text-accent/60 shrink-0" size={16} />
  </motion.div>
);

export const Credentials = () => {
  const achievements = [
    {
      title: "200+ DSA Solutions",
      org: "LeetCode & GFG",
      desc: "Solved complex data structure problems, building deep analytical intuition.",
      countUp: true,
      count: 200,
    },
    {
      title: "University S1 Merit",
      org: "LPU Academic",
      desc: "Recognized among top-performing students based on exceptional performance.",
    },
    {
      title: "Top 5 Hackathon Team",
      org: "Hack-a-Throne 1.0",
      desc: "Architected a technical solution under high-pressure competitive constraints.",
    }
  ];

  const certifications = [
    { name: "IBM DevOps and Software Engineering", org: "Coursera", date: "Oct 2024" },
    { name: "Cloud Computing", org: "NPTEL", date: "Nov 2024" },
    { name: "Data Structures & Algorithms in C/C++", org: "Udemy", date: "Nov 2023" }
  ];

  return (
    <div id="credentials">
      <SectionHeading 
        title="Credentials"
        number="Achievements & Certifications"
        subtitle="Milestones and validated competencies."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Achievements */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-accent tracking-wide mb-4">Achievements</h3>
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, type: 'spring', stiffness: 120 }}
              style={{ transformPerspective: 800 }}
            >
              <SpotlightCard tilt tiltAmount={3} spotlightColor="rgba(59, 130, 246, 0.08)">
                <div className="p-6 group">
                  <div className="flex gap-4 items-start">
                    <motion.div
                      className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 shrink-0"
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Award className="text-accent" size={18} />
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h4 className="text-base font-bold">
                          {ach.countUp ? (
                            <><CountUp target={ach.count!} suffix="+" /> DSA Solutions</>
                          ) : ach.title}
                        </h4>
                        <span className="text-xs text-muted font-medium px-2 py-0.5 rounded-full bg-white/[0.04]">{ach.org}</span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{ach.desc}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-accent tracking-wide mb-4">Certifications</h3>
          <SpotlightCard spotlightColor="rgba(34, 211, 238, 0.06)">
            <div className="divide-y divide-white/[0.04]">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: 'spring', stiffness: 150 }}
                  className="p-5 hover:bg-white/[0.02] transition-colors flex justify-between items-center gap-4 group"
                >
                  <div className="flex gap-3 items-center min-w-0">
                    <AnimatedCheck delay={i * 0.15 + 0.3} />
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold truncate group-hover:text-accent transition-colors">{cert.name}</h4>
                      <p className="text-xs text-muted">{cert.org}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted font-mono whitespace-nowrap shrink-0 px-2 py-1 rounded-md bg-white/[0.03]">{cert.date}</span>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};
