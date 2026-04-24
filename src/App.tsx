/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar, Footer } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Credentials } from './components/sections/Credentials';
import { EngineeringMindset } from './components/sections/EngineeringMindset';
import { Contact } from './components/sections/Contact';
import { SplashLoader } from './components/ui/SplashLoader';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <AnimatePresence>
        {loading && <SplashLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="atmos-bg min-h-screen">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-32 overflow-hidden">
          <Hero />
          
          <div className="space-y-48">
            <section id="about">
              <About />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="credentials">
              <Credentials />
            </section>

            <section id="journey">
              <Experience />
            </section>

            <section id="mindset">
              <EngineeringMindset />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </div>
        </main>

        <Footer />
      </div>
      
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
