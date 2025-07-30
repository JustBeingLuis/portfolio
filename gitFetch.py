import requests
import json

username = "JustBeingLuis"
url = f"https://api.github.com/users/{username}/repos"
OUTPUT_FILE = "./portfolio/data/repos.json"

try:
    response = requests.get(url)
    response.raise_for_status()
    repos = response.json()

    filtered_repos = [repo for repo in repos if repo["name"] != username]

    repos_with_languages = []
    for repo in filtered_repos:
        try:
            lang_response = requests.get(repo["languages_url"])
            lang_response.raise_for_status()
            languages = lang_response.json()
            language_array = [lang for lang, _ in sorted(languages.items(), key=lambda x: x[1], reverse=True)]
        except Exception:
            language_array = [repo["language"]] if repo["language"] else []
        repos_with_languages.append({
            "name": repo["name"],
            "html_url": repo["html_url"],
            "languages": language_array,
            "description": repo["description"]
        })

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(repos_with_languages, f, ensure_ascii=False, indent=2)
    print(f"Repositorios guardados en {OUTPUT_FILE}")
except Exception as e:
    print("Error fetching repositories:", e)