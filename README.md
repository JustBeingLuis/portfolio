# Portfolio – Luis Toscano-Palomino

Welcome to my personal portfolio, developed with **React**, **Tailwind CSS**, and **Vite**. Here you will find a showcase of my projects, skills, and experience in web development and data science.

## 🚀 Main Technologies

- **React** – Modern and dynamic UI
- **Tailwind CSS** – Fast and customizable styling
- **Vite** – Ultra-fast build and development
- **Python** – Automation and backend
- **GitHub Actions** – Automatic project updates

## 📁 Project Structure

```
portfolio/
├── data/
│   └── repos.json           # Projects automatically fetched from GitHub
├── public/
│   └── vite.svg
├── src/
│   ├── assets/              # Images and resources
│   ├── components/          # Reusable components
│   ├── lib/                 # JS utilities
│   ├── pages/               # Main pages
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Main entry point
│   └── index.css            # Global styles
├── .github/
│   └── workflows/           # GitHub Actions to update repos.json
├── package.json
├── vite.config.js
└── README.md
```

## 🛠 Installation and Local Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JustBeingLuis/portfolio.git
   cd portfolio/portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**  
   [http://localhost:5173](http://localhost:5173)

## 🔄 Automatic Project Updates

The [`data/repos.json`](data/repos.json) file is automatically updated with each push to the `main` branch and on the 15th of every month at 00:00 UTC, thanks to a GitHub Actions workflow that runs the [`gitFetch.py`](../gitFetch.py) script.

## 📦 Main Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint

## ✨ Features

- **Projects:** Dynamically listed from your GitHub using a static JSON file.
- **Skills:** Interactive visualization of your skills and tools.
- **Contact:** Functional form and social media links.
- **Dark/Light Theme:** Switch themes with one click.
- **Animations:** Modern interface with visual effects.

## 📄 License

This project is licensed under the MIT License.

---

**Luis Toscano-Palomino**  
[GitHub](https://github.com/JustBeingLuis) •
