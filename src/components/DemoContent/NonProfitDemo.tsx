import styles from "./Demo.module.css";
const stats = [
  { num: "14,000+", label: "Meals Served" },
  { num: "320", label: "Families Housed" },
  { num: "92%", label: "Funds to Programs" },
];
export function NonProfitDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Common Ground</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Our Work
          </a>
          <a className={styles.navLink} href="#">
            Stories
          </a>
          <a className={styles.navLink} href="#">
            Volunteer
          </a>
          <button className={styles.ctaBtn}>Donate Now</button>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>Building a city where no one is left behind.</h1>
          <p className={styles.heroSub}>
            Common Ground works at the intersection of housing, food security, and community
            resilience.
          </p>
        </div>
        <div className={styles.statCards}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
        <div className={styles.donationCta}>
          <h2 className={styles.subheading}>Your gift makes a difference.</h2>
          <p className={styles.body}>
            Every dollar goes directly to programs serving our neighbors in need.
          </p>
          <button className={styles.ctaBtn}>Make a Donation</button>
        </div>
      </main>
    </div>
  );
}
