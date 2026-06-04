import {
  Briefcase,
  Code,
  User,
  Download,
  MapPin,
  Calendar,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const competencies = [
  "Problem Solving",
  "Research",
  "Leadership",
  "Team Collaboration",
  "Critical Thinking",
  "Innovation",
];

export const AboutMe = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div
        ref={sectionRef}
        className={cn(
          "container mx-auto max-w-5xl transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Discover my journey, passion, and expertise in technology
          </p>
        </div>

        {/* Main Description - Full Width */}
        <div className="card-surface p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <User className="size-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-1">
                Computer Science Professional
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                Universidad Industrial de Santander
              </p>

              <p className="text-muted leading-relaxed mb-6 max-w-3xl">
                Computer Science professional with a strong focus on web
                development and applied research. Currently a candidate for a
                Master's degree in Computer Science. I create modern user
                interfaces using React, Tailwind CSS, SQL, and apply Python,
                TensorFlow, PyTorch, and MATLAB in AI and data-driven research
                projects.
              </p>

              <div className="flex flex-wrap gap-6 mb-6 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" />
                  <span>Bucaramanga, Colombia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-primary" />
                  <span>Available for work</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="accent-button inline-flex items-center justify-center gap-2 text-sm"
                >
                  Contact Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://drive.google.com/file/d/137OgM-7sPz8rndY-7iry-zW74Xpc399M/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 font-medium text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>

              {/* 2x2 Grid for MSC, BSC, Core Competencies and Focus Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-border">
                {/* Cell 1: M.Sc. Info */}
                <div className="p-5 rounded-xl border border-border/40 bg-background/20 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <GraduationCap className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        M.Sc. Candidate in Computer Science
                      </h4>
                      <p className="text-xs text-muted mt-0.5">
                        Universidad Industrial de Santander
                      </p>
                      <span className="inline-block mt-2.5 text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        2026 - Present
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cell 2: B.Sc. Info */}
                <div className="p-5 rounded-xl border border-border/40 bg-background/20 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Code className="size-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        B.Sc. in Computer Science
                      </h4>
                      <p className="text-xs text-muted mt-0.5">
                        Universidad Industrial de Santander
                      </p>
                      <span className="inline-block mt-2.5 text-[11px] font-mono px-2 py-0.5 rounded bg-muted-foreground/10 text-muted border border-border/50">
                        2022 - 2026
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cell 3: Core Competencies */}
                <div className="p-5 rounded-xl border border-border/40 bg-background/20 hover:border-primary/30 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {competencies.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs text-muted border border-border/50 rounded-md bg-background/30 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cell 4: Experience / Focus Areas */}
                <div className="p-5 rounded-xl border border-border/40 bg-background/20 hover:border-primary/30 transition-all duration-300">
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                    Focus Areas & Roles
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-1 rounded bg-primary/10 text-primary shrink-0">
                        <FlaskConical className="size-3.5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-foreground">Applied Researcher</p>
                        <p className="text-[10px] text-muted font-mono">AI & ML • Optimization</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-1 rounded bg-primary/10 text-primary shrink-0">
                        <Briefcase className="size-3.5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-foreground">Full Stack Developer</p>
                        <p className="text-[10px] text-muted font-mono">React • Python • Tailwind</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
