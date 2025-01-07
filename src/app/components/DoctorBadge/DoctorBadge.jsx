import styles from './DoctorBadge.module.css';

import Image from 'next/image';

import { useState } from 'react';

export const DoctorBadge = ({ name, icon, photo, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.icon}
        src={icon}
        width={160}
        height={160}
        alt={name}
      />
      <h2 className={styles.mainName}>{name}</h2>
      <p className={styles.title}>{title}</p>
      <button className={styles.btn}>wiecej informacji</button>
    </div>
  );
};
