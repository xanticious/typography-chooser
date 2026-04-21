# Typography Chooser — Design Document

> **Status**: Draft · April 2026  
> **Stack**: TypeScript · React 19 · Vite · Vitest · XState v5 · CSS Modules · FontAwesome · Google Fonts  
> **Deployment**: GitHub Pages (`/typography-chooser/`)

---

## 1. Project Overview

### Purpose

A curated, opinionated Google Fonts explorer aimed at web developers. Rather than exposing all 1,500+ Google Fonts, the app hand-picks ~55 high-quality typefaces and helps developers quickly find the right font — or the right font _pairing_ — for their project.

### Goals

1. Let a developer preview a curated shortlist of Google Fonts with realistic sample strings in seconds.
2. Guide them to a confident heading + body + monospaced font pairing via a short decision-tree wizard.
3. Give them exactly what they need to act: the font name and a direct link to the Google Fonts page.

### Success Criteria

- A developer can open the app, scan all fonts with a meaningful preview string, and copy a font name in under 60 seconds.
- The Font Selection Wizard produces a sensible, opinionated pairing recommendation in 3–5 questions.
- The app feels polished enough that developers trust the curation.

---

## 2. Target Audience

### Primary Persona — "The Decisive Dev"

- **Who**: Front-end or full-stack developer starting a new project (personal site, SaaS product, docs site, portfolio).
- **Goal**: Pick a credible font pairing fast and move on. Doesn't want to scroll through 1,500 fonts.
- **Pain point**: Google Fonts is overwhelming; design systems with opinionated choices take too long to evaluate.
- **Device**: Desktop browser, occasionally mobile for quick reference.

### Secondary Persona — "The Design-Aware Developer"

- A dev with stronger design sensibility who cares about personality and tone as well as legibility.
- Will use the Wizard to explore pairing options they might not have considered.

---

## 3. Feature List

### MVP (Phase 2)

| #   | Feature                   | Notes                                                                           |
| --- | ------------------------- | ------------------------------------------------------------------------------- |
| F1  | Font Preview List         | Scrollable list of all ~55 fonts, each rendered at the preview string           |
| F2  | Preset Preview Strings    | Buttons: Heading / Body / Marketing / Programming / Kid + custom text input     |
| F3  | Font Card                 | Shows font name, preview text in that font, copy-name button, Google Fonts link |
| F4  | Dark / Light Theme Toggle | Polished toggle; persisted in-session only                                      |

### Phase 3 — Font Selection Wizard

| #   | Feature                     | Notes                                                              |
| --- | --------------------------- | ------------------------------------------------------------------ |
| F5  | Wizard Entry Point          | Prominent CTA to launch the wizard                                 |
| F6  | Decision-Tree Questions     | 3–5 multiple-choice questions (see §6)                             |
| F7  | Pairing Results             | Recommended heading + body + monospaced font pairing with previews |
| F8  | Light/Dark pairing variants | Where relevant, different suggestions for light vs. dark themes    |

### Future / Backlog

| #   | Feature                                                                |
| --- | ---------------------------------------------------------------------- |
| F9  | Side-by-side pairing preview (heading + body + mono rendered together) |
| F10 | "Surprise me" random pairing                                           |
| F11 | Filter/search the font list by category tag                            |
| F12 | Google Fonts embed code snippet (copy `<link>` or `@import`)           |

---

## 4. Curated Font List (~55 fonts)

Fonts are stored in `src/data/fonts.ts` as a typed array. The list is **fixed at build time** — no admin UI needed.

### Proposed Curation

| Category                            | Fonts                                                                                                                              |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Serif — Editorial**               | Lora, Libre Baskerville, Merriweather, EB Garamond, Cormorant Garamond, Crimson Text, Bitter, Spectral, PT Serif, Playfair Display |
| **Sans-Serif — Neutral**            | Inter, Roboto, Open Sans, Lato, Source Sans 3, Work Sans, DM Sans, Manrope, Figtree, Lexend                                        |
| **Sans-Serif — Geometric / Modern** | Montserrat, Poppins, Nunito, Outfit, Plus Jakarta Sans, Raleway, Jost, Urbanist                                                    |
| **Display / Expressive**            | Space Grotesk, Syne, Bricolage Grotesque, DM Serif Display, Unbounded                                                              |
| **Monospaced**                      | JetBrains Mono, Fira Code, Source Code Pro, Roboto Mono, Space Mono, IBM Plex Mono, Inconsolata                                    |
| **Rounded / Kid-Friendly**          | Comfortaa, Varela Round, Fredoka, Baloo 2, Grandstander, Caveat                                                                    |
| **Script / Handwriting**            | Pacifico, Dancing Script, Kalam, Patrick Hand                                                                                      |

