import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '../../../../public/logo.png';
import iconMenu from '../../../../public/icons/menu-96.png';
import styles from './Navigation.module.css';

import { useState } from 'react';

export const Navigation = ({ onBurgerClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('page hello 1');
    setIsMenuOpen(!isMenuOpen);
  };

  console.log('isMenu open', isMenuOpen);

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={`${styles.box} ${styles.logo}`}>
        <Image
          className={styles.mainLogo}
          src={mainLogo}
          width={100}
          height={60}
          alt="Ortodoncja przy parku Logo"
          onClick={() => setIsMenuOpen(false)}
        />
      </Link>
      <div
        className={`${styles.links} ${styles.menuOverlay} ${isMenuOpen ? styles.menuOverlayOpen : ''}`}
      >
        <Link
          className={`${styles.menuLink} ${styles.menuLinkExpand}`}
          href="/oferta"
          onClick={() => setIsMenuOpen(false)}
        >
          Oferta
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
          href="/pracowniaortodontyczna"
          onClick={() => setIsMenuOpen(false)}
        >
          Pracownia ortodontyczna
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
  );
};
