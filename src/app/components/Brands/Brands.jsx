import styles from './Brands.module.css'

export default function Brands() {
  const brandList = [
    "HUGO BOSS", "RALPH LAUREN", "TOMMY HILFIGER", "JAPSE", 
    "DSQUARED2", "MAIN", "SIGNAL", "HUGO", 
    "SHOWLIGHT", "NEW BALANCE", "GUCCI", 
    "LOUIS VUITTON", "NIKE"
  ];

  return (
    <section style={{ backgroundColor: '#000' }}>
      <h2 className={styles.title}>Populære brands</h2>
      <div className={styles.brandsSection}>
        <div className={styles.brandsContainer}>
          {brandList.map((brand, index) => (
            <span key={index} className={styles.brandName}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}