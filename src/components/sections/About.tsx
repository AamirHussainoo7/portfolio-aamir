import { motion } from 'motion/react';
import { SectionHeading, Card } from '../ui/Shared';
import { Terminal, Cpu, Sparkles, GraduationCap } from 'lucide-react';

export const About = () => {
  const pillars = [
    {
      title: "Systems Thinker",
      icon: Terminal,
      desc: "I approach problems through the lens of architectural resilience and long-term scalability."
    },
    {
      title: "AI Specialist",
      icon: Cpu,
      desc: "Integrating intelligent orchestration within traditional web protocols to solve real human problems."
    },
    {
      title: "Product Builder",
      icon: Sparkles,
      desc: "Code is just a tool; I focus on delivering impact through lean development and rapid cycles."
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="h-full group p-7">
              <div className="mb-5 p-3 rounded-xl bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors duration-300">
                <pillar.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-glass-static p-7 flex flex-col md:flex-row gap-6 items-start md:items-center"
      >
        <div className="p-3 rounded-xl bg-accent/10 shrink-0">
          <GraduationCap size={22} className="text-accent" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">Lovely Professional University</h3>
          <p className="text-muted text-sm">B.Tech in Computer Science & Engineering</p>
        </div>
        <span className="text-sm text-muted font-mono whitespace-nowrap">Aug 2022 – 2026</span>
      </motion.div>
    </div>
  );
};
