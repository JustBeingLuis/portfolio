import { useState } from "react";
import reposData from "@/../data/repos.json";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const getLanguageColor = (lang) => {
  const colors = {
    JavaScript: "bg-yellow-500",
    TypeScript: "bg-blue-500",
    Python: "bg-emerald-500",
    HTML: "bg-orange-500",
    CSS: "bg-blue-400",
    Java: "bg-red-500",
    Dockerfile: "bg-sky-500",
    "Jupyter Notebook": "bg-orange-400",
  };
  return colors[lang] || "bg-zinc-400";
};

const featuredNames = ["BiblioMatch", "DeepWine", "CoworkingHub"];

const INITIAL_COUNT = 3;

export const Projects = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  // Sort: featured first
  const sortedRepos = [...reposData].sort((a, b) => {
    const aFeatured = featuredNames.includes(a.name);
    const bFeatured = featuredNames.includes(b.name);
    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;
    return 0;
  });

  const visibleRepos = showAll ? sortedRepos : sortedRepos.slice(0, INITIAL_COUNT);
  const remaining = sortedRepos.length - INITIAL_COUNT;

  return (
    <section id="projects" className="py-24 px-4 relative">
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
            {t('projects.title1')} <span className="text-primary">{t('projects.title2')}</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleRepos.map((repo) => {
            const isFeatured = featuredNames.includes(repo.name);

            return (
              <div
                key={repo.name}
                className={cn(
                  "group card-surface p-6 flex flex-col hover:border-primary/40 hover:-translate-y-1",
                  isFeatured && "border-primary/20"
                )}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {repo.name.replace(/-/g, " ")}
                    </h3>
                    {isFeatured && (
                      <span className="text-[10px] font-mono text-primary border border-primary/30 px-1.5 py-0.5 rounded">
                        {t('projects.featured')}
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-px bg-border group-hover:bg-primary group-hover:w-12 transition-all duration-500" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-5 flex-grow">
                  {repo.description || t('projects.noDescription')}
                </p>

                {/* Languages */}
                {repo.languages && repo.languages.length > 0 && (
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
                    {repo.languages.slice(0, 4).map((language) => (
                      <span
                        key={language}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-muted"
                      >
                        <span
                          className={cn(
                            "w-2 h-2 rounded-full",
                            getLanguageColor(language)
                          )}
                        />
                        {language}
                      </span>
                    ))}
                    {repo.languages.length > 4 && (
                      <span className="text-xs font-mono text-muted">
                        +{repo.languages.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Action */}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors duration-300"
                >
                  <FaGithub className="size-4" />
                  {t('projects.viewGithub')}
                  <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Show More / Show Less */}
        {sortedRepos.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted border border-border rounded-lg
                         hover:border-primary hover:text-primary transition-all duration-300"
            >
              {showAll ? (
                <>
                  {t('projects.showLess')}
                  <ChevronUp className="size-4" />
                </>
              ) : (
                <>
                  {t('projects.showMore')}
                  <span className="text-xs text-muted/60">({remaining})</span>
                  <ChevronDown className="size-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
