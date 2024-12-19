import Link from 'next/link';
import Image from 'next/image';

import styles from './OrtoServiceSingle.module.css';

export const OrtoServiceSingle = ({ href, mainPhoto, altName, children }) => {
  return (
    <Link href={href} className={styles.singleServiceWrapper}>
      <div className={styles.imageContainer}>
        <Image placeholder="blur" src={mainPhoto} layout="fill" alt={altName} />
      </div>
      <div className={styles.title}>{children}</div>
    </Link>
  );
};
