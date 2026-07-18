import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import reposData from "@/../data/repos.json";
import { FaGithub } from "react-icons/fa";
import { Terminal, FolderOpen, FileCode, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

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
      className="w-full h-full flex flex-col md:flex-row bg-[hsl(var(--card))]/40 border border-[hsl(var(--border))]/40 rounded-xl overflow-hidden min-h-[500px]"
    >
      {/* Left Column: File Tree */}
      <motion.div variants={itemVariants} className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-[hsl(var(--border))]/40 flex flex-col bg-[hsl(var(--muted))]/30">
        <div className="px-4 py-3 border-b border-[hsl(var(--border))]/40 flex items-center gap-2 bg-[hsl(var(--muted))]/50">
          <FolderOpen className="size-4 text-[hsl(var(--primary))]" />
          <span className="text-sm font-mono font-bold text-[hsl(var(--foreground))]">~/projects</span>
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
                    ? "bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))] font-bold shadow-sm" 
                    : "text-[hsl(var(--muted-foreground))] hover:bg-black/5 dark:hover:bg-white/5 hover:text-[hsl(var(--foreground))]"
                )}
              >
                {isSelected ? <ChevronRight className="size-3 text-[hsl(var(--primary))]" /> : <FileCode className="size-3 opacity-60" />}
                <span className="truncate">{repo.name}</span>
                {isFeatured && !isSelected && (
                  <span className="ml-auto text-[10px] text-[hsl(var(--primary))]/70">*</span>
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Right Column: Project Details */}
      <motion.div variants={itemVariants} className="w-full md:w-2/3 flex flex-col relative bg-transparent">
        {/* Terminal Header */}
        <div className="px-4 py-3 border-b border-[hsl(var(--border))]/40 flex items-center gap-2 bg-white/50 dark:bg-black/20">
          <Terminal className="size-4 text-[hsl(var(--muted-foreground))]" />
          <span className="text-sm font-mono text-[hsl(var(--muted-foreground))]">
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
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-3 flex items-center gap-3">
                {selectedRepo?.name.replace(/-/g, " ")}
                {featuredNames.includes(selectedRepo?.name) && (
                  <span className="text-xs font-mono text-[hsl(var(--primary))] border border-[hsl(var(--primary))]/20 px-2 py-1 rounded-md bg-[hsl(var(--primary))]/10 shadow-sm">
                    {t("projects.featured") || "FEATURED"}
                  </span>
                )}
              </h3>
            </div>

            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none mb-8 flex-grow">
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed font-mono">
                {selectedRepo?.description || t("projects.noDescription")}
              </p>
            </div>

            {/* Stack */}
            <div className="mb-8">
              <div className="text-sm font-mono text-[hsl(var(--muted-foreground))] mb-3 flex items-center gap-2">
                <span className="text-[hsl(var(--primary))] font-bold">{`>`}</span> stack --list
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedRepo?.languages?.length > 0 ? (
                  selectedRepo.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1.5 text-xs font-mono text-[hsl(var(--foreground))] bg-[hsl(var(--card))] border border-[hsl(var(--border))]/50 rounded-md shadow-sm"
                    >
                      {lang}
                    </span>
                  ))
                ) : (
                  <span className="text-xs font-mono text-[hsl(var(--muted-foreground))]">{t("projects.noTechStack", "No tech stack listed")}</span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-6 border-t border-[hsl(var(--border))]/40 flex gap-4">
              {selectedRepo?.html_url && (
                <a
                  href={selectedRepo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-sm font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] border border-[hsl(var(--primary))]/50 hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] transition-all duration-300 rounded-md shadow-sm hover:shadow-md"
                >
                  [ {t("projects.source", "SOURCE")} ]
                  <FaGithub className="size-4" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
