 
'use client';

import { useState } from 'react';
import ProductCard from '../components/Productcard/ProductCard';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './shop.module.css';

export default function ShopClient({ products }) {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  function toggleSize(size) {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  }

  function toggleType(type) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  const filteredProducts = products.filter((product) => {
    if (inStockOnly && product.stock_status !== 'instock') return false;
    if (selectedTypes.length > 0) {
      const categories = product.categories?.map((c) => c.name.toLowerCase()) || [];
      if (!selectedTypes.some((t) => categories.includes(t.toLowerCase()))) return false;
    }
    return true;
  });

  return (
    <main className={styles.shopPage}>
      <Sidebar
        selectedSizes={selectedSizes}
        selectedTypes={selectedTypes}
        inStockOnly={inStockOnly}
        onToggleSize={toggleSize}
        onToggleType={toggleType}
        onToggleInStock={() => setInStockOnly((prev) => !prev)}
      />
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.images[0]?.src || '/whiteShirt.svg',
              alt: product.name,
            }}
          />
        ))}
      </div>
    </main>
  );
}