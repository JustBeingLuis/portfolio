import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * WindowTile — Reusable tiling window manager card.
 *
 * Wraps any content inside a "window" that mimics a Hyprland/tiling WM tile.
 * Features: title bar with colored dots, frosted glass background,
 * hover glow, and scroll-triggered entry animation.
 */
export const WindowTile = ({
  title,
  icon: Icon,
  className,
  contentClassName,
  noPadding = false,
  style,
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(
        "relative flex flex-col rounded-xl overflow-hidden border",
        // En modo claro: fondo blanco sólido/translúcido, borde sutil, y una súper sombra para dar profundidad.
        // En modo oscuro: negro profundo con borde oscuro.
        "bg-white/95 dark:bg-[#0A0A0A]/90 backdrop-blur-xl",
        "border-border/80 dark:border-primary/20",
        "shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-2xl",
        "transition-all duration-300 hover:border-primary/40 hover:shadow-[0_8px_30px_-5px_hsl(var(--primary)/0.2)]",
        className
      )}
      style={style}
    >
      {/* Title bar — mimics a window manager title bar */}
      {title && (
        <div className="flex items-center px-4 py-3 bg-primary/5 dark:bg-black/40 border-b border-primary/20">
          {/* Colored dots (macOS/Hyprland style) */}
          <div className="flex items-center gap-1.5 mr-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
          </div>

          {/* Icon + Title */}
          <div className="flex items-center gap-2 mx-auto pr-8">
            {Icon && <Icon className="size-4 text-muted" />}
            <span className="text-xs font-mono text-muted tracking-wide truncate font-semibold">
              {title}
            </span>
          </div>
        </div>
      )}

      {/* Content area */}
      <div className={cn("flex-1", !noPadding && "p-5 sm:p-6", contentClassName)}>
        {children}
      </div>
    </motion.div>
  );
};
