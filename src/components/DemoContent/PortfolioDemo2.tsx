import styles from "./Demo.module.css";

const projects = [
  { name: "Kira House", tag: "Residential · Oslo, 2024" },
  { name: "Silhouette Pavilion", tag: "Cultural · Rotterdam, 2023" },
  { name: "The Threshold", tag: "Mixed-use · Lisbon, 2024" },
  { name: "Moss Garden Retreat", tag: "Hospitality · Kyoto, 2025" },
];

export function PortfolioDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>KARAM STUDIO</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Work
          </a>
          <a className={styles.navLink} href="#">
            Practice
          </a>
          <a className={styles.navLink} href="#">
            Awards
          </a>
          <a className={styles.navLink} href="#">
            Contact
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>Architecture as quiet conviction.</h1>
          <p className={styles.heroSub}>
            We design buildings that hold space for the people inside them — without announcing
            themselves.
          </p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <div key={p.name} className={styles.projectItem}>
              <div className={styles.projectThumb} />
              <h3 className={styles.subheading}>{p.name}</h3>
              <p className={styles.meta}>{p.tag}</p>
            </div>
          ))}
        </div>
        <div className={styles.contactCta}>
          <p className={styles.body}>
            Currently accepting commissions for 2026.{" "}
            <a className={styles.inlineLink} href="#">
              Get in touch
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
