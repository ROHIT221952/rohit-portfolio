import React, { useState } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Workflow } from './components/Workflow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingDock } from './components/FloatingDock';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#030610] text-[#F6F8FF] overflow-x-hidden selection:bg-primary-blue/30 selection:text-white">
      {/* Ambient Cosmic Background */}
      <CosmicBackground />

      {/* Sticky Top Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero onOpenResume={handleOpenResume} />
        <TechMarquee />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Workflow />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Floating Quick Action Hub (WhatsApp, Quick Email, Top Scroll) */}
      <FloatingDock onOpenResume={handleOpenResume} />

      {/* Interactive In-Browser Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
};

export default App;
