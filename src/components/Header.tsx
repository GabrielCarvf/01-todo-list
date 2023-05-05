import styles from './Header.module.css';
import todoLogo from '../assets/logo-todo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo" />
    </header>
  );
}