### Font Data Shape

```ts
interface FontDefinition {
  name: string; // Google Fonts name, e.g. "Inter"
  googleFontsSlug: string; // URL slug, e.g. "Inter"
  category: FontCategory; // "serif" | "sans-serif" | "monospaced" | "display" | "script"
  personality: FontPersonality[]; // "formal" | "neutral" | "friendly" | "playful" | "expressive" | "technical"
  readability: "low" | "medium" | "high";
  themeSuitability: "light" | "dark" | "both";
  roles: FontRole[]; // "heading" | "body" | "monospaced" | "display"
  weights: number[]; // available weights, e.g. [300, 400, 700]
}
```

---

## 5. Architecture

### Directory Structure

```
src/
  App.tsx                     # Root — layout, theme context
  App.module.css
  global.css                  # Google Fonts @import, CSS custom properties
  main.tsx
  data/
    fonts.ts                  # Curated font definitions (source of truth)
    presets.ts                # Preset preview strings
    wizard.ts                 # Decision tree questions + answer → pairing logic
  components/
    ThemeToggle/
      ThemeToggle.tsx
      ThemeToggle.module.css
    PresetPicker/
      PresetPicker.tsx         # Preset buttons + custom text input
      PresetPicker.module.css
    FontCard/
      FontCard.tsx             # Single font preview card
      FontCard.module.css
    FontPreviewList/
      FontPreviewList.tsx      # Virtualized or simple list of FontCards
      FontPreviewList.module.css
    FontWizard/
      FontWizard.tsx           # Wizard container
      WizardStep.tsx           # Single question step
      WizardResults.tsx        # Pairing result display
      FontPairingCard.tsx      # Heading + body + mono preview
      FontWizard.module.css
  machines/
    wizardMachine.ts           # XState v5 wizard state machine
  hooks/
    useTheme.ts                # Theme context hook
test/
  data/
    fonts.test.ts
    wizard.test.ts
  components/
    FontCard.test.tsx
    PresetPicker.test.tsx
    WizardStep.test.tsx
    WizardResults.test.tsx
  machines/
    wizardMachine.test.ts
  filecheck.test.ts
design/
  DESIGN_DOCUMENT.md
```

### Component Tree

```
App
├── ThemeToggle
├── PresetPicker
├── FontPreviewList
│   └── FontCard (×55)
└── FontWizard (conditionally shown)
    ├── WizardStep (one at a time)
    └── WizardResults
        └── FontPairingCard (1–2 pairings)
```

### State Management

- **Theme**: React context + `useReducer` (or a tiny XState machine). Toggles `data-theme` on `<html>`.
- **Preview string**: `useState` in `App`, passed down as a prop — no machine needed.
- **Wizard**: XState v5 machine (`wizardMachine`). Manages question progression and result computation.

#### `wizardMachine` States

```
idle → q1_purpose → q2_tone → q3_theme → [q4_mono?] → [q5_readability?] → results → idle
```

- Context holds `answers: Record<QuestionId, AnswerId>`.
- On entering `results`, a pure selector function derives the pairing from the answers.
- `RESTART` event resets to `idle`.

### Data Flow

```
fonts.ts (data) ──► FontPreviewList ──► FontCard
presets.ts      ──► PresetPicker    ──► preview string prop
wizard.ts       ──► wizardMachine   ──► WizardResults ──► FontPairingCard
```

No API calls at runtime. All font metadata is bundled. Google Fonts CSS loaded via `@import` in `global.css`.

---

## 6. Font Selection Wizard

### Questions (Decision Tree, 3–5 questions)

**Q1 — Purpose** _(always asked)_

> What are you building?

- Web app / dashboard
- Blog / editorial site
- Marketing / landing page
- Developer tool / documentation
- Children's content

**Q2 — Tone** _(always asked)_

> What's the overall personality?

- Professional / corporate
- Modern / minimal
- Warm / friendly
- Bold / expressive
- Playful / fun

