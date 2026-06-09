import { useState, useEffect, useCallback } from "react";
import { MeshBackground } from "@/components/MeshBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Terminal } from "@/components/Terminal";
import { TerminalButton } from "@/components/TerminalButton";
import { BootSequence } from "@/components/BootSequence";

/**
 * Home — Main page layout.
 *
 * Manages:
 * - Boot sequence (shown on first visit of a session)
 * - Terminal command palette (Ctrl+K global shortcut)
 * - MeshBackground (CSS gradient + grid overlay)
 * - All content sections stacked vertically
 *   (individual sections handle their own bento grid layouts)
 */
export const Home = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Check if already booted this session
  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem("portfolio-booted");
    if (alreadyBooted) {
      setIsBooted(true);
    }
  }, []);

  const handleBootComplete = useCallback(() => {
    setIsBooted(true);
  }, []);

  // Global keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Show boot sequence if not yet booted
  if (!isBooted) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Effects */}


      {/* Navbar */}
      <Navbar onTerminalOpen={() => setIsTerminalOpen(true)} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Terminal Command Palette */}
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Floating terminal button */}
      <TerminalButton onClick={() => setIsTerminalOpen(true)} />
    </div>
  );
};
