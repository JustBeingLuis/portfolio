import { motion } from "motion/react";
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

import { WindowTile } from "@/components/WindowTile";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

/**
 * Skills — Innovative "System Architecture" Bento Grid layout.
 *
 * Each category is treated as a distinct "subsystem" with its own visual language,
 * breaking away from generic grids to create a memorable, highly structured dashboard.
 */

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

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-primary/80 border border-primary/20 rounded-full bg-primary/5 mb-6">
            <span className="text-muted">$</span> {t("skills.status", "sys-status --modules")}
          </div>
          <h2 className="section-heading mb-4">
            {t("skills.systemArch", "System Architecture").split(' ')[0]} <span className="text-primary">{t("skills.systemArch", "System Architecture").split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            {t("skills.subtitle", "Active modules and technical capabilities driving the infrastructure.")}
          </p>
        </motion.div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4 sm:gap-6">
          
          {/* Module 1: Frontend Engine (Spans 2 cols) */}
          <WindowTile
            title="sys.frontend_engine"
            icon={Code}
            delay={0.1}
            className="md:col-span-2 relative group overflow-hidden"
            noPadding
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{t("skills.modules.frontend.title", "Frontend Interfaces")}</h3>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {t("skills.modules.frontend.status", "ONLINE")}
                  </span>
                </div>
                <p className="text-sm text-muted">{t("skills.modules.frontend.desc", "Building responsive, high-performance web applications.")}</p>
              </div>

              {/* Dynamic Tech Bar */}
              <div className="grid grid-cols-5 gap-3 mt-4">
                {["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"].map((tech, i) => {
                  const Icon = iconMap[tech];
                  return (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex flex-col items-center gap-2 p-3 rounded border border-border/40 bg-card/50 hover:bg-primary/10 hover:border-primary/40 transition-colors"
                    >
                      <Icon className="text-2xl text-muted group-hover:text-primary transition-colors" />
                      <span className="text-[10px] font-mono text-muted text-center leading-tight hidden sm:block">{tech}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </WindowTile>

          {/* Module 2: Research & Compute (Spans 1 col, 2 rows) */}
          <WindowTile
            title="sys.compute_cluster"
            icon={FlaskConical}
            delay={0.2}
            className="md:row-span-2 relative group overflow-hidden"
            noPadding
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-700" />
            <div className="p-6 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{t("skills.modules.research.title", "Data & Research")}</h3>
                <p className="text-sm text-muted">{t("skills.modules.research.desc", "Scientific computing & analysis")}</p>
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
                      className="flex items-center gap-4 p-3 rounded-lg border border-border/50 bg-background/50 hover:border-primary/50 transition-all group/item"
                    >
                      <div className="p-2 rounded bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                        <Icon className="text-xl text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{tech.name}</h4>
                        <p className="text-[10px] text-muted font-mono">{tech.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <div className="mt-6 flex items-center justify-between text-xs font-mono text-muted border-t border-border/50 pt-4">
                <span>{t("skills.modules.research.cpu", "CPU Load")}</span>
                <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [8, Math.random() * 16 + 4, 8] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                      className="w-1 bg-primary/40 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </WindowTile>

          {/* Module 3: Backend & DB */}
          <WindowTile
            title="sys.backend_services"
            icon={Database}
            delay={0.3}
            className="relative group"
            noPadding
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{t("skills.modules.backend.title", "Backend & DB")}</h3>
                <p className="text-sm text-muted">{t("skills.modules.backend.desc", "Data persistence & APIs")}</p>
              </div>

              <div className="space-y-3 mt-4">
                {["PostgreSQL", "MongoDB"].map((tech) => {
                  const Icon = iconMap[tech];
                  return (
                    <div key={tech} className="flex items-center justify-between p-2 rounded border border-border/30 bg-card/30">
                      <div className="flex items-center gap-2">
                        <Icon className="text-muted" />
                        <span className="text-xs font-mono text-foreground">{tech}</span>
                      </div>
                      <span className="text-[10px] font-mono text-primary px-1.5 py-0.5 rounded border border-primary/20 bg-primary/5">
                        {t("skills.modules.backend.status", "CONNECTED")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </WindowTile>

          {/* Module 4: Tools & DevOps */}
          <WindowTile
            title="sys.dev_environment"
            icon={Wrench}
            delay={0.4}
            className="relative group"
            noPadding
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{t("skills.modules.env.title", "Environment")}</h3>
                <p className="text-sm text-muted">{t("skills.modules.env.desc", "DevOps & Workflow tools")}</p>
              </div>

              <div className="flex items-center justify-around mt-4 bg-black/5 dark:bg-black/20 rounded-lg p-4 border border-border/30">
                {["Git/GitHub", "VS Code", "Figma"].map((tech, i) => {
                  const Icon = iconMap[tech];
                  return (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <Icon className="text-2xl text-muted hover:text-primary transition-colors" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </WindowTile>

        </div>
      </div>
    </section>
  );
};
