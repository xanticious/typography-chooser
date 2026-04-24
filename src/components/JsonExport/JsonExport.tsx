import { useState, useEffect } from "react";
import type { ShowcaseCombination } from "../../data/types";
import styles from "./JsonExport.module.css";

interface JsonExportProps {
  combination: ShowcaseCombination;
}

export function JsonExport({ combination }: JsonExportProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const jsonText = JSON.stringify(combination, null, 2);

  async function handleCopy() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(jsonText);
      } else {
        // Legacy fallback for browsers without the Clipboard API
        const el = document.createElement("textarea");
        el.value = jsonText;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        // eslint-disable-next-line @typescript-eslint/no-deprecated -- intentional legacy fallback
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  function handleClose() {
    setOpen(false);
    setCopied(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button className={styles.showBtn} onClick={() => setOpen(true)}>
        Show Font Details
      </button>

      {open && (
        <div className={styles.backdrop} onClick={handleClose}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Font Details"
          >
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>Font Details</span>
              <button
                className={styles.closeBtn}
                onClick={handleClose}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <textarea
              className={styles.jsonArea}
              readOnly
              value={jsonText}
              aria-label="Font details JSON"
            />
            <div className={styles.modalFooter}>
              <button className={styles.copyBtn} onClick={handleCopy}>
                {copied ? "Copied!" : "Copy to Clipboard"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
