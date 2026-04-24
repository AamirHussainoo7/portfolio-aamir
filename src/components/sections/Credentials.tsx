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
    <div id="credentials" className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Achievements */}
        <div className="space-y-12">
          <SectionHeading 
            title="Success"
            number="[ MILESTONES ]"
            subtitle="Quantitative proof of problem-solving capabilities."
          />
          <div className="space-y-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="group hover:border-accent/40 bg-surface/30">
                  <div className="flex gap-6 items-start">
                    <Award className="text-accent shrink-0 mt-1" size={24} />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-black uppercase tracking-tighter">{ach.title}</h4>
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{ach.org}</span>
                      </div>
                      <p className="text-muted-foreground font-light text-sm">{ach.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-12">
          <SectionHeading 
            title="Verified"
            number="[ VALIDATIONS ]"
            subtitle="Academic and industry-standard competency triggers."
          />
          <div className="grid grid-cols-1 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
            {certifications.map((cert, i) => (
              <div key={cert.name} className="bg-black p-8 group hover:bg-white/[0.02] transition-all flex justify-between items-center gap-8">
                <div className="flex gap-4 items-center">
                  <CheckCircle className="text-white/20 group-hover:text-accent transition-colors" size={18} />
                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-white/90">{cert.name}</h4>
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{cert.org}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
