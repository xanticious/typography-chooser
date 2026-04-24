# Typography Showcase — Design Document

> **Status**: Draft · April 2026
> **Stack**: TypeScript · React 19 · Vite · Vitest · XState v5 · CSS Modules · FontAwesome · Google Fonts
> **Deployment**: GitHub Pages (`/typography-chooser/`)

---

## 1. Project Overview

### Purpose

A curated typography showcase for web developers and UI/UX designers. The app presents 15–18 expertly researched font combination "presets" — each representing a real-world application category — so that practitioners can see those combinations rendered in realistic UI context and get inspired quickly when choosing fonts for new projects.

### Goals

1. Present 15–18 well-researched typography combinations covering a wide range of app categories.
2. Let users filter and search to find relevant combinations quickly.
3. Give users a full-page, realistic demo of how the combination looks in context.
4. Allow users to export the full combination spec as JSON for immediate use.
5. Inspire rather than overwhelm — quality and context over quantity.

### Success Criteria

- A developer or designer can open the app, find a relevant combination, and extract the font names and colors in under 2 minutes.
- The demo preview looks realistic enough to inspire confidence in the combination.
- The app itself demonstrates excellent typography and polish.

---

## 2. Target Audience

### Primary Persona — "The Pragmatic Developer"

- **Who**: Front-end or full-stack developer starting a new side project, SaaS, or portfolio.
- **Goal**: Choose a credible, coherent typographic stack fast and move on to building.
- **Pain point**: Google Fonts is overwhelming; curated systems take too long to evaluate without seeing them in real UI context.
- **Device**: Desktop browser (primary); occasional mobile reference.

### Secondary Persona — "The Design-Aware Designer"

- **Who**: UI/UX designer prototyping a new product or refreshing an existing one.
- **Goal**: Validate a typographic direction or discover new combinations that match a project's mood.
- **Pain point**: Most font pairing resources show abstract "Aa Bb Cc" cards — not actual app UI.
- **Device**: Desktop browser.

---

## 3. Feature List

### MVP (Phase 2)

| #   | Feature                       | Notes                                                                                |
| --- | ----------------------------- | ------------------------------------------------------------------------------------ |
| F1  | Combination Tile Grid         | Responsive grid of 15–18 combination tiles showing summary info                      |
| F2  | Tile Content                  | Category, name, theme badge, font names (rendered in that font), color splotches     |
| F3  | Filter Panel                  | Filter by: category, theme, mood/aesthetic, responsive flag                          |
| F4  | Search                        | Filter tiles by combination name — instant, client-side                              |
| F5  | Dark / Light App Theme Toggle | App chrome toggle; persisted in-session only                                         |
| F6  | Full-Page Demo Preview        | Click [Demo] → in-app full-page view rendered with that combination's fonts + colors |
| F7  | JSON Export                   | Copy the full combination spec as a JSON object to clipboard                         |

### Phase 3 — Polish & Enhancements

| #   | Feature                      | Notes                                                         |
| --- | ---------------------------- | ------------------------------------------------------------- |
| F8  | Smooth transitions           | Tile hover, filter change, demo open/close animations         |
| F9  | Keyboard navigation          | Full keyboard accessibility for grid and demo                 |
| F10 | "Back to gallery" breadcrumb | Clear navigation from demo back to gallery preserving filters |

### Future / Backlog

| #   | Feature                                        |
| --- | ---------------------------------------------- |
| F11 | Google Fonts `@import` / `<link>` snippet copy |
| F12 | CSS custom properties snippet copy             |
| F13 | Side-by-side comparison of two combinations    |
| F14 | "Surprise me" — random combination picker      |
| F15 | User-submitted combinations (requires backend) |

---

## 4. Curated Showcase Combinations

Each combination has a unique name, covers a specific application category, and is grounded in real-world design research. Target: 15–18 combinations at launch.

### Combination Spec Fields

