import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 border-t border-border bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name */}
          <div className="text-sm font-semibold text-foreground">
            Luis Toscano-Palomino
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JustBeingLuis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/luistoscanop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="size-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted">
            &copy; {currentYear} Luis Toscano-Palomino. All rights reserved.
          </p>
          <p className="text-xs text-muted/60 mt-1">
            Built with React, Tailwind CSS & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};
