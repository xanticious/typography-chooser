import styles from "./Demo.module.css";

const products = [
  { name: "Lumière Sérum", desc: "Vitamin C + Niacinamide", price: "$88" },
  { name: "Velvet Oil", desc: "Rosehip & Squalane", price: "$64" },
  { name: "Cloud Cream", desc: "Ceramide barrier repair", price: "$72" },
];

export function ECommerceDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>AURÉA</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Ritual
          </a>
          <a className={styles.navLink} href="#">
            Ingredients
          </a>
          <a className={styles.navLink} href="#">
            Journal
          </a>
          <button className={styles.ctaBtn}>Shop Now</button>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroHeading}>Skin that remembers itself.</h1>
          <p className={styles.heroSub}>
            Clean actives. Minimal packaging. Formulated for skin that wants less — and deserves
            more.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.ctaBtn}>Explore the Collection</button>
          </div>
        </div>
        <div className={styles.productGrid}>
          {products.map((p) => (
            <div key={p.name} className={styles.productCard}>
              <div className={styles.productImage} />
              <div style={{ padding: "0.75rem 1rem" }}>
                <p className={styles.subheading}>{p.name}</p>
                <p className={styles.body}>{p.desc}</p>
              </div>
              <div className={styles.productFooter}>
                <span className={styles.price}>{p.price}</span>
                <button className={styles.ctaBtn}>Add</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <p className={styles.body}>
            Free of parabens, mineral oil, and synthetic fragrance. Cruelty-free & vegan.
          </p>
        </div>
      </main>
    </div>
  );
}
