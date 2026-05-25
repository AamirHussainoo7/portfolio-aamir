import { motion } from 'motion/react';
import { SectionHeading } from '../ui/Shared';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Code2, Layout, Server, Database, Wrench, Sparkles } from 'lucide-react';

export const Skills = () => {
  const skillGroups = [
    {
      label: "Languages",
      icon: Code2,
      gradient: 'from-blue-500/20 to-indigo-500/20',
      spotlight: 'rgba(59, 130, 246, 0.1)',
      skills: ["JavaScript (ES6+)", "Python", "C++", "Java", "SQL"]
    },
    {
      label: "Frontend",
      icon: Layout,
      gradient: 'from-cyan-500/20 to-teal-500/20',
      spotlight: 'rgba(34, 211, 238, 0.1)',
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      label: "Backend",
      icon: Server,
      gradient: 'from-purple-500/20 to-violet-500/20',
      spotlight: 'rgba(139, 92, 246, 0.1)',
      skills: ["Node.js", "Express.js", "Django REST", "FastAPI", "Socket.io"]
    },
    {
      label: "Databases",
      icon: Database,
      gradient: 'from-emerald-500/20 to-green-500/20',
      spotlight: 'rgba(16, 185, 129, 0.1)',
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      label: "Tools & DevOps",
      icon: Wrench,
      gradient: 'from-orange-500/20 to-amber-500/20',
      spotlight: 'rgba(245, 158, 11, 0.1)',
      skills: ["Git", "GitHub", "Docker", "AWS (EC2/S3)", "Postman", "Linux"]
    },
    {
      label: "AI & APIs",
      icon: Sparkles,
      gradient: 'from-pink-500/20 to-rose-500/20',
      spotlight: 'rgba(236, 72, 153, 0.1)',
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
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.5,
              type: 'spring',
              stiffness: 120,
              damping: 14,
            }}
          >
            <SpotlightCard
              tilt
              tiltAmount={4}
              className="h-full"
              spotlightColor={group.spotlight}
            >
              <div className="p-6 group">
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    className={`p-2 rounded-lg bg-gradient-to-br ${group.gradient}`}
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <group.icon size={16} className="text-accent" />
                  </motion.div>
                  <h3 className="text-sm font-semibold tracking-wide">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      className="pill cursor-default"
                      initial={{ opacity: 0, scale: 0.7, y: 10 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.08 + si * 0.05,
                        type: 'spring',
                        stiffness: 200,
                        damping: 12,
                      }}
                      whileHover={{
                        scale: 1.12,
                        transition: { type: 'spring', stiffness: 400 },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
