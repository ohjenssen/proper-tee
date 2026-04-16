 
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.filter}>
        <label className={styles.filterLabel}>På lager</label>
        <div className={styles.toggle}>
          <input type="checkbox" id="inStock" className={styles.toggleInput} />
          <label htmlFor="inStock" className={styles.toggleSlider}></label>
        </div>
      </div>

      <div className={styles.filter}>
        <h3 className={styles.filterTitle}>Produkt type</h3>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" /> T-shirt
        </label>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" /> Tank top
        </label>
      </div>

      <div className={styles.filter}>
        <h3 className={styles.filterTitle}>Størrelse</h3>
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <label key={size} className={styles.checkboxLabel}>
            <input type="checkbox" /> {size}
          </label>
        ))}
      </div>
    </aside>
  );
}