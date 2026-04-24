import styles from "./Demo.module.css";
export function ECommerceDemo() {
  const products = [
    { name: "Meridian Tote", price: "$89", desc: "Full-grain leather, minimal hardware" },
    { name: "Waypoint Backpack", price: "$145", desc: "Water-resistant canvas + brass zippers" },
    { name: "Coast Crossbody", price: "$67", desc: "Waxed cotton, internal organizer" },
  ];
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>Arkana Goods</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">Women</a>
          <a className={styles.navLink} href="#">Men</a>
          <a className={styles.navLink} href="#">Sale</a>
          <a className={styles.navLink} href="#">Cart (2)</a>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.heading}>New Arrivals</h1>
        <div className={styles.productGrid}>
          {products.map((p) => (
            <div key={p.name} className={styles.productCard}>
              <div className={styles.productImage} />
              <div style={{ padding: "0.75rem 1rem 0" }}>
                <h3 className={styles.subheading}>{p.name}</h3>
                <p className={styles.body}>{p.desc}</p>
              </div>
              <div className={styles.productFooter}>
                <span className={styles.price}>{p.price}</span>
                <button className={styles.ctaBtn}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
