import styles from "./Demo.module.css";
const projects = [
  "Type & Space — Visual identity for a design studio",
  "The Plain Journal — Personal blog, 2021–present",
  "Gridwork — CSS layout experiments",
  "Unsaid — A short film, 2023",
];
export function MinimalistDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Mira Osei</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">Work</a>
          <a className={styles.navLink} href="#">Writing</a>
          <a className={styles.navLink} href="#">Contact</a>
        </div>
      </nav>
      <main className={`${styles.main} ${styles.minimalistMain}`}>
        <h1 className={styles.heading}>Designer, writer, maker of small things.</h1>
        <p className={styles.body}>I make considered work — mostly visual, occasionally typographic. Based in Accra, working everywhere.</p>
        <ul className={styles.projectList}>
          {projects.map((p) => (
            <li key={p}><a className={styles.navLink} href="#">{p}</a></li>
          ))}
        </ul>
        <p className={styles.body}>hello@miraosei.com</p>
      </main>
    </div>
  );
}
