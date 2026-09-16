# Agent Guide

This document captures the current project setup, conventions, and commands agents should know when working on this codebase.

## Project Overview

**Cofile** is a static landing page built with [Astro](https://docs.astro.build). It is a single-page marketing site for a currency exchange rate app.

- **Framework**: Astro `^7.2.0`
- **Runtime**: Node.js `>=22.12.0`
- **Package manager**: pnpm
- **Language**: TypeScript with Astro's strict config
- **Reactivity**: [Alpine.js](https://alpinejs.dev/) via `@astrojs/alpinejs`
- **Styling**: plain CSS with custom properties

## Development Commands

Always use pnpm to run scripts:

```bash
pnpm dev          # start the dev server
pnpm build        # build for production
pnpm preview      # preview the production build
pnpm format       # format ./src with Prettier
```

When starting the dev server in the background, use:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Testing (Playwright)

E2E tests use [Playwright](https://playwright.dev). Test files live in `tests/` (e.g. `tests/faq.spec.ts`).

```bash
pnpm test       # run Playwright tests headlessly
pnpm test:ui    # run tests in Playwright UI mode
```

On first setup, install the browsers:

```bash
pnpm exec playwright install --with-deps
```

- Configuration in `playwright.config.ts`:
- CI runs via `.github/workflows/playwright.yml` on push/PR to `main`/`master`, installing browsers with `pnpm exec playwright install --with-deps` and uploading the `playwright-report/` artifact.
- To generate new tests with the Playwright MCP, use the `playwright-generate-test` skill.

## Path Aliases

`tsconfig.json` defines the alias `@/*` pointing to `./src/*`. Use it for all imports from `src`, e.g.:

```astro
---
import Layout from '@/layouts/Layout.astro'
import Header from '@/components/header/Header.astro'
import { menu } from '@/data/menu'
---
```

## Styling Conventions

- Plain CSS, no Tailwind or CSS-in-JS.
- Global design tokens are defined in `src/styles/global.css`:
- Responsive breakpoint is mobile-first at `768px` (`width >= 768px` or `width < 768px`).

## Formatting & Git Hooks

- Prettier `3.9.6` with `prettier-plugin-astro` handles formatting.
- Config in `.prettierrc`: `semi: false`, `singleQuote: true`, `tabWidth: 2`.
- Lefthook runs Prettier on staged files matching:
  `*.{js,ts,jsx,tsx,mjs,cjs,json,md,mdx,astro,css,scss,html,yml,yaml}`
- When committing, make sure staged files are formatted; Lefthook will auto-stage fixes.

## Alpine.js Usage

Alpine.js is enabled globally by the `@astrojs/alpinejs` integration. It is used sparingly for interactive UI:

- `src/components/header/Header.astro` controls the mobile menu open state with `x-data`, `@click`, and `:aria-expanded`.
- `src/components/header/HeaderMobileMenu.astro` shows/hides with `x-show`, `x-transition`, and `@click.outside`.

Keep Alpine directives in Astro component markup when adding small interactions.
Prefer native HTML elements for simple disclosures when possible. For example, the accordion in `src/components/ui/Accordion.astro` uses `<details>` and `<summary>` instead of Alpine.js.

## Images

- Images are stored in `src/assets/` and imported so Astro can optimize them.
- `src/components/Picture.astro` provides a small responsive image helper that serves a mobile or desktop source based on a `768px` breakpoint.

## Astro Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
