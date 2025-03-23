"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./SchoolingNavigation.module.css";

export const SchoolingNavigation = ({ onBurgerClick }) => {
  const mainLogo = "/logo.png";
  const iconMenu = "/icons/menu-96.png";
  const arrowRight = "/icons/arrowRightIcon.png";

  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <Image
          className={styles.mainLogo}
          src={mainLogo}
          width={80}
          height={50}
          alt="Ortodoncja przy parku Logo"
        />
      </Link>
      <Link href={"#buyCourse"} className={styles.btnBuy}>
        Zakup kurs
      </Link>
      {/* <Link href={"/"} className={styles.backToMainPage}>
        <Image src={arrowRight} width={15} height={15} alt="powrót" />
      </Link> */}
    </div>
  );
};
