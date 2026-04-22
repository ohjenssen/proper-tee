'use client';

import styles from './Sidebar.module.css';

export default function Sidebar({ selectedSizes, selectedTypes, inStockOnly, onToggleSize, onToggleType, onToggleInStock }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.filter}>
        <label className={styles.filterLabel}>På lager</label>
        <div className={styles.toggle}>
          <input 
            type="checkbox" 
            id="inStock" 
            className={styles.toggleInput}
            checked={inStockOnly}
            onChange={onToggleInStock}
          />
          <label htmlFor="inStock" className={styles.toggleSlider}></label>
        </div>
      </div>

      <div className={styles.filter}>
        <h3 className={styles.filterTitle}>Produkt type</h3>
        {['T-shirt', 'Tank top'].map((type) => (
          <label key={type} className={styles.checkboxLabel}>
            <input 
              type="checkbox"
              checked={selectedTypes?.includes(type)}
              onChange={() => onToggleType(type)}
            /> {type}
          </label>
        ))}
      </div>

      <div className={styles.filter}>
        <h3 className={styles.filterTitle}>Størrelse</h3>
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <label key={size} className={styles.checkboxLabel}>
            <input 
              type="checkbox"
              checked={selectedSizes?.includes(size)}
              onChange={() => onToggleSize(size)}
            /> {size}
          </label>
        ))}
      </div>
    </aside>
  );
}