import { motion } from 'motion/react';
import { SectionHeading } from '../ui/Shared';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Target, Zap, Lightbulb, RefreshCw } from 'lucide-react';

export const EngineeringMindset = () => {
  const principles = [
    {
      title: "Think in Trade-offs",
      icon: Target,
      desc: "There is no 'best' tool, only the right tool for the specific constraints. I weigh latency vs. cost and consistency vs. availability in every design.",
      gradient: 'from-red-500/20 to-orange-500/20',
      spotlight: 'rgba(239, 68, 68, 0.08)',
    },
    {
      title: "Performance is UX",
      icon: Zap,
      desc: "A fast UI is a respectful UI. I obsess over bundle sizes, network round-trips, and rendering performance to ensure a seamless experience.",
      gradient: 'from-yellow-500/20 to-amber-500/20',
      spotlight: 'rgba(245, 158, 11, 0.08)',
    },
    {
      title: "Problem > Code",
      icon: Lightbulb,
      desc: "I don't just write code; I solve business problems. If a feature can be achieved with a simple process change, I'll advocate for the process.",
      gradient: 'from-emerald-500/20 to-teal-500/20',
      spotlight: 'rgba(16, 185, 129, 0.08)',
    },
    {
      title: "Build for Evolution",
      icon: RefreshCw,
      desc: "Code is temporary; architecture is permanent. I write modular, self-documenting systems that are easy to refactor, ensuring long-term maintainability.",
      gradient: 'from-blue-500/20 to-violet-500/20',
      spotlight: 'rgba(59, 130, 246, 0.08)',
    }
  ];

  return (
    <div id="mindset">
      <SectionHeading 
        title="My Approach"
        number="Philosophy"
      />
      
      {/* Connecting flow line */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
        {/* Background connecting line */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M25,25 C50,25 50,75 75,75"
              fill="none"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="0.3"
              strokeDasharray="2,2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 120 }}
          >
            <SpotlightCard tilt tiltAmount={4} className="h-full" spotlightColor={p.spotlight}>
              <div className="p-7 group">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className={`p-2 rounded-lg bg-gradient-to-br ${p.gradient}`}
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 200, duration: 0.6 }}
                  >
                    <p.icon size={16} className="text-accent" />
                  </motion.div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-accent/40 font-mono">0{i + 1}</span>
                    <h3 className="text-lg font-bold hover-gradient-text">{p.title}</h3>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
