import styles from "./Demo.module.css";

export function MinimalistDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>N. Okafor</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Words
          </a>
          <a className={styles.navLink} href="#">
            Notes
          </a>
          <a className={styles.navLink} href="#">
            Now
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.minimalistMain}>
          <h1 className={styles.heading}>On Finishing Things</h1>
          <p className={styles.meta}>April 2025</p>
          <p className={styles.body}>
            I've been thinking about the gap between starting and shipping. Not the fear of
            failure — most people know about that — but the quieter problem: the project that is
            95% done and lives in a folder called <em>final-v3</em>.
          </p>
          <blockquote className={styles.pullQuote}>
            "Done is a choice, not a state."
          </blockquote>
          <p className={styles.body}>
            The last 5% is rarely technical. It's editorial. Deciding what to cut, what to keep,
            and — hardest of all — when it's enough.
          </p>
          <p className={styles.body}>
            I shipped this site with three essays and a now-page. That was enough to start.
          </p>
          <p className={styles.sectionLabel} style={{ marginTop: "2rem" }}>
            Recent Writing
          </p>
          <ul className={styles.projectList}>
            {["On Finishing Things", "The Attention Economy Is Losing", "Notes on Solitude"].map(
              (title) => (
                <li key={title}>
                  <a className={styles.categoryLink} href="#">
                    {title}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
