# Typography Showcase

A curated typography showcase for web developers and UI/UX designers. Browse 18 expertly researched font combination presets — each representing a real-world application category — rendered in realistic UI context so you can find the right typographic stack fast.

**Live demo**: https://xanticious.github.io/typography-chooser/

Built with:

- **TypeScript** — static typing
- **React 19** — UI framework
- **Vite** — dev server & bundler
- **Vitest** — unit testing
- **CSS Modules** — scoped component styles
- **OxLint** — fast Rust-based linter
- **Oxfmt** — code formatter
- **Google Fonts** — typography

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start Vite dev server              |
| `npm run build`      | Production build                   |
| `npm run preview`    | Preview production build           |
| `npm run test`       | Run tests once                     |
| `npm run test:watch` | Run tests in watch mode            |
| `npm run lint`       | Run OxLint                         |
| `npm run linter`     | Alias for `lint`                   |
| `npm run fmt`        | Run Oxfmt formatter                |
| `npm run format`     | Alias for `fmt`                    |
| `npm run validate`   | Format, lint, and test in sequence |

## Deployment

This project is configured for **GitHub Pages** deployment. Asset paths use `base: './'` in
`vite.config.ts` so the built output works correctly at any URL path.

A GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy
on every push to `main`.
