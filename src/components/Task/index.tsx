import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

interface TaskProps {
  id: number;
  title: string;
  isDone?: boolean;
  onTaskDone: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({
  id,
  title,
  isDone = false,
  onTaskDone,
  onDeleteTask,
}: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(isDone);

  function handleTaskDone() {
    setIsCompleted(!isCompleted);
    onTaskDone(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <button className={styles.checkmarkWrapper} onClick={handleTaskDone}>
        {isCompleted ? (
          <CheckCircle
            size={24}
            weight="fill"
            color="var(--purple-400)"
            className={styles.checkmarked}
          />
        ) : (
          <Circle size={24} weight="bold" className={styles.checkmark} />
        )}
      </button>

      <span className={isCompleted ? styles.checked : ""}>{title}</span>

      <div className={styles.trashWrapper} onClick={handleDeleteTask}>
        <Trash size={14} weight="bold" className={styles.trash} />
      </div>
    </div>
  );
}
