import { PlusCircle } from "phosphor-react";

import styles from "./CreateTask.module.css";

export function CreateTask() {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
