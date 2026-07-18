import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Copy, Check, Terminal } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { WindowTile } from "@/components/WindowTile";
/**
 * Contact — Terminal interactive panel.
 *
 * Layout:
 * - Terminal UI
 * - Simulated `curl --socials` command
 * - Simulated `grep -i "email" contact.txt` command
 */

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

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 relative font-mono">
      <div className="container mx-auto max-w-4xl">
        {/* Terminal Window */}
        <WindowTile
          title="~/contact"
          icon={Terminal}
          className="bg-card dark:bg-[#0A0A0A]"
          noPadding
        >
          {/* Terminal Body */}
          <div className="p-6 sm:p-8 text-sm sm:text-base">
            <div className="mb-6">
              <span className="text-primary font-bold">luism@sys-dev</span>
              <span className="text-muted">:$ ~ </span>
              <span className="text-foreground">curl --socials</span>
            </div>

            <div className="space-y-4 mb-8 pl-0 sm:pl-4">
              <div className="text-muted mb-4">{t("contact.subtitle")}</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target={link.href.startsWith("tel:") ? undefined : "_blank"}
                    rel={link.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 border border-primary/20 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                      <link.Icon className={cn("size-5", link.color)} />
                    </div>
                    <div>
                      <div className="text-muted text-xs uppercase tracking-wider">{link.label}</div>
                      <div className="text-foreground font-semibold group-hover:text-primary transition-colors">{link.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <span className="text-primary font-bold">luism@sys-dev</span>
              <span className="text-muted">:$ ~ </span>
              <span className="text-foreground">grep -i "email" contact.txt</span>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="pl-0 sm:pl-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-primary/20 rounded-lg bg-primary/5">
                <div className="flex items-center gap-3 mb-4 sm:mb-0">
                  <Mail className="size-5 text-primary" />
                  <div>
                    <div className="text-muted text-xs uppercase tracking-wider">{t("contact.reachMe")}</div>
                    <a href={`mailto:${EMAIL}`} className="text-foreground font-semibold hover:text-primary transition-colors break-all">
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
                        : "border-primary/30 text-foreground hover:border-primary hover:bg-primary/10"
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
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-semibold"
                  >
                    {t("contact.sendEmail")}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-2 text-muted text-sm border-t border-primary/20 pt-4"
            >
              <MapPin className="size-4 text-primary" />
              <span>{t("contact.basedIn")} <strong className="text-foreground">{t("contact.locationValue")}</strong></span>
              <span className="mx-2 opacity-50 hidden sm:inline">|</span>
              <span className="hidden sm:inline">{t("contact.remote")}</span>
            </motion.div>

          </div>
        </WindowTile>
      </div>
    </section>
  );
};
