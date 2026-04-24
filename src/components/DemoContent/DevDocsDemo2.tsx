import styles from "./Demo.module.css";

const commands = [
  { cmd: "axiom init", desc: "Scaffold a new project in the current directory" },
  { cmd: "axiom build [--watch]", desc: "Compile sources; optionally rebuild on file changes" },
  { cmd: "axiom deploy --env <name>", desc: "Deploy to a named environment" },
  { cmd: "axiom logs --tail", desc: "Stream live logs from the running deployment" },
];

export function DevDocsDemo2() {
  return (
    <div className={styles.dashboardLayout}>
      <aside className={styles.sidebar}>
        <span className={styles.navBrand} style={{ fontFamily: "var(--demo-font-heading)" }}>
          axiom
        </span>
        <ul className={styles.sidebarNav}>
          {["Getting Started", "CLI Reference", "Configuration", "Plugins", "Changelog"].map(
            (item) => (
              <li key={item} className={styles.sidebarItem}>
                {item}
              </li>
            ),
          )}
        </ul>
      </aside>
      <div className={styles.dashboardContent}>
        <p className={styles.breadcrumb}>CLI Reference › Commands</p>
        <h1 className={styles.heading}>CLI Commands</h1>
        <p className={styles.body}>
          All commands accept <code>--help</code> for inline documentation. Global flags
          (
          <code>--config</code>, <code>--verbose</code>) can be placed before any subcommand.
        </p>
        {commands.map((c) => (
          <div key={c.cmd} style={{ marginBottom: "1.25rem" }}>
            <pre className={styles.codeBlock}>
              <code>{c.cmd}</code>
            </pre>
            <p className={styles.body}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
