import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { NoTasks } from "./components/NoTasks";
import { Task } from "./components/Task";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <CreateTask />

        <section className={styles.content}>
          <header>
            <div className={styles.tasksTotal}>
              <h2>Tarefas criadas</h2>
              <span className={styles.count}>0</span>
            </div>

            <div className={styles.tasksDone}>
              <h2>Concluídas</h2>
              <span className={styles.count}>0</span>
            </div>
          </header>

          <NoTasks />

          <Task />
          <Task />
        </section>
      </main>
    </div>
  );
}

export default App;
