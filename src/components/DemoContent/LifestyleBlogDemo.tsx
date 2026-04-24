import styles from "./Demo.module.css";
export function LifestyleBlogDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>The Slow Season</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Stories
          </a>
          <a className={styles.navLink} href="#">
            Travel
          </a>
          <a className={styles.navLink} href="#">
            Food
          </a>
          <a className={styles.navLink} href="#">
            About
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.heroImage} />
        <article className={styles.article}>
          <h1 className={styles.heading}>A Weekend in the Azores: Notes on Solitude</h1>
          <p className={styles.meta}>February 4, 2025</p>
          <p className={styles.body}>
            The ferry docked at 6 am into a fog so thick you could taste salt in every breath. I had
            no itinerary, no hotel booking beyond the first night — just a backpack and a
            willingness to be surprised.
          </p>
          <blockquote className={styles.pullQuote}>
            "Slow travel isn't about doing less. It's about noticing more."
          </blockquote>
          <p className={styles.body}>
            By midmorning I'd found a trail that wound uphill through hydrangeas taller than I am,
            opening abruptly onto a volcanic crater lake of impossible green.
          </p>
        </article>
        <div className={styles.categoryLinks}>
          <a className={styles.categoryLink} href="#">
            #Travel
          </a>
          <a className={styles.categoryLink} href="#">
            #Solitude
          </a>
          <a className={styles.categoryLink} href="#">
            #Europe
          </a>
        </div>
      </main>
    </div>
  );
}
