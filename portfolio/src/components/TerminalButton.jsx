import { motion } from "motion/react";
import { TerminalSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * TerminalButton — Floating button to open the Command Palette.
 *
 * Fixed in the bottom-right corner with a pulsing glow.
 * Shows a tooltip on hover explaining what it does.
 *
 * Props:
 * @param {function} onClick — Callback fired when the button is clicked
 */
export const TerminalButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-[100] group"
      aria-label={t("terminal.openPalette")}
    >
      {/* Glow ring */}
      <span className="absolute inset-0 rounded-xl bg-primary/20 blur-lg group-hover:bg-primary/30 transition-colors duration-300" />

      {/* Button body */}
      <span className="relative flex items-center gap-2 px-4 py-3 rounded-xl window-tile border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
        <TerminalSquare className="size-4 text-primary" />
        <span className="text-xs font-mono text-muted group-hover:text-foreground transition-colors hidden sm:inline">
          Ctrl+K
        </span>
      </span>
    </motion.button>
  );
};
