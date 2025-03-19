import styles from './PriceTileSingle.module.css';

export const PriceTileSingle = ({ textContent, price }) => {
  return (
    <div
      className={`${styles.wrapper} ${price === 0 ? styles.removeDefault : ''}`}
    >
      <div className={styles.description}>
        <span className={styles.textContent}>{textContent}</span>
        <span
          className={`${styles.price} ${price === 0 ? styles.removePrice : ''}`}
        >{`${price} ,-`}</span>
      </div>
    </div>
  );
};
