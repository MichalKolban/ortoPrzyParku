"use client";

import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { useState, useEffect } from "react";
import { PhotoLink } from "./components/PhotoLink/PhotoLink";
// import { PhotosLinkRow } from './components/PhotosLinkRow/PhotosLinkRow';
import { PhotosLinkRow } from "./components/PhotosLinkRow/PhotosLinkRow";
import { OfficeSixIcons } from "./components/OfficeSixIcons/OfficeSixIcons";
import { OrtoBanner } from "./components/OrtoBanner/OrtoBanner";
import { OrtoServices } from "./components/OrtoServices/OrtoServices";

import choinkaImg from "./../../public/photos/choinka.png";
import gabinetImg from "./../../public/photos/gabinet.png";

import styles from "./page.module.css";
import Image from "next/image";
import { NotificationSection } from "./components/NotificationSection/NotificationSection";

import Head from "next/head";

const Home = () => {
  const [deviceType, setDeviceType] = useState("desktop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("page hello 1");
    setIsMenuOpen(!isMenuOpen);
  };

  // const checkWindowSize = () => {
  //   if (typeof window !== 'undefined') {
  //     const windowWidth = window.innerWidth;
  //     if (windowWidth >= 1024) {
  //       setDeviceType('desktop');
  //     } else if (windowWidth >= 768 && windowWidth < 1024) {
  //       setDeviceType('tablet');
  //     } else {
  //       setDeviceType('mobile');
  //     }
  //   }
  // };

  // useEffect(() => {
  //   checkWindowSize(); // Pierwsze sprawdzenie po załadowaniu komponentu
  //   // Nasłuchuj zmian rozmiaru okna
  //   window.addEventListener('resize', checkWindowSize);
  //   return () => {
  //     window.removeEventListener('resize', checkWindowSize); // Usuń nasłuchiwacz przy unmount
  //   };
  // }, []);

  return (
    <>
      <head>
        <title>Strona główna</title>
        <meta name="description" content="To jest opis dla głównej strony." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <NotificationSection />
      {/* <div className={`${styles.sectionWrapper} ${styles.mainSection}`}>
        <div>
          <h2 className={styles.title}>Ortodoncja Przy Parku</h2>
          <p className={styles.description}>
            Ortodoncja Przy Parku to gabinet ortodontyczno-stomatologiczny w
            Szczecinie. Specjalizujemy się w oferowaniu kompleksowych usług,
            łącząc profesjonalizm z indywidualnym podejściem do każdego
            Pacjenta. Każdemu poświęcamy tyle czasu i uwagi ile jest potrzebne
            aby zrozumieć jego potrzeby i pomóc wybrać odpowiedni plan
            leczenia. 
          </p>
        </div>
        <div className={styles.xmastree}>
          <Image src={choinkaImg} width={380} height={400} />
        </div>
      </div>
      <div className={styles.sectionWrapper}>
        <div>
          <h2 className={styles.title}>O nas</h2>
          <p className={styles.description}>
            Wykorzystujemy najnowsze technologie i nowatorskie metody leczenia
            do zapewnienia naszym Pacjentom zdrowego i pięknego uśmiechu.
            Priorytetem jest zdrowie, świadomość oraz bezpieczeństwo naszego
            Pacjenta. Skuteczność oraz kompleksowość usług stomatologicznych
            osiągamy dzięki odpowiednim kwalifikacjom całego personelu. Mamy
            wieloletnie doświadczenie w leczeniu najtrudniejszych wad zgryzu
            oraz korygowanie ustawienia zębów.
          </p>
        </div>
        <OrtoServices />
      </div>
      <div className={styles.grayWrapper}>
        <div className={styles.grayInnerWrapper}>
          <div>
            <h2 className={styles.title}>Gabinet</h2>
            <p className={styles.description}>
              Nasz gabinet charakteryzuje się indywidualnym podejściem do
              każdego pacjenta. Każdy z naszych pacjentów otrzymuje fachową i
              troskliwą opiekę, dostosowaną do jego potrzeb i oczekiwań. Naszym
              celem jest zapewnienie najlepszego efektu leczenia i zdrowego,
              pięknego uśmiechu.
            </p>
          </div>
          <div className={styles.xmastree}>
            <Image src={gabinetImg} width={380} height={260} />
          </div>
        </div>
      </div>
      <OrtoBanner />
      <OfficeSixIcons /> */}
      <PhotosLinkRow />
    </>
  );
};

export default Home;
