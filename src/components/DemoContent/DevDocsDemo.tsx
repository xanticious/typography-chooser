import styles from "./Demo.module.css";
export function DevDocsDemo() {
  return (
    <div className={`${styles.demo} ${styles.dashboardLayout}`}>
      <nav className={styles.sidebar}>
        <span className={styles.navBrand}>Nexus Docs</span>
        <ul className={styles.sidebarNav}>
          <li className={styles.sidebarItem}>Getting Started</li>
          <li className={styles.sidebarItem}>Authentication</li>
          <li className={styles.sidebarItem}>API Reference</li>
          <li className={styles.sidebarItem}>Webhooks</li>
          <li className={styles.sidebarItem}>SDKs</li>
        </ul>
      </nav>
      <div className={styles.dashboardContent}>
        <p className={styles.breadcrumb}>Docs › API Reference › Endpoints</p>
        <h1 className={styles.heading}>List Users</h1>
        <p className={styles.body}>
          Returns a paginated list of users belonging to the authenticated account.
        </p>
        <pre className={styles.codeBlock}>
          <code>GET /v1/users?page=1&limit=25</code>
        </pre>
        <h2 className={styles.subheading}>Parameters</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>page</td>
              <td>integer</td>
              <td>No</td>
              <td>Page number, default 1</td>
            </tr>
            <tr>
              <td>limit</td>
              <td>integer</td>
              <td>No</td>
              <td>Results per page (max 100)</td>
            </tr>
            <tr>
              <td>role</td>
              <td>string</td>
              <td>No</td>
              <td>Filter by role: admin, member</td>
            </tr>
          </tbody>
        </table>
        <h2 className={styles.subheading}>Example Response</h2>
        <pre className={styles.codeBlock}>
          <code>{`{"data": [{"id": "u_01", "email": "alice@example.com", "role": "admin"}], "total": 42}`}</code>
        </pre>
      </div>
    </div>
  );
}
