import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Proper Tee</h1>
      </div>
      <div className={styles.shirts}>
        <Image src="/whiteShirt.svg" alt="White t-shirt" width={200} height={200} className={styles.shirtWhite} />
        <Image src="/blackShirt.svg" alt="Black t-shirt" width={200} height={200} className={styles.shirtBlack} />
      </div>
    </section>
  );
}