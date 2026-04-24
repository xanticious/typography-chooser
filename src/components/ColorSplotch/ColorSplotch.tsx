import styles from "./ColorSplotch.module.css";

interface ColorSplotchProps {
  color: string;
  label?: string;
}

export function ColorSplotch({ color, label }: ColorSplotchProps) {
  return (
    <span
      className={styles.splotch}
      style={{ backgroundColor: color }}
      aria-label={label ?? color}
      title={label ?? color}
    />
  );
}
