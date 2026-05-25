import { motion } from 'motion/react';
import { SectionHeading, Card } from '../ui/Shared';
import { Award, CheckCircle } from 'lucide-react';

export const Credentials = () => {
  const achievements = [
    {
      title: "200+ DSA Solutions",
      org: "LeetCode & GFG",
      desc: "Solved complex data structure problems, building deep analytical intuition."
    },
    {
      title: "University S1 Merit",
      org: "LPU Academic",
      desc: "Recognized among top-performing students based on exceptional performance."
    },
    {
      title: "Top 5 Hackathon Team",
      org: "Hack-a-Throne 1.0",
      desc: "Architected a technical solution under high-pressure competitive constraints."
    }
  ];

  const certifications = [
    { name: "IBM DevOps and Software Engineering", org: "Coursera", date: "Oct 2024" },
    { name: "Cloud Computing", org: "NPTEL", date: "Nov 2024" },
    { name: "Data Structures & Algorithms in C/C++", org: "Udemy", date: "Nov 2023" }
  ];

  return (
    <div id="credentials">
      <SectionHeading 
        title="Credentials"
        number="Achievements & Certifications"
        subtitle="Milestones and validated competencies."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Achievements */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-accent tracking-wide mb-4">Achievements</h3>
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card className="group p-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                    <Award className="text-accent" size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h4 className="text-base font-bold">{ach.title}</h4>
                      <span className="text-xs text-muted font-medium">{ach.org}</span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{ach.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-accent tracking-wide mb-4">Certifications</h3>
          <div className="card-glass-static overflow-hidden divide-y divide-white/[0.04]">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 hover:bg-white/[0.02] transition-colors flex justify-between items-center gap-4"
              >
                <div className="flex gap-3 items-center min-w-0">
                  <CheckCircle className="text-accent/60 shrink-0" size={16} />
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold truncate">{cert.name}</h4>
                    <p className="text-xs text-muted">{cert.org}</p>
                  </div>
                </div>
                <span className="text-xs text-muted font-mono whitespace-nowrap shrink-0">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
