import styles from "./Demo.module.css";

export function LifestyleBlogDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>film & fog</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Photos
          </a>
          <a className={styles.navLink} href="#">
            Journal
          </a>
          <a className={styles.navLink} href="#">
            Darkroom
          </a>
          <a className={styles.navLink} href="#">
            About
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.heading}>Shooting Tokyo at 3am on Expired Kodak</h1>
          <p className={styles.meta}>March 29, 2025</p>
          <div className={styles.heroImage} />
          <p className={styles.body}>
            The expired Kodak Gold 200 had been sitting in my fridge for two years. I didn't plan
            to burn a roll on a Tuesday night — but Shinjuku at 3am, rain-slicked and nearly empty,
            demanded it.
          </p>
          <blockquote className={styles.pullQuote}>
            "Every expired roll is a collaboration with time."
          </blockquote>
          <p className={styles.body}>
            The grain pushed two stops gave every neon sign a halo. Ramen-shop windows bled orange
            into the wet pavement. At f/1.8 the depth of field collapsed to a whisper — just enough
            to hold one face, one lamppost, one moment before the city swallowed it.
          </p>
          <p className={styles.body}>
            I shot 36 frames. Four are keepers. That's a good night.
          </p>
        </article>
        <div className={styles.categoryLinks}>
          <a className={styles.categoryLink} href="#">
            #FilmPhotography
          </a>
          <a className={styles.categoryLink} href="#">
            #Tokyo
          </a>
          <a className={styles.categoryLink} href="#">
            #AnalogLife
          </a>
        </div>
      </main>
    </div>
  );
}
