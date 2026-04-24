import type { ShowcaseCombination } from "../../data/types";
import { CombinationTile } from "../CombinationTile/CombinationTile";
import styles from "./CombinationGrid.module.css";

interface CombinationGridProps {
  combinations: ShowcaseCombination[];
}

export function CombinationGrid({ combinations }: CombinationGridProps) {
  if (combinations.length === 0) {
    return <p className={styles.empty}>No combinations match your filters.</p>;
  }
  return (
    <div className={styles.grid}>
      {combinations.map((c) => (
        <CombinationTile key={c.id} combination={c} />
      ))}
    </div>
  );
}
