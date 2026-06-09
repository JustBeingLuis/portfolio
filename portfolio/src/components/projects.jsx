import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import reposData from "@/../data/repos.json";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { WindowTile } from "@/components/WindowTile";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

/**
 * Projects — Mosaic grid with featured projects getting large hero tiles.
 *
 * Featured projects span 2 columns and have more visual weight.
 * Other projects are in a tighter grid. All wrapped in WindowTile cards.
 * Language indicators are colored dots in the card.
 * Hover: card lifts with a subtle 3D perspective tilt.
 */

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

const INITIAL_COUNT = 6;

export const Projects = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  // Sort: featured first
  const sortedRepos = [...reposData].sort((a, b) => {
    const aFeatured = featuredNames.includes(a.name);
    const bFeatured = featuredNames.includes(b.name);
    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;
    return 0;
  });

  const visibleRepos = showAll
    ? sortedRepos
    : sortedRepos.slice(0, INITIAL_COUNT);
  const remaining = sortedRepos.length - INITIAL_COUNT;

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 relative">
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
            <span className="text-muted">$</span> ls ~/projects/
          </div>
          <h2 className="section-heading mb-4">
            {t("projects.title1")}{" "}
            <span className="text-primary">{t("projects.title2")}</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Projects Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {visibleRepos.map((repo, index) => {
              const isFeatured = featuredNames.includes(repo.name);

              return (
                <motion.div
                  key={repo.name}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={cn(isFeatured && "md:col-span-2 lg:col-span-1")}
                >
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="block h-full"
                  >
                    <div
                      className={cn(
                        "group window-tile tile-hover-glow h-full p-0 overflow-hidden flex flex-col",
                        isFeatured && "border-primary/20"
                      )}
                    >
                      {/* Title bar */}
                      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50">
                        <div className="flex items-center gap-1.5 mr-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                        </div>
                        <FaGithub className="size-3 text-muted" />
                        <span className="text-xs font-mono text-muted truncate">
                          {repo.name}
                        </span>
                        {isFeatured && (
                          <span className="ml-auto text-[9px] font-mono text-primary border border-primary/30 px-1.5 py-0.5 rounded">
                            {t("projects.featured")}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                          {repo.name.replace(/-/g, " ")}
                        </h3>

                        <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4 flex-grow">
                          {repo.description || t("projects.noDescription")}
                        </p>

                        {/* Languages */}
                        {repo.languages && repo.languages.length > 0 && (
                          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
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

                        {/* Action link */}
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-muted group-hover:text-primary transition-colors duration-300">
                          <FaGithub className="size-4" />
                          {t("projects.viewGithub")}
                          <ExternalLink className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less */}
        {sortedRepos.length > INITIAL_COUNT && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-muted border border-border rounded-lg window-tile
                         hover:border-primary hover:text-primary transition-all duration-300"
            >
              {showAll ? (
                <>
                  {t("projects.showLess")}
                  <ChevronUp className="size-4" />
                </>
              ) : (
                <>
                  {t("projects.showMore")}
                  <span className="text-xs text-muted/60">({remaining})</span>
                  <ChevronDown className="size-4" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
