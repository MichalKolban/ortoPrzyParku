import Link from 'next/link';
import Image from 'next/image';

import SocialLinks from '../SocialLink/SocialLink';

// import iconMail from "../../../../public/icons/email-96.png";
import iconMail from '../../../../public/icons/email-96.png';
import iconPhone from '../../../../public/icons/phone-96.png';
import iconFacebook from '../../../../public/icons/facebook-96.png';
import iconInstagram from '../../../../public/icons/instagram-96.png';
import mainLogo from '../../../../public/logo.png';
import styles from './Footer.module.css';

export const Footer = () => {
  const workHours = 'Godziny Pracy';

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.box} ${styles.logo}`}>
        <Image
          className={styles.mainLogo}
          src={mainLogo}
          width={300}
          height={176}
          alt="Ortodoncja przy parku Logo"
        />
      </div>
      <div className={`${styles.box} ${styles.mainLinks}`}>
        <p className={styles.singleLink}>
          <Link href={'tel:501199124'}>
            <span className={styles.iconSmall}>
              <Image
                className={styles.linkIcon}
                src={iconPhone}
                width={25}
                height={25}
                alt="Phone icon"
              />
            </span>
            501 199 124
          </Link>
        </p>
        <p className={styles.singleLink}>
          <Link href={'mailto:kasiazal@ortodoncjaprzyparku.pl'}>
            <span className={styles.iconSmall}>
              <Image
                className={styles.linkIcon}
                src={iconMail}
                width={25}
                height={25}
                alt="Email icon"
              />
            </span>
            kasiazal@ortodoncjaprzyparku.pl
          </Link>
        </p>
        <p className={styles.singleLink}>
          <span></span>
          <SocialLinks
            socialHref={'https://www.facebook.com/OrtodoncjaPrzyParku'}
          >
            <span className={styles.iconSmall}>
              <Image
                className={styles.linkIcon}
                src={iconFacebook}
                width={25}
                height={25}
                alt="Phone icon"
              />
            </span>
            Facebook
          </SocialLinks>
        </p>
        <p className={styles.singleLink}>
          <span></span>
          <SocialLinks
            socialHref={'https://www.instagram.com/ortodoncjaprzyparku/'}
          >
            <span className={styles.iconSmall}>
              <Image
                className={styles.linkIcon}
                src={iconInstagram}
                width={25}
                height={25}
                alt="Phone icon"
              />
            </span>
            Instagram
          </SocialLinks>
        </p>
        <div className={styles.extraLinks}>
          <p className={`${styles.singleLink} ${styles.ortoLink}`}>
            <SocialLinks socialHref={'https://www.google.pl'}>
              Polityka RODO
            </SocialLinks>
          </p>
          <p className={`${styles.singleLink} ${styles.ortoLink}`}>
            <SocialLinks socialHref={'https://www.google.pl'}>
              Materiały do pobrania
            </SocialLinks>
          </p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.box}>
        <div>
          <div>
            <p className={styles.city}>Szczecin</p>
            <p className={styles.address}>ul. Jana Kazimierza 21/1u.</p>
            <p className={styles.address}>71-001 Szczecin</p>
          </div>
          <div>
            <p className={styles.hours}>{workHours}</p>
            <div className={styles.hoursBox}>
              <div className={styles.singleDay}>
                <p>Poniedziałek</p>
                <p>8:00 - 18:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Wtorek</p>
                <p>8:00 - 18:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Środa</p>
                <p>8:00 - 18:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Czwartek</p>
                <p>8:00 - 18:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Piątek</p>
                <p>8:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.box}>
        <div>
          <div>
            <p className={styles.city}>Myślibórz</p>
            <p className={styles.address}>ul. 1-go Maja 9.</p>
            <p className={styles.address}>44-004 Myślibórz</p>
          </div>
          <div>
            <p className={styles.hours}>{workHours}</p>
            <div className={styles.hoursBox}>
              <div className={styles.singleDay}>
                <p>Poniedziałek</p>
                <p>10:00 - 18:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Wtorek</p>
                <p>10:00 - 19:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Środa</p>
                <p>9:00 - 17:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Czwartek</p>
                <p>11:00 - 19:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Piątek</p>
                <p>9:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};