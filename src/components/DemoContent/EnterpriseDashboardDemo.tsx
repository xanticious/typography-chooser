import styles from "./Demo.module.css";
const rows = [
  { id: "TXN-001", user: "alice@co.com", amount: "$1,240", status: "Completed", date: "2025-03-10" },
  { id: "TXN-002", user: "bob@co.com", amount: "$560", status: "Pending", date: "2025-03-11" },
  { id: "TXN-003", user: "carol@co.com", amount: "$3,050", status: "Completed", date: "2025-03-12" },
  { id: "TXN-004", user: "dan@co.com", amount: "$780", status: "Failed", date: "2025-03-12" },
  { id: "TXN-005", user: "eve@co.com", amount: "$2,100", status: "Completed", date: "2025-03-13" },
];
export function EnterpriseDashboardDemo() {
  return (
    <div className={`${styles.demo} ${styles.dashboardLayout}`}>
      <nav className={styles.sidebar}>
        <span className={styles.navBrand}>Nexus Admin</span>
        <ul className={styles.sidebarNav}>
          <li className={styles.sidebarItem}>Dashboard</li>
          <li className={styles.sidebarItem}>Transactions</li>
          <li className={styles.sidebarItem}>Users</li>
          <li className={styles.sidebarItem}>Reports</li>
          <li className={styles.sidebarItem}>Settings</li>
        </ul>
      </nav>
      <div className={styles.dashboardContent}>
        <p className={styles.breadcrumb}>Dashboard › Transactions</p>
        <div className={styles.statCards}>
          <div className={styles.statCard}><span className={styles.statNum}>$48,230</span><span className={styles.statLabel}>Revenue MTD</span></div>
          <div className={styles.statCard}><span className={styles.statNum}>1,204</span><span className={styles.statLabel}>Transactions</span></div>
          <div className={styles.statCard}><span className={styles.statNum}>98.2%</span><span className={styles.statLabel}>Success Rate</span></div>
        </div>
        <table className={styles.table}>
          <thead><tr><th>ID</th><th>User</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}><td>{r.id}</td><td>{r.user}</td><td>{r.amount}</td><td>{r.status}</td><td>{r.date}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
