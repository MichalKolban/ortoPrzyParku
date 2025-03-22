"use client";

import Link from "next/link";
import Image from "next/image";
// import mainLogo from "../../../../public/logo.png";
// import mainLogo from "";
// import iconMenu from "../../../../public/icons/menu-96.png";
import styles from "./MainNavigation.module.css";

import { useState } from "react";

export const Navigation = ({ onBurgerClick }) => {
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
        <div
          className={`${styles.links} ${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayOpen : styles.manuOverlayClose}`}
        >
          <div className={styles.dropdown}>
            <Link className={styles.menuLink} href="/ortodoncja">
              Oferta
            </Link>
            <div className={styles.dropdownContent}>
              <Link className={styles.dropdownLink} href="/ortodoncja">
                Ortodoncja
              </Link>
              <Link className={styles.dropdownLink} href="/stomatologia">
                Stomatologia
              </Link>
            </div>
          </div>
          <Link
            className={`${styles.menuLink} ${styles.mobileMenuLink}`}
            href="/ortodoncja"
            onClick={() => setIsMenuOpen(false)}
          >
            Ortodoncja
          </Link>
          <Link
            className={`${styles.menuLink} ${styles.mobileMenuLink}`}
            href="/stomatologia"
            onClick={() => setIsMenuOpen(false)}
          >
            Stomatologia
          </Link>
          <Link
            className={styles.menuLink}
            href="/cennik"
            onClick={() => setIsMenuOpen(false)}
          >
            Cennik
          </Link>
          <Link
            className={styles.menuLink}
            href="/pracownia"
            onClick={() => setIsMenuOpen(false)}
          >
            Pracownia ortodontyczna
          </Link>

          <Link
            className={styles.menuLink}
            href="/szkolenia"
            onClick={() => setIsMenuOpen(false)}
          >
            Szkolenia
          </Link>

          <Link
            className={styles.menuLink}
            href="/zespol"
            onClick={() => setIsMenuOpen(false)}
          >
            Zespół
          </Link>
          <Link
            className={styles.menuLink}
            href="/rodo"
            onClick={() => setIsMenuOpen(false)}
          >
            RODO
          </Link>
          <Link
            className={styles.menuLink}
            href="/kontakt"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </Link>
          <Link
            className={styles.registrationLink}
            href={`tel:+48501199124`}
            onClick={() => setIsMenuOpen(false)}
          >
            Rejestracja : +48 501 199 124
          </Link>
        </div>
        <div className={styles.desktopRegistrationBox}>
          <p className={styles.desktopRegistrationName}>Rejestracja</p>
          <Link
            className={styles.desktopRegistrationPhone}
            href={`tel:+48501199124`}
          >
            +48 501 199 124
          </Link>
          {/* </div> */}
        </div>
        <Image
          className={styles.menuIcon}
          src={iconMenu}
          width={50}
          height={50}
          alt="menu icon"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};
