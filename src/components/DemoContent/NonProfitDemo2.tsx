import styles from "./Demo.module.css";

const campaigns = [
  { name: "Reforest the Amazon", goal: 180000, raised: 142000 },
  { name: "Ocean Plastic Initiative", goal: 95000, raised: 88500 },
  { name: "Community Seed Banks", goal: 40000, raised: 29800 },
];

export function NonProfitDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Rootwork</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Campaigns
          </a>
          <a className={styles.navLink} href="#">
            Volunteer
          </a>
          <a className={styles.navLink} href="#">
            Impact
          </a>
          <button className={styles.ctaBtn}>Donate</button>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>The planet needs roots, not just branches.</h1>
          <p className={styles.heroSub}>
            Rootwork funds community-led environmental projects that create lasting change from the
            ground up.
          </p>
        </div>
        <p className={styles.sectionLabel}>Active Campaigns</p>
        {campaigns.map((c) => {
          const pct = Math.round((c.raised / c.goal) * 100);
          return (
            <div key={c.name} style={{ marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className={styles.subheading}>{c.name}</span>
                <span className={styles.body}>{pct}%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${pct}%` }} />
              </div>
              <p className={styles.meta}>
                ${c.raised.toLocaleString()} raised of ${c.goal.toLocaleString()}
              </p>
            </div>
          );
        })}
        <div className={styles.donationCta}>
          <p className={styles.subheading}>Join 12,000 supporters this month.</p>
          <button className={styles.ctaBtn}>Give Today</button>
        </div>
      </main>
    </div>
  );
}
