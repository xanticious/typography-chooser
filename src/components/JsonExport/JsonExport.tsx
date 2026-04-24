import { useState } from "react";
import type { ShowcaseCombination } from "../../data/types";
import styles from "./JsonExport.module.css";

interface JsonExportProps { combination: ShowcaseCombination; }

export function JsonExport({ combination }: JsonExportProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = JSON.stringify(combination, null, 2);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const el = document.createElement("textarea");
        el.value = text;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.copyBtn} onClick={handleCopy}>
        {copied ? "Copied!" : "Copy JSON"}
      </button>
    </div>
  );
}
