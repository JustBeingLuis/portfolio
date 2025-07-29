export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-2 px-4 border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          {/* Main Footer Text */}
          <div className="space-y-2">
            <p className="text-muted-foreground">
              &copy; {currentYear} Luis Toscano-Palomino. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/80">
              Made with ❤️ using{" "}
              <span className="text-primary font-medium">React</span>,{" "}
              <span className="text-primary font-medium">Tailwind CSS</span> &{" "}
              <span className="text-primary font-medium">Vite</span>
            </p>
          </div>

          {/* Decorative line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"></div>
        </div>
      </div>
    </footer>
  );
};
