import type { ShowcaseCombination } from "../../data/types";
import { ColorSplotch } from "../ColorSplotch/ColorSplotch";
import styles from "./CombinationTile.module.css";

interface CombinationTileProps {
  combination: ShowcaseCombination;
}

export function CombinationTile({ combination }: CombinationTileProps) {
  const { id, name, category, theme, mood, responsive, fonts, colors } = combination;

  const themeLabel =
    theme === "high-contrast" ? "High-Contrast" : theme === "dark" ? "Dark" : "Light";

  return (
    <article className={styles.tile}>
      <div className={styles.topRow}>
        <span className={styles.categoryBadge}>{category}</span>
        <span className={`${styles.themeBadge} ${styles[`theme_${theme.replace("-", "_")}`]}`}>
          {themeLabel}
        </span>
      </div>

      <h2 className={styles.tileName} style={{ fontFamily: `"${fonts.heading.name}", serif` }}>
        {name}
      </h2>

      <div className={styles.fontsSection}>
        <div className={styles.fontRow}>
          <span className={styles.fontLabel}>Heading</span>
          <span
            className={styles.fontName}
            style={{ fontFamily: `"${fonts.heading.name}", serif` }}
          >
            {fonts.heading.name}
          </span>
        </div>
        <div className={styles.fontRow}>
          <span className={styles.fontLabel}>Body</span>
          <span
            className={styles.fontName}
            style={{ fontFamily: `"${fonts.body.name}", sans-serif` }}
          >
            {fonts.body.name}
          </span>
        </div>
        {fonts.mono && (
          <div className={styles.fontRow}>
            <span className={styles.fontLabel}>Mono</span>
            <span
              className={styles.fontName}
              style={{ fontFamily: `"${fonts.mono.name}", monospace` }}
            >
              {fonts.mono.name}
            </span>
          </div>
        )}
      </div>

      <div className={styles.colorsRow}>
        <ColorSplotch color={colors.background} label={`Background: ${colors.background}`} />
        <ColorSplotch color={colors.text} label={`Text: ${colors.text}`} />
        <ColorSplotch color={colors.accent} label={`Accent: ${colors.accent}`} />
      </div>

      <div className={styles.moodRow}>
        {mood.map((m) => (
          <span key={m} className={styles.moodChip}>
            {m}
          </span>
        ))}
        {responsive && <span className={styles.responsiveBadge}>Responsive</span>}
      </div>

      <a href={`#page=${encodeURIComponent(id)}`} className={styles.demoBtn}>
        Demo
      </a>
    </article>
  );
}
