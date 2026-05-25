import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[50] px-4 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className={`max-w-6xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border border-white/[0.06] shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-2 h-2 rounded-full bg-accent glow-dot" />
            <span className="font-bold tracking-tight text-lg text-foreground group-hover:text-accent transition-colors duration-200">Aamir.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://drive.google.com/file/d/13wOB9JZTNzbzcf1lBH9O53ipP-fDbil_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-primary text-xs"
            >
              Resume
            </a>
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-[49] px-4"
          >
            <div className="bg-surface/95 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 shadow-2xl shadow-black/40">
              <div className="flex flex-col gap-4">
                {links.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base text-muted hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href="https://drive.google.com/file/d/13wOB9JZTNzbzcf1lBH9O53ipP-fDbil_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center text-sm mt-2"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-lg tracking-tight mb-1">Aamir Hussain</p>
          <p className="text-sm text-muted">Full Stack Developer & AI Builder</p>
        </div>
        
        <div className="flex gap-8">
          <a href="https://github.com/AamirHussainoo7" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/md-aamir-hussain07/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
            LinkedIn
          </a>
          <a href="mailto:aamithussain.786@gmail.com" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
            Email
          </a>
        </div>
        
        <p className="text-xs text-muted/60">© 2026 Aamir Hussain</p>
      </div>
    </footer>
  );
};
