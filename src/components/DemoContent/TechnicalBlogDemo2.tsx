import styles from "./Demo.module.css";

const models = [
  { name: "GPT-4o", accuracy: "87.3%", latency: "420ms", cost: "$0.015/1k" },
  { name: "Claude 3.5", accuracy: "89.1%", latency: "380ms", cost: "$0.012/1k" },
  { name: "Gemini 1.5", accuracy: "85.7%", latency: "510ms", cost: "$0.007/1k" },
];

export function TechnicalBlogDemo2() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>ml.observer</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">
            Research
          </a>
          <a className={styles.navLink} href="#">
            Benchmarks
          </a>
          <a className={styles.navLink} href="#">
            Newsletter
          </a>
        </div>
      </nav>
      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.tagList}>
            <span className={styles.tag}>LLMs</span>
            <span className={styles.tag}>Benchmarks</span>
            <span className={styles.tag}>Python</span>
          </div>
          <h1 className={styles.heading}>Evaluating LLMs on Real Production Workloads</h1>
          <p className={styles.meta}>April 18, 2025 · 12 min read · by Priya Nambiar</p>
          <p className={styles.body}>
            Synthetic benchmarks rarely capture what matters in production. I ran three frontier
            models against 4,000 real customer-support tickets from a mid-size SaaS company and
            tracked accuracy, latency, and cost at 10M monthly tokens.
          </p>
          <pre className={styles.codeBlock}>
            <code>{`import anthropic, openai, google.generativeai as genai

def score_response(expected: str, actual: str) -> float:
    # Semantic similarity via embeddings
    e1 = embed(expected)
    e2 = embed(actual)
    return cosine_similarity(e1, e2)`}</code>
          </pre>
          <p className={styles.body}>
            Results across the three models at identical prompts with temperature 0.2:
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Model</th>
                <th>Accuracy</th>
                <th>Latency</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m) => (
                <tr key={m.name}>
                  <td>{m.name}</td>
                  <td>{m.accuracy}</td>
                  <td>{m.latency}</td>
                  <td>{m.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.body}>
            Claude 3.5 led on accuracy while Gemini 1.5 offered the best cost-per-quality ratio. The
            right choice depends on your latency budget and token volume.
          </p>
        </article>
        <aside className={styles.authorBio}>
          <div className={styles.authorAvatar} />
          <div>
            <strong>Priya Nambiar</strong>
            <p className={styles.body}>
              ML engineer at a Series B startup. Writes about LLM evaluation, inference
              optimization, and building reliable AI features.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
