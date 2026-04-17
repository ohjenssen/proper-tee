import ProductCard from "../components/Productcard/ProductCard";
import Sidebar from "../components/Sidebar/Sidebar";
import { products } from "./products";
import styles from "./shop.module.css";

export default function Shop() {
  return (
    <main className={styles.shopPage}>
      <Sidebar />
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
