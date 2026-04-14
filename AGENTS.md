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

- `study-app/src/main.tsx` - Entry point
- `study-app/src/App.tsx` - Main app with hardcoded lesson content
- `study-app/vite.config.ts` - Vite + React + Tailwind v4 config

## Notes

- Uses Tailwind CSS v4 (via `@tailwindcss/vite` plugin, not traditional config)
- Build runs typecheck: `tsc -b && vite build`
- App has bilingual (EN/BN) support with theme toggle (dark/light)