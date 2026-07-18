import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";

const navItems = [
  { key: "home", sectionId: "hero" },
  { key: "about", sectionId: "about" },
  { key: "skills", sectionId: "skills" },
  { key: "projects", sectionId: "projects" },
  { key: "contact", sectionId: "contact" },
];

export const Navbar = ({ activeSection, onSectionChange }) => {
  const { t } = useTranslation();

  return (
    <nav className="w-full flex items-center justify-between relative">
      <div className="flex items-center overflow-x-auto no-scrollbar flex-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.sectionId;
          return (
            <button
              key={item.key}
              onClick={() => onSectionChange(item.sectionId)}
              className={cn(
                "relative px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-300 border-r border-[hsl(var(--border)/0.5)] whitespace-nowrap",
                isActive
                  ? "bg-[hsl(var(--card)/0.5)] text-[hsl(var(--primary))] border-t-2 border-t-[hsl(var(--primary))]"
                  : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--card)/0.2)] border-t-2 border-t-transparent"
              )}
            >
              {t(`navbar.${item.key}`)}
              {isActive && (
                <motion.span
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[hsl(var(--primary))]/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
      <div className="px-4 flex items-center gap-2 shrink-0 border-l border-[hsl(var(--border)/0.5)]">
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
