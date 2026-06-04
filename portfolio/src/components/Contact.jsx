import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const EMAIL = "luismariotoscanopalomino@gmail.com";

export const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div
        ref={sectionRef}
        className={cn(
          "container mx-auto max-w-4xl transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted max-w-xl mx-auto">
            Have a project in mind or just want to say hello? I'm always open to
            discussing new opportunities and ideas.
          </p>
        </div>

        {/* Email CTA - Hero card */}
        <div className="card-surface p-8 sm:p-10 mb-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="size-7 text-primary" />
          </div>
          <p className="text-sm text-muted uppercase tracking-wider font-semibold mb-3">
            Reach me at
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground hover:text-primary transition-colors duration-300 block mb-6 break-all"
          >
            {EMAIL}
          </a>
          <div className="flex items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="accent-button inline-flex items-center gap-2 text-sm"
            >
              Send an Email
              <ArrowUpRight className="size-4" />
            </a>
            <button
              onClick={copyEmail}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-sm font-semibold transition-all duration-300",
                copied
                  ? "border-emerald-500/40 text-emerald-500 bg-emerald-500/5"
                  : "border-border text-foreground hover:border-primary hover:text-primary"
              )}
            >
              {copied ? (
                <>
                  <Check className="size-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social links row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/luistoscanop"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-surface p-5 hover:border-primary/40 hover:-translate-y-1 text-center"
          >
            <FaLinkedinIn className="size-6 text-muted group-hover:text-primary transition-colors duration-300 mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground block">LinkedIn</span>
            <span className="text-xs text-muted mt-1 block group-hover:text-primary transition-colors duration-300">
              luistoscanop
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/JustBeingLuis"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-surface p-5 hover:border-primary/40 hover:-translate-y-1 text-center"
          >
            <FaGithub className="size-6 text-muted group-hover:text-primary transition-colors duration-300 mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground block">GitHub</span>
            <span className="text-xs text-muted mt-1 block group-hover:text-primary transition-colors duration-300">
              JustBeingLuis
            </span>
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=AQ_grM8AAAAJ&hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="group card-surface p-5 hover:border-primary/40 hover:-translate-y-1 text-center"
          >
            <GoogleScholarIcon className="size-6 text-muted group-hover:text-primary transition-colors duration-300 mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground block">Scholar</span>
            <span className="text-xs text-muted mt-1 block group-hover:text-primary transition-colors duration-300">
              Publications
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+573150571959"
            className="group card-surface p-5 hover:border-primary/40 hover:-translate-y-1 text-center"
          >
            <Phone className="size-6 text-muted group-hover:text-primary transition-colors duration-300 mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground block">Phone</span>
            <span className="text-xs text-muted mt-1 block group-hover:text-primary transition-colors duration-300">
              +57 315 0571959
            </span>
          </a>
        </div>

        {/* Location bar */}
        <div className="card-surface px-6 py-4 flex items-center justify-center gap-3">
          <MapPin className="size-4 text-primary shrink-0" />
          <span className="text-sm text-muted">
            Based in <span className="text-foreground font-medium">Bucaramanga, Colombia</span>
          </span>
          <span className="text-xs text-muted hidden sm:inline">
            &mdash; Open to remote opportunities worldwide
          </span>
        </div>
      </div>
    </section>
  );
};
