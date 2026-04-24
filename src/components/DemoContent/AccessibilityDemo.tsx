import styles from "./Demo.module.css";
export function AccessibilityDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Clarity UI</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">Home</a>
          <a className={styles.navLink} href="#">About</a>
          <a className={styles.navLink} href="#">Contact</a>
        </div>
      </nav>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.heading}>Making the Web Work for Everyone</h1>
          <h2 className={styles.subheading}>Why Accessibility Matters</h2>
          <p className={styles.body}>Over 1 billion people worldwide live with some form of disability. Accessible design isn't a feature—it's a foundation.</p>
          <h2 className={styles.subheading}>Key Principles</h2>
          <ul>
            <li className={styles.body}>Perceivable — content must be available to all senses</li>
            <li className={styles.body}>Operable — all functions available via keyboard</li>
            <li className={styles.body}>Understandable — language is clear, errors are explained</li>
            <li className={styles.body}>Robust — works with assistive technologies</li>
          </ul>
        </article>
        <form className={styles.a11yForm} aria-label="Contact form demo">
          <label className={styles.formLabel} htmlFor="a11y-name">Full Name <span aria-hidden="true">*</span></label>
          <input className={styles.formInput} id="a11y-name" type="text" autoComplete="name" />
          <label className={styles.formLabel} htmlFor="a11y-email">Email Address <span aria-hidden="true">*</span></label>
          <input className={styles.formInput} id="a11y-email" type="email" autoComplete="email" />
          <button className={styles.ctaBtn} type="submit">Send Message</button>
        </form>
        <p className={styles.body}><a className={styles.focusDemo} href="#">Focus ring example</a> — tab to see high-visibility outline.</p>
      </main>
    </div>
  );
}
