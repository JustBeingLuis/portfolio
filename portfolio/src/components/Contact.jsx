import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoogleScholarIcon } from "@/components/icons/GoogleScholarIcon";
import { WindowTile } from "@/components/WindowTile";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

/**
 * Contact — Bento grid of contact tiles.
 *
 * Layout:
 * - Email CTA tile (large, spans 2 cols)
 * - 4 social link tiles in a row
 * - Location bar tile (full width)
 *
 * Each tile is a WindowTile with staggered entry animations.
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
      href: "https://www.linkedin.com/in/luistoscanop",
      Icon: FaLinkedinIn,
      label: "LinkedIn",
      sub: "luistoscanop",
    },
    {
      href: "https://github.com/JustBeingLuis",
      Icon: FaGithub,
      label: "GitHub",
      sub: "JustBeingLuis",
    },
    {
      href: "https://scholar.google.com/citations?user=AQ_grM8AAAAJ&hl=es",
      Icon: GoogleScholarIcon,
      label: "Scholar",
      sub: t("contact.publications"),
    },
    {
      href: "tel:+573150571959",
      Icon: Phone,
      label: "Phone",
      sub: "+57 315 0571959",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-primary/80 border border-primary/20 rounded-full bg-primary/5 mb-6">
            <span className="text-muted">$</span> mail --compose
          </div>
          <h2 className="section-heading mb-4">
            {t("contact.title1")}{" "}
            <span className="text-primary">{t("contact.title2")}</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* Email CTA — large tile */}
          <WindowTile title="compose.mail" icon={Mail} delay={0}>
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Mail className="size-6 text-primary" />
              </div>
              <p className="text-sm text-muted uppercase tracking-wider font-semibold mb-3">
                {t("contact.reachMe")}
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-lg sm:text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300 block mb-6 break-all"
              >
                {EMAIL}
              </a>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <a
                  href={`mailto:${EMAIL}`}
                  className="accent-button inline-flex items-center gap-2 text-sm"
                >
                  {t("contact.sendEmail")}
                  <ArrowUpRight className="size-4" />
                </a>
                <button
                  onClick={copyEmail}
                  className={cn(
                    "inline-flex items-center gap-2 px-5 py-3 rounded-lg border text-sm font-semibold transition-all duration-300",
                    copied
                      ? "border-emerald-500/40 text-emerald-500 bg-emerald-500/5"
                      : "border-border text-foreground hover:border-primary hover:text-primary"
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
              </div>
            </div>
          </WindowTile>

          {/* Social links — grid of tiles */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("tel:") ? undefined : "_blank"}
                rel={link.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                whileHover={{ y: -3 }}
                className="group window-tile tile-hover-glow p-5 text-center"
              >
                <link.Icon className="size-6 text-muted group-hover:text-primary transition-colors duration-300 mx-auto mb-3" />
                <span className="text-sm font-semibold text-foreground block">
                  {link.label}
                </span>
                <span className="text-xs text-muted mt-1 block group-hover:text-primary transition-colors duration-300">
                  {link.sub}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Location bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="window-tile px-6 py-4 flex items-center justify-center gap-3 flex-wrap"
          >
            <MapPin className="size-4 text-primary shrink-0" />
            <span className="text-sm text-muted">
              {t("contact.basedIn")}{" "}
              <span className="text-foreground font-medium">
                {t("contact.locationValue")}
              </span>
            </span>
            <span className="text-xs text-muted hidden sm:inline">
              {t("contact.remote")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
