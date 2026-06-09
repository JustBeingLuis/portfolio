import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

/**
 * Footer — Minimal terminal-style footer.
 *
 * Shows copyright, a "built with" note, and social links.
 * Styled like a terminal status bar with monospace font.
 */

const navLinks = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative py-8 px-4 border-t border-border/50"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Terminal-style name */}
          <div className="text-sm font-mono text-foreground flex items-center gap-1.5">
            <span className="text-primary">luis</span>
            <span className="text-muted">@</span>
            <span>portfolio</span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-xs text-muted hover:text-primary transition-colors duration-300 font-mono"
              >
                {t(`navbar.${link.key}`)}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JustBeingLuis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/luistoscanop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="size-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar — terminal style */}
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-xs font-mono text-muted">
            <span className="text-primary/60">$</span> echo "© {currentYear}{" "}
            Luis Toscano-Palomino. {t("footer.rights")}"
          </p>
          <p className="text-xs font-mono text-muted/40 mt-1">
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
