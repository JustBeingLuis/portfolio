import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Terminal as TerminalIcon } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";
import { useTranslation } from "react-i18next";
import { WindowTile } from "@/components/WindowTile";

/**
 * HeroSection — Terminal-inspired hero with a real command prompt shell layout.
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
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-3xl mx-auto z-10 relative"
      >
        <WindowTile
          title="luism@sys-dev: ~"
          icon={TerminalIcon}
          className="w-full"
          noPadding
        >
          <div className="font-mono text-left p-6 sm:p-8 space-y-6 text-sm sm:text-base leading-relaxed">
            {/* Command 1: whoami */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">luism@sys-dev</span>
                <span className="text-muted">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-foreground">$</span>
                <span className="text-foreground">whoami</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pl-4 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight"
              >
                Luis Toscano-Palomino
              </motion.div>
            </div>

            {/* Command 2: cat roles.sh */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">luism@sys-dev</span>
                <span className="text-muted">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-foreground">$</span>
                <span className="text-foreground">cat roles.sh</span>
              </div>
              <div className="pl-4 flex items-center min-h-[30px] text-muted-foreground border-l-2 border-primary/10 bg-primary/5 py-2 px-3 rounded">
                <span className="text-primary mr-2 font-bold">&gt;</span>
                <span className="text-primary font-medium">{displayText}</span>
                <span className="w-2 h-4 sm:h-5 bg-primary ml-1 animate-blink inline-block align-middle" />
              </div>
            </div>

            {/* Command 3: run --cta-action */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">luism@sys-dev</span>
                <span className="text-muted">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-foreground">$</span>
                <span className="text-foreground">run --cta-action</span>
              </div>
              
              <div className="pl-4 flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded font-mono text-sm transition-all duration-200 active:scale-95 border border-primary/50 shadow-lg shadow-primary/10"
                >
                  [ {t("hero.getInTouch", "GET_IN_TOUCH")} ]
                </a>
                
                <a
                  href="#projects"
                  className="px-5 py-2.5 bg-transparent border border-border hover:border-primary/50 hover:text-primary text-muted font-semibold rounded font-mono text-sm transition-all duration-200 active:scale-95"
                >
                  [ {t("hero.queryProjects", "QUERY_PROJECTS")} ]
                </a>
              </div>
            </div>

            {/* Command 4: cat socials.json */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">luism@sys-dev</span>
                <span className="text-muted">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-foreground">$</span>
                <span className="text-foreground">cat socials.json</span>
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
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-muted hover:text-primary border border-border/40 hover:border-primary/30 rounded bg-primary/5 hover:bg-primary/10 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="size-4" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </WindowTile>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
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

