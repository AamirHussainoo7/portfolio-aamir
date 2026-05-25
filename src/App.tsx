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

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}

      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 md:px-10 pt-8 pb-24 overflow-hidden">
        <Hero />
        
        <div className="space-y-28">
          <section>
            <About />
          </section>

          <section>
            <Skills />
          </section>

          <section>
            <Projects />
          </section>

          <section>
            <Credentials />
          </section>

          <section>
            <Experience />
          </section>

          <section>
            <EngineeringMindset />
          </section>

          <section>
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
