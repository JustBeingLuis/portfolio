import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">
              Passionate Computer Science Student
            </h3>

            <p className="text-muted-foreground">
              I am a computer science student at the Universidad Industrial de
              Santander with a strong research vocation and an interdisciplinary
              vision that bridges science and technology. I stand out for
              combining technical analysis with creative and leadership skills,
              actively participating in research, development, and academic
              collaboration initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>

              <a
                href="https://drive.google.com/file/d/137OgM-7sPz8rndY-7iry-zW74Xpc399M/view?usp=sharing"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="size-6 text-primary" />
                </div>
                <div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">
                      Computer Science Student
                    </h4>
                    <p className="text-muted-foreground">
                      Universidad Industrial de Santander
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="size-6 text-primary" />
                </div>
                <div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">
                      Applied Researcher
                    </h4>
                    <p className="text-muted-foreground">
                      AI & Optimization problems, Data Science, and Deep
                      Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="size-6 text-primary" />
                </div>
                <div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">
                      Frontend Developer
                    </h4>
                    <p className="text-muted-foreground">
                      React, Tailwind, JavaScript, SQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
