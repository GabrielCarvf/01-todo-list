import { Header } from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import { Task, taskProps } from "./components/Task";

import "./global.css"
import styles from "./App.module.css";


export function App() {
  const [tasksArray, setTasksArray] = useState<taskProps[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [totalTasksCreated, setTotalTasksCreated] = useState(0);

  function handleCreateNewTask() {

    const newTaskToCreate = {
      id: 1,
      taskText: newTaskText,
      isFinished: false,
    }

    setTasksArray([...tasksArray, newTaskToCreate]);
    setTotalTasksCreated((total) => total + 1);

    setNewTaskText('');
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setNewTaskText(event.target.value);
  }

  return (
    <div>
      <Header />
      <main className={styles.content}>

        <section className={styles.addNewTaskSection}>
          <input onChange={handleNewTaskTextChange} value={newTaskText} placeholder="Adicione uma nova tarefa" type="text" />
          <button onClick={handleCreateNewTask}>Criar <PlusCircle size={21} /></button>
        </section>

        <section className={styles.countersBox}>
          <div className={styles.tasksCreated}>Tarefas criadas <span>{totalTasksCreated}</span></div>
          <div className={styles.completedTasks}>Concluídas <span>4 de 10</span></div>
        </section>

        <section className={styles.todoListBox}>
          {
            tasksArray.map(task => {
              return <Task key={task.id} task={task} />
            })
          }
        </section>

      </main>
    </div>
  );
}
