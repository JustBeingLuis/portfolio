import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * WindowTile — Reusable tiling window manager card.
 *
 * Wraps any content inside a "window" that mimics a Hyprland/tiling WM tile.
 * Features: title bar with colored dots, frosted glass background,
 * hover glow, and scroll-triggered entry animation.
 *
 * Props:
 * @param {string} title         — Text displayed in the title bar
 * @param {ReactNode} icon       — Optional Lucide/React-Icon to show before the title
 * @param {string} className     — Additional Tailwind classes for the outer wrapper
 * @param {string} contentClassName — Additional classes for the content area
 * @param {boolean} noPadding    — If true, removes default content padding
 * @param {object} style         — Inline styles for grid-column/grid-row spans
 * @param {ReactNode} children   — The content rendered inside the tile
 * @param {number} delay         — Animation delay in seconds for staggered entry
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
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(
        "window-tile tile-hover-glow overflow-hidden",
        className
      )}
      style={style}
    >
      {/* Title bar — mimics a window manager title bar */}
      {title && (
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50">
          {/* Colored dots (macOS/Hyprland style) */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>

          {/* Icon + Title */}
          {Icon && <Icon className="size-3.5 text-muted" />}
          <span className="text-xs font-mono text-muted tracking-wide truncate">
            {title}
          </span>
        </div>
      )}

      {/* Content area */}
      <div className={cn(!noPadding && "p-5 sm:p-6", contentClassName)}>
        {children}
      </div>
    </motion.div>
  );
};
