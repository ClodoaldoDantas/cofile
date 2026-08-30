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

## Path Aliases

`tsconfig.json` defines the alias `@/*` pointing to `./src/*`. Use it for all imports from `src`, e.g.:

```astro
---
import Layout from '@/layouts/Layout.astro'
import Header from '@/components/Header/Header.astro'
import { menu } from '@/data/menu'
---
```

## Styling Conventions

- Plain CSS, no Tailwind or CSS-in-JS.
- Global design tokens are defined in `src/styles/global.css`:
  - Neutral colors: `--color-neutral-950`, `--color-neutral-50`, `--color-neutral-400`
  - Primary: `--color-primary`, `--color-primary-hover`
  - Black/white: `--color-black`, `--color-white`
  - Font: `--font-epilogue`
- Responsive breakpoint is mobile-first at `768px` (`width >= 768px` or `width < 768px`).

## Fonts

The project uses the **Epilogue** font family loaded through Astro's font provider:

```js
// astro.config.mjs
fonts: [
  {
    provider: fontProviders.google(),
    name: 'Epilogue',
    cssVariable: '--font-epilogue',
    weights: [400, 500, 600],
    styles: ['normal'],
    subsets: ['latin'],
  },
]
```

It is applied in `src/styles/global.css`:

```css
body {
  font-family: var(--font-epilogue), system-ui, sans-serif;
}
```

## Formatting & Git Hooks

- Prettier `3.9.6` with `prettier-plugin-astro` handles formatting.
- Config in `.prettierrc`: `semi: false`, `singleQuote: true`, `tabWidth: 2`.
- Lefthook runs Prettier on staged files matching:
  `*.{js,ts,jsx,tsx,mjs,cjs,json,md,mdx,astro,css,scss,html,yml,yaml}`
- When committing, make sure staged files are formatted; Lefthook will auto-stage fixes.

## Alpine.js Usage

Alpine.js is enabled globally by the `@astrojs/alpinejs` integration. It is used sparingly for interactive UI:

- `src/components/Header/Header.astro` controls the mobile menu open state with `x-data`, `@click`, and `:aria-expanded`.
- `src/components/Header/MobileNav.astro` shows/hides with `x-show`, `x-transition`, and `@click.outside`.

Keep Alpine directives in Astro component markup when adding small interactions.

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
