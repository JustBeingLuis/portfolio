import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";
import { useTranslation } from "react-i18next";

/**
 * HeroSection — Terminal-inspired hero with a "command prompt" aesthetic.
 *
 * Shows the name with a staggered character reveal, a typing subtitle,
 * and social links as terminal-style badges. The whole thing feels
 * like you just opened a terminal and ran `whoami`.
 */
export const HeroSection = () => {
  const { t } = useTranslation();

  const roles = [
    t("hero.roles.dev"),
    t("hero.roles.research"),
    t("hero.roles.ai"),
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  // Stagger variants for child elements
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-4xl mx-auto text-center z-10 relative"
      >
        <div className="space-y-6 sm:space-y-8">
          {/* Terminal prompt label */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono text-primary/80 border border-primary/20 rounded-full bg-primary/5">
              <span className="text-muted">$</span> whoami
            </span>
          </motion.div>

          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-muted border border-border rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {t("hero.status")}
            </span>
          </motion.div>

          {/* Name — big, bold, staggered */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
          >
            <span className="block">Luis</span>
            <span className="text-primary block">Toscano-Palomino</span>
          </motion.h1>

          {/* Typewriter subtitle — now looks like terminal output */}
          <motion.div
            variants={itemVariants}
            className="h-8 sm:h-10 flex items-center justify-center"
          >
            <span className="text-xs text-muted/60 font-mono mr-2">{">"}</span>
            <span className="text-lg sm:text-xl md:text-2xl font-mono text-muted">
              {displayText}
            </span>
            <span className="w-0.5 h-6 sm:h-7 bg-primary ml-0.5 animate-blink" />
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
            <a
              href="#projects"
              className="accent-button inline-block text-sm sm:text-base"
            >
              {t("hero.viewWork")}
            </a>
          </motion.div>

          {/* Social links — terminal badge style */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 pt-2"
          >
            {[
              {
                href: "https://github.com/JustBeingLuis",
                label: "GitHub",
                Icon: FaGithub,
              },
              {
                href: "https://www.linkedin.com/in/luistoscanop",
                label: "LinkedIn",
                Icon: FaLinkedinIn,
              },
              {
                href: "https://scholar.google.com/citations?user=AQ_grM8AAAAJ&hl=es",
                label: "Scholar",
                Icon: GoogleScholarIcon,
              },
            ].map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 text-muted hover:text-primary window-tile border border-border/50 hover:border-primary/30 rounded-lg transition-all duration-300"
                aria-label={label}
              >
                <Icon className="size-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted font-mono tracking-widest uppercase">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
};
