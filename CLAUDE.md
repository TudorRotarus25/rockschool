# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RockSchool is a Romanian music school website built with Next.js 12. It's a mostly static, content-driven site with two pages: a home page and an events page. Content is in Romanian.

## Commands

- **Dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (ESLint with next/core-web-vitals)
- **Static export**: `npm run export` (next build && next export)
- **No test suite** is configured.

## Architecture

### Tech Stack
- Next.js 12.1.4 with React 18 (JavaScript, no TypeScript)
- SCSS Modules for styling (every component has a paired `.module.scss` file)
- `clsx` for conditional class names
- `react-slick` for carousels
- `react-icons` for icons
- Images served from imgix CDN (`https://rockschool-ro.imgix.net`)

### Routing
File-based routing via `pages/`:
- `/` → `pages/index.js` — Home page (hero, about, FAQ, teachers, prices, contact)
- `/evenimente` → `pages/evenimente.js` — Events page with carousel
- In-page anchor navigation: `/#scoala`, `/#profesori`, `/#preturi`, `/#contact`

### Component Patterns
- All components are functional (arrow functions) with hooks, in `components/` (flat structure)
- Each component exports default and has a 1:1 `.module.scss` file
- Root element uses `styles.root` class name convention
- Local state only via `useState`/`useEffect` — no global state management
- Event data is hardcoded inline in `EventsContainer.jsx`

### Styling Conventions
- Dark theme: `#333333` background, `#FFFFEE` text, `#BEBE22` accent
- Primary responsive breakpoint at 800px (desktop/mobile toggle)
- CSS class names are camelCase in SCSS modules
- Global styles and typography in `styles/globals.scss`

### Deployment
- Dockerfile uses multi-stage build with Node 16-alpine
- Production runs as standalone Next.js server
