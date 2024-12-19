import Link from 'next/link';
import Image from 'next/image';

import styles from './PhotoLink.module.css';

export const PhotoLink = ({ href, mainPhoto, altName, children }) => {
  return (
    <div className={styles.photoLinkWrapper}>
      <Link href={href} className={styles.linkWrapper}>
        <div className={styles.imageContainer}>
          <Image
            placeholder="blur"
            src={mainPhoto}
            layout="fill"
            alt={altName}
          />
          <div className={styles.overlay}>
            <span className={styles.signHover}>{children}</span>
          </div>
        </div>
      </Link>
      <div className={styles.title}>
        <Link href={href}>{children}</Link>
      </div>
    </div>
  );
};
