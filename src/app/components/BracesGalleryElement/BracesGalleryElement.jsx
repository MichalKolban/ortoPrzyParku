import Image from 'next/image';
import styles from './BracesGalleryElemnet.module.css';

export const BracesGalleryElement = ({ imgSrc, name }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={imgSrc} width={240} height={170} alt={name} />
      </div>
      <div className={styles.sign}>{name}</div>
    </div>
  );
};
