import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from '../ui/Shared';
import { useRef, type MouseEvent as ReactMouseEvent } from 'react';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 80, damping: 35 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 80, damping: 35 });

  const handleMouse = (e: ReactMouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => { x.set(0); y.set(0); };
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, type: 'spring', stiffness: 80 }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      <div className={`relative card-gradient-border shimmer-border overflow-hidden flex flex-col ${
        isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}>
        {/* Image */}
        <div className="w-full md:w-[45%] relative overflow-hidden group">
          <div className="aspect-[16/10] md:aspect-auto md:absolute md:inset-0">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 ${
              isReversed
                ? 'bg-gradient-to-l from-background/90 via-background/30 to-transparent'
                : 'bg-gradient-to-r from-background/90 via-background/30 to-transparent'
            } md:block hidden`} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent md:hidden" />
          </div>
          
          {/* Floating project number */}
          <motion.div 
            className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <span className="text-xs font-mono text-accent font-bold">0{index + 1}</span>
          </motion.div>

          {project.link && (
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 p-2.5 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>

        {/* Content */}
        <div className="w-full md:w-[55%] p-7 md:p-9 flex flex-col justify-center">
          <div className="mb-4">
            <motion.p 
              className="text-xs text-accent font-medium mb-2 tracking-wide"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {project.tagline}
            </motion.p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 hover-gradient-text">{project.title}</h3>
            <p className="text-muted text-sm leading-relaxed max-w-lg">{project.description}</p>
          </div>

          {/* Tech Stack — wave glow on hover */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((tech: string, techIdx: number) => (
              <motion.span 
                key={tech} 
                className="pill-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + techIdx * 0.06, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5">
            {project.features.map((feature: any) => (
              <div key={feature.label} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse-glow" />
                <span className="text-xs text-muted">{feature.value}</span>
              </div>
            ))}
          </div>

          {/* Engineering Note */}
          <p className="text-xs text-muted/70 italic leading-relaxed mb-5 max-w-lg border-l-2 border-accent/20 pl-3">
            "{project.engineering}"
          </p>

          {/* CTA */}
          {project.link && (
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-cyan transition-colors duration-200 w-fit group"
              whileHover={{ x: 5 }}
            >
              Live Demo <ExternalLink size={14} className="group-hover:rotate-12 transition-transform" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "AI Resume Builder",
      tagline: "Next-Gen AI Career Platform",
      description: "An intelligent resume optimization platform powered by AI that helps users create ATS-friendly resumes, generate professional summaries, improve project descriptions, and receive personalized career suggestions in real time.",
      engineering: "Integrated OpenAI API with a scalable Django REST backend to generate professional resume content, optimize ATS compatibility, and deliver real-time AI-powered suggestions through a responsive React interface.",
      stack: ["React", "Django REST", "OpenAI API", "JWT Auth", "Tailwind CSS", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      link: "https://ai-resume-builder-liard-ten-30.vercel.app/",
      features: [
        { label: "Core", value: "AI Resume Generation" },
        { label: "Analytics", value: "ATS Score & Improvement" },
        { label: "Smart", value: "Career Suggestions" }
      ]
    },
    {
      title: "Peer Learning Platform",
      tagline: "Collaborative Education Dashboard",
      description: "A high-performance education platform featuring real-time peer lobbies, performance heatmaps, and global leaderboards. Architected for deep collaboration with integrated streak systems and modular theory tracking.",
      engineering: "Implemented an event-driven architecture using Socket.io to synchronize active lobby states across thousands of concurrent nodes.",
      stack: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      link: "https://peerlearning.ruppykhata.in/",
      features: [
        { label: "Core", value: "Active Lobbies" },
        { label: "Analytics", value: "Performance Heatmap" },
        { label: "Social", value: "Leaderboard Sync" }
      ]
    },
    {
      title: "DailyCart",
      tagline: "Full-Stack E-Commerce Platform",
      description: "A full-featured e-commerce platform with a custom admin dashboard for inventory and order management. Focuses on secure session handling and real-time order tracking through a normalized data layer.",
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
        title="Featured Projects"
        number="Work"
        subtitle="Selected projects showcasing full-stack development and AI integration."
      />

      <div className="space-y-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
};
