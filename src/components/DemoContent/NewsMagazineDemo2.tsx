import styles from "./Demo.module.css";

const stories = [
  {
    headline: "OpenAI's new model rewrites its own weights mid-inference",
    tag: "AI",
    time: "4m ago",
  },
  { headline: "EU passes sweeping data sovereignty act", tag: "Policy", time: "22m ago" },
  { headline: "Rust surpasses Go in backend job postings", tag: "Dev", time: "1h ago" },
];

export function NewsMagazineDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>DISPATCH</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            AI
          </a>
          <a className={styles.navLink} href="#">
            Policy
          </a>
          <a className={styles.navLink} href="#">
            Dev
          </a>
          <a className={styles.navLink} href="#">
            Crypto
          </a>
          <a className={styles.navLink} href="#">
            Security
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <p className={styles.sectionLabel}>Breaking</p>
        <div className={styles.leadStory}>
          <div className={styles.heroImage} />
          <h1 className={styles.heading}>
            Silicon Valley's Biggest Bet: Autonomous AI Agents in the Enterprise
          </h1>
          <p className={styles.meta}>April 24, 2025 · 3 min read</p>
          <p className={styles.body}>
            A wave of startups — and every major cloud provider — is racing to deploy AI agents
            that can read email, write code, and close deals without human sign-off. Here's what
            could go wrong.
          </p>
        </div>
        <p className={styles.sectionLabel}>Latest</p>
        <div className={styles.secondaryGrid}>
          {stories.map((s) => (
            <div key={s.headline} className={styles.secondaryStory}>
              <span className={styles.tag}>{s.tag}</span>
              <p className={styles.subheading}>{s.headline}</p>
              <p className={styles.meta}>{s.time}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
