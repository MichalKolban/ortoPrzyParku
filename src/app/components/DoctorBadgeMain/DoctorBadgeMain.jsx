'use client';

import Image from 'next/image';
// import styles from './doctorBadgeMain.module.css';
import styles from './DoctorBadgeMain.module.css';

import dataJSON from '../../data/mainDoctor.json';

export const DoctorBedgeMain = () => {
  const doctor = dataJSON.doctors[0];

  return (
    <>
      <div className={styles.sectionTitle}>Założyciel Gabinetu</div>
      <div className={styles.wrapper}>
        <Image src={doctor.icon} width={350} height={300} alt={doctor.name} />
        <div className={styles.textWrapper}>
          <h2 className={styles.mainName}>{doctor.name}</h2>
          <h2 className={styles.mainTitle}>Lekarz stomatolog</h2>
          <h2 className={styles.mainTitle}>Specjalista ortodonta</h2>
          <h2 className={styles.mainTitle}>Zalozyciel gabinetu</h2>
          <button className={styles.btn}>wiecej informacji</button>
        </div>
      </div>
    </>
  );
};
