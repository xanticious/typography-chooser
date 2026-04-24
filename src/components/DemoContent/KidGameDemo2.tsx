import styles from "./Demo.module.css";

const levels = [
  { emoji: "➕", name: "Add Adventure", locked: false },
  { emoji: "✖️", name: "Multiply Mayhem", locked: false },
  { emoji: "➗", name: "Division Dungeon", locked: true },
  { emoji: "🔢", name: "Number Nexus", locked: true },
];

export function KidGameDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>MathQuest!</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            My Trophies
          </a>
          <a className={styles.navLink} href="#">
            Friends
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.mascot}>🦄</div>
        <h1 className={styles.heading} style={{ textAlign: "center" }}>
          Choose Your Quest!
        </h1>
        <p className={styles.body} style={{ textAlign: "center" }}>
          Solve puzzles, earn stars, and unlock new worlds. Ready?
        </p>
        <div className={styles.gameGrid}>
          {levels.map((lv) => (
            <div
              key={lv.name}
              className={styles.gameCard}
              style={{ opacity: lv.locked ? 0.45 : 1 }}
            >
              <div className={styles.gameThumb}>{lv.emoji}</div>
              <p className={styles.subheading}>{lv.name}</p>
              <button className={styles.ctaBtn} disabled={lv.locked}>
                {lv.locked ? "🔒 Locked" : "Play!"}
              </button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <p className={styles.body}>⭐ You have 430 stars — keep going!</p>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: "43%" }} />
          </div>
        </div>
      </main>
    </div>
  );
}
