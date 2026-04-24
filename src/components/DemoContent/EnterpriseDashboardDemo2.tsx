import styles from "./Demo.module.css";

const stats = [
  { num: "342", label: "Headcount" },
  { num: "94%", label: "Retention" },
  { num: "18", label: "Open Roles" },
  { num: "4.7", label: "eNPS Score" },
];

const roles = [
  { title: "Sr. Frontend Engineer", dept: "Engineering", status: "Interviewing" },
  { title: "Product Manager", dept: "Product", status: "Screening" },
  { title: "Data Analyst", dept: "Finance", status: "Offer sent" },
  { title: "UX Researcher", dept: "Design", status: "New" },
];

export function EnterpriseDashboardDemo2() {
  return (
    <div className={styles.dashboardLayout}>
      <aside className={styles.sidebar}>
        <span className={styles.navBrand} style={{ fontFamily: "var(--demo-font-heading)" }}>
          PeopleOS
        </span>
        <ul className={styles.sidebarNav}>
          {["Overview", "Headcount", "Recruiting", "Performance", "Benefits", "Settings"].map(
            (item) => (
              <li key={item} className={styles.sidebarItem}>
                {item}
              </li>
            ),
          )}
        </ul>
      </aside>
      <div className={styles.dashboardContent}>
        <p className={styles.breadcrumb}>People › Recruiting Pipeline</p>
        <h1 className={styles.heading}>Recruiting Pipeline</h1>
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
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((r) => (
              <tr key={r.title}>
                <td>{r.title}</td>
                <td>{r.dept}</td>
                <td>
                  <span className={styles.tag}>{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
