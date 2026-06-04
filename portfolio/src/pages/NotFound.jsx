import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <h1 className="text-8xl sm:text-9xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-foreground font-medium mb-2">
        Page not found
      </p>
      <p className="text-muted text-center max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="accent-button inline-flex items-center gap-2 text-sm"
      >
        <ArrowLeft className="size-4" />
        Back to Home
      </a>
    </div>
  );
};