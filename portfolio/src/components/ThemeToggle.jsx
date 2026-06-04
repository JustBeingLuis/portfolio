import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className, showLabel = false }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative rounded-full transition-all duration-500 p-2",
        "focus:outline-none hover:bg-primary/10",
        showLabel && "flex items-center gap-2",
        className
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <Sun
          className={cn(
            "absolute inset-0 size-5 text-primary transition-all duration-500",
            isDarkMode
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 size-5 text-foreground transition-all duration-500",
            isDarkMode
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
      </div>
      {showLabel && (
        <span className="text-foreground/80 text-sm">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
};
