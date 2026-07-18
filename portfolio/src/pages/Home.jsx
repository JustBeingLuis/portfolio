import { useState, useEffect, useCallback } from "react";
import { BootSequence } from "@/components/BootSequence";
import { TerminalShell } from "@/components/TerminalShell";
import { Terminal } from "@/components/Terminal";

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
    <div className="h-screen w-full bg-background text-foreground flex items-center justify-center overflow-hidden p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Unified Terminal Shell replaces all vertical sections */}
      <TerminalShell onOpenCommandPalette={() => setIsTerminalOpen(true)} />

      {/* Terminal Command Palette */}
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
};

export default Home;