| Field        | Type                                         | Description                                         |
| ------------ | -------------------------------------------- | --------------------------------------------------- |
| `id`         | `string`                                     | URL-safe slug, e.g., `"pyramidian"`                 |
| `name`       | `string`                                     | Human-readable name, e.g., `"Pyramidian"`           |
| `category`   | `AppCategory`                                | One of the defined app categories                   |
| `theme`      | `"light" \| "dark" \| "high-contrast"`       | Visual theme of the combination                     |
| `mood`       | `Mood[]`                                     | One or more: clean, playful, serious, elegant, bold |
| `responsive` | `boolean`                                    | Whether the demo layout is mobile-responsive        |
| `fonts`      | `{ heading, body, mono? }`                   | Each font: name + weights + Google Fonts slug       |
| `colors`     | `{ background, text, accent }`               | Hex values                                          |
| `icons`      | `{ library, url }?`                          | Optional icon library                               |
| `components` | `{ library, url }?`                          | Optional component library                          |
| `navbar`     | `"top" \| "left" \| "bottom" \| "hamburger"` | Navbar placement shown in demo                      |

### Initial 18 Combinations

| #   | Name       | Category                       | Theme         | Heading            | Body          | Mono           | BG        | Text      |
| --- | ---------- | ------------------------------ | ------------- | ------------------ | ------------- | -------------- | --------- | --------- |
| 1   | Pyramidian | Technical Blog                 | Dark          | Roboto             | Merriweather  | Fira Code      | `#0d1117` | `#e6edf3` |
| 2   | Solstice   | Lifestyle / Personal Blog      | Light         | Playfair Display   | Lora          | —              | `#fdfbf7` | `#2c2c2c` |
| 3   | Mercado    | E-Commerce / Retail            | Light         | Montserrat         | Open Sans     | —              | `#ffffff` | `#1a1a1a` |
| 4   | Meridian   | Enterprise CRUD / Dashboard    | Dark          | Inter              | Inter         | JetBrains Mono | `#0f1117` | `#f0f0f0` |
| 5   | Launchpad  | SaaS / Product Landing Page    | Light         | Space Grotesk      | DM Sans       | —              | `#ffffff` | `#0f172a` |
| 6   | Vivant     | Portfolio / Creative Agency    | Dark          | Syne               | Manrope       | —              | `#0a0a0a` | `#f5f5f5` |
| 7   | Chronicle  | News / Magazine                | Light         | Libre Baskerville  | Source Sans 3 | —              | `#f9f7f4` | `#222222` |
| 8   | Sprout     | Kid-Friendly Game / App        | Light         | Nunito             | Nunito        | —              | `#fffde7` | `#3e2723` |
| 9   | Cipher     | Teen / Young Adult Game        | Dark          | Unbounded          | Outfit        | —              | `#0d0d0d` | `#e0e0e0` |
| 10  | Codex      | Documentation / Developer Docs | Light         | Inter              | Inter         | JetBrains Mono | `#ffffff` | `#0f172a` |
| 11  | Vitalis    | Healthcare / Medical           | Light         | DM Sans            | Source Sans 3 | —              | `#f0f4f8` | `#1a202c` |
| 12  | Ember      | Restaurant / Food & Drink      | Dark          | Cormorant Garamond | Lato          | —              | `#1a0f0a` | `#f5ebe0` |
| 13  | Common     | Non-Profit / Charity           | Light         | Merriweather       | Open Sans     | —              | `#fafafa` | `#333333` |
| 14  | Sentinel   | Finance / Banking              | Light         | Work Sans          | Figtree       | Fira Code      | `#f7f8fa` | `#1c1c2e` |
| 15  | Scholarly  | Education / EdTech             | Light         | Poppins            | Lato          | —              | `#f0f7ff` | `#1e293b` |
| 16  | Clarity    | Accessibility / High-Contrast  | High-Contrast | Lexend             | Lexend        | —              | `#000000` | `#ffffff` |
| 17  | Quietude   | Minimalist Personal Site       | Light         | EB Garamond        | Crimson Text  | —              | `#ffffff` | `#111111` |
| 18  | Neon Rush  | Gaming / Streaming             | Dark          | Outfit             | DM Sans       | —              | `#0a0014` | `#e0d7ff` |

---

## 5. Architecture

### Directory Structure

