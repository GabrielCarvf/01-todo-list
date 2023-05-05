import { Header } from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";

import "./global.css"
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.content}>
        <section className={styles.addNewTaskSection}>
          <input placeholder="Adicione uma nova tarefa" type="text" />
          <button>Criar <PlusCircle size={21}/></button>
        </section>
        <section>
          
        </section>

      </main>
    </div>
  );
}
