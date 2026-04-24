import styles from "./Demo.module.css";

const features = [
  { title: "Zero Config Deploy", desc: "Push to main. Done. No YAML, no Docker, no ops degree." },
  { title: "Edge Functions", desc: "Run serverless logic at 50+ PoPs with sub-10ms cold starts." },
  { title: "Instant Rollbacks", desc: "Every deploy is immutable. Roll back with one command." },
];

export function SaasLandingDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>SHIPFAST</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Docs
          </a>
          <a className={styles.navLink} href="#">
            Pricing
          </a>
          <a className={styles.navLink} href="#">
            Changelog
          </a>
          <button className={styles.ctaBtn}>Deploy for Free</button>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>Ship to production in under 60 seconds.</h1>
          <p className={styles.heroSub}>
            SHIPFAST is the deploy platform built for developers who hate config files. Connect your
            repo and we handle the rest.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.ctaBtn}>Start Shipping</button>
            <button className={styles.ctaOutline}>Read the Docs</button>
          </div>
        </div>
        <pre className={styles.codeBlock}>
          <code>{`$ shipfast deploy

  ✔ Building…        3.2s
  ✔ Uploading…       1.1s
  ✔ Edge propagation 0.4s

  🚀 Live at https://yourapp.ship.dev`}</code>
        </pre>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <h3 className={styles.subheading}>{f.title}</h3>
              <p className={styles.body}>{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
