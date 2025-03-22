"use client";

import Link from "next/link";
import Image from "next/image";
// import mainLogo from "../../../../public/logo.png";
// import mainLogo from "";
// import iconMenu from "../../../../public/icons/menu-96.png";
import styles from "./SchoolingNavigation.module.css";

import { useState } from "react";

export const SchoolingNavigation = ({ onBurgerClick }) => {
  const mainLogo = "/logo.png";
  const iconMenu = "/icons/menu-96.png";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            onClick={() => setIsMenuOpen(false)}
          />
        </Link>
      </div>
    </div>
  );
};
