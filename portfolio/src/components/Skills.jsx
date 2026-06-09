import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { Code, Server, FlaskConical, Wrench } from "lucide-react";
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
 * Skills — Mosaic grid of skill tiles inside a window tile.
 *
 * Skills are displayed as individual cards with their icons.
 * "Advanced" skills get a subtle primary border glow.
 * Filter tabs animate the grid with Framer Motion layout animations.
 * Category headers look like terminal prompts: `$ ls frontend/`
 */

const skills = [
  { name: "HTML", category: "frontend", level: "Advanced" },
  { name: "CSS", category: "frontend", level: "Advanced" },
  { name: "JavaScript", category: "frontend", level: "Advanced" },
  { name: "React", category: "frontend", level: "Intermediate" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced" },

  { name: "MongoDB", category: "backend", level: "Intermediate" },
  { name: "PostgreSQL", category: "backend", level: "Intermediate" },
  { name: "Python", category: "backend", level: "Advanced" },

  { name: "R", category: "research", level: "Intermediate" },
  { name: "MATLAB", category: "research", level: "Advanced" },

  { name: "Git/GitHub", category: "tools", level: "Advanced" },
  { name: "Figma", category: "tools", level: "Intermediate" },
  { name: "VS Code", category: "tools", level: "Advanced" },
];

const categoryInfo = {
  frontend: { icon: Code },
  backend: { icon: Server },
  research: { icon: FlaskConical },
  tools: { icon: Wrench },
};

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

const filters = [
  { key: "all" },
  { key: "frontend" },
  { key: "backend" },
  { key: "research" },
  { key: "tools" },
];

export const Skills = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const filteredSkills =
    activeFilter === "all"
      ? groupedSkills
      : { [activeFilter]: groupedSkills[activeFilter] };

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
            <span className="text-muted">$</span> ls skills/
          </div>
          <h2 className="section-heading mb-4">
            {t("skills.title1")}{" "}
            <span className="text-primary">{t("skills.title2")}</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-1 p-1 window-tile rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-300",
                  activeFilter === filter.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {t(`skills.filters.${filter.key}`)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid — wrapped in a window tile */}
        <WindowTile title="skills.config" delay={0.15} noPadding>
          <div className="p-4 sm:p-6">
            <LayoutGroup>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8"
                >
                  {Object.entries(filteredSkills).map(
                    ([category, categorySkills]) => {
                      const info = categoryInfo[category];
                      const CategoryIcon = info.icon;

                      return (
                        <div key={category}>
                          {/* Category Header — terminal prompt style */}
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-mono text-muted/50">$</span>
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <CategoryIcon className="size-4 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-foreground">
                                {t(`skills.categories.${category}.title`)}
                              </h3>
                              <p className="text-xs text-muted">
                                {t(`skills.categories.${category}.description`)}
                              </p>
                            </div>
                          </div>

                          {/* Skills Mosaic */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                            {categorySkills.map((skill, i) => {
                              const Icon = iconMap[skill.name];
                              const isAdvanced = skill.level === "Advanced";

                              return (
                                <motion.div
                                  key={`${category}-${skill.name}`}
                                  layout
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: i * 0.05,
                                  }}
                                  whileHover={{ y: -3, scale: 1.02 }}
                                  className={cn(
                                    "group p-3 sm:p-4 rounded-lg border transition-all duration-300 flex flex-col items-center text-center gap-2 cursor-default",
                                    isAdvanced
                                      ? "border-primary/20 bg-primary/5 hover:border-primary/40 hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.2)]"
                                      : "border-border/40 bg-background/20 hover:border-primary/20"
                                  )}
                                >
                                  {Icon && (
                                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-card/50 group-hover:scale-110 transition-transform duration-300">
                                      <Icon className="text-lg text-primary" />
                                    </div>
                                  )}
                                  <div>
                                    <h4 className="text-xs font-semibold text-foreground">
                                      {skill.name}
                                    </h4>
                                    <span className="text-[10px] text-muted font-mono">
                                      {t(`skills.levels.${skill.level}`)}
                                    </span>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  )}
                </motion.div>
              </AnimatePresence>
            </LayoutGroup>
          </div>
        </WindowTile>
      </div>
    </section>
  );
};
