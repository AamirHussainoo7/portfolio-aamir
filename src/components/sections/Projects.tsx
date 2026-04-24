import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Layers, Cpu } from 'lucide-react';
import { Container, SectionHeading, Card, Badge } from '../ui/Shared';

export const Projects = () => {
  const projects = [
    {
      title: "Peer Learning Platform",
      tagline: "Next-Gen Collaborative Dashboard",
      description: "A high-performance education node featuring real-time peer lobbies, performance heatmaps, and global leaderboards. Architected for deep collaboration with integrated streak systems and modular theory tracking.",
      problem: "Fragmented learning experiences lack the social drive and real-time feedback of traditional classrooms.",
      solution: "Engineered a centralized dashboard with persistent performance tracking, live lobby management, and automated leaderboard sync.",
      engineering: "Implemented an event-driven architecture using Socket.io to synchronize active lobby states across thousands of concurrent nodes.",
      stack: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      link: "https://quiz-six-swart-50.vercel.app/",
      features: [
        { label: "Core_Module", value: "Active Lobbies" },
        { label: "Analytics", value: "Performance Heatmap" },
        { label: "Engagement", value: "Leaderboard Sync" }
      ]
    },
    {
      title: "DailyCart",
      tagline: "E-Commerce Core & Admin",
      description: "A full-featured e-commerce platform with a custom admin dashboard for inventory and order management. Focuses on secure session handling and real-time order tracking through a normalized data layer.",
      problem: "Manual operational efforts in inventory management lead to inventory drift and order delays.",
      solution: "Architected a scalable REST API with JWT-based security and a centralized admin control panel.",
      engineering: "Reduced manual operational overhead by implementing normalized MongoDB schemas and automated order state management.",
      stack: ["React", "Node.js", "Express", "MongoDB", "bcrypt", "REST APIs"],
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      link: "https://mern-frontend-hbuu.vercel.app/",
      features: [
        { label: "Security", value: "JWT & bcrypt" },
        { label: "Dashboard", value: "Real-time Tracking" },
        { label: "Interface", value: "Responsive UI" }
      ]
    }
  ];

  return (
    <div id="projects">
      <SectionHeading 
        title="Works"
        number="[ SELECTED_SYSTEMS ]"
        subtitle="Exploring the intersection of scalable architecture and intelligent software."
      />

      <div className="grid grid-cols-1 gap-32">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="group"
          >
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="w-full md:w-1/2 aspect-[4/3] bg-white/[0.03] border border-white/5 rounded-[3rem] overflow-hidden relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
                )}
                
                <div className="absolute inset-0 flex items-center justify-center p-12 mix-blend-overlay">
                   <h3 className="text-white/10 text-[10vw] font-black pointer-events-none select-none uppercase tracking-tighter">SYST_{i+1}</h3>
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-12 right-12 z-20 p-4 bg-white text-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 hover:rotate-12"
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
                <div className="absolute bottom-12 left-12">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/5 rounded-full text-[10px] font-mono text-white/60 uppercase tracking-widest">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-8 pt-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-5xl font-black mb-4 group-hover:text-glow transition-all">{project.title}</h3>
                    <p className="text-white/40 font-mono text-xs uppercase tracking-[0.3em]">{project.tagline}</p>
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                      Launch System <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="space-y-6 pt-8 border-t border-white/5">
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {project.features.map(feature => (
                      <div key={feature.label} className="space-y-1">
                        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{feature.label}</p>
                        <p className="text-xs font-bold uppercase tracking-widest">{feature.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Engineering Breakthrough</p>
                    <p className="text-lg italic text-white/80">"{project.engineering}"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
