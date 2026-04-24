import styles from "./Demo.module.css";
export function PortfolioDemo() {
  const projects = [
    "Flux Identity System",
    "Meridian Exhibition",
    "Solstice Campaign",
    "Arc Product Film",
  ];
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Rin Nakamura</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Work
          </a>
          <a className={styles.navLink} href="#">
            About
          </a>
          <a className={styles.navLink} href="#">
            Contact
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.heroHeading}>Design that makes people feel something.</h1>
        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <div key={p} className={styles.projectItem}>
              <div className={styles.projectThumb} />
              <span className={styles.subheading}>{p}</span>
            </div>
          ))}
        </div>
        <div className={styles.contactCta}>
          <p className={styles.body}>
            Available for select projects —{" "}
            <a className={styles.inlineLink} href="#">
              let's talk
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
