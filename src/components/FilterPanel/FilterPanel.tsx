import type { AppCategory, Theme, Mood } from "../../data/types";
import type { FilterState } from "../../hooks/useFilters";
import styles from "./FilterPanel.module.css";

const CATEGORIES: AppCategory[] = [
  "Technical Blog","Lifestyle / Personal Blog","E-Commerce / Retail","Enterprise CRUD / Dashboard",
  "SaaS / Product Landing Page","Portfolio / Creative Agency","News / Magazine","Kid-Friendly Game / App",
  "Teen / Young Adult Game","Documentation / Developer Docs","Healthcare / Medical","Restaurant / Food & Drink",
  "Non-Profit / Charity","Finance / Banking","Education / EdTech","Accessibility / High-Contrast",
  "Minimalist Personal Site","Gaming / Streaming",
];

const THEMES: Theme[] = ["light", "dark", "high-contrast"];
const MOODS: Mood[] = ["clean","playful","serious","elegant","bold","warm","minimal"];

interface FilterPanelProps {
  filterState: FilterState;
  onFilterChange: { setCategory: (c: AppCategory | null) => void; toggleTheme: (t: Theme) => void; toggleMood: (m: Mood) => void; setResponsiveOnly: (v: boolean) => void; };
  onClearAll: () => void;
  onSearchChange: (q: string) => void;
  searchQuery: string;
}

export function FilterPanel({ filterState, onFilterChange, onClearAll, onSearchChange, searchQuery }: FilterPanelProps) {
  const hasActiveFilters = filterState.category !== null || filterState.themes.length > 0 || filterState.moods.length > 0 || filterState.responsiveOnly;

  return (
    <aside className={styles.panel}>
      <div className={styles.searchRow}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Search combinations…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search combinations"
        />
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.groupLabel}>Category</label>
        <select
          className={styles.select}
          value={filterState.category ?? ""}
          onChange={(e) => onFilterChange.setCategory((e.target.value as AppCategory) || null)}
        >
          <option value="">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.groupLabel}>Theme</label>
        <div className={styles.chipRow}>
          {THEMES.map((t) => (
            <button
              key={t}
              className={`${styles.chip} ${filterState.themes.includes(t) ? styles.chipActive : ""}`}
              onClick={() => onFilterChange.toggleTheme(t)}
              aria-pressed={filterState.themes.includes(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.groupLabel}>Mood</label>
        <div className={styles.chipRow}>
          {MOODS.map((m) => (
            <button
              key={m}
              className={`${styles.chip} ${filterState.moods.includes(m) ? styles.chipActive : ""}`}
              onClick={() => onFilterChange.toggleMood(m)}
              aria-pressed={filterState.moods.includes(m)}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.toggleLabel}>
          <input
            type="checkbox"
            checked={filterState.responsiveOnly}
            onChange={(e) => onFilterChange.setResponsiveOnly(e.target.checked)}
          />
          Responsive only
        </label>
      </div>

      {hasActiveFilters && (
        <button className={styles.clearBtn} onClick={onClearAll}>
          Clear all filters
        </button>
      )}
    </aside>
  );
}
