import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.css'

export interface taskProps {
  id: number;
  isFinished: boolean;
  taskText: string;
}

interface task {
  task: taskProps
}

export function Task({ task }: task) {
  return (
    <div className={styles.task}>
      <div className={styles.checkboxAndTaskText}>
        <div className={styles.checkBoxInput}>
          <input type="checkbox" id="checkbox" checked={task.isFinished} />
          <label htmlFor="checkbox"></label>
        </div>
        <p className={task.isFinished ? styles.completedTaskText : styles.unfinishedTaskText}>{task.taskText}</p>
      </div>
      <button className={styles.deleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}