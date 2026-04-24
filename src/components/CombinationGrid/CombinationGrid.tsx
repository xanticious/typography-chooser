import type { ShowcaseCombination } from "../../data/types";
import { CombinationTile } from "../CombinationTile/CombinationTile";
import styles from "./CombinationGrid.module.css";

interface CombinationGridProps {
  combinations: ShowcaseCombination[];
  onDemoClick: (id: string) => void;
}

export function CombinationGrid({ combinations, onDemoClick }: CombinationGridProps) {
  if (combinations.length === 0) {
    return <p className={styles.empty}>No combinations match your filters.</p>;
  }
  return (
    <div className={styles.grid}>
      {combinations.map((c) => (
        <CombinationTile key={c.id} combination={c} onDemoClick={onDemoClick} />
      ))}
    </div>
  );
}
