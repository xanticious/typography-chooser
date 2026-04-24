import styles from "./Demo.module.css";
const menuItems = [
  { name: "Seared Duck Breast", desc: "Cherry gastrique, wilted greens, roasted fingerlings", price: "$34" },
  { name: "Lobster Bisque", desc: "Tarragon cream, brioche croutons, chive oil", price: "$18" },
  { name: "Truffle Risotto", desc: "Arborio rice, black truffle, aged Parmesan, truffle oil", price: "$28" },
];
export function RestaurantDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Ember & Oak</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">Menu</a>
          <a className={styles.navLink} href="#">Wine List</a>
          <a className={styles.navLink} href="#">Events</a>
          <a className={styles.navLink} href="#">Reserve</a>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.heroHeading}>The Menu</h1>
        <p className={styles.meta}>Seasonally driven. Locally sourced. Thoughtfully prepared.</p>
        <section className={styles.menuSection}>
          {menuItems.map((item) => (
            <div key={item.name} className={styles.menuItem}>
              <div className={styles.menuItemHeader}>
                <h3 className={styles.subheading}>{item.name}</h3>
                <span className={styles.price}>{item.price}</span>
              </div>
              <p className={styles.body}>{item.desc}</p>
            </div>
          ))}
        </section>
        <div className={styles.reservationCta}>
          <h2 className={styles.subheading}>Reserve a Table</h2>
          <p className={styles.body}>Open Tuesday through Sunday, 5pm–10pm.</p>
          <button className={styles.ctaBtn}>Make a Reservation</button>
        </div>
      </main>
    </div>
  );
}
