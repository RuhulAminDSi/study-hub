# AGENTS.md

## Project Overview

This is a React + TypeScript + Vite study app (`study-app/`) containing educational content for CS/engineering topics. The root also contains extensive markdown/doc study materials.

## Commands

```bash
cd study-app
npm run dev      # Start dev server
npm run build    # Build (runs tsc -b first)
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Key Files

- `study-app/src/main.tsx` - App entry point
- `study-app/src/App.tsx` - Main app, imports lesson modules from `data/modules/`
- `study-app/src/data/modules/` - CS curriculum modules (1-19) with lessons and MCQs
- `study-app/vite.config.ts` - Vite + React + Tailwind v4 config

## Code Structure Notes

### renderContent Function (study-app/src/App.tsx)
- Processes lesson content line-by-line with `while (i < allLines.length)`
- Table detection: `isTableLine()` checks for `│` or box-drawing chars
- Table processing: collects consecutive table lines, increments `i++` for each line INCLUDING first line, then `continue` (skips final `i++`)
- Formula detection: regex `^[A-Za-z_]\w*\s*=\s*[^;\s]` matches actual formulas like `F = ma` but NOT code declarations like `String name;`
- Lesson content types: section-emoji, section-title (h3), subsection-title (h4), bullet-list, formula-line, content-paragraph, summary-title

### Search Functionality
- Desktop: `navbar-search-desktop` with `search-input-desktop` (always visible on desktop)
- Mobile: `navbar-search-mobile` with toggle button `search-toggle-btn`
- Two separate state variables: `searchOpen` (mobile) and `desktopSearchFocused` (desktop)
- Results limited to 10 for desktop, 5 for mobile

### TOC (Table of Contents)
- Sidebar item "সূচিপত্র" toggles `showTOC` state
- TOC view shows all modules with expandable lesson lists
- Clicking TOC item navigates to that lesson

## Branch Convention

- Always work on `dev` branch; `master` is protected/deployment branch

## Notes

- Uses Tailwind CSS v4 (via `@tailwindcss/vite` plugin, not traditional config)
- Build runs typecheck: `tsc -b && vite build`
- App has bilingual (EN/BN) support with theme toggle (dark/light)