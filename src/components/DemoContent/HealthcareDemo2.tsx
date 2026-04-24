import styles from "./Demo.module.css";

const doctors = [
  { name: "Dr. Yemi Adeyemi", specialty: "General Practice", available: "Today 3pm" },
  { name: "Dr. Sofia Marchetti", specialty: "Dermatology", available: "Tomorrow 10am" },
  { name: "Dr. Riku Tanaka", specialty: "Mental Health", available: "Today 5:30pm" },
];

export function HealthcareDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Medi·Link</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            My Health
          </a>
          <a className={styles.navLink} href="#">
            Find a Doctor
          </a>
          <a className={styles.navLink} href="#">
            Prescriptions
          </a>
          <button className={styles.ctaBtn}>Book Visit</button>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.heading}>Available Today</h1>
        <p className={styles.body}>
          Connect with a licensed clinician via video or in-person — usually within the hour.
        </p>
        <div className={styles.doctorRow}>
          {doctors.map((d) => (
            <div key={d.name} className={styles.doctorCard}>
              <div className={styles.authorAvatar} />
              <strong>{d.name}</strong>
              <p className={styles.meta}>{d.specialty}</p>
              <p className={styles.body} style={{ color: "var(--demo-accent)" }}>
                {d.available}
              </p>
              <button className={styles.ctaBtn}>Book</button>
            </div>
          ))}
        </div>
        <div className={styles.reservationCta}>
          <p className={styles.subheading}>Not sure who to see?</p>
          <p className={styles.body}>
            Take our 2-minute symptom check and we'll match you with the right specialist.
          </p>
          <button className={styles.ctaOutline}>Start Symptom Check</button>
        </div>
      </main>
    </div>
  );
}
