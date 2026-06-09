import {
  Briefcase,
  Code,
  User,
  Download,
  MapPin,
  Calendar,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import { motion } from "motion/react";
import { WindowTile } from "@/components/WindowTile";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

/**
 * AboutMe — Bento grid layout split into multiple window tiles.
 *
 * Instead of one monolithic card, the About section is now 4 tiles:
 * 1. Main bio (large, spans 2 cols on desktop)
 * 2. Education (M.Sc. + B.Sc.)
 * 3. Core Competencies (tags)
 * 4. Focus Areas (Research + Dev roles)
 *
 * Each tile enters the viewport with a staggered animation.
 */

const competenciesKeys = [
  "problemSolving",
  "research",
  "leadership",
  "teamCollab",
  "criticalThinking",
  "innovation",
];

export const AboutMe = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <section id="about" className="py-20 sm:py-24 px-4 relative">
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
            <span className="text-muted">$</span> cat about.txt
          </div>
          <h2 className="section-heading mb-4">
            {t("about.title1")}{" "}
            <span className="text-primary">{t("about.title2")}</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Tile 1: Main Bio — spans 2 cols */}
          <WindowTile
            title="about.md"
            icon={User}
            className="md:col-span-2"
            delay={0}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
              {t("about.professionTitle")}
            </h3>
            <p className="text-primary font-medium text-sm mb-4">
              {t("about.university")}
            </p>

            <p className="text-muted leading-relaxed mb-6 text-sm sm:text-base">
              {t("about.description")}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                <span>{t("about.location")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-primary" />
                <span>{t("about.available")}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="accent-button inline-flex items-center justify-center gap-2 text-sm"
              >
                {t("about.contactBtn")}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/137OgM-7sPz8rndY-7iry-zW74Xpc399M/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 font-medium text-sm"
              >
                <Download className="w-4 h-4" />
                {t("about.downloadBtn")}
              </a>
            </div>
          </WindowTile>

          {/* Tile 2: Education — single col */}
          <WindowTile title="education.log" icon={GraduationCap} delay={0.1}>
            <div className="space-y-5">
              {/* M.Sc. */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <GraduationCap className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {t("about.msc")}
                  </h4>
                  <p className="text-xs text-muted mt-0.5">
                    {t("about.university")}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    2026 - {t("about.present")}
                  </span>
                </div>
              </div>

              {/* B.Sc. */}
              <div className="border-t border-border/40 pt-5" />
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Code className="size-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {t("about.bsc")}
                  </h4>
                  <p className="text-xs text-muted mt-0.5">
                    {t("about.university")}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-mono px-2 py-0.5 rounded bg-muted/10 text-muted border border-border/50">
                    2022 - 2026
                  </span>
                </div>
              </div>
            </div>
          </WindowTile>

          {/* Tile 3: Core Competencies */}
          <WindowTile title="competencies.json" delay={0.15}>
            <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
              {t("about.coreCompetencies")}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {competenciesKeys.map((key) => (
                <motion.span
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className="px-2.5 py-1 text-xs text-muted border border-border/50 rounded-md bg-background/30 hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {t(`about.competencies.${key}`)}
                </motion.span>
              ))}
            </div>
          </WindowTile>

          {/* Tile 4: Focus Areas — spans 2 cols */}
          <WindowTile
            title="focus-areas.conf"
            className="md:col-span-2"
            delay={0.2}
          >
            <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
              {t("about.focusAreas")}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border/30 hover:border-primary/20 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <FlaskConical className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {t("hero.roles.research")}
                  </p>
                  <p className="text-xs text-muted font-mono">
                    {t("about.researchSub")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border/30 hover:border-primary/20 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Briefcase className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {t("hero.roles.dev")}
                  </p>
                  <p className="text-xs text-muted font-mono">
                    {t("about.devSub")}
                  </p>
                </div>
              </div>
            </div>
          </WindowTile>
        </motion.div>
      </div>
    </section>
  );
};
