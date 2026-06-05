import { useState } from "react";
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

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

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
  frontend: {
    icon: Code,
  },
  backend: {
    icon: Server,
  },
  research: {
    icon: FlaskConical,
  },
  tools: {
    icon: Wrench,
  },
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
  const { ref: sectionRef, isVisible } = useScrollReveal();

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
    <section id="skills" className="py-24 px-4 relative">
      <div
        ref={sectionRef}
        className={cn(
          "container mx-auto max-w-5xl transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            {t('skills.title1')} <span className="text-primary">{t('skills.title2')}</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 bg-card border border-border rounded-lg">
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
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {Object.entries(filteredSkills).map(
            ([category, categorySkills]) => {
              const info = categoryInfo[category];
              const CategoryIcon = info.icon;

              return (
                <div key={category}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CategoryIcon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {t(`skills.categories.${category}.title`)}
                      </h3>
                      <p className="text-sm text-muted">{t(`skills.categories.${category}.description`)}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categorySkills.map((skill) => {
                      const Icon = iconMap[skill.name];

                      return (
                        <div
                          key={`${category}-${skill.name}`}
                          className="group card-surface p-4 hover:border-primary/40 flex flex-col items-center text-center gap-3"
                        >
                          {Icon && (
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-card group-hover:scale-110 transition-transform duration-300">
                              <Icon className="text-xl text-primary" />
                            </div>
                          )}
                          <div>
                            <h4 className="text-sm font-semibold text-foreground">
                              {skill.name}
                            </h4>
                            <span className="text-xs text-muted font-mono">
                              {t(`skills.levels.${skill.level}`)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
