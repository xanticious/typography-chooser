import styles from "./Demo.module.css";
const courses = [
  { title: "Intro to Python", instructor: "Dr. Lee", progress: 68 },
  { title: "Data Structures", instructor: "Prof. Mira", progress: 42 },
  { title: "Web Dev Bootcamp", instructor: "Sasha T.", progress: 91 },
];
export function EducationDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Scholarly</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">Courses</a>
          <a className={styles.navLink} href="#">My Learning</a>
          <a className={styles.navLink} href="#">Community</a>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.heading}>Your Courses</h1>
        <div className={styles.featureGrid}>
          {courses.map((c) => (
            <div key={c.title} className={styles.featureCard}>
              <h3 className={styles.subheading}>{c.title}</h3>
              <p className={styles.body}>Instructor: {c.instructor}</p>
              <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: `${c.progress}%` }} /></div>
              <p className={styles.meta}>{c.progress}% complete</p>
            </div>
          ))}
        </div>
        <div className={styles.authorBio}>
          <div className={styles.authorAvatar} />
          <div>
            <strong>Dr. Amy Lee</strong>
            <p className={styles.body}>Senior Instructor · 12,000+ students · ⭐ 4.9</p>
          </div>
        </div>
      </main>
    </div>
  );
}
