import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/Contact";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
    </div>
  );
};