```
src/
  App.tsx                          # Root — layout, theme context, view state
  App.module.css
  global.css                       # Google Fonts @import, CSS custom property tokens (both themes)
  main.tsx
  data/
    types.ts                       # Shared TypeScript types
    combinations.ts                # All 18 curated ShowcaseCombination objects
  components/
    AppHeader/
      AppHeader.tsx                # App title + dark/light theme toggle
      AppHeader.module.css
    FilterPanel/
      FilterPanel.tsx              # Category, theme, mood, responsive filters + search
      FilterPanel.module.css
    CombinationGrid/
      CombinationGrid.tsx          # Responsive CSS grid of CombinationTile components
      CombinationGrid.module.css
    CombinationTile/
      CombinationTile.tsx          # Individual summary tile card
      CombinationTile.module.css
    ColorSplotch/
      ColorSplotch.tsx             # Small rendered color circle with hex label
      ColorSplotch.module.css
    DemoView/
      DemoView.tsx                 # Full-page demo preview wrapper + back button
      DemoView.module.css
    DemoContent/
      TechnicalBlogDemo.tsx        # Category-specific demo content components
      LifestyleBlogDemo.tsx
      ECommerceDemo.tsx
      EnterpriseDashboardDemo.tsx
      SaasLandingDemo.tsx
      PortfolioDemo.tsx
      NewsMagazineDemo.tsx
      KidGameDemo.tsx
      TeenGameDemo.tsx
      DevDocsDemo.tsx
      HealthcareDemo.tsx
      RestaurantDemo.tsx
      NonProfitDemo.tsx
      FinanceDemo.tsx
      EducationDemo.tsx
      AccessibilityDemo.tsx
      MinimalistDemo.tsx
      GamingStreamingDemo.tsx
    JsonExport/
      JsonExport.tsx               # "Copy JSON" button with "Copied!" feedback
      JsonExport.module.css
  hooks/
    useTheme.ts                    # App dark/light theme context + toggle
    useFilters.ts                  # Filter + search state, derived filtered list
test/
  data/
    combinations.test.ts
  components/
    CombinationTile.test.tsx
    FilterPanel.test.tsx
    JsonExport.test.tsx
    DemoView.test.tsx
  hooks/
    useTheme.test.ts
    useFilters.test.ts
  filecheck.test.ts
design/
  DESIGN_DOCUMENT.md
```

### Component Tree

```
App
├── AppHeader
│   └── ThemeToggle (inline)
├── [Gallery View]
│   ├── FilterPanel
│   └── CombinationGrid
│       └── CombinationTile (×18)
│           └── ColorSplotch (×2–3 per tile)
└── [Demo View]
    ├── DemoView
    │   └── <CategoryDemoComponent> (resolved from combination.category)
    └── JsonExport
```

### View Routing

No router library. A single `useState<string | null>` in `App` tracks the active combination `id`:

- `null` → gallery view
- `"pyramidian"` → demo view for that combination

The demo view has a prominent "← Back to Gallery" button. Filters are preserved when navigating between views.

### State Management

| State            | Location                   | Notes                                               |
| ---------------- | -------------------------- | --------------------------------------------------- |
| App theme        | React context (`useTheme`) | Toggles `data-theme` on `<html>`; in-session only   |
| Active demo view | `useState` in `App`        | `null` = gallery, `string` = combination id         |
| Filter state     | `useFilters` hook          | category, theme, mood, responsive flag, searchQuery |
| Copy feedback    | `useState` in `JsonExport` | "Copied!" flash state, resets after 2 seconds       |

No XState machines are required for this app — all state is simple enough for React hooks. XState is available if a more complex interaction is added later.

### Data Flow

```
combinations.ts ──► CombinationGrid (filtered) ──► CombinationTile
                                                         └── onDemoClick ──► App.setActiveDemoId
                                                                               └── DemoView
                                                                                     ├── <CategoryDemo>
                                                                                     └── JsonExport

useFilters (filterState) ──► CombinationGrid (derived filtered list)
useTheme  (theme)         ──► AppHeader (toggle UI), html[data-theme] (CSS vars)
```

---

## 6. Data Types

