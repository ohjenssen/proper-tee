 
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <p className={styles.newsletterText}>
          Hold dig informeret med eksklusive opdateringer om kollektionens lancering, personlig kommunikation og de seneste nyheder
        </p>
        <button className={styles.newsletterBtn}>Tilmeld</button>
      </div>

      <div className={styles.bottom}>
        <Image src="/logoXL.svg" alt="Proper Tee" width={190} height={60} />

        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>Kundeservice</h4>
            <ul>
              <li>Kontakt os</li>
              <li>Fragt & levering</li>
              <li>Returret</li>
              <li>Størrelsesguide</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Inspiration</h4>
            <ul>
              <li>Nye kollektioner</li>
              <li>Mest populære</li>
              <li>Tilbud</li>
              <li>Brands</li>
            </ul>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>©2026 Proper Tee</p>
    </footer>
  );
}