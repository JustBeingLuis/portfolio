import {
  Briefcase,
  Code,
  User,
  Download,
  MapPin,
  Calendar,
  Award,
} from "lucide-react";

const competencies = [
  "Problem Solving",
  "Research",
  "Leadership",
  "Team Collaboration",
  "Critical Thinking",
  "Innovation",
];

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my journey, passion, and expertise in technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Personal Info */}
          <div className="space-y-8">
            {/* Main Description Card */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                  <User className="size-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Computer Science Student
                  </h3>
                  <p className="text-primary font-medium">
                    Universidad Industrial de Santander
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a passionate computer science student with a strong
                research vocation and an interdisciplinary vision that bridges
                science and technology. I excel at combining technical analysis
                with creative and leadership skills, actively participating in
                research, development, and academic collaboration initiatives.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="size-4 text-primary" />
                  <span className="text-muted-foreground">
                    Bucaramanga, Colombia
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="size-4 text-primary" />
                  <span className="text-muted-foreground">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium 
                             transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95"
                >
                  <span>Contact Me</span>
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <a
                  href="https://drive.google.com/file/d/137OgM-7sPz8rndY-7iry-zW74Xpc399M/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3 rounded-full border border-primary/30 text-primary 
                             hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-y-0.5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="size-5 text-primary" />
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {competencies.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 
                               hover:bg-primary/20 transition-colors duration-300 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Experience Cards */}
          <div className="space-y-6">
            {/* Education Card */}
            <div
              className="group bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-5 shadow-lg 
                            hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg 
                                group-hover:scale-110 transition-transform duration-300"
                >
                  <Code className="size-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Computer Science Student
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    Universidad Industrial de Santander
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Currently pursuing my degree with focus on software
                    engineering, algorithms, and data structures. Active in
                    research projects.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <Calendar className="size-4 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      2021 - Present
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Card */}
            <div
              className="group bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-5 shadow-lg 
                            hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg 
                                group-hover:scale-110 transition-transform duration-300"
                >
                  <User className="size-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Applied Researcher
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    AI & Optimization, Data Science
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialized in artificial intelligence, optimization
                    problems, data science, and deep learning applications.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs bg-orange-500/10 text-orange-600 rounded-full border border-orange-500/20">
                      AI
                    </span>
                    <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/20">
                      ML
                    </span>
                    <span className="px-2 py-1 text-xs bg-green-500/10 text-green-600 rounded-full border border-green-500/20">
                      Data Science
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Card */}
            <div
              className="group bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-5 shadow-lg 
                            hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center shadow-lg 
                                group-hover:scale-110 transition-transform duration-300"
                >
                  <Briefcase className="size-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    Full Stack Developer
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    Modern Web Technologies
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Creating complete web applications with both frontend and
                    backend technologies, from responsive interfaces to robust
                    server-side solutions.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-600 rounded-full border border-yellow-500/20">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-600 rounded-full border border-cyan-500/20">
                      Tailwind
                    </span>
                    <span className="px-2 py-1 text-xs bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/20">
                      JavaScript
                    </span>
                    <span className="px-2 py-1 text-xs bg-green-500/10 text-green-600 rounded-full border border-green-500/20">
                      Python
                    </span>
                    <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-600 rounded-full border border-purple-500/20">
                      MongoDB
                    </span>
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
