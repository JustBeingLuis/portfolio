import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import reposData from "@/../data/repos.json";
import { FaGithub } from "react-icons/fa";
import { Terminal, FolderOpen, FileCode, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { WindowTile } from "@/components/WindowTile";

const featuredNames = ["BiblioMatch", "DeepWine", "CoworkingHub"];

export const Projects = () => {
  const { t } = useTranslation();

  // Sort: featured first
  const sortedRepos = [...reposData].sort((a, b) => {
    const aFeatured = featuredNames.includes(a.name);
    const bFeatured = featuredNames.includes(b.name);
    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;
    return 0;
  });

  const [selectedRepo, setSelectedRepo] = useState(sortedRepos[0]);

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono text-primary/80 border border-primary/20 rounded-full bg-primary/5 mb-6 shadow-sm">
            <span className="text-muted-foreground/70 dark:text-muted">$</span> cd ~/projects && ls -la
          </div>
          <h2 className="section-heading mb-4">
            {t("projects.title1")}{" "}
            <span className="text-primary">{t("projects.title2")}</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
        </motion.div>

        {/* Terminal Layout */}
        <WindowTile
          title="~/projects && ls -la"
          icon={Terminal}
          delay={0.2}
          className="min-h-[500px]"
          contentClassName="flex flex-col md:flex-row h-full"
          noPadding
        >
          {/* Left Column: File Tree */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-border/40 dark:border-border/20 flex flex-col bg-muted/30 dark:bg-black/40">
            <div className="px-4 py-3 border-b border-border/40 dark:border-border/20 flex items-center gap-2 bg-muted/50 dark:bg-black/40">
              <FolderOpen className="size-4 text-primary" />
              <span className="text-sm font-mono font-bold text-foreground">~/projects</span>
            </div>
            <div className="p-2 flex-grow overflow-y-auto font-mono text-sm max-h-[300px] md:max-h-[600px] custom-scrollbar">
              {sortedRepos.map((repo) => {
                const isSelected = selectedRepo?.name === repo.name;
                const isFeatured = featuredNames.includes(repo.name);
                return (
                  <button
                    key={repo.name}
                    onClick={() => setSelectedRepo(repo)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 my-0.5 flex items-center gap-2 rounded-md transition-all duration-200",
                      isSelected 
                        ? "bg-primary/20 dark:bg-primary/25 text-primary font-bold shadow-sm" 
                        : "text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {isSelected ? <ChevronRight className="size-3 text-primary" /> : <FileCode className="size-3 opacity-60" />}
                    <span className="truncate">{repo.name}</span>
                    {isFeatured && !isSelected && (
                      <span className="ml-auto text-[10px] text-primary/70">*</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Project Details */}
          <div className="w-full md:w-2/3 flex flex-col relative bg-transparent">
            {/* Terminal Header */}
            <div className="px-4 py-3 border-b border-border/40 dark:border-border/20 flex items-center gap-2 bg-white/50 dark:bg-black/20">
              <Terminal className="size-4 text-muted-foreground" />
              <span className="text-sm font-mono text-muted-foreground">
                cat {selectedRepo?.name.toLowerCase()}.md
              </span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRepo?.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 md:p-8 flex-grow flex flex-col"
              >
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
                    {selectedRepo?.name.replace(/-/g, " ")}
                    {featuredNames.includes(selectedRepo?.name) && (
                      <span className="text-xs font-mono text-primary border border-primary/20 px-2 py-1 rounded-md bg-primary/10 shadow-sm">
                        {t("projects.featured") || "FEATURED"}
                      </span>
                    )}
                  </h3>
                </div>

                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none mb-8 flex-grow">
                  <p className="text-muted-foreground leading-relaxed font-mono">
                    {selectedRepo?.description || t("projects.noDescription")}
                  </p>
                </div>

                {/* Stack */}
                <div className="mb-8">
                  <div className="text-sm font-mono text-muted-foreground mb-3 flex items-center gap-2">
                    <span className="text-primary font-bold">{`>`}</span> stack --list
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo?.languages?.length > 0 ? (
                      selectedRepo.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1.5 text-xs font-mono text-foreground bg-white dark:bg-white/5 border border-border/50 dark:border-border/20 rounded-md shadow-sm"
                        >
                          {lang}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs font-mono text-muted-foreground">{t("projects.noTechStack", "No tech stack listed")}</span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-6 border-t border-border/40 dark:border-border/20 flex gap-4">
                  {selectedRepo?.html_url && (
                    <a
                      href={selectedRepo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-semibold text-primary hover:text-primary-foreground border border-primary/50 hover:border-primary hover:bg-primary transition-all duration-300 rounded-md shadow-sm hover:shadow-md"
                    >
                      [ {t("projects.source", "SOURCE")} ]
                      <FaGithub className="size-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </WindowTile>
      </div>
    </section>
  );
};
