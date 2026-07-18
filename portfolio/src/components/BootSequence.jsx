import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

/**
 * BootSequence — Terminal-style boot animation shown on first visit.
 *
 * Simulates a Linux boot log with lines appearing sequentially.
 * Only shows once per browser session (uses sessionStorage).
 * Auto-dismisses after all lines finish, or user can click/press any key to skip.
 *
 * Props:
 * @param {function} onComplete — Callback fired when boot finishes or is skipped
 */

const BOOT_LINES = [
  { text: "[    0.000] kernel: initializing system...", delay: 0 },
  { text: "[    0.142] modules: loading portfolio.ko", delay: 200 },
  { text: "[    0.287] net: connecting to github.com ✓", delay: 400 },
  { text: "[    0.412] i18n: language modules loaded [en, es, fr]", delay: 600 },
  { text: "[    0.538] ui: rendering components... ✓", delay: 800 },
  { text: "[    0.691] theme: dark mode activated", delay: 1000 },
  { text: "", delay: 1200 },
  { text: '> portfolio --user="Luis Toscano-Palomino" --mode=interactive', delay: 1300, highlight: true },
  { text: "", delay: 1600 },
  { text: "Welcome. System ready.", delay: 1700, highlight: true },
];

export const BootSequence = ({ onComplete }) => {
  const { t } = useTranslation();
  const [visibleLines, setVisibleLines] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Check if already shown this session
  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem("portfolio-booted");
    if (alreadyBooted) {
      onComplete();
      return;
    }

    // Schedule each line appearance
    const timers = BOOT_LINES.map((line, index) =>
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay)
    );

    // Auto-dismiss after last line + a pause
    const dismissTimer = setTimeout(() => {
      handleDismiss();
    }, BOOT_LINES[BOOT_LINES.length - 1].delay + 800);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(dismissTimer);
    };
  }, []);

  const handleDismiss = () => {
    if (isExiting) return;
    setIsExiting(true);
    sessionStorage.setItem("portfolio-booted", "true");
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  // Skip on any click or keypress
  useEffect(() => {
    const skip = () => handleDismiss();
    window.addEventListener("click", skip);
    window.addEventListener("keydown", skip);
    return () => {
      window.removeEventListener("click", skip);
      window.removeEventListener("keydown", skip);
    };
  }, [isExiting]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] boot-screen flex flex-col justify-center px-6 sm:px-12 md:px-24 cursor-pointer"
          onClick={handleDismiss}
        >
          <div className="max-w-2xl">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={`font-mono text-xs sm:text-sm leading-relaxed ${
                  line.highlight
                    ? "text-amber-400 font-semibold mt-1"
                    : "text-emerald-400/70"
                }`}
              >
                {line.text || "\u00A0"}
              </motion.div>
            ))}

            {/* Blinking cursor at the bottom */}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-2.5 h-4 bg-amber-400 mt-2"
            />
          </div>

          {/* Skip hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-emerald-400/40"
          >
            {t("boot.skip", "click or press any key to skip")}
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
