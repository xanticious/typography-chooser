import styles from "./Demo.module.css";
const accounts = [
  { name: "Checking", balance: "$12,450.00", change: "+$230.00" },
  { name: "Savings", balance: "$38,900.00", change: "+$150.00" },
  { name: "Investment", balance: "$102,340.00", change: "+$1,820.00" },
];
const transactions = [
  { desc: "Amazon.com", amount: "-$89.99", date: "Mar 12" },
  { desc: "Direct Deposit", amount: "+$4,200.00", date: "Mar 10" },
  { desc: "Starbucks", amount: "-$6.45", date: "Mar 9" },
  { desc: "Utility Bill", amount: "-$120.00", date: "Mar 8" },
];
export function FinanceDemo() {
  return (
    <div className={`${styles.demo} ${styles.dashboardLayout}`}>
      <nav className={styles.sidebar}>
        <span className={styles.navBrand}>Sentinel Bank</span>
        <ul className={styles.sidebarNav}>
          <li className={styles.sidebarItem}>Overview</li>
          <li className={styles.sidebarItem}>Accounts</li>
          <li className={styles.sidebarItem}>Transfers</li>
          <li className={styles.sidebarItem}>Investments</li>
          <li className={styles.sidebarItem}>Settings</li>
        </ul>
      </nav>
      <div className={styles.dashboardContent}>
        <p className={styles.breadcrumb}>Overview › Account Summary</p>
        <div className={styles.statCards}>
          {accounts.map((a) => (
            <div key={a.name} className={styles.statCard}>
              <span className={styles.statLabel}>{a.name}</span>
              <span className={styles.statNum}>{a.balance}</span>
              <span className={styles.body}>{a.change} today</span>
            </div>
          ))}
        </div>
        <h2 className={styles.subheading}>Recent Transactions</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.desc + t.date}>
                <td>{t.desc}</td>
                <td>{t.date}</td>
                <td>{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