```ts
// src/data/types.ts

export type AppCategory =
  | "Technical Blog"
  | "Lifestyle / Personal Blog"
  | "E-Commerce / Retail"
  | "Enterprise CRUD / Dashboard"
  | "SaaS / Product Landing Page"
  | "Portfolio / Creative Agency"
  | "News / Magazine"
  | "Kid-Friendly Game / App"
  | "Teen / Young Adult Game"
  | "Documentation / Developer Docs"
  | "Healthcare / Medical"
  | "Restaurant / Food & Drink"
  | "Non-Profit / Charity"
  | "Finance / Banking"
  | "Education / EdTech"
  | "Accessibility / High-Contrast"
  | "Minimalist Personal Site"
  | "Gaming / Streaming";

export type Theme = "light" | "dark" | "high-contrast";

export type Mood = "clean" | "playful" | "serious" | "elegant" | "bold" | "warm" | "minimal";

export interface FontSpec {
  name: string; // Google Fonts display name, e.g., "Roboto"
  slug: string; // Google Fonts URL slug, e.g., "Roboto"
  weights: number[]; // e.g., [400, 600, 700]
  googleFontsUrl: string; // https://fonts.google.com/specimen/Roboto
}

export interface ColorPalette {
  background: string; // hex, e.g., "#0d1117"
  text: string; // hex
  accent: string; // hex
}

export interface ExternalLibrary {
  library: string; // e.g., "Font Awesome"
  url: string; // e.g., "https://fontawesome.com"
}

export interface ShowcaseCombination {
  id: string;
  name: string;
  category: AppCategory;
  theme: Theme;
  mood: Mood[];
  responsive: boolean;
  fonts: {
    heading: FontSpec;
    body: FontSpec;
    mono?: FontSpec;
  };
  colors: ColorPalette;
  icons?: ExternalLibrary;
  components?: ExternalLibrary;
  navbar: "top" | "left" | "bottom" | "hamburger";
}
```

---

## 7. Demo Content Strategy

Each category has a dedicated demo content component (`src/components/DemoContent/<Category>Demo.tsx`) that renders realistic, category-appropriate fake content styled with the combination's CSS custom properties.

The `DemoView` wrapper injects the combination's fonts and colors as CSS custom properties on a scoping `<div>`, keeping the demo fully isolated from the app chrome:

```tsx
<div
  style={
    {
      "--demo-font-heading": `"${combo.fonts.heading.name}", serif`,
      "--demo-font-body": `"${combo.fonts.body.name}", sans-serif`,
      "--demo-font-mono": combo.fonts.mono ? `"${combo.fonts.mono.name}", monospace` : "monospace",
      "--demo-bg": combo.colors.background,
      "--demo-text": combo.colors.text,
      "--demo-accent": combo.colors.accent,
    } as React.CSSProperties
  }
  className={styles.demoWrapper}
>
  <CategoryDemoComponent />
</div>
```

All demo CSS uses `var(--demo-*)` tokens only — never the app's global tokens.

### Demo Content Per Category

| Category                       | Demo Content                                                                       |
| ------------------------------ | ---------------------------------------------------------------------------------- |
| Technical Blog                 | Nav, hero post excerpt, inline code block, tag list, author bio                    |
| Lifestyle / Personal Blog      | Nav, hero image placeholder, article excerpt, pull quote, category links           |
| E-Commerce / Retail            | Nav, product grid (3 items), product card with price + CTA button                  |
| Enterprise CRUD / Dashboard    | Sidebar nav, data table (5 rows), stat cards, breadcrumb header                    |
| SaaS / Product Landing Page    | Nav, hero headline + subhead + CTA, 3 feature cards, pricing comparison row        |
| Portfolio / Creative Agency    | Full-bleed headline, project grid (4 items), contact CTA                           |
| News / Magazine                | Masthead, lead story, secondary story grid, section category labels                |
| Kid-Friendly Game / App        | Colorful nav, large playful heading, game card grid, mascot placeholder            |
| Teen / Young Adult Game        | Dark nav, bold hero, character cards, leaderboard snippet                          |
| Documentation / Developer Docs | Sidebar nav, breadcrumb, markdown-style article, code block, API table             |
| Healthcare / Medical           | Nav, appointment CTA, service cards, doctor profile row                            |
| Restaurant / Food & Drink      | Full-bleed menu heading, menu section (3 items with descriptions), reservation CTA |
| Non-Profit / Charity           | Nav, mission statement, impact stats (3 numbers), donation CTA                     |
| Finance / Banking              | Nav, account summary cards, transaction table, chart placeholder                   |
| Education / EdTech             | Nav, course grid (3 cards), progress bar, instructor bio                           |
| Accessibility / High-Contrast  | Nav, article with headings, form with labels, focus ring demo                      |
| Minimalist Personal Site       | Sparse nav, bio paragraph, project list (text-only links), contact line            |
| Gaming / Streaming             | Dark nav, stream thumbnail grid, live badge, chat snippet                          |

