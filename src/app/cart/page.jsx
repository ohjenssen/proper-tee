 
'use client';

import { useCart } from '../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import styles from './cart.module.css';

export default function CartPage() {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className={styles.cartPage}>
        <h1 className={styles.title}>Din kurv</h1>
        <p className={styles.empty}>Din kurv er tom</p>
        <Link href="/shop" className={styles.shopLink}>Gå til shop</Link>
      </main>
    );
  }

  return (
    <main className={styles.cartPage}>
      <h1 className={styles.title}>Din kurv</h1>
      <div className={styles.cartItems}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <Image src={item.image} alt={item.name} width={100} height={100} className={styles.itemImage} />
            <div className={styles.itemInfo}>
              <h2 className={styles.itemName}>{item.name}</h2>
              <p className={styles.itemPrice}>{item.price} kr.</p>
              <p className={styles.itemQuantity}>Antal: {item.quantity}</p>
              <p className={styles.itemQuantity}>Størrelse: {item.size} | Antal: {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>Fjern</button>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <p>Total: {getTotalPrice().toFixed(2)} kr.</p>
        <button className={styles.checkoutBtn}>Gå til betaling</button>
      </div>
    </main>
  );
}