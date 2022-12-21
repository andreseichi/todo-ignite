import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { NoTasks } from "./components/NoTasks";
import { Task } from "./components/Task";
import { useState } from "react";

interface task {
  id: number;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState([] as task[]);
  const [tasksTotal, setTasksTotal] = useState(tasks.length);
  const [tasksDone, setTasksDone] = useState(
    tasks.filter((task) => task.isCompleted).length
  );

  function handleCreateTask(title: string) {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    setTasksTotal(tasks.length + 1);
  }

  function handleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }

      return task;
    });

    setTasks(updatedTasks);
    setTasksDone(updatedTasks.filter((task) => task.isCompleted).length);
  }

  function handleDeleteTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
    setTasksTotal(updatedTasks.length);
    setTasksDone(updatedTasks.filter((task) => task.isCompleted).length);
  }

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <CreateTask onCreateTask={handleCreateTask} />

        <section className={styles.content}>
          <header>
            <div className={styles.tasksTotal}>
              <h2>Tarefas criadas</h2>
              <span className={styles.count}>{tasksTotal}</span>
            </div>

            <div className={styles.tasksDone}>
              <h2>Concluídas</h2>
              <span className={styles.count}>
                {tasksDone > 0 ? `${tasksDone} de ${tasksTotal}` : "0"}
              </span>
            </div>
          </header>

          {tasks.length === 0 ? (
            <NoTasks />
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isDone={task.isCompleted}
                onTaskDone={handleTaskDone}
                onDeleteTask={handleDeleteTask}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
