import { Header } from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task, taskProps } from "./components/Task";
import { v4 as uuidv4 } from 'uuid';

import "./global.css"
import styles from "./App.module.css";


export function App() {
  const [tasksArray, setTasksArray] = useState<taskProps[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [totalTasksCreated, setTotalTasksCreated] = useState(0);
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTaskToCreate = {
      id: uuidv4(),
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

  function changeStatusTask(taskToChange: taskProps) {
    const newArrayTasks = tasksArray.map(task => {
      if (task.id === taskToChange.id) {
        return { ...task, isFinished: taskToChange.isFinished ? false : true };
      }
      return task;
    });

    setTotalTasksCompleted(completedTasks => {
      return taskToChange.isFinished ? completedTasks - 1 : completedTasks + 1
    });

    setTasksArray(newArrayTasks);
  }

  function deleteTask(taskToDelete: taskProps) {
    const newTasksArray = tasksArray.filter(task => {
      return task.id !== taskToDelete.id;
    })

    setTotalTasksCompleted(completedTasks => {
      return taskToDelete.isFinished ? completedTasks - 1 : completedTasks
    });

    setTotalTasksCreated(tasksCreated => {
      return tasksCreated - 1
    })

    setTasksArray(newTasksArray)
  }

  return (
    <div>
      <Header />
      <main className={styles.content}>

        <form onSubmit={handleCreateNewTask} className={styles.addNewTaskSection}>
          <input required onChange={handleNewTaskTextChange} value={newTaskText} placeholder="Adicione uma nova tarefa" type="text" />
          <button type="submit" disabled={newTaskText.length === 0}>Criar <PlusCircle size={21} /></button>
        </form>

        <section className={styles.countersBox}>
          <div className={styles.tasksCreated}>Tarefas criadas <span>{totalTasksCreated}</span></div>
          <div className={styles.completedTasks}>Concluídas <span>{totalTasksCompleted} de {totalTasksCreated}</span></div>
        </section>

        <section className={styles.todoListBox}>
          {
            tasksArray.map(task => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onChangeStatusTask={changeStatusTask}
                  onDeleteTask={deleteTask}
                />
              )
            })
          }
        </section>

      </main>
    </div>
  );
}
