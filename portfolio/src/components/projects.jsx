import { useEffect, useState } from "react";

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/JustBeingLuis/repos"
        );
        const data = await response.json();

        // Filtrar el repositorio que deseas ignorar
        const filteredRepos = data.filter(
          (repo) => repo.name !== "JustBeingLuis"
        );

        setRepos(filteredRepos);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <p className="text-sm text-muted-foreground">
                {repo.description}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
