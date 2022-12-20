import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <Circle size={24} weight="bold" className={styles.checkmark} />
      <CheckCircle
        size={24}
        weight="fill"
        color="var(--purple-400)"
        className={styles.checkmarked}
      />

      <span className={styles.checked}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, labore
        unde!
      </span>

      <div className={styles.trashWrapper}>
        <Trash size={14} weight="bold" className={styles.trash} />
      </div>
    </div>
  );
}
