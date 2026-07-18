import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";
import { useTranslation } from "react-i18next";
import { FastFetch } from "@/components/FastFetch";

/**
 * HeroSection — Terminal-inspired hero adapted for the unified shell.
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
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 30);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 60);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12"
    >
      <div className="flex-1 font-mono text-left space-y-6 text-sm sm:text-base leading-relaxed max-w-2xl">
        {/* Command 1: whoami */}
        <motion.div variants={itemVariants} className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[hsl(var(--primary))] font-bold">luism@sys-dev</span>
            <span className="text-[hsl(var(--muted))]">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-[hsl(var(--foreground))]">$</span>
            <span className="text-[hsl(var(--foreground))]">whoami</span>
          </div>
          <h1 className="pl-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] tracking-tight">
            Luis Toscano-Palomino
          </h1>
        </motion.div>

        {/* Command 2: cat roles.sh */}
        <motion.div variants={itemVariants} className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[hsl(var(--primary))] font-bold">luism@sys-dev</span>
            <span className="text-[hsl(var(--muted))]">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-[hsl(var(--foreground))]">$</span>
            <span className="text-[hsl(var(--foreground))]">cat roles.sh</span>
          </div>
          <div className="pl-4 flex items-center min-h-[30px] text-[hsl(var(--muted-foreground))] border-l-2 border-[hsl(var(--primary))]/10 bg-[hsl(var(--primary))]/5 py-2 px-3 rounded w-fit">
            <span className="text-[hsl(var(--primary))] mr-2 font-bold">&gt;</span>
            <span className="text-[hsl(var(--primary))] font-medium">{displayText}</span>
            <span className="w-2 h-4 sm:h-5 bg-[hsl(var(--primary))] ml-1 animate-blink inline-block align-middle" />
          </div>
        </motion.div>

        {/* Command 3: run --cta-action */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[hsl(var(--primary))] font-bold">luism@sys-dev</span>
            <span className="text-[hsl(var(--muted))]">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-[hsl(var(--foreground))]">$</span>
            <span className="text-[hsl(var(--foreground))]">run --cta-action</span>
          </div>
          
          <div className="pl-4 flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-[hsl(var(--primary))] hover:brightness-110 text-[hsl(var(--primary-foreground))] font-semibold rounded font-mono text-sm transition-all duration-200 active:scale-95 border border-[hsl(var(--primary))]/50 shadow-lg shadow-[hsl(var(--primary))]/10"
            >
              [ {t("hero.getInTouch", "GET_IN_TOUCH")} ]
            </a>
            
            <a
              href="#projects"
              className="px-5 py-2.5 bg-transparent border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50 hover:text-[hsl(var(--primary))] text-[hsl(var(--muted))] font-semibold rounded font-mono text-sm transition-all duration-200 active:scale-95"
            >
              [ {t("hero.queryProjects", "QUERY_PROJECTS")} ]
            </a>
          </div>
        </motion.div>

        {/* Command 4: cat socials.json */}
        <motion.div variants={itemVariants} className="space-y-2 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-[hsl(var(--primary))] font-bold">luism@sys-dev</span>
            <span className="text-[hsl(var(--muted))]">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-[hsl(var(--foreground))]">$</span>
            <span className="text-[hsl(var(--foreground))]">cat socials.json</span>
          </div>
          <div className="pl-4 flex items-center gap-3">
            {[
              {
                href: "https://github.com/JustBeingLuis",
                label: "github",
                Icon: FaGithub,
              },
              {
                href: "https://www.linkedin.com/in/luistoscanop",
                label: "linkedin",
                Icon: FaLinkedinIn,
              },
              {
                href: "https://scholar.google.com/citations?user=AQ_grM8AAAAJ&hl=es",
                label: "scholar",
                Icon: GoogleScholarIcon,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] border border-[hsl(var(--border))]/40 hover:border-[hsl(var(--primary))]/30 rounded bg-[hsl(var(--primary))]/5 hover:bg-[hsl(var(--primary))]/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon className="size-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right side: Fastfetch representation */}
      <motion.div variants={itemVariants} className="hidden xl:flex flex-shrink-0 justify-center">
        <FastFetch />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
