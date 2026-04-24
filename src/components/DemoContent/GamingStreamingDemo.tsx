import styles from "./Demo.module.css";
const streams = [
  { title: "Ranked Grind — Cipher Online", streamer: "wraith99", viewers: "4.2K", live: true },
  { title: "Chill RPG Saturday", streamer: "pxlkira", viewers: "1.8K", live: true },
  { title: "Speed Run World Record Attempt", streamer: "nxtvex", viewers: "9.1K", live: false },
  { title: "Retro Replay: Final Fantasy VII", streamer: "arrowhead", viewers: "620", live: false },
];
export function GamingStreamingDemo() {
  return (
    <div className={styles.demo}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>NEON//STREAM</span>
        <div className={styles.navLinks}>
          <a className={styles.navLink} href="#">Browse</a>
          <a className={styles.navLink} href="#">Following</a>
          <a className={styles.navLink} href="#">Clips</a>
          <button className={styles.ctaBtn}>Go Live</button>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.heading}>Live Now</h1>
        <div className={styles.streamGrid}>
          {streams.map((s) => (
            <div key={s.title} className={styles.streamCard}>
              <div className={styles.streamThumb}>
                {s.live && <span className={styles.liveBadge}>● LIVE</span>}
              </div>
              <div className={styles.streamInfo}>
                <p className={styles.subheading}>{s.title}</p>
                <p className={styles.body}>{s.streamer} · {s.viewers} viewers</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.chatSnippet}>
          <h3 className={styles.subheading}>Chat</h3>
          <p className={styles.body}><strong>wraith99:</strong> ggs let's run it back</p>
          <p className={styles.body}><strong>pxlkira:</strong> no way that was top 1 play</p>
          <p className={styles.body}><strong>nxtvex:</strong> LET'S GOOO 🔥</p>
        </div>
      </main>
    </div>
  );
}
