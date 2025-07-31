import { useState } from "react";
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
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  // Frontend Development
  { name: "HTML", category: "frontend", level: "Advanced", color: "orange" },
  { name: "CSS", category: "frontend", level: "Advanced", color: "blue" },
  {
    name: "JavaScript",
    category: "frontend",
    level: "Advanced",
    color: "yellow",
  },
  { name: "React", category: "frontend", level: "Intermediate", color: "cyan" },
  /* {
    name: "TypeScript",
    category: "frontend",
    level: "Intermediate",
    color: "blue",
  }, */
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Advanced",
    color: "cyan",
  },
  /* { name: "Next.js", category: "frontend", level: "Beginner", color: "gray" }, */

  // Backend & Databases
  {
    name: "MongoDB",
    category: "backend",
    level: "Intermediate",
    color: "green",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    level: "Intermediate",
    color: "blue",
  },
  { name: "Python", category: "backend", level: "Advanced", color: "green" },

  // Data Science & Research
  { name: "R", category: "research", level: "Intermediate", color: "blue" },
  { name: "MATLAB", category: "research", level: "Advanced", color: "orange" },
  { name: "Python", category: "research", level: "Advanced", color: "green" },

  // Tools & Others
  { name: "Git/GitHub", category: "tools", level: "Advanced", color: "gray" },
  { name: "Figma", category: "tools", level: "Intermediate", color: "purple" },
  { name: "VS Code", category: "tools", level: "Advanced", color: "blue" },
];

const categoryInfo = {
  frontend: {
    title: "Frontend Development",
    description: "Creating modern and responsive user interfaces",
    icon: "🎨",
    gradient: "from-blue-500 to-purple-600",
  },
  backend: {
    title: "Backend & Databases",
    description: "Server-side development and data management",
    icon: "⚙️",
    gradient: "from-green-500 to-teal-600",
  },
  research: {
    title: "Data Science & Research",
    description: "Data analysis and scientific computing",
    icon: "📊",
    gradient: "from-orange-500 to-red-600",
  },
  tools: {
    title: "Tools & Workflow",
    description: "Development and design tools",
    icon: "🛠️",
    gradient: "from-gray-500 to-slate-600",
  },
};

const iconMap = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJsSquare,
  React: FaReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Python: FaPython,
  R: FaRProject,
  "Git/GitHub": FaGithub,
  Figma: FaFigma,
  MATLAB: MatlabIcon,
  "VS Code": VscodeIcon,
};

// Función para obtener el color del nivel
const getLevelColor = (level) => {
  const colors = {
    Beginner: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    Intermediate: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    Advanced: "bg-green-500/10 text-green-600 border-green-500/20",
  };
  return colors[level] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
};

// Función para obtener el porcentaje del nivel
const getLevelPercentage = (level) => {
  const percentages = {
    Beginner: 40,
    Intermediate: 70,
    Advanced: 90,
  };
  return percentages[level] || 0;
};

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Agrupar skills por categoría
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Filtrar skills según la categoría activa
  const filteredSkills =
    activeFilter === "all"
      ? groupedSkills
      : { [activeFilter]: groupedSkills[activeFilter] };

  // Lista de filtros disponibles
  const filters = [
    { key: "all", label: "All", icon: "🌟", count: skills.length },
    {
      key: "frontend",
      label: "Frontend",
      icon: "🎨",
      count: groupedSkills.frontend?.length || 0,
    },
    {
      key: "backend",
      label: "Backend",
      icon: "⚙️",
      count: groupedSkills.backend?.length || 0,
    },
    {
      key: "research",
      label: "Research",
      icon: "📊",
      count: groupedSkills.research?.length || 0,
    },
    {
      key: "tools",
      label: "Tools",
      icon: "🛠️",
      count: groupedSkills.tools?.length || 0,
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I master to create complete solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`
                group relative px-6 py-3 rounded-full font-medium transition-all duration-300
                ${
                  activeFilter === filter.key
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-card/50 border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/80"
                }
              `}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fade-in 0.6s ease-out forwards",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{filter.icon}</span>
                <span>{filter.label}</span>
                <span
                  className={`
                  px-2 py-0.5 text-xs rounded-full transition-colors duration-300
                  ${
                    activeFilter === filter.key
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }
                `}
                >
                  {filter.count}
                </span>
              </div>

              {/* Active indicator */}
              {activeFilter === filter.key && (
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {Object.entries(filteredSkills).length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-muted-foreground text-lg">
                No skills found in this category
              </p>
            </div>
          ) : (
            Object.entries(filteredSkills).map(
              ([category, categorySkills], categoryIndex) => {
                const info = categoryInfo[category];

                return (
                  <div
                    key={category}
                    className="relative"
                    style={{
                      animationDelay: `${categoryIndex * 200}ms`,
                      animation: "fade-in 0.6s ease-out forwards",
                    }}
                  >
                    {/* Category Header */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-2xl shadow-lg`}
                        >
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categorySkills.map((skill, skillIndex) => {
                        const Icon = iconMap[skill.name];
                        const percentage = getLevelPercentage(skill.level);

                        return (
                          <div
                            key={skill.name}
                            className="group relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-6 
                                   shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 
                                   transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
                            style={{
                              animationDelay: `${
                                categoryIndex * 200 + skillIndex * 100
                              }ms`,
                              animation: "fade-in 0.6s ease-out forwards",
                            }}
                          >
                            {/* Gradient overlay */}
                            <div
                              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            <div className="relative z-10">
                              {/* Icon and Name */}
                              <div className="flex items-center gap-4 mb-4">
                                {Icon && (
                                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                    <Icon className="text-2xl text-primary" />
                                  </div>
                                )}
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                    {skill.name}
                                  </h4>
                                  <span
                                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full border transition-all duration-300 ${getLevelColor(
                                      skill.level
                                    )}`}
                                  >
                                    {skill.level}
                                  </span>
                                </div>
                              </div>

                              {/* Progress Bar */}
                              <div className="mb-2">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm text-muted-foreground">
                                    Experience
                                  </span>
                                  <span className="text-sm font-medium text-foreground">
                                    {percentage}%
                                  </span>
                                </div>
                                <div className="w-full bg-border/40 rounded-full h-2 overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out group-hover:from-primary/80 group-hover:to-primary"
                                    style={{
                                      width: `${percentage}%`,
                                      transformOrigin: "left",
                                      animation: `progressFill 1.5s ease-out ${
                                        categoryIndex * 200 + skillIndex * 100
                                      }ms forwards`,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            )
          )}
        </div>
      </div>
    </section>
  );
};
