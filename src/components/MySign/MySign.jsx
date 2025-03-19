import Link from 'next/link';

import styles from './MySign.module.css';

export const MySign = () => {
  return (
    <div className={styles.wrapper}>
      <Link
        href={'https://www.linkedin.com/in/michalkolban/'}
        target="_blank"
        className={styles.sign}
      >
        designed by <span>Kołban.</span>
      </Link>
    </div>
  );
};
