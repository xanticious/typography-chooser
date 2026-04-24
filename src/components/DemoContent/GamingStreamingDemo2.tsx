import styles from "./Demo.module.css";

const games = [
  { title: "CRYPTFALL", genre: "Platformer · 2024", status: "Available Now" },
  { title: "NULLZONE", genre: "Puzzle · 2023", status: "Available Now" },
  { title: "STARBOUND ZERO", genre: "RPG · Coming 2025", status: "Wishlist" },
];

export function GamingStreamingDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>PIXEL FORGE</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Games
          </a>
          <a className={styles.navLink} href="#">
            Devlog
          </a>
          <a className={styles.navLink} href="#">
            Press Kit
          </a>
          <button className={styles.ctaBtn}>Join Discord</button>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>Small studio. Big worlds.</h1>
          <p className={styles.heroSub}>
            Pixel Forge is a two-person indie studio making games about exploration, mystery, and
            finding your way home.
          </p>
        </div>
        <div className={styles.streamGrid}>
          {games.map((g) => (
            <div key={g.title} className={styles.streamCard}>
              <div className={styles.streamThumb}>
                {g.status === "Available Now" && (
                  <span className={styles.liveBadge}>● OUT NOW</span>
                )}
              </div>
              <div className={styles.streamInfo}>
                <p className={styles.subheading}>{g.title}</p>
                <p className={styles.body}>{g.genre}</p>
                <button className={styles.ctaBtn} style={{ marginTop: "0.5rem" }}>
                  {g.status}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.chatSnippet}>
          <h3 className={styles.subheading}>Latest Devlog — April 2025</h3>
          <p className={styles.body}>
            We just finished the overworld biome system for STARBOUND ZERO. The procedural cave
            generator is finally not eating all available RAM. Progress!
          </p>
        </div>
      </main>
    </div>
  );
}
