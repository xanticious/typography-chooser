import styles from "./Demo.module.css";

const courses = [
  { code: "CS 411", name: "Machine Learning Foundations", instructor: "Prof. Osei", progress: 68 },
  { code: "PHIL 301", name: "Ethics in Technology", instructor: "Prof. Levi", progress: 42 },
  { code: "MATH 250", name: "Linear Algebra", instructor: "Prof. Tanaka", progress: 91 },
];

export function EducationDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Crestview University</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            My Courses
          </a>
          <a className={styles.navLink} href="#">
            Grades
          </a>
          <a className={styles.navLink} href="#">
            Calendar
          </a>
          <a className={styles.navLink} href="#">
            Library
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.heading}>Spring 2025 — Dashboard</h1>
        <p className={styles.body}>Welcome back, Jordan. You have 2 assignments due this week.</p>
        {courses.map((c) => (
          <div
            key={c.code}
            className={styles.featureCard}
            style={{ marginBottom: "1rem" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              <span className={styles.subheading}>
                {c.code} · {c.name}
              </span>
              <span className={styles.meta}>{c.instructor}</span>
            </div>
            <div className={styles.progressBar} style={{ marginTop: "0.5rem" }}>
              <div className={styles.progressFill} style={{ width: `${c.progress}%` }} />
            </div>
            <p className={styles.meta}>{c.progress}% complete</p>
          </div>
        ))}
        <div className={styles.reservationCta}>
          <p className={styles.subheading}>📢 Announcement</p>
          <p className={styles.body}>
            CS 411 midterm rescheduled to May 2. Review sessions posted to course board.
          </p>
        </div>
      </main>
    </div>
  );
}
