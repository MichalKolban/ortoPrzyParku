"use client";

// import { CustomLayout } from "../customLayout/CustomLayout";

import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";

import { useState, useEffect } from "react";
import { PhotosLinkRow } from "../components/PhotosLinkRow/PhotosLinkRow";
import { OfficeSixIcons } from "../components/OfficeSixIcons/OfficeSixIcons";
import { OrtoBanner } from "../components/OrtoBanner/OrtoBanner";
import { OrtoServices } from "../components/OrtoServices/OrtoServices";

import { NotificationSection } from "@/components/NotificationSection/NotificationSection";

import styles from "./page.module.css";
import Image from "next/image";
// import { NotificationSection } from "../components/NotificationSection/NotificationSection";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainPhotoImg = "/photos/mainPhoto.jpg";
  const gabinetImg = "/photos/gabinet.png";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <CustomLayout>
      <div className={styles.outerWrapper}>
        <NotificationSection />
        <div className={`${styles.sectionWrapper} ${styles.mainSection}`}>
          <div className={styles.descriptionBox}>
            <h1 className={styles.title}>Ortodoncja Przy Parku</h1>
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
            <Image
              title="Ortodoncja"
              src="/photos/mainPhoto.jpg"
              width={420}
              height={260}
              alt="Ortodoncja"
            />
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.descriptionBox}>
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
            <div className={styles.description}>
              <h2 className={styles.title}>Gabinet</h2>
              <p
                className={`${styles.description} ${styles.officeDescription}`}
              >
                Nasz gabinet charakteryzuje się indywidualnym podejściem do
                każdego pacjenta. Każdy z naszych pacjentów otrzymuje fachową i
                troskliwą opiekę, dostosowaną do jego potrzeb i oczekiwań.
                Naszym celem jest zapewnienie najlepszego efektu leczenia i
                zdrowego, pięknego uśmiechu.
              </p>
            </div>
            <div className={styles.xmastree}>
              <Image
                title="Gabinet"
                src={gabinetImg}
                width={380}
                height={260}
                alt="Gabinet"
              />
            </div>
          </div>
        </div>
        <OrtoBanner />
        <OfficeSixIcons />
        <PhotosLinkRow />
      </div>
    </CustomLayout>
  );
};

export default Home;
