/**
 * MeshBackground — CSS-only animated background that replaces the canvas particles.
 *
 * Two layers:
 * 1. Gradient mesh: Subtle animated radial gradients (primary, purple, blue)
 * 2. Grid overlay: Faint tiling WM-style grid lines
 *
 * Much lighter on CPU/GPU than the canvas particle system.
 * All done with CSS classes defined in index.css.
 */
export const MeshBackground = () => {
  return (
    <>
      {/* Animated gradient mesh */}
      <div className="gradient-mesh" aria-hidden="true" />

      {/* Faint grid lines (Hyprland/tiling WM style) */}
      <div className="grid-overlay" aria-hidden="true" />
    </>
  );
};
