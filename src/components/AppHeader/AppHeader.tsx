import { useTheme } from "../../hooks/useTheme";
import styles from "./AppHeader.module.css";

export function AppHeader() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <span className={styles.title}>Typography Chooser</span>
      <button className={styles.themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? "☀" : "☾"}
      </button>
    </header>
  );
}
