import Image from "next/image";
import styles from "./NotificationSection.module.css";

import phoneIcon from "../../../../public/icons/phoneIcon.png";
import calendarIcon from "../../../../public/icons/calendarIcon.png";
import clockIcon from "../../../../public/icons/clockIcon.png";

import { getDayDetails } from "@/app/helpers/getDayAndHours";

export const NotificationSection = () => {
  const { day, home, away } = getDayDetails();

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <Image src={phoneIcon} width={35} height={35} />
        <div className={styles.box}>
          <p className={styles.title}>Rejestracja</p>
          <p className={styles.firstRow}>501 199 124</p>
          <p className={styles.secondRow}>
            ul. Jana Kazimierza 21/1u. 71-001 Szczecin
          </p>
        </div>
      </div>
      <div className={styles.banner}>
        <Image src={calendarIcon} width={40} height={35} />
        <div className={styles.box}>
          <p className={styles.title}>E-mail</p>
          <p className={styles.firstRow}>kasiazal@ortodoncjaprzyparku.pl</p>
          <p className={styles.secondRow}>Umów się na wizytę</p>
        </div>
      </div>
      <div className={styles.banner}>
        <Image src={clockIcon} width={45} height={38} />
        <div className={styles.box}>
          <div className={`${styles.title} ${styles.titleHours}`}>
            Godziny Pracy
          </div>
          <div className={styles.columnBox}>
            <div className={styles.column}>
              <div className={styles.firstRow}>Dzisiaj</div>
              <div className={styles.dayOfWeek}>{day}</div>
            </div>
            <div className={styles.column}>
              <div className={styles.firstRow}>Szczecin</div>
              <div className={styles.hours}>{home}</div>
            </div>
            <div className={styles.column}>
              <div className={styles.firstRow}>Myślibórz</div>
              <div className={styles.hours}>{away}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
