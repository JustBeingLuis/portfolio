import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";

const roles = [
  "Full Stack Developer",
  "Applied Researcher",
  "AI Enthusiast",
];

export const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        <div className="space-y-6 sm:space-y-8">
          {/* Status badge */}
          <div className="opacity-0 animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-muted border border-border rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Work
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="opacity-0 animate-fade-in block">
              Luis
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 block">
              Toscano-Palomino
            </span>
          </h1>

          {/* Typewriter subtitle */}
          <div className="h-8 sm:h-10 flex items-center justify-center opacity-0 animate-fade-in-delay-2">
            <span className="text-lg sm:text-xl md:text-2xl font-mono text-muted">
              {displayText}
            </span>
            <span className="w-0.5 h-6 sm:h-7 bg-primary ml-0.5 animate-blink" />
          </div>

          {/* CTA */}
          <div className="pt-4 sm:pt-6 opacity-0 animate-fade-in-delay-3">
            <a
              href="#projects"
              className="accent-button inline-block text-sm sm:text-base"
            >
              View My Work
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://github.com/JustBeingLuis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted hover:text-foreground border border-border hover:border-foreground/30 rounded-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/luistoscanop"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted hover:text-foreground border border-border hover:border-foreground/30 rounded-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="size-5" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=AQ_grM8AAAAJ&hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-muted hover:text-foreground border border-border hover:border-foreground/30 rounded-lg transition-all duration-300"
              aria-label="Google Scholar"
            >
              <GoogleScholarIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="size-4 text-muted" />
      </div>
    </section>
  );
};
