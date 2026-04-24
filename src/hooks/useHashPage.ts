import { useState, useEffect } from "react";

export function getPageFromHash(hash: string): string | null {
  if (hash.startsWith("#page=")) {
    return decodeURIComponent(hash.slice(6)) || null;
  }
  return null;
}

export function useHashPage(): string | null {
  const [page, setPage] = useState<string | null>(() => getPageFromHash(window.location.hash));

  useEffect(() => {
    const handler = () => setPage(getPageFromHash(window.location.hash));
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return page;
}
