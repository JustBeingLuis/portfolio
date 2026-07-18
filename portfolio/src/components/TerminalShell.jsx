import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import CommandLine from './CommandLine';
import StatusBar from './StatusBar';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './projects';
import Contact from './Contact';

export const TerminalShell = ({ onOpenCommandPalette }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Mapping of sections to their terminal commands
  const sectionCommands = {
    hero: 'cd ~',
    about: 'cd about && cat profile.md',
    skills: 'sys-status --modules',
    projects: 'cd ~/projects && ls -la',
    contact: 'curl --socials'
  };

  const handleSectionChange = (sectionId) => {
    if (sectionId === activeSection) return;
    
    // Start typing the new command
    setCurrentCommand(sectionCommands[sectionId] || `cd ${sectionId}`);
    setIsTyping(true);
    setActiveSection(sectionId);
  };

  const handleTypingComplete = React.useCallback(() => {
    setIsTyping(false);
  }, []);

  return (
    <div className="terminal-shell">
      {/* Title Bar */}
      <div className="terminal-titlebar">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-sm font-mono text-[hsl(var(--muted-foreground))] flex-1 text-center font-semibold">
          luism@portfolio: ~
        </div>
      </div>

      {/* Tabs (Navbar refactored) */}
      <div className="terminal-tabs">
        <Navbar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
      </div>

      {/* Terminal Body */}
      <div className="terminal-body relative">
        <CommandLine 
          command={currentCommand} 
          onTypingComplete={handleTypingComplete} 
        />
        
        <div className="flex-1 w-full mt-4">
          <AnimatePresence mode="wait">
            {!isTyping && activeSection === 'hero' && (
              <motion.div
                key="hero"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <HeroSection />
              </motion.div>
            )}
            {!isTyping && activeSection === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <AboutMe />
              </motion.div>
            )}
            {!isTyping && activeSection === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Skills />
              </motion.div>
            )}
            {!isTyping && activeSection === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Projects />
              </motion.div>
            )}
            {!isTyping && activeSection === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar 
        activeSection={activeSection} 
        onOpenCommandPalette={onOpenCommandPalette} 
      />
    </div>
  );
};
