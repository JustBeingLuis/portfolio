import { useEffect, useState } from "react";

// Función para obtener colores específicos por lenguaje
const getLanguageColor = (lang) => {
  const colors = {
    JavaScript: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    TypeScript: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    Python: "bg-green-500/10 text-green-600 border-green-500/20",
    HTML: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    CSS: "bg-blue-400/10 text-blue-500 border-blue-400/20",
    React: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    Vue: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    Java: "bg-red-500/10 text-red-600 border-red-500/20",
    "C++": "bg-purple-500/10 text-purple-600 border-purple-500/20",
    "C#": "bg-violet-500/10 text-violet-600 border-violet-500/20",
    PHP: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    Ruby: "bg-red-400/10 text-red-500 border-red-400/20",
    Go: "bg-cyan-400/10 text-cyan-500 border-cyan-400/20",
    Rust: "bg-orange-600/10 text-orange-700 border-orange-600/20",
    Swift: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    Kotlin: "bg-purple-600/10 text-purple-700 border-purple-600/20",
    Dart: "bg-blue-600/10 text-blue-700 border-blue-600/20",
    SCSS: "bg-pink-500/10 text-pink-600 border-pink-500/20",
    Less: "bg-blue-700/10 text-blue-800 border-blue-700/20",
    Sass: "bg-pink-500/10 text-pink-600 border-pink-500/20",
  };
  return colors[lang] || "bg-primary/10 text-primary border-primary/20";
};

export const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/JustBeingLuis/repos"
        );
        const data = await response.json();

        const filteredRepos = data.filter(
          (repo) => repo.name !== "JustBeingLuis"
        );

        // Obtener los lenguajes para cada repositorio
        const reposWithLanguages = await Promise.all(
          filteredRepos.map(async (repo) => {
            try {
              const languagesResponse = await fetch(repo.languages_url);
              const languages = await languagesResponse.json();

              // Convertir el objeto de lenguajes en un array ordenado por uso
              const languageArray = Object.entries(languages)
                .sort(([, a], [, b]) => b - a)
                .map(([lang]) => lang);

              return {
                ...repo,
                languages: languageArray,
              };
            } catch (error) {
              console.error(
                `Error fetching languages for ${repo.name}:`,
                error
              );
              return {
                ...repo,
                languages: repo.language ? [repo.language] : [],
              };
            }
          })
        );

        setRepos(reposWithLanguages);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-6 
                           shadow-lg animate-pulse"
              >
                <div className="h-6 bg-primary/20 rounded mb-4"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-primary/10 rounded"></div>
                  <div className="h-4 bg-primary/10 rounded w-3/4"></div>
                </div>
                {/* Language tags skeleton */}
                <div className="flex gap-2 mb-4">
                  <div className="h-6 bg-primary/15 rounded-full w-16"></div>
                  <div className="h-6 bg-primary/15 rounded-full w-20"></div>
                  <div className="h-6 bg-primary/15 rounded-full w-12"></div>
                </div>
                <div className="h-8 bg-primary/20 rounded w-32"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <div
                key={repo.id}
                className="group relative bg-card/50 backdrop-blur-sm border border-border/40 rounded-xl p-6 
                         shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 
                         transform hover:scale-[1.02] hover:-translate-y-2 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fade-in 0.6s ease-out forwards",
                }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Border glow effect */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
                />

                <div className="relative z-10">
                  {/* Project title */}
                  <div className="mb-4">
                    <h3
                      className="text-xl font-bold text-foreground group-hover:text-primary 
                                 transition-colors duration-300 capitalize"
                    >
                      {repo.name.replace(/-/g, " ")}
                    </h3>
                    <div
                      className="w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent 
                                  scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-6 flex-grow">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {repo.description ||
                        "This project does not have a description available."}
                    </p>
                  </div>

                  {/* Language indicators */}
                  {repo.languages && repo.languages.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {repo.languages
                          .slice(0, 4)
                          .map((language, langIndex) => (
                            <span
                              key={langIndex}
                              className={`inline-block px-2 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-110 ${getLanguageColor(
                                language
                              )}`}
                              title={language}
                            >
                              {language}
                            </span>
                          ))}
                        {repo.languages.length > 4 && (
                          <span
                            className="inline-block px-2 py-1 text-xs font-medium bg-gray-500/10 text-gray-600 border border-gray-500/20 rounded-full cursor-help"
                            title={`Otros lenguajes: ${repo.languages
                              .slice(4)
                              .join(", ")}`}
                          >
                            +{repo.languages.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action button */}
                  <div className="flex items-center justify-between">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary 
                               border border-primary/30 rounded-lg hover:bg-primary hover:text-primary-foreground 
                               transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
                    >
                      <svg
                        className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Ver Repositorio
                    </a>

                    {/* GitHub stars if available */}
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <svg
                          className="w-3 h-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {repo.stargazers_count}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
