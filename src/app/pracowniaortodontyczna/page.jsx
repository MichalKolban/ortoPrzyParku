import Image from "next/image";

import { BracesGallery } from "../components/BracesGallery/BracesGallery";
import { LogoListElement } from "../components/LogoListElement/LogoListElement";

import ortoMainPhoto from "../../../public/photos/pracowaniaOrtodontyczna.png";
// import companyLogoIcon from "../../../public/icons/logoSmallIcon.png";

import shapeLogo from "../../../public/icons/3shapeLogo.png";
import onyxCephLogo from "../../../public/icons/onyxCephLogo.png";

import meshmixerLogo from "../../../public/icons/meshmixerLogo.png";
import blenderLogo from "../../../public/icons/blenderLogo.png";
import oneTwoThreeDesignLogo from "../../../public/icons/123DDesignLogo.png";
import threeDBuilderLogo from "../../../public/icons/3dBuilderLogo.png";
import meshLabLogo from "../../../public/icons/meshLabLogo.png";
import threeDToolLogo from "../../../public/icons/threeDToolLogo.png";

import styles from "./page.module.css";

const PracowniaOrtodontycznaPage = () => {
  return (
    <div>
      <div className={styles.sectionWrapper}>
        <div>
          <h2 className={styles.title}>Pracowania ortodontyczna</h2>
          <p className={styles.description}>
            W Ortodoncji Przy Parku znajduje się profesjonalne i nowoczesne
            laboratorium. Takie rozwiązanie daje nam możliwość bezpośredniego
            kontaktu z lekarzami prowadzącymi leczenie ortodontyczne oraz
            szybszą realizacje prac.
          </p>
        </div>
        <div className={styles.ortoMainPhotoWrapper}>
          <Image src={ortoMainPhoto} width={420} height={280} />
        </div>
      </div>

      <div className={styles.grayWrapper}>
        <div className={styles.grayInnerWrapper}>
          <div>
            <h2 className={styles.title}>Gabinet</h2>
            <p className={styles.description}>
              W Ortodoncji Przy Parku znajduje się profesjonalne i nowoczesne
              laboratorium. Takie rozwiązanie daje nam możliwość bezpośredniego
              kontaktu z lekarzami prowadzącymi leczenie ortodontyczne oraz
              szybszą realizacje prac.
            </p>
            <p className={styles.descriptionList}>
              Nasze Laboratorium wyposażone jest między innymi w:
            </p>
            <ul className={styles.equipmentList}>
              <LogoListElement>drukarki 3D</LogoListElement>
              <LogoListElement>skaner protetyczny</LogoListElement>
              <LogoListElement>spawarkę</LogoListElement>
              <LogoListElement>
                urządzenie do formowania ciśnieniowego nakładek
              </LogoListElement>
            </ul>
            <p className={styles.descriptionList}>
              Jako pracownia obsługujemy programy do modelowania 3D takie jak:
            </p>
            <ul className={styles.equipmentList}>
              <LogoListElement>Orto Analyzer</LogoListElement>
              <LogoListElement>Appliance Designer</LogoListElement>
              <LogoListElement>OnyxCeph</LogoListElement>
              <LogoListElement>Meshmixer</LogoListElement>
              <LogoListElement>Blender</LogoListElement>
              <LogoListElement>123D Design</LogoListElement>
              <LogoListElement>3D Builder</LogoListElement>
              <LogoListElement>MeshLab</LogoListElement>
              <LogoListElement>3D-Tool</LogoListElement>
            </ul>
          </div>
          <div className={styles.logoBox}>
            <div className={styles.logoSmallBox}>
              <Image src={shapeLogo} width={280} height={60} />
            </div>
            <div className={styles.logoSmallBox}>
              <Image src={onyxCephLogo} width={280} height={60} />
            </div>
            <div className={styles.logoSmallBox}>
              <Image src={meshmixerLogo} width={200} height={60} />
            </div>
            <div className={styles.logoSmallBox}>
              <Image src={blenderLogo} width={260} height={80} />
            </div>
            <div className={styles.logoSmallBox}>
              <Image src={oneTwoThreeDesignLogo} width={80} height={80} />
            </div>
            <div className={styles.logoSmallBox}>
              <Image src={threeDBuilderLogo} width={80} height={80} />
            </div>
            <div className={styles.logoSmallBox}>
              <Image src={meshLabLogo} width={200} height={80} />
            </div>
            <div className={styles.logoSmallBox}>
              <Image src={threeDToolLogo} width={220} height={60} />
            </div>
          </div>
        </div>
      </div>

      <BracesGallery />
    </div>
  );
};

export default PracowniaOrtodontycznaPage;
