import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-5xl mx-auto text-center z-10 relative">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in block">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 block">
              Luis{" "}
            </span>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-2 block">
              Toscano-Palomino
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3">
            I’m a computer science student passionate about web development and
            applied research. I build modern interfaces with React, Tailwind
            CSS, and SQL, and apply Python, TensorFlow, PyTorch, and MATLAB in
            AI and data-driven research projects.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8  transform -translate-x-0.5 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="size-5 text-primary" />
      </div>
    </section>
  );
};
