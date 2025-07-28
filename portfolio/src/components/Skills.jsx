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
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "MongoDB", category: "research" },
  { name: "PostgreSQL", category: "research" },
  { name: "Python", category: "research" },
  { name: "R", category: "research" },
  { name: "MATLAB", category: "research" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
];

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

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.name];

            return (
              <div
                key={index}
                className="bg-card rounded-lg shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
              >
                {Icon && <Icon className="text-4xl text-primary" />}
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
