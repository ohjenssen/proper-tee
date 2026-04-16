import styles from './Banner.module.css';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <h2 className={styles.title}>STREETWEAR</h2>
      <Image 
        src="/gray-shirt-style.png" 
        alt="Streetwear model" 
        fill
        className={styles.image}
      />
    </section>
  );
}