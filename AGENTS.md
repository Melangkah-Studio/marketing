# Melangkah Studio — Marketing Site

Static marketing site built with Astro. No UI framework (React/Vue/Svelte) and no
test suite yet — update this file if that changes.

## Commands

| Task           | Command                                       |
| -------------- | --------------------------------------------- |
| Dev server     | `astro dev --background`                      |
| Build          | `bun run build`                               |
| Typecheck      | `bun run typecheck`                           |
| Lint & format  | `bun run fix` (`bun run check` to report only) |

Always start the dev server in background mode, then manage it with
`astro dev stop`, `astro dev status`, and `astro dev logs`.

## Code quality

Formatting and linting are handled by Ultracite (Biome) and run automatically —
on every file write, and again on `git commit` via lefthook. Don't hand-format
code or work around lint rules; run `bun run fix` if something looks off.

Spend your attention on what the linter can't check:

- **Correctness** — logic, edge cases, empty and error states
- **Naming** — descriptive names over explanatory comments
- **Accessibility** — semantic elements, heading order, alt text, form labels
- **Architecture** — component boundaries and data flow
- **Performance** — payload size and image handling matter on a marketing site

## Conventions

- `trailingSlash: "always"` — internal links need the trailing slash
- `site` in `astro.config.mjs` is a placeholder until a domain is registered
- Shared values live in `src/lib/constant.ts`

## Docs

[Astro reference](https://docs.astro.build) —
[routing](https://docs.astro.build/en/guides/routing/),
[components](https://docs.astro.build/en/basics/astro-components/),
[content collections](https://docs.astro.build/en/guides/content-collections/),
[styling](https://docs.astro.build/en/guides/styling/).
