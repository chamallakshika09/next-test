import styles from './page.module.css';
import FileContainer from './components/file-container';

export default function Home() {
  return (
    <main className={styles.main}>
      <FileContainer />
    </main>
  );
}
