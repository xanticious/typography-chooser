import styles from "./Demo.module.css";
export function SaasLandingDemo() {
  const features = [
    {
      title: "Real-Time Analytics",
      desc: "Monitor every metric as it happens with sub-second latency.",
    },
    {
      title: "Team Collaboration",
      desc: "Invite teammates, set permissions, comment on dashboards.",
    },
    {
      title: "One-Click Integrations",
      desc: "Connect Slack, Notion, GitHub, and 200+ more in seconds.",
    },
  ];
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Velodata</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Product
          </a>
          <a className={styles.navLink} href="#">
            Pricing
          </a>
          <a className={styles.navLink} href="#">
            Docs
          </a>
          <button className={styles.ctaBtn}>Start Free Trial</button>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>Analytics that move at the speed of your team.</h1>
          <p className={styles.heroSub}>
            Stop waiting for reports. Velodata gives your whole team live visibility into the
            metrics that matter.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.ctaBtn}>Get Started Free</button>
            <button className={styles.ctaOutline}>See a Demo</button>
          </div>
        </div>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <h3 className={styles.subheading}>{f.title}</h3>
              <p className={styles.body}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.pricingRow}>
          <div className={styles.pricingTier}>
            <h4>Starter</h4>
            <p className={styles.price}>$0/mo</p>
            <p className={styles.body}>Up to 3 users, 1 workspace</p>
          </div>
          <div className={`${styles.pricingTier} ${styles.pricingFeatured}`}>
            <h4>Pro</h4>
            <p className={styles.price}>$49/mo</p>
            <p className={styles.body}>Unlimited users, 10 workspaces</p>
          </div>
          <div className={styles.pricingTier}>
            <h4>Enterprise</h4>
            <p className={styles.price}>Custom</p>
            <p className={styles.body}>SLA, SSO, dedicated support</p>
          </div>
        </div>
      </main>
    </div>
  );
}
