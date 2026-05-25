import { motion } from 'motion/react';
import { SectionHeading } from '../ui/Shared';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Terminal, Cpu, Sparkles, GraduationCap } from 'lucide-react';

export const About = () => {
  const pillars = [
    {
      title: "Systems Thinker",
      icon: Terminal,
      desc: "I approach problems through the lens of architectural resilience and long-term scalability.",
      gradient: 'from-blue-500/20 to-cyan-500/20',
      spotlight: 'rgba(59, 130, 246, 0.1)',
    },
    {
      title: "AI Specialist",
      icon: Cpu,
      desc: "Integrating intelligent orchestration within traditional web protocols to solve real human problems.",
      gradient: 'from-purple-500/20 to-pink-500/20',
      spotlight: 'rgba(139, 92, 246, 0.1)',
    },
    {
      title: "Product Builder",
      icon: Sparkles,
      desc: "Code is just a tool; I focus on delivering impact through lean development and rapid cycles.",
      gradient: 'from-amber-500/20 to-orange-500/20',
      spotlight: 'rgba(245, 158, 11, 0.1)',
    }
  ];

  return (
    <div id="about">
      <SectionHeading 
        title="About Me"
        number="Who I Am"
        subtitle="I enjoy building things that live on the internet products that are clean, useful, and feel good to use. I love solving problems, improving systems, and turning ideas into experiences people actually enjoy."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, type: 'spring', stiffness: 100 }}
          >
            <SpotlightCard tilt tiltAmount={2} className="h-full" spotlightColor={pillar.spotlight}>
              <div className="p-7 group">
                <motion.div
                  className={`mb-5 p-3 rounded-xl bg-gradient-to-br ${pillar.gradient} w-fit`}
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <pillar.icon size={22} className="text-accent" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2 hover-gradient-text">{pillar.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SpotlightCard className="overflow-visible" spotlightColor="rgba(34, 211, 238, 0.06)">
          <div className="p-7 flex flex-col md:flex-row gap-6 items-start md:items-center relative">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-3 h-3 rounded-full bg-accent timeline-dot" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent/30 animate-ping" />
            </div>
            <motion.div 
              className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shrink-0"
              whileHover={{ rotate: -10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <GraduationCap size={22} className="text-accent-cyan" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">Lovely Professional University</h3>
              <p className="text-muted text-sm">B.Tech in Computer Science & Engineering</p>
            </div>
            <span className="text-sm text-muted font-mono whitespace-nowrap px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
              Aug 2022 – 2026
            </span>
          </div>
        </SpotlightCard>
      </motion.div>
    </div>
  );
};
