import { motion } from 'motion/react';
import { Container, SectionHeading, Badge } from '../ui/Shared';

export const Skills = () => {
  const skillGroups = [
    {
      label: "Languages",
      skills: ["JavaScript (ES6+)", "Python", "C++", "Java", "SQL"]
    },
    {
      label: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      label: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "Socket.io"]
    },
    {
      label: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "REST APIs"]
    },
    {
      label: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "AWS (EC2/S3)", "Postman", "Linux"]
    }
  ];

  return (
    <div id="skills" className="space-y-24">
      <SectionHeading 
        title="Stack"
        number="[ TECH_INVENTORY ]"
        subtitle="A distilled ecosystem for rapid product development and systems architecture."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="space-y-8"
          >
            <h3 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] pb-4 border-b border-white/5">{group.label}</h3>
            <div className="grid grid-cols-1 gap-4">
               {group.skills.map((skill) => (
                <div key={skill} className="flex items-center justify-between group">
                  <span className="text-2xl font-black text-white/50 group-hover:text-white group-hover:text-glow transition-all cursor-default">{skill}</span>
                  <div className="h-px flex-grow bg-white/5 mx-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[10px] font-mono text-white/5 group-hover:text-accent transition-colors tracking-tighter">v.STABLE</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
