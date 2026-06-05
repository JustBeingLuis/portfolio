import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export const Navbar = () => {
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
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-border"
          : "py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          className="text-lg font-bold text-foreground relative z-50 tracking-tight"
          href="#hero"
        >
          <span className="hidden sm:inline">Luis Toscano-Palomino</span>
          <span className="sm:hidden">Luis T.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg",
                activeSection === item.href
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
              )}
            >
              {t(`navbar.${item.key}`)}
              {activeSection === item.href && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </a>
          ))}
          <div className="ml-2 pl-2 border-l border-border flex items-center gap-1">
            <LanguageSelector />
            <ThemeToggle />
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
          </div>
        </div>
      </div>
    </nav>
  );
};
