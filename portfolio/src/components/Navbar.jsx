import { cn } from "@/lib/utils";
import { Menu, X, TerminalSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";

/**
 * Navbar — Hyprland waybar-style minimal top bar.
 *
 * Desktop:
 *   Left:   "luis@portfolio ~$" terminal prompt
 *   Center: Section links as small text items
 *   Right:  Language, Theme, Terminal button
 *
 * Mobile:
 *   Logo + Language + Theme + Hamburger
 *   Full-screen overlay for nav links
 *
 * On scroll: gets a frosted glass background.
 * Active section highlighted with a primary dot indicator.
 */

const navItems = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export const Navbar = ({ onTerminalOpen }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2.5 bg-background/70 backdrop-blur-xl border-b border-border/50"
          : "py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo — terminal prompt style */}
        <a
          className="text-sm font-mono text-foreground relative z-50 tracking-tight flex items-center gap-1.5"
          href="#hero"
        >
          <span className="text-primary">luis</span>
          <span className="text-muted">@</span>
          <span className="hidden sm:inline text-foreground/80">portfolio</span>
          <span className="text-muted ml-1">~$</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={cn(
                "relative px-3 py-1.5 text-xs font-medium transition-colors duration-300 rounded-md",
                activeSection === item.href
                  ? "text-primary bg-primary/5"
                  : "text-muted hover:text-foreground"
              )}
            >
              {t(`navbar.${item.key}`)}
              {activeSection === item.href && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          <div className="ml-3 pl-3 border-l border-border/50 flex items-center gap-1">
            <LanguageSelector />
            <ThemeToggle />
            {/* Terminal button in navbar */}
            <button
              onClick={onTerminalOpen}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
              aria-label="Open command palette"
            >
              <TerminalSquare className="size-4 text-muted hover:text-primary transition-colors" />
            </button>
          </div>
        </div>

        {/* Mobile nav toggle */}
        <div className="md:hidden flex items-center gap-1 relative z-50">
          <LanguageSelector />
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground hover:text-primary rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-xl z-40",
            "flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-2 w-full max-w-xs px-4">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                className={cn(
                  "w-full text-center py-3 px-6 text-lg font-medium rounded-lg transition-all duration-300",
                  activeSection === item.href
                    ? "text-primary bg-primary/5"
                    : "text-muted hover:text-foreground hover:bg-card"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: isMenuOpen ? "translateY(0)" : "translateY(10px)",
                  opacity: isMenuOpen ? 1 : 0,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`navbar.${item.key}`)}
              </a>
            ))}

            {/* Terminal button in mobile menu */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => onTerminalOpen?.(), 200);
              }}
              className="w-full text-center py-3 px-6 text-lg font-medium rounded-lg text-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300 mt-2 flex items-center justify-center gap-2"
              style={{
                transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : "0ms",
                transform: isMenuOpen ? "translateY(0)" : "translateY(10px)",
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              <TerminalSquare className="size-5" />
              <span className="font-mono text-sm">Ctrl+K</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
