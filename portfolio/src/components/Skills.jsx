import { motion } from "framer-motion";
import { Code, Server, FlaskConical, Wrench, Activity, Database } from "lucide-react";
import {
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGithub,
  FaRProject,
  FaFigma,
  FaHtml5,
} from "react-icons/fa";

import { MatlabIcon } from "@/components/icons/MatlabIcon";
import { VscodeIcon } from "@/components/icons/VscodeIcon";

import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const iconMap = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJsSquare,
  React: FaReact,
  "Tailwind CSS": SiTailwindcss,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Python: FaPython,
  R: FaRProject,
  "Git/GitHub": FaGithub,
  Figma: FaFigma,
  MATLAB: MatlabIcon,
  "VS Code": VscodeIcon,
};

export const Skills = () => {
  const { t } = useTranslation();

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
      className="w-full flex flex-col justify-center h-full gap-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-4 sm:gap-6">
        
        {/* Module 1: Frontend Engine (Spans 2 cols) */}
        <motion.div variants={itemVariants} className="md:col-span-2 relative group overflow-hidden bg-[hsl(var(--card))]/40 border border-[hsl(var(--border))]/40 rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent pointer-events-none" />
          <div className="p-4 sm:p-6 h-full flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Code className="size-5 text-[hsl(var(--primary))]" />
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">{t("skills.modules.frontend.title", "Frontend Interfaces")}</h3>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t("skills.modules.frontend.status", "ONLINE")}
                </span>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{t("skills.modules.frontend.desc", "Building responsive, high-performance web applications.")}</p>
            </div>

            {/* Dynamic Tech Bar */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
              {["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"].map((tech, i) => {
                const Icon = iconMap[tech];
                return (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col items-center gap-2 p-3 rounded border border-[hsl(var(--border))]/40 bg-[hsl(var(--card))]/50 hover:bg-[hsl(var(--primary))]/10 hover:border-[hsl(var(--primary))]/40 transition-colors"
                  >
                    <Icon className="text-2xl text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors" />
                    <span className="text-[10px] font-mono text-[hsl(var(--muted-foreground))] text-center leading-tight hidden sm:block">{tech}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Module 2: Research & Compute (Spans 1 col, 2 rows) */}
        <motion.div variants={itemVariants} className="md:row-span-2 relative group overflow-hidden bg-[hsl(var(--card))]/40 border border-[hsl(var(--border))]/40 rounded-xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[hsl(var(--primary))]/30 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-700" />
          <div className="p-4 sm:p-6 h-full flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical className="size-5 text-[hsl(var(--primary))]" />
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-1">{t("skills.modules.research.title", "Data & Research")}</h3>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{t("skills.modules.research.desc", "Scientific computing & analysis")}</p>
            </div>
            
            <div className="flex-grow flex flex-col gap-4 justify-center">
              {[
                { name: "Python", desc: t("skills.modules.research.python", "AI & ML Data pipelines") },
                { name: "MATLAB", desc: t("skills.modules.research.matlab", "Scientific simulation") },
                { name: "R", desc: t("skills.modules.research.r", "Statistical analysis") }
              ].map((tech, i) => {
                const Icon = iconMap[tech.name];
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg border border-[hsl(var(--border))]/50 bg-background/50 hover:border-[hsl(var(--primary))]/50 transition-all group/item"
                  >
                    <div className="p-2 rounded bg-[hsl(var(--primary))]/10 group-hover/item:bg-[hsl(var(--primary))]/20 transition-colors">
                      <Icon className="text-xl text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[hsl(var(--foreground))]">{tech.name}</h4>
                      <p className="text-[10px] text-[hsl(var(--muted-foreground))] font-mono">{tech.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-6 flex items-center justify-between text-xs font-mono text-[hsl(var(--muted-foreground))] border-t border-[hsl(var(--border))]/50 pt-4">
              <span>{t("skills.modules.research.cpu", "CPU Load")}</span>
              <div className="flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [8, Math.random() * 16 + 4, 8] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1 bg-[hsl(var(--primary))]/40 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Module 3: Backend & DB */}
        <motion.div variants={itemVariants} className="relative group bg-[hsl(var(--card))]/40 border border-[hsl(var(--border))]/40 rounded-xl">
          <div className="p-4 sm:p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Database className="size-5 text-[hsl(var(--primary))]" />
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-1">{t("skills.modules.backend.title", "Backend & DB")}</h3>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{t("skills.modules.backend.desc", "Data persistence & APIs")}</p>
            </div>

            <div className="space-y-3 mt-4">
              {["PostgreSQL", "MongoDB"].map((tech) => {
                const Icon = iconMap[tech];
                return (
                  <div key={tech} className="flex items-center justify-between p-2 rounded border border-[hsl(var(--border))]/30 bg-[hsl(var(--card))]/30">
                    <div className="flex items-center gap-2">
                      <Icon className="text-[hsl(var(--muted-foreground))]" />
                      <span className="text-xs font-mono text-[hsl(var(--foreground))]">{tech}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[hsl(var(--primary))] px-1.5 py-0.5 rounded border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary))]/5">
                      {t("skills.modules.backend.status", "CONNECTED")}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Module 4: Tools & DevOps */}
        <motion.div variants={itemVariants} className="relative group bg-[hsl(var(--card))]/40 border border-[hsl(var(--border))]/40 rounded-xl">
          <div className="p-4 sm:p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="size-5 text-[hsl(var(--primary))]" />
                <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-1">{t("skills.modules.env.title", "Environment")}</h3>
              </div>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">{t("skills.modules.env.desc", "DevOps & Workflow tools")}</p>
            </div>

            <div className="flex items-center justify-around mt-4 bg-black/5 dark:bg-black/20 rounded-lg p-4 border border-[hsl(var(--border))]/30">
              {["Git/GitHub", "VS Code", "Figma"].map((tech, i) => {
                const Icon = iconMap[tech];
                return (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <Icon className="text-2xl text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Skills;
