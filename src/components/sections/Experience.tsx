import { motion, useScroll, useTransform } from 'motion/react';
import { SectionHeading } from '../ui/Shared';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Briefcase } from 'lucide-react';
import { useRef } from 'react';

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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

      <div className="relative">
        {/* Animated vertical timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-white/[0.04]">
          <motion.div
            className="w-full bg-gradient-to-b from-accent to-accent-cyan rounded-full"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-8 relative">
          {items.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 100 }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-[18px] md:left-[26px] top-9 z-10">
                <div className="w-4 h-4 rounded-full bg-accent border-4 border-background timeline-dot" />
              </div>

              <SpotlightCard tilt tiltAmount={2} spotlightColor="rgba(59, 130, 246, 0.06)">
                <div className="p-7 md:p-9 group">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Meta */}
                    <div className="md:w-[250px] shrink-0">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div 
                          className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
                          whileHover={{ rotate: 10, scale: 1.15 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Briefcase size={16} className="text-accent" />
                        </motion.div>
                        <span className="text-xs text-muted font-mono px-2 py-1 rounded-md bg-white/[0.04]">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight mb-1 hover-gradient-text">{item.company}</h3>
                      <p className="text-sm font-medium text-accent/80">{item.role}</p>
                    </div>

                    {/* Content */}
                    <div className="flex-1 border-l border-white/[0.06] pl-6 md:pl-10">
                      <p className="text-muted text-sm leading-relaxed mb-5">{item.description}</p>
                      <ul className="space-y-3">
                        {item.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex gap-3 text-sm text-foreground/70 leading-relaxed"
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1, type: 'spring', stiffness: 150 }}
                          >
                            <motion.span 
                              className="text-accent mt-1 shrink-0"
                              whileInView={{ scale: [0, 1.3, 1] }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + idx * 0.1 }}
                            >
                              ›
                            </motion.span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
