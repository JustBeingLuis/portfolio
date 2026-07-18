import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const EMAIL = "luismariotoscanopalomino@gmail.com";

export const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const socialLinks = [
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/luistoscanop",
      Icon: FaLinkedinIn,
      label: "LinkedIn",
      value: "luistoscanop",
      color: "text-[#0077b5]"
    },
    {
      id: "github",
      href: "https://github.com/JustBeingLuis",
      Icon: FaGithub,
      label: "GitHub",
      value: "JustBeingLuis",
      color: "text-foreground"
    },
    {
      id: "scholar",
      href: "https://scholar.google.com/citations?user=AQ_grM8AAAAJ&hl=es",
      Icon: GoogleScholarIcon,
      label: "Scholar",
      value: t("contact.publications", "Publications"),
      color: "text-[#4285F4]"
    },
    {
      id: "phone",
      href: "tel:+573150571959",
      Icon: Phone,
      label: t("contact.phone", "Phone"),
      value: "+57 315 0571959",
      color: "text-emerald-500"
    },
  ];

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
      className="w-full h-full flex flex-col justify-center font-mono"
    >
      <div className="w-full max-w-4xl mx-auto space-y-8 text-sm sm:text-base">
        
        {/* Command 1 */}
        <motion.div variants={itemVariants}>
          <div className="mb-4">
            <span className="text-[hsl(var(--primary))] font-bold">luism@sys-dev</span>
            <span className="text-[hsl(var(--muted))]">:$ ~ </span>
            <span className="text-[hsl(var(--foreground))]">curl --socials</span>
          </div>

          <div className="pl-0 sm:pl-4">
            <div className="text-[hsl(var(--muted-foreground))] mb-4">{t("contact.subtitle")}</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((link, i) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={link.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-4 p-4 border border-[hsl(var(--primary))]/20 rounded-lg hover:border-[hsl(var(--primary))]/50 hover:bg-[hsl(var(--primary))]/5 transition-all duration-300 group"
                >
                  <div className="p-3 bg-[hsl(var(--primary))]/10 rounded-md group-hover:bg-[hsl(var(--primary))]/20 transition-colors">
                    <link.Icon className={cn("size-5", link.color)} />
                  </div>
                  <div>
                    <div className="text-[hsl(var(--muted-foreground))] text-xs uppercase tracking-wider">{link.label}</div>
                    <div className="text-[hsl(var(--foreground))] font-semibold group-hover:text-[hsl(var(--primary))] transition-colors">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Command 2 */}
        <motion.div variants={itemVariants}>
          <div className="mb-4">
            <span className="text-[hsl(var(--primary))] font-bold">luism@sys-dev</span>
            <span className="text-[hsl(var(--muted))]">:$ ~ </span>
            <span className="text-[hsl(var(--foreground))]">grep -i "email" contact.txt</span>
          </div>

          <div className="pl-0 sm:pl-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-[hsl(var(--primary))]/20 rounded-lg bg-[hsl(var(--primary))]/5">
              <div className="flex items-center gap-3 mb-4 sm:mb-0">
                <Mail className="size-5 text-[hsl(var(--primary))]" />
                <div>
                  <div className="text-[hsl(var(--muted-foreground))] text-xs uppercase tracking-wider">{t("contact.reachMe")}</div>
                  <a href={`mailto:${EMAIL}`} className="text-[hsl(var(--foreground))] font-semibold hover:text-[hsl(var(--primary))] transition-colors break-all">
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                 <button
                  onClick={copyEmail}
                  className={cn(
                    "flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border rounded-md transition-all duration-300 text-sm",
                    copied
                      ? "border-emerald-500/50 text-emerald-500 bg-emerald-500/10"
                      : "border-[hsl(var(--primary))]/30 text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10"
                  )}
                >
                  {copied ? (
                    <>
                      <Check className="size-4" />
                      {t("contact.copied")}
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      {t("contact.copy")}
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-md hover:brightness-110 transition-colors text-sm font-semibold"
                >
                  {t("contact.sendEmail")}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Footer */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 text-[hsl(var(--muted-foreground))] text-sm border-t border-[hsl(var(--primary))]/20 pt-4">
          <MapPin className="size-4 text-[hsl(var(--primary))]" />
          <span>{t("contact.basedIn")} <strong className="text-[hsl(var(--foreground))]">{t("contact.locationValue")}</strong></span>
          <span className="mx-2 opacity-50 hidden sm:inline">|</span>
          <span className="hidden sm:inline">{t("contact.remote")}</span>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Contact;