**Q3 — Theme** _(always asked)_

> What color theme will you use?

- Light (white or off-white backgrounds)
- Dark (dark backgrounds)
- Both / adaptive

**Q4 — Code font needed?** _(asked if Q1 = "Web app / dashboard" OR "Developer tool / documentation")_

> Do you need a monospaced font for code or data?

- Yes, essential
- Maybe, nice to have
- No

**Q5 — Readability priority** _(asked if Q1 ≠ "Developer tool / documentation")_

> How much long-form body copy will there be?

- A lot — readability is critical
- Some — balanced mix
- Minimal — mostly headings and UI text

### Result Shape

```ts
interface WizardResult {
  pairing: {
    heading: FontDefinition;
    body: FontDefinition;
    mono?: FontDefinition;      // present when Q4 = "Yes" or "Maybe"
  };
  alternatePairing?: { ... };   // optional second suggestion
  rationale: string;            // short human-readable explanation
}
```

### Scoring / Matching Logic

The wizard uses a **decision-tree filter** (not weighted scoring). Each answer set maps to a pairing via a lookup table in `src/data/wizard.ts`. The table is typed and exhaustive — all answer combinations produce a deterministic pairing. This keeps the logic simple, testable, and easy to update by editing the data file.

---

## 7. UI/UX Guidelines

### Visual Tone

Polished, professional, design-forward. The app's own typography should be exemplary — it uses Inter for UI chrome and switches elegantly between themes.

### Theming

- CSS custom properties on `:root[data-theme="dark"]` / `:root[data-theme="light"]`
- Default: dark theme (consistent with developer tooling conventions)
- Toggle button in the header; theme stored in session only (no `localStorage`)

#### Token Palette (Dark / Light)

| Token              | Dark      | Light     |
| ------------------ | --------- | --------- |
| `--bg`             | `#0f0f13` | `#f8f8fc` |
| `--surface`        | `#1a1a2e` | `#ffffff` |
| `--border`         | `#2a2a3a` | `#e0e0ec` |
| `--text-primary`   | `#e8e8f0` | `#1a1a2e` |
| `--text-secondary` | `#a0a0c0` | `#5a5a7a` |
| `--accent`         | `#7c7cdc` | `#5050c0` |

### Font Card Design

- Font name in Inter (UI chrome)
- Preview text rendered in the subject font at ~1.5rem
- Preview text size adjusts for the preset: larger for "Heading", smaller for "Body" / "Programming"
- Two action buttons: **Copy name** (clipboard icon) and **View on Google Fonts** (external link icon)
- On copy: brief "Copied!" tooltip (CSS animation, no library)

### Preset Strings

| Preset      | String                                                                                  |
| ----------- | --------------------------------------------------------------------------------------- |
| Heading     | `The Quick Brown Fox Jumped Over The Lazy Dog`                                          |
| Body        | `The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.` |
| Marketing   | `Elevate Your Brand. Start Today.`                                                      |
| Programming | `const greet = (name: string) => \`Hello, \${name}!\`;`                                 |
| Kid         | `Once upon a time, a friendly dragon named Sparky learned to share.`                    |
| Custom      | _(user-entered text, min 1 char)_                                                       |

### Responsive Breakpoints

| Breakpoint       | Layout                          |
| ---------------- | ------------------------------- |
| `< 640px`        | Single column, full-width cards |
| `640px – 1023px` | 2-column card grid              |
| `≥ 1024px`       | 3-column card grid              |

### Accessibility

- WCAG 2.1 AA contrast for both themes
- All interactive elements keyboard-navigable (Tab, Enter, Space)
- Wizard uses `role="group"` with `aria-labelledby` on each question
- `aria-live="polite"` region announces wizard result
- `prefers-reduced-motion` disables non-essential transitions
- Semantic HTML throughout (`<main>`, `<section>`, `<article>`, `<button>`, `<a>`)

---

## 8. API & Integrations

### Google Fonts (CSS only)

- Fonts loaded via a single `@import` in `global.css` at build time.
- All ~55 fonts declared upfront with the weights needed.
- No Google Fonts API key required for CSS delivery.
- Font Card links point to `https://fonts.google.com/specimen/{slug}`.

### No Backend

- Fully static SPA. No server, no database, no auth.
- All data is bundled TypeScript (`src/data/`).

---

## 9. Authentication & Authorization

