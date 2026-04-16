import Sidebar from '../components/Sidebar/Sidebar';
import styles from './shop.module.css';

export default function Shop() {
  return (
    <main className={styles.shopPage}>
      <Sidebar />
    </main>
  );
}