import Image from "next/image";

// import iconDostepnosc from "../../../../public/icons/dostepnosc.png";
// import iconEmpatycznosc from "../../../../public/icons/empatycznosc.png";
// import iconNowoczesnosc from "../../../../public/icons/nowoczesnosc.png";
// import iconZespol from "../../../../public/icons/zespol.png";
// import iconProfesjonalizm from "../../../../public/icons/profesjonalizm.png";
// import iconKompleksowosc from "../../../../public/icons/kompleksowosc.png";

import styles from "./OfficeSixIcons.module.css";

export const OfficeSixIcons = () => {
  const iconDostepnosc = "/icons/dostepnosc.png";
  const iconEmpatycznosc = "/icons/empatycznosc.png";
  const iconNowoczesnosc = "/icons/nowoczesnosc.png";
  const iconZespol = "/icons/zespol.png";
  const iconProfesjonalizm = "/icons/profesjonalizm.png";
  const iconKompleksowosc = "/icons/kompleksowosc.png";

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.icon}
            src={iconDostepnosc}
            width={80}
            height={60}
            alt={"dostepnosc"}
          />
        </div>
        <div className={styles.title}>dostępność</div>
        <div className={styles.description}>
          lokalizacja w centrum miasta, parking, elastyczne godziny pracy.
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.icon}
            src={iconEmpatycznosc}
            width={80}
            height={60}
            alt={"empatycznosc"}
          />
        </div>
        <div className={styles.title}>empatyczność</div>
        <div className={styles.description}>
          na pierwszym miejscu stawiamy dobro pacjenta.
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.icon}
            src={iconNowoczesnosc}
            width={80}
            height={60}
            alt={"nowoczesność"}
          />
        </div>
        <div className={styles.title}>nowoczesność</div>
        <div className={styles.description}>
          wykorzystujemy najnowsze dostępne technologie do diagnostyki oraz
          leczenia.
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.icon}
            src={iconZespol}
            width={80}
            height={60}
            alt={"zespół"}
          />
        </div>
        <div className={styles.title}>zespół</div>
        <div className={styles.description}>
          grono profesjonalistów stale podnoszących swoje kwalifikacje.
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.icon}
            src={iconProfesjonalizm}
            width={80}
            height={60}
            alt={"profesjonalizm"}
          />
        </div>
        <div className={styles.title}>profesjonalizm</div>
        <div className={styles.description}>
          wieloletni staż pracy oraz doświadczenie w leczeniu najtrudniejszych
          wad zgryzu.
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.icon}
            src={iconKompleksowosc}
            width={80}
            height={60}
            alt={"kompleksowość"}
          />
        </div>
        <div className={styles.title}>kompleksowość</div>
        <div className={styles.description}>
          holistyczne podejście w leczeniu dzieci, młodzieży oraz dorosłych.
        </div>
      </div>
    </div>
  );
};
