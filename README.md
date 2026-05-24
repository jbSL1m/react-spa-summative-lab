# PortfolioPro

A single-page React application that lets a creative agency display, search, and dynamically add portfolio projects.

## Features

- **Project grid** — displays all projects as cards with a title and description
- **Add project form** — submit a new project (title, category, description) and watch it appear instantly at the top of the grid
- **Live search** — filters the project list in real time by title or category as you type
- **No-results state** — shows a friendly message when the search finds nothing

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI / state management |
| Vite | Dev server and bundler |
| Vitest + Testing Library | Unit tests |
| ESLint | Code quality |

## Setup

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/jbSL1m/react-spa-summative-lab.git
cd react-spa-summative-lab

# 2. Install dependencies
npm install

# 3. Start the dev server (opens browser automatically)
npm run dev
```

Other available scripts:

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run test     # run the Vitest test suite
npm run lint     # run ESLint
```

## Usage

1. Open `http://localhost:5173` in your browser after running `npm run dev`.
2. The page loads with three sample projects pre-loaded.
3. Use the **search bar** to filter projects by title or category.
4. Use the **Add Project** form on the left to submit a new project — the title field is required.
5. New projects appear at the top of the grid immediately without a page reload.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Site header / branding
│   ├── AddProjectForm.jsx  # Controlled form for adding projects
│   ├── ProjectList.jsx     # Search bar + filtered project grid
│   ├── ProjectCard.jsx     # Individual project display card
│   └── SearchBar.jsx       # Search input (controlled)
├── App.jsx                 # Root component — state lives here
├── App.css
├── index.css
└── main.jsx
```

## Known Limitations

- **No persistence** — project data lives in React state; all additions are lost on page refresh.
- **No edit or delete** — once a project is added it cannot be modified or removed without refreshing.
- **Category not shown on cards** — `ProjectCard` renders only the title and description; the category field is stored and searchable but not displayed visually.
- **Initial projects have no category** — the sample data omits `category`, so searching by category only works for projects you add yourself.
- **No routing** — the app is a single view with no navigation between pages.
