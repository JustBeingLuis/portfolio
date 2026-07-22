import requests
import json

username = "JustBeingLuis"
url = f"https://api.github.com/users/{username}/repos"
OUTPUT_FILE = "./portfolio/data/repos.json"

featured_repos = [
    "EscapeFromHADES-Wiki-Web",
    "Robust-Illuminance-Drone-Detection-Using-Modulo-Images",
    "DifussionModelPokemon"
]

try:
    response = requests.get(url)
    response.raise_for_status()
    repos = response.json()

    # Filter to only keep featured ones
    filtered_repos = [repo for repo in repos if repo["name"] in featured_repos]

    repos_data = []
    for repo in filtered_repos:
        try:
            lang_response = requests.get(repo["languages_url"])
            lang_response.raise_for_status()
            languages = lang_response.json()
            language_array = [lang for lang, _ in sorted(languages.items(), key=lambda x: x[1], reverse=True)]
        except Exception:
            language_array = [repo["language"]] if repo.get("language") else []
        
        # banner.png url
        banner_url = f"https://raw.githubusercontent.com/{username}/{repo['name']}/{repo.get('default_branch', 'main')}/banner.png"

        repos_data.append({
            "name": repo["name"],
            "html_url": repo["html_url"],
            "languages": language_array,
            "description": repo["description"],
            "image_url": banner_url
        })

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(repos_data, f, ensure_ascii=False, indent=2)
    print(f"Repositorios guardados en {OUTPUT_FILE}")
except Exception as e:
    print("Error fetching repositories:", e)