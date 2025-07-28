export const StarBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Multi-layered Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-primary/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-primary/20" />
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-primary/15" />

      {/* Animated Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-70" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse delay-1000 opacity-60" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-primary/12 rounded-full blur-2xl animate-pulse delay-500 opacity-80" />
      <div className="absolute bottom-1/3 left-2/3 w-64 h-64 bg-primary/6 rounded-full blur-3xl animate-pulse delay-700 opacity-50" />
      <div className="absolute top-2/3 right-1/4 w-40 h-40 bg-primary/15 rounded-full blur-xl animate-pulse delay-300 opacity-70" />

      {/* Floating Particles */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-3/4 left-3/4 w-1 h-1 bg-primary/40 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />
      <div
        className="absolute top-1/6 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-primary/40 rounded-full animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
      />

      {/* Star-like Elements */}
      <div className="absolute top-20 right-20 w-1 h-8 bg-primary/30 rotate-45 rounded-full opacity-60" />
      <div className="absolute top-20 right-20 w-8 h-1 bg-primary/30 rotate-45 rounded-full opacity-60" />

      <div className="absolute bottom-40 left-32 w-1 h-6 bg-primary/25 rotate-12 rounded-full opacity-50" />
      <div className="absolute bottom-40 left-32 w-6 h-1 bg-primary/25 rotate-12 rounded-full opacity-50" />

      <div className="absolute top-60 left-1/2 w-1 h-4 bg-primary/35 -rotate-12 rounded-full opacity-70" />
      <div className="absolute top-60 left-1/2 w-4 h-1 bg-primary/35 -rotate-12 rounded-full opacity-70" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-soft-light">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>
    </div>
  );
};
