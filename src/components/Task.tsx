import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css'

export interface taskProps {
  id: string;
  isFinished: boolean;
  taskText: string;
}

interface task {
  task: taskProps;
  onChangeStatusTask: (taskToChange: taskProps) => void; 
  onDeleteTask: (taskToDelete: taskProps) => void; 
}

export function Task({ task, onChangeStatusTask, onDeleteTask }: task) {

  function handleEndTask() {
    onChangeStatusTask(task);
  }
  
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkboxAndTaskText}>
        <div className={styles.checkBoxInput}> 
          <input onClick={handleEndTask} type="checkbox" id="checkbox" aria-checked={task.isFinished} />
          {/* <label htmlFor="checkbox"></label> */}
        </div>
        <p className={task.isFinished ? styles.completedTaskText : styles.unfinishedTaskText}>{task.taskText}</p>
      </div>
      <button onClick={handleDeleteTask} className={styles.deleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}