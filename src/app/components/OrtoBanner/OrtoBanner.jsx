import Link from "next/link";
import styles from "./OrtoBanner.module.css";

import mainLogo from "../../../../public/logo.png";
import Image from "next/image";

export const OrtoBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.halfSide}>
        <div className={styles.orderBox}>
          <div className={styles.title}>ortodoncja przy parku</div>
          <div className={styles.description}>
            Miejsce, w którym zatroszczymy się o Twój uśmiech.
          </div>
          <Link className={styles.btn} href={"tel:501199124"}>
            Umow się na wizytę
          </Link>
        </div>
      </div>
      <div className={styles.halfSide}>
        <Image
          className={styles.mainLogo}
          src={mainLogo}
          width={200}
          height={120}
          alt="Ortodoncja przy parku Logo"
        />
      </div>
    </div>
  );
};
