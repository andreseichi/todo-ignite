import { ClipboardText } from "phosphor-react";

import styles from "./NoTasks.module.css";

export function NoTasks() {
  return (
    <div className={styles.noTasks}>
      <ClipboardText size={56} weight="thin" />

      <span className={styles.firstSpan}>
        Você ainda não tem tarefas cadastradas
      </span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
