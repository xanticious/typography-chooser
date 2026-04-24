import styles from "./Demo.module.css";

const specials = [
  { name: "Avocado Toast Stack", desc: "Poached eggs, chili flakes, sourdough", price: "$14" },
  { name: "Matcha Pancakes", desc: "Yuzu cream, toasted sesame brittle", price: "$16" },
  { name: "The Classic Benny", desc: "House hollandaise, back bacon, English muffin", price: "$17" },
];

export function RestaurantDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Sunny Side Up</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Menu
          </a>
          <a className={styles.navLink} href="#">
            Daily Specials
          </a>
          <a className={styles.navLink} href="#">
            About
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>
            Brunch done right. Every day until 3pm.
          </h1>
          <p className={styles.heroSub}>
            Local ingredients, big flavors, zero fuss. Find us at 42 Market Street.
          </p>
        </div>
        <p className={styles.sectionLabel}>Today's Specials</p>
        <div className={styles.menuSection}>
          {specials.map((item) => (
            <div key={item.name} className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <span className={styles.subheading}>{item.name}</span>
                <span className={styles.price}>{item.price}</span>
              </div>
              <p className={styles.body}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.reservationCta}>
          <p className={styles.subheading}>Walk-ins welcome · No reservations needed</p>
          <p className={styles.body}>Open daily 8am–3pm · 42 Market Street · (555) 204-7731</p>
        </div>
      </main>
    </div>
  );
}
