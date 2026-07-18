import { Terminal, User, MapPin, GraduationCap, Sparkles, Cpu, Check } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t } = useTranslation();

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
      className="w-full flex flex-col md:flex-row min-h-[500px] bg-transparent"
    >
      {/* Left Pane: Identity Sidebar */}
      <motion.div variants={itemVariants} className="w-full md:w-[35%] lg:w-[30%] bg-gradient-to-br from-white/10 to-zinc-50/5 dark:from-zinc-900/20 dark:to-zinc-950/20 border-r border-[hsl(var(--border))/0.2] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden rounded-xl md:rounded-r-none md:rounded-l-xl">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--primary))]/5 rounded-bl-full -z-10" />

        <div className="z-10">
          <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--card))] shadow-xl shadow-black/5 dark:shadow-none border border-[hsl(var(--border))]/30 flex items-center justify-center mb-6">
            <User className="size-8 text-[hsl(var(--primary))]" />
          </div>
          
          <h3 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] mb-2">
            {t("about.professionTitle")}
          </h3>
          
          <p className="text-[hsl(var(--primary))] font-bold text-sm tracking-widest uppercase mb-8">
            {t("about.systemEngineer")}
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 text-[hsl(var(--muted-foreground))]">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--card))] shadow-md shadow-black/5 dark:shadow-none border border-[hsl(var(--border))]/30 flex items-center justify-center shrink-0">
                <MapPin className="size-4 text-[hsl(var(--primary))]/80" />
              </div>
              <span className="text-sm font-medium">{t("about.location")}</span>
            </div>
            
            <div className="flex items-center gap-4 text-[hsl(var(--muted-foreground))]">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--card))] shadow-md shadow-black/5 dark:shadow-none border border-[hsl(var(--border))]/30 flex items-center justify-center shrink-0">
                <GraduationCap className="size-4 text-[hsl(var(--primary))]/80" />
              </div>
              <span className="text-sm font-medium">{t("about.university")}</span>
            </div>
            
            <div className="flex items-center gap-4 text-[hsl(var(--muted-foreground))]">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--card))] shadow-md shadow-black/5 dark:shadow-none border border-[hsl(var(--border))]/30 flex items-center justify-center shrink-0">
                <Terminal className="size-4 text-[hsl(var(--primary))]/80" />
              </div>
              <span className="text-sm font-medium">{t("about.bilingual")}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 z-10">
          <div className="p-4 rounded-2xl bg-[hsl(var(--card))]/80 border border-[hsl(var(--border))]/30 shadow-xl shadow-black/5 dark:shadow-none backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[hsl(var(--primary))]/80" />
            <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono italic pl-2">
              {t("about.quote")}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Pane: Bento Content */}
      <motion.div variants={itemVariants} className="w-full md:w-[65%] lg:w-[70%] p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* About Description Block */}
        <div className="col-span-1 lg:col-span-2 p-6 sm:p-8 rounded-xl bg-[hsl(var(--card))]/60 border border-[hsl(var(--border))]/30 shadow-lg shadow-black/5 transition-all duration-300 hover:border-[hsl(var(--primary))]/30 hover:bg-[hsl(var(--card))]/80">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                <Sparkles className="size-5" />
              </div>
              <h4 className="text-xl font-bold text-[hsl(var(--foreground))]">{t("about.professionalProfile")}</h4>
            </div>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm sm:text-base">
              {t("about.description")}
            </p>
        </div>

        {/* Education Track Block */}
        <div className="p-6 sm:p-8 rounded-xl bg-[hsl(var(--card))]/60 border border-[hsl(var(--border))]/30 shadow-lg shadow-black/5 transition-all duration-300 hover:border-[hsl(var(--primary))]/30 hover:bg-[hsl(var(--card))]/80">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                <GraduationCap className="size-5" />
              </div>
              <h4 className="text-lg font-bold text-[hsl(var(--foreground))]">{t("about.educationTitle")}</h4>
            </div>
            
            <div className="space-y-6">
              <div className="relative pl-6 before:absolute before:left-[9px] before:top-2 before:bottom-[-24px] before:w-[2px] before:bg-[hsl(var(--primary))]/20 last:before:hidden">
                <div className="absolute w-5 h-5 rounded-full bg-[hsl(var(--card))] border-[3px] border-[hsl(var(--primary))] -left-[0px] top-0 shadow-sm" />
                <p className="font-bold text-[hsl(var(--foreground))] text-sm mb-1">{t("about.msc")}</p>
                <p className="text-xs font-bold tracking-wide text-[hsl(var(--primary))] mb-1 uppercase">{t("about.present")}</p>
                <p className="text-xs font-medium text-[hsl(var(--muted-foreground))]">{t("about.university")}</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute w-5 h-5 rounded-full bg-[hsl(var(--card))] border-[3px] border-zinc-400 dark:border-zinc-600 -left-[0px] top-0 shadow-sm" />
                <p className="font-bold text-[hsl(var(--foreground))] text-sm mb-1">{t("about.bsc")}</p>
                <p className="text-xs font-bold tracking-wide text-[hsl(var(--muted-foreground))] mb-1">2022 - 2026</p>
                <p className="text-xs font-medium text-[hsl(var(--muted-foreground))]">{t("about.university")}</p>
              </div>
            </div>
        </div>

        {/* Core Methodology Block */}
        <div className="p-6 sm:p-8 rounded-xl bg-[hsl(var(--card))]/60 border border-[hsl(var(--border))]/30 shadow-lg shadow-black/5 transition-all duration-300 hover:border-[hsl(var(--primary))]/30 hover:bg-[hsl(var(--card))]/80 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]">
                <Cpu className="size-5" />
              </div>
              <h4 className="text-lg font-bold text-[hsl(var(--foreground))]">{t("about.methodologyTitle")}</h4>
            </div>
            
            <ul className="space-y-4 text-sm text-[hsl(var(--muted-foreground))] flex-1">
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
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
