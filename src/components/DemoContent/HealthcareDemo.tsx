import styles from "./Demo.module.css";
export function HealthcareDemo() {
  const services = [
    {
      title: "Primary Care",
      desc: "Routine checkups, preventive screenings, and chronic care management.",
    },
    {
      title: "Urgent Care",
      desc: "Walk-in appointments available 7 days a week, no referral needed.",
    },
    {
      title: "Telehealth",
      desc: "Video consultations with board-certified physicians within minutes.",
    },
  ];
  const doctors = [
    { name: "Dr. Sarah Chen", spec: "Family Medicine" },
    { name: "Dr. Marcus Webb", spec: "Internal Medicine" },
    { name: "Dr. Priya Nair", spec: "Pediatrics" },
  ];
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Meridian Health</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Services
          </a>
          <a className={styles.navLink} href="#">
            Doctors
          </a>
          <a className={styles.navLink} href="#">
            Patient Portal
          </a>
          <button className={styles.ctaBtn}>Book Appointment</button>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>Healthcare you can trust.</h1>
          <p className={styles.heroSub}>Compassionate care for every stage of life.</p>
          <button className={styles.ctaBtn}>Schedule Today</button>
        </div>
        <div className={styles.featureGrid}>
          {services.map((s) => (
            <div key={s.title} className={styles.featureCard}>
              <h3 className={styles.subheading}>{s.title}</h3>
              <p className={styles.body}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.doctorRow}>
          {doctors.map((d) => (
            <div key={d.name} className={styles.doctorCard}>
              <div className={styles.authorAvatar} />
              <strong>{d.name}</strong>
              <p className={styles.body}>{d.spec}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
