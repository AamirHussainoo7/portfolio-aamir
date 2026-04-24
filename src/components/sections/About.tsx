import { motion } from 'motion/react';
import { SectionHeading, Card } from '../ui/Shared';
import { Terminal, Cpu, Sparkles } from 'lucide-react';

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
        title="Identity"
        number="[ THE_BUILDER_PROFILE ]"
        subtitle="I'm a B.Tech Computer Science student at Lovely Professional University, obsessed with how software survives at scale."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="h-full group">
              <div className="mb-8 p-4 rounded-2xl bg-white/[0.03] w-fit group-hover:bg-blue-600 transition-colors">
                <pillar.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {pillar.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="card-creative relative overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 border-r border-white/5 pr-12">
               <span className="text-[10px] font-mono text-accent uppercase tracking-widest block mb-4">Current_Track</span>
               <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight">Lovely Professional University</h3>
            </div>
            <div className="md:col-span-8 flex flex-col md:flex-row justify-between gap-8 md:items-center">
               <div className="space-y-1">
                  <p className="text-xl font-light text-white/80">B.Tech in Computer Science & Engineering</p>
                  <p className="text-sm font-mono text-white/30 uppercase tracking-widest whitespace-nowrap">Aug 2022 – Present</p>
               </div>
               <div className="text-right">
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] mb-2">Academic_Performance</p>
                  <p className="text-4xl font-black text-glow">7.55 <span className="text-sm font-light text-white/20">CGPA</span></p>
               </div>
            </div>
        </div>
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
           <Terminal size={120} />
        </div>
      </motion.div>
    </div>
  );
};
