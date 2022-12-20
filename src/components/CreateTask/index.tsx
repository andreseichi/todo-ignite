import { FormEvent, useState } from "react";

import { PlusCircle } from "phosphor-react";

import styles from "./CreateTask.module.css";

interface CreateTaskProps {
  onCreateTask: (title: string) => void;
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {
  const [taskInput, setTaskInput] = useState("");

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();

    if (!taskInput) return;

    onCreateTask(taskInput);
    setTaskInput("");
  }

  return (
    <form className={styles.wrapper} onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