---

## 8. UI/UX Guidelines

### Visual Tone

Clean, polished, design-forward. The app's own typography should be exemplary — Inter for UI chrome throughout. Combination tiles are the star; the surrounding chrome is deliberately understated.

### App Theme Tokens (Dark / Light)

| Token              | Dark      | Light     |
| ------------------ | --------- | --------- |
| `--bg`             | `#0f0f13` | `#f8f8fc` |
| `--surface`        | `#1a1a2e` | `#ffffff` |
| `--border`         | `#2a2a3a` | `#e0e0ec` |
| `--text-primary`   | `#e8e8f0` | `#1a1a2e` |
| `--text-secondary` | `#a0a0c0` | `#5a5a7a` |
| `--accent`         | `#7c7cdc` | `#5050c0` |

Default: **dark** (consistent with developer tooling conventions). Toggle button in the header; theme stored in session only (no `localStorage`).

### Tile Design

Each tile (≈280–340px wide) displays:

- **Category badge** — small pill label, top of tile
- **Combination name** — rendered in the tile's own heading font, dominant visual
- **Theme badge** — "Light" / "Dark" / "High-Contrast" chip
- **Heading font name** — label + specimen rendered in that font
- **Body font name** — label + specimen rendered in that font
- **Mono font name** — label + specimen rendered in that font (if present)
- **Color splotches** — background, text, and accent circles with hex labels
- **Mood tags** — small chips, e.g., "clean · serious"
- **Responsive badge** — shown only when `responsive: true`
- **Icons / Components** — linked library names (if present)
- **[Demo] button** — full-width primary CTA

### Filter Panel

- Horizontal row above the grid; scrollable on small screens.
- Filter controls: category dropdown, theme multi-select, mood multi-select, responsive toggle.
- Active filters shown as dismissible chips with a "Clear all" link.
- Search box (right-aligned on desktop) performs instant `name.includes(query)` filtering.

### Responsive Breakpoints

| Breakpoint       | Grid Layout                |
| ---------------- | -------------------------- |
| `< 640px`        | 1-column, full-width tiles |
| `640px – 1023px` | 2-column tile grid         |
| `≥ 1024px`       | 3-column tile grid         |
| `≥ 1440px`       | 4-column tile grid         |

### Accessibility

- All interactive elements keyboard-accessible (tiles focusable, Enter/Space opens demo).
- Color splotches include `aria-label` with the hex value.
- Demo view closeable via **Escape** key.
- `prefers-reduced-motion`: disable tile hover animations and demo transition.
- WCAG AA contrast for all app chrome text in both themes.
- Filter chips and dropdowns include proper `aria-label` attributes.

---

## 9. API & Integrations

### Google Fonts (CSS only)

- Fonts loaded via a single `@import` in `global.css` at build time.
- All fonts used across all 18 combinations declared upfront with required weights.
- No Google Fonts API key required for CSS delivery.
- Font spec objects link to `https://fonts.google.com/specimen/{slug}`.

### Clipboard API

- `navigator.clipboard.writeText()` used for JSON export.
- Fallback: `document.execCommand('copy')` for environments without the Clipboard API.

### No Backend

- Fully static SPA. No server, no database, no auth.
- All data bundled in TypeScript source files under `src/data/`.

