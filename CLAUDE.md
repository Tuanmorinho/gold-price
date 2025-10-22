# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Vue 3 + TypeScript application for gold price tracking, built with Vite, PrimeVue UI components, TailwindCSS v4, and Pinia for state management.

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server with hot reload
npm run dev

# Type-check without building
npm run type-check

# Build for production (runs type-check + build in parallel)
npm run build

# Build only (no type-check)
npm run build-only

# Preview production build
npm run preview
```

## Node Version Requirements

- Node.js `^20.19.0` or `>=22.12.0` (enforced in package.json engines)

## Architecture

### Path Aliases

The project uses extensive path aliases configured in [vite.config.ts](vite.config.ts:11-31):

- `@` → `src/`
- `@assets` → `src/assets/`
- `@components` → `src/components/`
- `@composables` → `src/composables/`
- `@directives` → `src/directives/`
- `@layouts` → `src/layouts/`
- `@router` → `src/router/`
- `@services` → `src/services/`
- `@stores` → `src/stores/`
- `@types` → `src/types/`
- `@utils` → `src/utils/`
- `@views` → `src/views/`

**Always use these aliases** instead of relative imports for better maintainability.

### Layout System

The application uses a layout-based routing architecture:

- **MainLayout** ([src/layouts/MainLayout.vue](src/layouts/MainLayout.vue)): Contains Header, Sidebar, Footer, and a slot for child routes
- **EmptyLayout** ([src/layouts/EmptyLayout.vue](src/layouts/EmptyLayout.vue)): Minimal layout for standalone pages like 404
- Routes can specify layouts as parent components with children (see [src/router/index.ts](src/router/index.ts))

### Routing Pattern

Routes are defined in [src/router/index.ts](src/router/index.ts) using:
- Nested route structure with layout components as parents
- Lazy-loaded view components via dynamic imports
- Catch-all 404 route using `/:pathMatch(.*)*`

### State Management

- **Pinia stores**: Located in `src/stores/`
- **Composables**: Reusable stateful logic in `src/composables/` (e.g., `useAuth`, `useFetch`, `useModal`)
- The `useAuth` composable uses module-level reactive state for shared authentication across components

### API Integration

The base API client is in [src/services/api.ts](src/services/api.ts):
- `apiFetch<T>()` function handles JSON and text responses
- API base URL configured via `VITE_API_URL` environment variable
- Service layer modules (e.g., `authService.ts`, `userService.ts`) should use `apiFetch` for consistency

### UI Framework

- **PrimeVue** with Aura theme preset configured in [src/main.ts](src/main.ts:14-23)
  - Custom CSS prefix: `gp`
  - Dark mode: `system` selector
  - CSS layer enabled
- **TailwindCSS v4** via `@tailwindcss/vite` plugin
- Global styles in `src/assets/styles/`

### Type Checking

- Uses `vue-tsc` instead of standard `tsc` for Vue SFC type checking
- TypeScript configuration split across `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`
- Volar/Vue Language Features extension required for proper `.vue` file TypeScript support

## Key Conventions

- Use Vue 3 Composition API with `<script setup lang="ts">`
- Import order: external packages, then aliased paths
- Components stored by category: `@components/layout/`, etc.
- Views represent full pages, components are reusable pieces
- Directives in `@directives/` for custom Vue directives
- Utilities in `@utils/` for pure helper functions
