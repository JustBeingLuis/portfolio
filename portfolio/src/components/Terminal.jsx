import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Home, User, Wrench, FolderGit2, Mail,
  Sun, Moon, Globe, Terminal as TerminalIcon,
  Search, ArrowRight, HelpCircle, Info,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { cn } from "@/lib/utils";

/**
 * Terminal — A VS Code-style Command Palette for navigating the portfolio.
 *
 * Opened with Ctrl+K (or Cmd+K on Mac), or by clicking the TerminalButton.
 * Shows a list of actions with icons and descriptions — easy to browse.
 * User can type to filter, or use arrow keys + Enter to select.
 * NOT a raw CLI: it's a visual, approachable, beautiful search palette.
 *
 * Props:
 * @param {boolean} isOpen   — Whether the palette is visible
 * @param {function} onClose — Callback to close the palette
 */
export const Terminal = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Define all available commands with icon, label, description, and action
  const commands = [
    {
      id: "home",
      icon: Home,
      label: t("navbar.home"),
      description: t("terminal.homeDesc"),
      action: () => scrollToSection("hero"),
    },
    {
      id: "about",
      icon: User,
      label: t("navbar.about"),
      description: t("terminal.aboutDesc"),
      action: () => scrollToSection("about"),
    },
    {
      id: "skills",
      icon: Wrench,
      label: t("navbar.skills"),
      description: t("terminal.skillsDesc"),
      action: () => scrollToSection("skills"),
    },
    {
      id: "projects",
      icon: FolderGit2,
      label: t("navbar.projects"),
      description: t("terminal.projectsDesc"),
      action: () => scrollToSection("projects"),
    },
    {
      id: "contact",
      icon: Mail,
      label: t("navbar.contact"),
      description: t("terminal.contactDesc"),
      action: () => scrollToSection("contact"),
    },
    { id: "divider-1", divider: true },
    {
      id: "theme",
      icon: document.documentElement.classList.contains("dark") ? Sun : Moon,
      label: t("terminal.toggleTheme"),
      description: t("terminal.toggleThemeDesc"),
      action: () => {
        const isDark = document.documentElement.classList.contains("dark");
        if (isDark) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
      },
    },
    {
      id: "lang-en",
      icon: Globe,
      label: "English",
      description: t("terminal.switchLang"),
      action: () => i18n.changeLanguage("en"),
    },
    {
      id: "lang-es",
      icon: Globe,
      label: "Español",
      description: t("terminal.switchLang"),
      action: () => i18n.changeLanguage("es"),
    },
    {
      id: "lang-fr",
      icon: Globe,
      label: "Français",
      description: t("terminal.switchLang"),
      action: () => i18n.changeLanguage("fr"),
    },
    { id: "divider-2", divider: true },
    {
      id: "github",
      icon: FaGithub,
      label: "GitHub",
      description: t("terminal.openGithub"),
      action: () => window.open("https://github.com/JustBeingLuis", "_blank"),
    },
    {
      id: "linkedin",
      icon: FaLinkedinIn,
      label: "LinkedIn",
      description: t("terminal.openLinkedin"),
      action: () => window.open("https://www.linkedin.com/in/luistoscanop", "_blank"),
    },
  ];

  // Filter commands based on query (fuzzy-ish matching)
  const filteredCommands = commands.filter((cmd) => {
    if (cmd.divider) {
      return query === "";
    }
    const q = query.toLowerCase();
    return (
      cmd.label.toLowerCase().includes(q) ||
      (cmd.description && cmd.description.toLowerCase().includes(q)) ||
      cmd.id.toLowerCase().includes(q)
    );
  });

  const selectableCommands = filteredCommands.filter((c) => !c.divider);

  // Scroll to section helper
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Execute selected command
  const executeCommand = useCallback(
    (cmd) => {
      if (cmd && cmd.action) {
        cmd.action();
        setQuery("");
        setSelectedIndex(0);
        onClose();
      }
    },
    [onClose]
  );

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      // Small delay to allow animation
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < selectableCommands.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : selectableCommands.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          executeCommand(selectableCommands[selectedIndex]);
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, selectableCommands, executeCommand, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selected = listRef.current.querySelector("[data-selected='true']");
      if (selected) {
        selected.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[998] terminal-backdrop"
            onClick={onClose}
          />

          {/* Command Palette Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-[15vh] left-1/2 -translate-x-1/2 z-[999] w-[92vw] max-w-lg"
          >
            <div className="window-tile overflow-hidden shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <TerminalIcon className="size-3.5 text-muted" />
                  <span className="text-xs font-mono text-muted">
                    {t("terminal.title")}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded hover:bg-border/50 transition-colors"
                >
                  <X className="size-3.5 text-muted" />
                </button>
              </div>

              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/30">
                <Search className="size-4 text-muted shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("terminal.placeholder")}
                  className="flex-1 bg-transparent text-foreground text-sm font-mono placeholder:text-muted/50 outline-none"
                />
                <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-muted border border-border/50 rounded bg-background/50">
                  ESC
                </kbd>
              </div>

              {/* Command list */}
              <div ref={listRef} className="max-h-[50vh] overflow-y-auto py-2">
                {filteredCommands.length === 0 ? (
                  <div className="flex flex-col items-center gap-2 py-8 text-muted">
                    <HelpCircle className="size-6 opacity-40" />
                    <p className="text-sm">{t("terminal.noResults")}</p>
                  </div>
                ) : (
                  filteredCommands.map((cmd) => {
                    if (cmd.divider) {
                      return (
                        <div
                          key={cmd.id}
                          className="h-px mx-4 my-1 bg-border/30"
                        />
                      );
                    }

                    const selectableIndex = selectableCommands.findIndex(
                      (c) => c.id === cmd.id
                    );
                    const isSelected = selectableIndex === selectedIndex;

                    return (
                      <button
                        key={cmd.id}
                        data-selected={isSelected}
                        onClick={() => executeCommand(cmd)}
                        onMouseEnter={() => setSelectedIndex(selectableIndex)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors",
                          isSelected
                            ? "bg-primary/10 text-foreground"
                            : "text-muted hover:text-foreground"
                        )}
                      >
                        <cmd.icon className="size-4 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium block truncate">
                            {cmd.label}
                          </span>
                          {cmd.description && (
                            <span className="text-xs text-muted/70 block truncate">
                              {cmd.description}
                            </span>
                          )}
                        </div>
                        {isSelected && (
                          <ArrowRight className="size-3.5 text-primary shrink-0" />
                        )}
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-border/30 text-[10px] font-mono text-muted/50">
                <span>↑↓ {t("terminal.navigate")} · ↵ {t("terminal.select")}</span>
                <span>Ctrl+K</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
