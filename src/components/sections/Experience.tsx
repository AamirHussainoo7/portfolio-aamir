import { motion, useScroll, useTransform } from 'motion/react';
import { SectionHeading } from '../ui/Shared';
import { Briefcase } from 'lucide-react';
import { useRef } from 'react';

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div id="experience" ref={containerRef}>
      <SectionHeading 
        title="Experience"
        number="Journey"
        subtitle="Professional experience and technical contributions."
      />

      <div className="space-y-6">
        {items.map((item, i) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-gradient-border p-7 md:p-9 group"
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              {/* Left: Meta */}
              <div className="md:w-[280px] shrink-0">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div 
                    className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Briefcase size={16} className="text-accent" />
                  </motion.div>
                  <span className="text-xs text-muted font-mono">{item.period}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">{item.company}</h3>
                <p className="text-sm font-medium text-accent/80">{item.role}</p>
              </div>

              {/* Right: Content */}
              <div className="flex-1 border-l border-white/[0.06] pl-6 md:pl-10">
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex gap-3 text-sm text-foreground/70 leading-relaxed"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.08 }}
                    >
                      <span className="text-accent mt-1 shrink-0">›</span>
                      {achievement}
                    </motion.li>
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
