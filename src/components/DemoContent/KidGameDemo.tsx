import styles from "./Demo.module.css";
export function KidGameDemo() {
  const games = ["Bubble Pop!","Star Dash","Dino Run","Color Match"];
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>⭐ FunZone!</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">Games</a>
          <a className={styles.navLink} href="#">My Scores</a>
          <a className={styles.navLink} href="#">Parents</a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.mascot}>🦖</div>
        <h1 className={styles.heroHeading}>Play. Learn. Have Fun!</h1>
        <p className={styles.body}>Over 50 educational games for ages 4–10. No ads. No in-app purchases.</p>
        <div className={styles.gameGrid}>
          {games.map((g) => (
            <div key={g} className={styles.gameCard}>
              <div className={styles.gameThumb}>🎮</div>
              <span className={styles.subheading}>{g}</span>
              <button className={styles.ctaBtn}>Play!</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
