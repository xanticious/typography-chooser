import styles from "./Demo.module.css";
export function NewsMagazineDemo() {
  return (
    <div className={styles.demo}>
      <header className={styles.masthead}>
        <h1 className={styles.mastheadTitle}>The Correspondent</h1>
        <p className={styles.mastheadDate}>Thursday, March 13, 2025</p>
      </header>
      <nav className={styles.nav}>
        <a className={styles.navLink} href="#">
          World
        </a>
        <a className={styles.navLink} href="#">
          Politics
        </a>
        <a className={styles.navLink} href="#">
          Technology
        </a>
        <a className={styles.navLink} href="#">
          Climate
        </a>
        <a className={styles.navLink} href="#">
          Culture
        </a>
      </nav>
      <main className={styles.main}>
        <article className={styles.leadStory}>
          <span className={styles.sectionLabel}>WORLD</span>
          <h2 className={styles.heading}>Global Leaders Convene for Emergency Climate Summit</h2>
          <p className={styles.body}>
            Delegates from 140 nations gathered in Geneva on Wednesday to address mounting pressure
            to accelerate decarbonization commitments ahead of the 2030 deadline.
          </p>
        </article>
        <div className={styles.secondaryGrid}>
          <article className={styles.secondaryStory}>
            <span className={styles.sectionLabel}>TECH</span>
            <h3 className={styles.subheading}>
              AI Chip Wars Intensify as New Players Enter Market
            </h3>
          </article>
          <article className={styles.secondaryStory}>
            <span className={styles.sectionLabel}>POLITICS</span>
            <h3 className={styles.subheading}>Senate Passes Landmark Infrastructure Bill</h3>
          </article>
          <article className={styles.secondaryStory}>
            <span className={styles.sectionLabel}>CULTURE</span>
            <h3 className={styles.subheading}>Sundance Winner Premieres to Standing Ovation</h3>
          </article>
        </div>
      </main>
    </div>
  );
}
