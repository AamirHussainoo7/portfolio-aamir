import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';

export const Contact = () => {
  const links = [
    {
      label: "Email",
      href: "mailto:aamithussain.786@gmail.com",
      icon: Mail,
      value: "aamithussain.786@gmail.com",
      color: "group-hover:bg-red-500/10 group-hover:border-red-500/20",
      iconColor: "group-hover:text-red-400"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-aamir-hussain07/",
      icon: Linkedin,
      value: "md-aamir-hussain07",
      color: "group-hover:bg-blue-500/10 group-hover:border-blue-500/20",
      iconColor: "group-hover:text-blue-400"
    },
    {
      label: "GitHub",
      href: "https://github.com/AamirHussainoo7",
      icon: Github,
      value: "AamirHussainoo7",
      color: "group-hover:bg-purple-500/10 group-hover:border-purple-500/20",
      iconColor: "group-hover:text-purple-400"
    }
  ];

  return (
    <div id="contact" className="py-16 relative">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none section-glow" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Send size={14} className="text-accent" />
          <span className="text-xs font-medium text-accent">Open to opportunities</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
          Let's work <span className="text-gradient-accent">together</span>
        </h2>
        <p className="text-muted text-base max-w-md mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto relative z-10">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.label !== "Email" ? "_blank" : undefined}
            rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className={`card-gradient-border group p-6 text-center cursor-pointer ${link.color}`}
          >
            <div className={`p-3 rounded-xl bg-accent/10 w-fit mx-auto mb-4 transition-colors duration-300 ${link.color}`}>
              <link.icon size={20} className={`text-accent transition-colors duration-300 ${link.iconColor}`} />
            </div>
            <h3 className="text-base font-semibold mb-1 group-hover:text-foreground transition-colors">{link.label}</h3>
            <p className="text-xs text-muted truncate">{link.value}</p>
            <ArrowUpRight 
              size={14} 
              className="mx-auto mt-3 text-muted/40 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" 
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
};
