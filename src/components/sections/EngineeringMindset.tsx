import { motion } from 'motion/react';
import { SectionHeading } from '../ui/Shared';
import { Target, Zap, Lightbulb, RefreshCw } from 'lucide-react';

export const EngineeringMindset = () => {
  const principles = [
    {
      title: "Think in Trade-offs",
      icon: Target,
      desc: "There is no 'best' tool, only the right tool for the specific constraints. I weigh latency vs. cost and consistency vs. availability in every design."
    },
    {
      title: "Performance is UX",
      icon: Zap,
      desc: "A fast UI is a respectful UI. I obsess over bundle sizes, network round-trips, and rendering performance to ensure a seamless experience."
    },
    {
      title: "Problem > Code",
      icon: Lightbulb,
      desc: "I don't just write code; I solve business problems. If a feature can be achieved with a simple process change, I'll advocate for the process."
    },
    {
      title: "Build for Evolution",
      icon: RefreshCw,
      desc: "Code is temporary; architecture is permanent. I write modular, self-documenting systems that are easy to refactor, ensuring long-term maintainability."
    }
  ];

  return (
    <div id="mindset">
      <SectionHeading 
        title="My Approach"
        number="Philosophy"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="card-gradient-border p-7 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <p.icon size={16} className="text-accent" />
              </motion.div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-accent/40 font-mono">0{i + 1}</span>
                <h3 className="text-lg font-bold">{p.title}</h3>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
