import { motion } from 'motion/react';
import { SectionHeading } from '../ui/Shared';

export const EngineeringMindset = () => {
  const principles = [
    {
      title: "Think in Trade-offs",
      desc: "There is no 'best' tool, only the right tool for the specific constraints. I weigh latency vs. cost and consistency vs. availability in every design."
    },
    {
      title: "Performance is UX",
      desc: "A fast UI is a respectful UI. I obsess over bundle sizes, network round-trips, and rendering performance to ensure a seamless experience."
    },
    {
      title: "Problem > Code",
      desc: "I don't just write code; I solve business problems. If a feature can be achieved with a simple process change, I'll advocate for the process."
    },
    {
      title: "Build for Evolution",
      desc: "Code is temporary; architecture is permanent. I write modular, self-documenting systems that are easy to refactor, ensuring long-term maintainability."
    }
  ];

  return (
    <div id="mindset" className="relative">
      <SectionHeading 
        title="Mindset"
        number="[ PHILOSOPHY_MANIFESTO ]"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
        {principles.map((p, i) => (
          <div key={p.title} className="bg-black p-16 hover:bg-white/[0.02] transition-colors group relative overflow-hidden">
            <h4 className="text-[15vw] font-black text-white/[0.02] absolute bottom-[-5vw] right-[-2vw] pointer-events-none select-none group-hover:text-blue-500/5 transition-colors">0{i+1}</h4>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">{p.title}</h3>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
