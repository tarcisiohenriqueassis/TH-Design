import styles from "./page.module.css";

import Header from "./Componentes/Header/Header";
import Banner from "../app/Componentes/Banner/Banner";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Banner/>
    </main>
  );
}
