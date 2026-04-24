import styles from "./Demo.module.css";

const screenshots = [
  "Overworld · Chapter 3",
  "The Hollow Cathedral",
  "Boss: The Pale Warden",
  "Co-op Bridge Scene",
];

export function TeenGameDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>ECHOES</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Story
          </a>
          <a className={styles.navLink} href="#">
            World
          </a>
          <a className={styles.navLink} href="#">
            Community
          </a>
          <button className={styles.ctaBtn}>Pre-order</button>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>Some doors were never meant to open.</h1>
          <p className={styles.heroSub}>
            A hand-drawn indie adventure about memory, grief, and the friendships that survive
            both. Coming 2025 for PC and Switch.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.ctaBtn}>Wishlist on Steam</button>
            <button className={styles.ctaOutline}>Watch Trailer</button>
          </div>
        </div>
        <div className={styles.projectGrid}>
          {screenshots.map((s) => (
            <div key={s} className={styles.projectItem}>
              <div className={styles.projectThumb} />
              <p className={styles.meta}>{s}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
