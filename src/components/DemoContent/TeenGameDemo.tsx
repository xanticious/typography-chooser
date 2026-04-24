import styles from "./Demo.module.css";
const chars = [
  { name: "Vex", role: "Assassin", xp: 9800 },
  { name: "Kira", role: "Mage", xp: 12450 },
  { name: "Storm", role: "Tank", xp: 7200 },
];
export function TeenGameDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>CIPHER://ONLINE</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">Matches</a>
          <a className={styles.navLink} href="#">Leaderboard</a>
          <a className={styles.navLink} href="#">Store</a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>The Grid is Alive.</h1>
          <p className={styles.heroSub}>Season 4 is live. New map: The Void Breach. Ranked resets in 48h.</p>
          <button className={styles.ctaBtn}>Enter the Grid →</button>
        </div>
        <div className={styles.charCards}>
          {chars.map((c) => (
            <div key={c.name} className={styles.charCard}>
              <div className={styles.charAvatar} />
              <h3 className={styles.subheading}>{c.name}</h3>
              <p className={styles.body}>{c.role} · {c.xp.toLocaleString()} XP</p>
            </div>
          ))}
        </div>
        <div className={styles.leaderboard}>
          <h3 className={styles.subheading}>Top Ranked</h3>
          <ol className={styles.leaderList}>
            <li>wraith99 — 18,200 pts</li>
            <li>nxtvex — 16,880 pts</li>
            <li>pxlkira — 15,010 pts</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
