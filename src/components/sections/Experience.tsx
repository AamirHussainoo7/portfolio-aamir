import { motion } from 'motion/react';
import { SectionHeading } from '../ui/Shared';

export const Experience = () => {
  const items = [
    {
      role: "Technical Consultant",
      company: "Consultadd Inc.",
      period: "Nov 2025 – Feb 2026",
      description: "Focused on technical solutioning and system optimization within a fast-paced environment.",
      achievements: [
        "Analyzed and translated client requirements into scalable backend-driven technical solutions aligned with product and business objectives.",
        "Tested and evaluated an in-house AI developer tool (Blackbox) end-to-end — identified defects, validated features, and improved system reliability.",
        "Collaborated with cross-functional engineering and product teams in Agile/Scrum sprints for issue resolution and debugging.",
        "Applied modular design and system analysis principles for optimized software engineering cycles."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Cipher School",
      period: "Jun 2024 – Jul 2024",
      description: "Intensive full-stack development residency focused on the MERN ecosystem and clean backend architecture.",
      achievements: [
        "Completed an intensive MERN stack program, building and deploying multiple full-stack applications with end-to-end functionality.",
        "Designed and implemented RESTful APIs using Node.js and Express.js, improving system modularity and communication efficiency.",
        "Integrated JWT-based authentication and bcrypt password hashing to secure user data and manage robust session flows.",
        "Optimized backend logic and database queries, significantly improving overall development and runtime efficiency."
      ]
    }
  ];

  return (
    <div id="experience" className="relative pb-24">
      <SectionHeading 
        title="Journey"
        number="[ CAREER_ARCHITECTURE ]"
        subtitle="A chronological trace of technical contributions and system migrations."
      />

      <div className="space-y-32">
        {items.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative pl-16 md:pl-24"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-[-128px] w-px bg-white/10 group-last:bottom-0">
               <motion.div 
                 className="absolute top-0 left-0 w-px bg-blue-500 origin-top"
                 initial={{ scaleY: 0 }}
                 whileInView={{ scaleY: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: i * 0.2 }}
               />
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-white group-hover:bg-blue-500 transition-all group-hover:scale-150 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] mb-4 block">
                  {item.period}
                </span>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 group-hover:text-glow transition-all">
                  {item.company}
                </h3>
                <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs">
                  {item.role}
                </p>
              </div>

              <div className="lg:col-span-7 pt-4">
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  {item.description}
                </p>
                <ul className="space-y-4">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-4 text-sm text-white/70 font-light leading-relaxed">
                      <span className="text-blue-500 font-mono mt-1">/</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
