# ToDesktop Clone — Reactifycation

React version of my repo **ToDesktop_clone**.

Live demo: https://todesktop-preet.vercel.app/

## Built With

- **React + Vite**
- **Tailwind CSS** (via `@tailwindcss/vite`)
- **React Router** (wrapped with `BrowserRouter`)

## What’s Inside (UI Sections)

The app is composed of these main layout sections (rendered in `src/App.jsx`):

- NavBar
- Hero
- Guide
- Feature
- Review
- Pricing
- Queries (FAQ)
- Footer

The app also uses an `AppContextProvider` (`src/context/AppContextProvider`) to share state across components.

## Getting Started (Local Setup)

### 1) Install dependencies

```bash
npm install
```

### 2) Start the dev server

```bash
npm run dev
```

## Scripts

- `npm run dev` — run Vite dev server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Project Structure

```txt
.
├─ public/
├─ src/
│  ├─ components/
│  │  └─ layout/        # NavBar, Hero, Guide, Feature, Review, Pricing, Queries, Footer
│  ├─ context/          # AppContextProvider, app-wide state
│  ├─ elements/         # smaller reusable UI pieces
│  ├─ util/             # helper utilities
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ vite.config.js
└─ package.json
```
