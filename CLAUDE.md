# CLAUDE.md — Signal Scout

This file provides guidance for AI assistants (Claude and others) working in this repository.

---

## Project Overview

**signal-scout-dot-com** is the source repository for the [SignalScout](https://signalscout.com)
website — a B2B SaaS landing page for a competitive intelligence product that helps teams
track competitor moves, surface market signals, and act faster.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js](https://nextjs.org) 15 (App Router) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 3.x |
| Language | TypeScript (strict mode) |
| Font | Inter via `next/font/google` (self-hosted, zero layout shift) |
| Package manager | npm |

---

## Directory Layout

```
signal-scout-dot-com/
├── app/
│   ├── globals.css          # Tailwind directives + base resets
│   ├── layout.tsx           # Root layout: font, metadata, body bg
│   └── page.tsx             # Home page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky nav (client component — mobile menu state)
│   │   └── Footer.tsx       # Footer with logo, links, copyright
│   ├── sections/
│   │   ├── Hero.tsx                # Above-the-fold hero
│   │   ├── ProblemSolution.tsx     # Two-column problem / solution on white bg
│   │   ├── Features.tsx            # 3-column feature card grid
│   │   └── SecondaryCta.tsx        # Bottom CTA on forest green bg
│   └── ui/
│       └── Logo.tsx         # Geometric fox SVG logomark with signal arcs
├── public/                  # Static assets (images, favicons — add as needed)
├── .env.example             # Document all env vars here; copy to .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── CLAUDE.md
```

---

## Brand Tokens

All colors are defined in `tailwind.config.ts` under `theme.extend.colors.brand`:

| Token | Hex | Usage |
|---|---|---|
| `brand-orange` | `#F26419` | CTAs, highlights, logo, accents |
| `brand-green` | `#1F3D2B` | Dark sections (CTA bg, footer), headings on white |
| `brand-blue` | `#4EA5D9` | Default page background, header, hero |

**Text contrast rules:**
- On `brand-blue`: use `text-white` or `text-white/80`
- On `brand-green`: use `text-white` or `text-white/60`
- On white sections: use `text-brand-green` for headings, `text-gray-600` for body

---

## Page Section Flow

```
Header (sticky)
  └── Hero           (blue bg — centered headline + dual CTAs)
  └── ProblemSolution (white bg — two-column problem / solution)
  └── Features        (blue bg — 3×2 feature card grid)
  └── SecondaryCta    (green bg — large statement + CTA buttons)
Footer (green bg)
```

To add a new section, create it in `components/sections/`, import it in `app/page.tsx`,
and place it in the desired order.

---

## Development Workflow

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:3000)
npm run dev

# Type-check
npx tsc --noEmit

# Lint
npm run lint

# Format
npm run format

# Production build
npm run build
npm start
```

---

## Environment Variables

Copy `.env.example` → `.env.local` and fill in values. Never commit `.env.local`.

```bash
cp .env.example .env.local
```

---

## Component Conventions

- **Server components by default** — only add `'use client'` when the component needs
  browser APIs or React state/effects.
- **Currently the only client component** is `Header.tsx` (mobile menu toggle state).
- Name section components in `PascalCase`; export as named exports (not default).
- Keep icon SVGs inline (no icon library dependency) — place them as small functions
  within the component file that uses them.
- Use `aria-hidden="true"` on decorative SVGs; use `aria-label` + `role="img"` on
  meaningful ones.

---

## Extending the Site

### Adding a nav link

Open `components/layout/Header.tsx` and add to the `navLinks` array:

```ts
const navLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Login',   href: '#login'   },
  { label: 'Blog',    href: '/blog'    }, // ← add here
]
```

The same array drives both desktop and mobile navigation automatically.

### Adding a new page section

1. Create `components/sections/MySection.tsx`
2. Export a named server component: `export function MySection() { ... }`
3. Import and add to `app/page.tsx` in the desired position

### Adding a new page route

Create `app/my-route/page.tsx`. The layout (header/footer) is not automatically applied —
either wrap the page in `<Header>/<Footer>` or extract a shared layout component.

---

## General Conventions

### Code Style
- TypeScript strict mode — no `any`, no `@ts-ignore` without comment
- 2-space indentation
- Lines ≤ 100 characters
- `kebab-case` for page/route files; `PascalCase` for components

### Commits
- Imperative mood: `Add feature`, `Fix bug`, `Update copy`
- Subject line under 72 characters
- Reference issue numbers when applicable

### Branching
- Feature: `feature/<short-description>`
- Bug fix: `fix/<short-description>`
- AI-driven: `claude/<task-id>`

### Pull Requests
- Clear description: *what* changed and *why*
- Prefer small, focused PRs

---

## AI Assistant Notes

- **Read this file first** before making any changes.
- **Do not push directly to `main`** — always use a feature or AI-driven branch.
- **Prefer editing existing files** over creating new ones where equivalent.
- **Avoid over-engineering** — implement only what is explicitly requested.
- **Keep secrets out of code** — never hardcode API keys, tokens, or passwords.
- **Update this file** whenever the stack, directory layout, or key conventions change.
