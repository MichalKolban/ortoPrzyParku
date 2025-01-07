import Image from 'next/image';

import { BracesGallery } from '../components/BracesGallery/BracesGallery';

import ortoMainPhoto from '../../../public/photos/pracowaniaOrtodontyczna.png';

import styles from './page.module.css';

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
              <p className={styles.descriptionList}>
                Nasze Laboratorium wyposażone jest między innymi w:
              </p>
              <span className={styles.descriptionElement}>drukarki 3D</span>
              <span className={styles.descriptionElement}>
                skaner protetyczny
              </span>
              <span className={styles.descriptionElement}>spawarkę</span>
              <span className={styles.descriptionElement}>
                urządzenie do formowania ciśnieniowego nakładek
              </span>
              <p className={styles.descriptionList}>
                Jako pracownia obsługujemy programy do modelowania 3D takie jak:
              </p>
              <span className={styles.descriptionElement}>Orto Analyzer</span>
              <span className={styles.descriptionElement}>
                Appliance Designer
              </span>
              <span className={styles.descriptionElement}>OnyxCeph</span>
              <span className={styles.descriptionElement}>Meshmixer</span>
              <span className={styles.descriptionElement}>Blender</span>
              <span className={styles.descriptionElement}>123D Design</span>
              <span className={styles.descriptionElement}>3D Builder</span>
              <span className={styles.descriptionElement}>MeshLab</span>
              <span className={styles.descriptionElement}>3D-Tool</span>
            </p>
          </div>
          <div className={styles.xmastree}>
            <Image src={''} width={380} height={260} />
          </div>
        </div>
      </div>

      <BracesGallery />
    </div>
  );
};

export default PracowniaOrtodontycznaPage;
