# CLAUDE.md — Signal Scout

This file provides guidance for AI assistants (Claude and others) working in this repository.

---

## Project Overview

**signal-scout-dot-com** is the source repository for the Signal Scout website/application.

> **Status:** This repository is newly initialized. No source code has been committed yet. Update this file as the project structure is established.

---

## Repository State

At the time of this writing the repository contains only this `CLAUDE.md` file. As files are added, keep this document up to date with:

- The chosen framework and runtime (e.g. Next.js, Astro, plain Node, etc.)
- Directory layout and the purpose of each top-level folder
- How to install dependencies and run the project locally
- Test commands and CI expectations
- Any environment variables that must be set

---

## General Conventions (to be confirmed once a stack is chosen)

### Code Style
- Prefer TypeScript over plain JavaScript for all new source files.
- Use 2-space indentation unless a project-level config (`.editorconfig`, `prettier.config.*`) says otherwise.
- Keep lines ≤ 100 characters where practical.
- Name files in `kebab-case` for pages/routes and `PascalCase` for React/Vue components.

### Commits
- Write commit messages in the imperative mood: `Add feature`, `Fix bug`, `Update docs`.
- Keep the subject line under 72 characters.
- Reference related issue numbers when applicable.

### Branching
- Feature branches: `feature/<short-description>`
- Bug-fix branches: `fix/<short-description>`
- AI-driven branches follow the pattern: `claude/<task-id>`

### Pull Requests
- Every PR should have a clear description explaining *what* changed and *why*.
- Prefer small, focused PRs over large omnibus changes.

---

## Development Workflow (template — update once stack is confirmed)

```bash
# Install dependencies
npm install          # or: pnpm install / yarn

# Start local dev server
npm run dev

# Run tests
npm test             # or: npm run test

# Lint & format
npm run lint
npm run format

# Build for production
npm run build
```

---

## Environment Variables

Create a `.env.local` file (never commit it) for local secrets. Document all required variables in `.env.example`.

```
# .env.example (update as variables are added)
# NEXT_PUBLIC_API_URL=
```

---

## Testing Guidelines

- Co-locate unit tests with source files (e.g. `Button.test.tsx` next to `Button.tsx`).
- Place end-to-end tests in a top-level `e2e/` or `tests/` directory.
- All tests must pass before merging to `main`.

---

## AI Assistant Notes

- **Read this file first** before making changes to understand project conventions.
- **Do not push directly to `main`** — always work on a feature or AI-driven branch.
- **Prefer editing existing files** over creating new ones when both approaches are equivalent.
- **Avoid over-engineering** — implement only what is explicitly requested.
- **Keep secrets out of code** — never hardcode API keys, tokens, or passwords.
- Update this `CLAUDE.md` whenever significant structural changes are made to the project.