---

## 10. Authentication & Authorization

None. The app is fully public, read-only, and stateless. No user accounts, no persisted preferences beyond in-session theme.

---

## 11. Phase Plan

### Phase 1 — Project Setup & Data Layer

**Goal**: Clean repo, all data defined, fonts loading.

- [ ] Run `npm run remove-template-examples` to strip hello-world files
- [ ] Create `src/data/types.ts` — all TypeScript types
- [ ] Create `src/data/combinations.ts` — all 18 curated combination objects
- [ ] Update `src/global.css` — `@import` for all required fonts + CSS custom property tokens for both app themes
- [ ] Add data files to `.filecheck-excludes.json` or write minimal smoke tests
- [ ] Update `README.md` with project name and description

**Exit criteria**: App compiles; all 18 combinations typed and importable; fonts render in browser.

---

### Phase 2 — MVP: Gallery & Demo

**Goal**: Fully functional gallery with filtering, search, and full-page demo previews.

- [ ] `useTheme` hook + `ThemeContext` — toggles `data-theme` on `<html>`
- [ ] `AppHeader` component — title + theme toggle button
- [ ] `ColorSplotch` component — hex color circle + label
- [ ] `CombinationTile` component — full tile with all fields + Demo button
- [ ] `FilterPanel` component — category / theme / mood / responsive filters + search input
- [ ] `useFilters` hook — filter + search state, derived filtered list
- [ ] `CombinationGrid` component — responsive CSS grid of tiles
- [ ] `DemoView` component — full-page overlay with back button + JSON export
- [ ] All 18 `<Category>Demo` content components
- [ ] `JsonExport` component — JSON stringify + clipboard copy + "Copied!" feedback
- [ ] Wire view state in `App.tsx` (`activeDemoId` state, gallery ↔ demo routing)
- [ ] Vitest unit tests for all components and hooks

**Exit criteria**: User can browse all combinations, filter and search, open a full-page demo, and copy the JSON spec.

---

### Phase 3 — Polish & Deploy

**Goal**: Production-ready quality.

- [ ] Smooth CSS transitions (theme toggle, tile hover, demo open/close)
- [ ] `prefers-reduced-motion` support
- [ ] Escape key closes demo view
- [ ] Full keyboard navigation audit (tiles, filters, demo back button)
- [ ] WCAG AA contrast verification for both app themes
- [ ] Mobile layout review at 375px viewport
- [ ] Verify GitHub Pages deploy (`npm run build`, check relative asset paths)
- [ ] Update `<title>` and `<meta name="description">` in `index.html`
- [ ] Final `npm run validate` passes clean

**Exit criteria**: Lighthouse ≥ 90 performance, 100 accessibility; deploys cleanly to GitHub Pages.

---

## 12. Open Questions

| #   | Question                                                                      | Notes                                                                                                                                 |
| --- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| OQ1 | Should the demo view be a full-page takeover or a side drawer?                | Full-page feels most immersive for typography evaluation. Defaulting to full-page per user intent; revisit if layout proves awkward.  |
| OQ2 | Should active filters be preserved when opening and closing a demo?           | Almost certainly yes — user should return to the same filtered gallery state.                                                         |
| OQ3 | Is PixiJS still needed after template cleanup?                                | No apparent use case for WebGL canvas in this app. Drop it in Phase 1.                                                                |
| OQ4 | Should the JSON export include a ready-to-use Google Fonts `@import` string?  | Nice-to-have addition to the JSON payload. Revisit in Phase 3.                                                                        |
| OQ5 | Font loading strategy — preload all fonts or lazy-load per demo?              | Declaring all fonts in `global.css` upfront is simplest. Acceptable for this showcase; lazy-loading is a future optimization.         |
| OQ6 | Should "Accessibility" and "Minimalist" be `AppCategory` values or mood tags? | Currently modeled as categories for simplicity. Revisit if too few combinations exist per category to justify them.                   |
| OQ7 | Exact accent colors for each combination — needs a full design pass.          | Accent values in §4 table are initial estimates. Should be verified for WCAG AA contrast against each combination's background color. |
