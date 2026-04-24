import styles from "./Demo.module.css";

const assets = [
  { symbol: "BTC", name: "Bitcoin", amount: "0.42", value: "$28,140", change: "+3.2%" },
  { symbol: "ETH", name: "Ethereum", amount: "6.1", value: "$20,460", change: "+1.8%" },
  { symbol: "SOL", name: "Solana", amount: "82", value: "$9,020", change: "-0.5%" },
];

const stats = [
  { num: "$57,620", label: "Portfolio Value" },
  { num: "+12.4%", label: "30d Return" },
  { num: "3", label: "Assets" },
  { num: "$0.14", label: "Avg Fee" },
];

export function FinanceDemo2() {
  return (
    <div className={styles.dashboardLayout}>
      <aside className={styles.sidebar}>
        <span className={styles.navBrand} style={{ fontFamily: "var(--demo-font-heading)" }}>
          VAULT
        </span>
        <ul className={styles.sidebarNav}>
          {["Portfolio", "Swap", "Earn", "History", "Security", "Settings"].map((item) => (
            <li key={item} className={styles.sidebarItem}>
              {item}
            </li>
          ))}
        </ul>
      </aside>
      <div className={styles.dashboardContent}>
        <p className={styles.breadcrumb}>Wallet › Portfolio</p>
        <h1 className={styles.heading}>Portfolio Overview</h1>
        <div className={styles.statCards}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Amount</th>
              <th>Value (USD)</th>
              <th>24h</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a) => (
              <tr key={a.symbol}>
                <td>
                  <strong>{a.symbol}</strong> · {a.name}
                </td>
                <td>{a.amount}</td>
                <td>{a.value}</td>
                <td style={{ color: a.change.startsWith("+") ? "var(--demo-accent)" : "#ef4444" }}>
                  {a.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
