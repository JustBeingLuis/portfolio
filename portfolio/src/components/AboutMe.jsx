import { Terminal, User, MapPin, GraduationCap, Sparkles, Cpu, Check } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { WindowTile } from "@/components/WindowTile";

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-primary/80 border border-primary/20 rounded-full bg-primary/5 mb-6 shadow-sm">
            <User className="size-3.5" />
            <span>Profile.jsx</span>
          </div>
          <h2 className="section-heading mb-4">
            {t("about.title1")}{" "}
            <span className="text-primary">{t("about.title2")}</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Bento Split-Pane Interface */}
        <WindowTile
          title="~/profile/sys-eng.jsx"
          icon={Terminal}
          delay={0.1}
          noPadding
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Left Pane: Identity Sidebar */}
            <div className="w-full md:w-[35%] bg-gradient-to-br from-white to-zinc-50/80 dark:from-zinc-900/50 dark:to-zinc-950/50 border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-primary/10 rounded-bl-full -z-10" />

              <div className="z-10">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 shadow-xl shadow-black/5 dark:shadow-none border border-black/5 dark:border-white/10 flex items-center justify-center mb-6">
                  <User className="size-8 text-primary" />
                </div>
                
                <h3 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                  {t("about.professionTitle")}
                </h3>
                
                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-8">
                  {t("about.systemEngineer")}
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800/50 shadow-md shadow-black/5 dark:shadow-none border border-black/5 dark:border-white/5 flex items-center justify-center shrink-0">
                      <MapPin className="size-4 text-primary/80" />
                    </div>
                    <span className="text-sm font-medium">{t("about.location")}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800/50 shadow-md shadow-black/5 dark:shadow-none border border-black/5 dark:border-white/5 flex items-center justify-center shrink-0">
                      <GraduationCap className="size-4 text-primary/80" />
                    </div>
                    <span className="text-sm font-medium">{t("about.university")}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800/50 shadow-md shadow-black/5 dark:shadow-none border border-black/5 dark:border-white/5 flex items-center justify-center shrink-0">
                      <Terminal className="size-4 text-primary/80" />
                    </div>
                    <span className="text-sm font-medium">{t("about.bilingual")}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 z-10">
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-black/40 border border-black/5 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-none backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/80" />
                  <p className="text-xs text-muted-foreground font-mono italic pl-2">
                    {t("about.quote")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Pane: Bento Content */}
            <div className="w-full md:w-[65%] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white/40 dark:bg-transparent">
              {/* About Description Block */}
              <div className="col-span-1 sm:col-span-2 p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 shadow-2xl shadow-black/5 dark:shadow-none transition-all duration-300 hover:-translate-y-1">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Sparkles className="size-5" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{t("about.professionalProfile")}</h4>
                 </div>
                 <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                   {t("about.description")}
                 </p>
              </div>

              {/* Education Track Block */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 shadow-2xl shadow-black/5 dark:shadow-none transition-all duration-300 hover:-translate-y-1">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <GraduationCap className="size-5" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{t("about.educationTitle")}</h4>
                 </div>
                 
                 <div className="space-y-6">
                   <div className="relative pl-6 before:absolute before:left-[9px] before:top-2 before:bottom-[-24px] before:w-[2px] before:bg-primary/20 last:before:hidden">
                     <div className="absolute w-5 h-5 rounded-full bg-white dark:bg-zinc-900 border-[3px] border-primary -left-[0px] top-0 shadow-sm" />
                     <p className="font-bold text-foreground text-sm mb-1">{t("about.msc")}</p>
                     <p className="text-xs font-bold tracking-wide text-primary mb-1 uppercase">{t("about.present")}</p>
                     <p className="text-xs font-medium text-muted-foreground">{t("about.university")}</p>
                   </div>
                   <div className="relative pl-6">
                     <div className="absolute w-5 h-5 rounded-full bg-white dark:bg-zinc-900 border-[3px] border-zinc-300 dark:border-zinc-600 -left-[0px] top-0 shadow-sm" />
                     <p className="font-bold text-foreground text-sm mb-1">{t("about.bsc")}</p>
                     <p className="text-xs font-bold tracking-wide text-muted-foreground mb-1">2022 - 2026</p>
                     <p className="text-xs font-medium text-muted-foreground">{t("about.university")}</p>
                   </div>
                 </div>
              </div>

              {/* Core Methodology Block */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 shadow-2xl shadow-black/5 dark:shadow-none transition-all duration-300 hover:-translate-y-1 flex flex-col">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Cpu className="size-5" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{t("about.methodologyTitle")}</h4>
                 </div>
                 
                 <ul className="space-y-4 text-sm text-muted-foreground flex-1">
                    {[
                      { id: 1, fallback: "Rigorous Applied Research (IA & ML)" },
                      { id: 2, fallback: "Data-Driven Problem Solving" },
                      { id: 3, fallback: "Modern Web Development (React, Tailwind)" },
                      { id: 4, fallback: "Optimized & Scalable Architectures" }
                    ].map((item) => (
                      <li key={item.id} className="flex items-start gap-3">
                        <div className="mt-0.5 p-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-500 shrink-0">
                          <Check className="size-3 stroke-[3]" />
                        </div>
                        <span className="font-medium leading-snug pt-0.5">{t(`about.methodology.${item.id}`, item.fallback)}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>
        </WindowTile>
      </div>
    </section>
  );
};
