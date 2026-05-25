import { motion } from 'motion/react';
import { SectionHeading } from '../ui/Shared';
import { Code2, Layout, Server, Database, Wrench, Sparkles } from 'lucide-react';

export const Skills = () => {
  const skillGroups = [
    {
      label: "Languages",
      icon: Code2,
      skills: ["JavaScript (ES6+)", "Python", "C++", "Java", "SQL"]
    },
    {
      label: "Frontend",
      icon: Layout,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      label: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "Django REST", "FastAPI", "Socket.io"]
    },
    {
      label: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      label: "Tools & DevOps",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "AWS (EC2/S3)", "Postman", "Linux"]
    },
    {
      label: "AI & APIs",
      icon: Sparkles,
      skills: ["OpenAI API", "REST APIs", "JWT Auth"]
    }
  ];

  return (
    <div id="skills">
      <SectionHeading
        title="Tech Stack"
        number="Skills"
        subtitle="A curated toolkit for building scalable full-stack applications and AI-powered systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="card-gradient-border p-6 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                <group.icon size={16} className="text-accent" />
              </div>
              <h3 className="text-sm font-semibold tracking-wide">{group.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="pill cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
