import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container max-w-5xl mx-auto text-center z-10 relative">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in block mb-2 sm:mb-0">
              Hi, I'm{" "}
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 block mb-2 sm:mb-0">
              Luis{" "}
            </span>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-2 block">
              Toscano-Palomino
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed px-2 sm:px-0">
            Combining modern web development with applied research.
          </p>

          <div className="pt-4 sm:pt-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button inline-block px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
          Scroll
        </span>
        <ArrowDown className="size-4 sm:size-5 text-primary" />
      </div>
    </section>
  );
};