None. The app is fully public, read-only, and stateless. No user accounts, no saved preferences persisted beyond the session.

---

## 10. Phase Plan

### Phase 1 — Project Setup & Data Layer

**Goal**: Clean repo, all data defined, fonts loading.

- [ ] Run `npm run remove-template-examples` to strip hello-world files
- [ ] Create `src/data/fonts.ts` — full curated list with `FontDefinition` types
- [ ] Create `src/data/presets.ts` — preset string map
- [ ] Update `src/global.css` — `@import` for all ~55 fonts + CSS custom property tokens for both themes
- [ ] Add font data files to `.filecheck-excludes.json` (data files don't need mirrored tests, or write basic smoke tests)
- [ ] Update `README.md` with project name and description

**Exit criteria**: App compiles; fonts render in browser; TypeScript types for all data are in place.

---

### Phase 2 — MVP: Font Preview List

**Goal**: Core browsable font list is fully functional.

- [ ] `useTheme` hook + theme context (CSS `data-theme` attribute toggle)
- [ ] `ThemeToggle` component in header
- [ ] `PresetPicker` component (preset buttons + controlled text input)
- [ ] `FontCard` component (name, preview, copy button, Google Fonts link)
- [ ] `FontPreviewList` component (renders all fonts, receives preview string prop)
- [ ] Responsive grid layout in `App.tsx`
- [ ] "Copied!" tooltip on copy action
- [ ] Vitest unit tests for all new components and the `useTheme` hook

**Exit criteria**: Developer can browse all fonts with any preset string, copy a font name, and toggle theme.

---

### Phase 3 — Font Selection Wizard

**Goal**: Decision-tree wizard produces a font pairing.

- [ ] Define full decision tree in `src/data/wizard.ts` (questions + answer → pairing lookup table)
- [ ] `wizardMachine.ts` (XState v5) — states: idle → questions → results
- [ ] `WizardStep` component — renders a single question with answer buttons
- [ ] `FontPairingCard` component — shows heading + body + (optional) mono preview
- [ ] `WizardResults` component — displays recommended pairing + rationale + restart CTA
- [ ] `FontWizard` container component wired to `wizardMachine`
- [ ] Prominent "Find my font →" entry point in the main layout
- [ ] Vitest tests for `wizardMachine` and pairing logic

**Exit criteria**: Wizard walks through 3–5 questions and produces a named, opinionated pairing with both light and dark theme variants where applicable.

---

### Phase 4 — Polish & Deploy

**Goal**: Production-ready quality.

- [ ] Smooth CSS transitions (theme toggle, card hover, wizard step transitions)
- [ ] `prefers-reduced-motion` support
- [ ] Full keyboard navigation audit
- [ ] WCAG AA contrast check for both themes
- [ ] Mobile layout review (375px viewport)
- [ ] Verify GitHub Pages deploy (`npm run build`, check asset paths)
- [ ] Update `<title>` and meta description in `index.html`
- [ ] Final `npm run validate` passes clean

**Exit criteria**: Lighthouse score ≥ 90 performance, 100 accessibility; deploys cleanly to GitHub Pages.

---

## 11. Open Questions

| #   | Question                                                                       | Notes                                                                                                                                        |
| --- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| OQ1 | Should the wizard suggest two pairings (one per theme) or pick one best match? | Current assumption: one best-match pairing; theme variant noted in rationale.                                                                |
| OQ2 | How to handle fonts that load slowly on first render?                          | Options: `font-display: swap` (already default for Google Fonts), skeleton shimmer on cards, or lazy-load individual fonts on demand via JS. |
| OQ3 | Should the "Programming" preset render in a monospaced font by default?        | Makes sense UX-wise — the preview string would look odd in a serif. Could auto-switch the preview font for that preset.                      |
| OQ4 | Should the Wizard result scroll into view or appear as a modal/overlay?        | Inline scroll-into-view is simpler; a modal adds visual weight. TBD during Phase 3 implementation.                                           |
| OQ5 | Is PixiJS still needed, or can it be removed after template cleanup?           | PixiJS was part of the hello-world template. Unless a canvas-based font rendering feature is added, it can be dropped in Phase 1.            |
| OQ6 | Exact final font list of ~55 — needs curated review pass before Phase 1        | The list in §4 is a strong starting point but should be reviewed for quality and variety.                                                    |
