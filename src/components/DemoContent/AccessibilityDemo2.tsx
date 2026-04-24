import styles from "./Demo.module.css";

export function AccessibilityDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>SIGNAL NEWS</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#main-content">
            Skip to Content
          </a>
          <a className={styles.navLink} href="#">
            World
          </a>
          <a className={styles.navLink} href="#">
            Science
          </a>
          <a className={styles.navLink} href="#">
            Text Size ↕
          </a>
        </div>
      </nav>
      <main id="main-content" className={styles.main}>
        <div className={styles.article}>
          <div className={styles.tagList}>
            <span className={styles.tag}>Science</span>
            <span className={styles.tag}>Climate</span>
          </div>
          <h1 className={styles.heading}>
            Researchers Achieve Record Solar Cell Efficiency of 35.1%
          </h1>
          <p className={styles.meta}>Published April 24, 2025 · Reading level: Grade 8</p>
          <p className={styles.body}>
            A team at the National Renewable Energy Laboratory has broken the world record for
            single-junction solar cell efficiency. The new cell converts 35.1% of sunlight into
            electricity — a 2-point leap over the previous record set in 2022.
          </p>
          <p className={styles.body}>
            The breakthrough uses a perovskite-silicon tandem structure and could reduce the cost of
            utility-scale solar by an estimated 18% within five years.
          </p>
          <div className={styles.a11yForm}>
            <label className={styles.formLabel} htmlFor="signal-text-size">
              Adjust Text Size
            </label>
            <select id="signal-text-size" className={styles.formInput}>
              <option>Normal</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
}
