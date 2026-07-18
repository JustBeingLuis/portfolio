# Terminal Portfolio Interface

## Abstract
A web-based portfolio featuring a unified terminal-emulator interface. The system replaces traditional web navigation and scroll-based layouts with a command-line interface paradigm. Users interact with the environment via pseudo-commands to fetch sections (e.g., Hero, About, Projects, Contact), rendering content dynamically within a persistent shell view.

## Architecture
The application is structured as a single-page application (SPA) using React. The core layout relies on a centralized `TerminalShell` component that manages state and layout constraints. Content injection is handled via modular components representing discrete terminal outputs.

Key design decisions:
- **Unified Shell Layout:** Eliminates vertical scrolling in favor of a fixed-viewport terminal interface.
- **Dynamic Content Rendering:** Sections are swapped seamlessly without page reloads, mimicking the execution of sequential terminal commands.
- **Command Palette Integration:** A global keyboard shortcut (`Ctrl+K`) triggers a command palette for rapid navigation, maintaining the CLI-centric workflow.
- **Internationalization:** Multi-language support (English/Spanish) is integrated via `react-i18next`.

## Technical Specifications
- **Core Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (with custom CSS variables for theme generation)
- **Animation:** Framer Motion
- **Typography & Icons:** Google Fonts (Inter, JetBrains Mono), Lucide React, React Icons
- **Internationalization:** i18next

## Installation and Execution

### Prerequisites
- Node.js (>= 18.0.0 recommended)
- npm (Node Package Manager)

### Setup
1. Clone the repository and navigate into the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Directory Structure
- `src/components`: Reusable UI modules (`TerminalShell`, `FastFetch`, `BootSequence`, etc.).
- `src/pages`: Top-level routing views (`Home`, `NotFound`).
- `src/locales`: JSON dictionaries handling string translations.
- `src/config`: Static configuration files (e.g., ASCII art payloads).
- `src/hooks`: Custom React hooks for cross-component logic.


