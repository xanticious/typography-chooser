import styles from "./Demo.module.css";
export function TechnicalBlogDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>DevLog</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Articles
          </a>
          <a className={styles.navLink} href="#">
            Tags
          </a>
          <a className={styles.navLink} href="#">
            About
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.tagList}>
            <span className={styles.tag}>Rust</span>
            <span className={styles.tag}>Systems</span>
            <span className={styles.tag}>Performance</span>
          </div>
          <h1 className={styles.heading}>Building Zero-Copy Parsers in Rust</h1>
          <p className={styles.meta}>March 12, 2025 · 8 min read</p>
          <p className={styles.body}>
            Zero-copy parsing is a technique that allows you to parse data without allocating new
            memory for each token. By borrowing slices from the original input buffer, we can
            achieve significant performance gains in hot paths.
          </p>
          <pre className={styles.codeBlock}>
            <code>{`fn parse_header(input: &[u8]) -> Option<&str> {
    let end = input.iter().position(|&b| b == b'\\n')?;
    std::str::from_utf8(&input[..end]).ok()
}`}</code>
          </pre>
          <p className={styles.body}>
            The key insight is that the lifetime of the returned reference is tied to the input
            slice, ensuring memory safety without garbage collection.
          </p>
        </article>
        <aside className={styles.authorBio}>
          <div className={styles.authorAvatar} />
          <div>
            <strong>Mx. Arden Holt</strong>
            <p className={styles.body}>
              Systems programmer obsessed with low-level performance. Writes about Rust, C++, and
              compiler internals.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
