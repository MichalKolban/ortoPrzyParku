"use client";

import Link from "next/link";
import Image from "next/image";
// import mainLogo from "../../../../public/logo.png";
// import iconMenu from "../../../../public/icons/menu-96.png";
import styles from "./NavigationSchooling.module.css";

import { useState } from "react";

export const NavigationSchooling = ({ onBurgerClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainLogo = "/logo.png";
  const iconMenu = "/icons/menu-96.png";

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // console.log("isMenu open", isMenuOpen);

  return (
    <div className={styles.wrapper}>
      <div className={styles.insideWrapper}>
        <Link href="/">
          <Image
            className={styles.mainLogo}
            src={mainLogo}
            width={80}
            height={50}
            alt="Ortodoncja przy parku Logo"
          />
        </Link>
        <div
          className={`${styles.links} ${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayOpen : styles.manuOverlayClose}`}
        >
          <Link className={styles.menuLink} href="/cennik">
            Cennik
          </Link>
          <Link className={styles.menuLink} href="/pracownia">
            Pracownia ortodontyczna
          </Link>

          <Link className={styles.menuLink} href="/szkolenia">
            Szkolenia
          </Link>

          <button
            className={styles.menuLink}
            onClick={() => (window.location.href = "/")}
          >
            Powrót
          </button>
        </div>

        {/* <Image
          className={styles.menuIcon}
          src={iconMenu}
          width={50}
          height={50}
          alt="menu icon"
        /> */}
      </div>
    </div>
  );
};
