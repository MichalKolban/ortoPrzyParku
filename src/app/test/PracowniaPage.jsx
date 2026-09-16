import Image from "next/image";

import Link from "next/link";

import { BracesGallery } from "../../components/BracesGallery/BracesGallery";
import { Gallery } from "../../components/Gallery/Gallery";
import { LogoListElement } from "../../components/LogoListElement/LogoListElement";
import { Reveal } from "../../components/Reveal/Reveal";

import ortoMainPhoto from "../../../public/photos/pracowaniaOrtodontyczna.png";
import pracowniaOrtoPhoto from "../../../public/photos/pracowniaOrtoPhoto.png";
import uslugiOrtoPhoto from "../../../public/photos/pracowaniaUslugiPhoto.png";
import wspolpracaOrtoPhoto from "../../../public/photos/wspolpracaPracowania.png";
// import companyLogoIcon from "../../../public/icons/logoSmallIcon.png";

import pracowaniLogo from "../../../public/logo_pracownia.jpg";

import shapeLogo from "../../../public/icons/3shapeLogo.png";
import onyxCephLogo from "../../../public/icons/onyxCephLogo.png";

import meshmixerLogo from "../../../public/icons/meshmixerLogo.png";
import blenderLogo from "../../../public/icons/blenderLogo.png";
import oneTwoThreeDesignLogo from "../../../public/icons/123DDesignLogo.png";
import threeDBuilderLogo from "../../../public/icons/3dBuilderLogo.png";
import meshLabLogo from "../../../public/icons/meshLabLogo.png";
import threeDToolLogo from "../../../public/icons/threeDToolLogo.png";

import styles from "./page.module.css";
import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";

const PracowniaOrtodontycznaPage = () => {
  return (
    <CustomLayout>
      <div>
        <Reveal
          as="div"
          className={`${styles.sectionWrapper} ${styles.firstSection}`}
        >
          <div className={styles.textBox}>
            <h2 className={styles.title}>Pracowania ortodontyczna</h2>
            <p className={styles.description}>
              W Ortodoncji Przy Parku znajduje się profesjonalne i nowoczesne
              laboratorium. Takie rozwiązanie daje nam możliwość bezpośredniego
              kontaktu z lekarzami prowadzącymi leczenie ortodontyczne oraz
              szybszą realizacje prac.
            </p>
            <p className={styles.titleSmall}>Co nas wyróżnia?</p>
            <p className={styles.description}>
              Mentoring lekarza specjalisty – dzięki ścisłej współpracy i opiece
              doświadczonego eksperta możemy zapewnić najwyższy standard usług
              oraz indywidualne podejście do każdego przypadku.
            </p>
          </div>
          <div className={styles.ortoMainPhotoWrapper}>
            <Image
              src={pracowaniLogo}
              width={240}
              height={240}
              alt="pracownia"
            />
          </div>
        </Reveal>

        <Reveal as="div" className={styles.grayWrapper}>
          <div
            className={`${styles.grayInnerWrapper} ${styles.equipmentWrapper}`}
          >
            <div className={styles.textBox}>
              <h2 className={styles.title}>Laboratorium</h2>
              {/* <p className={styles.description}>
              W Ortodoncji Przy Parku znajduje się profesjonalne i nowoczesne
              laboratorium. Takie rozwiązanie daje nam możliwość bezpośredniego
              kontaktu z lekarzami prowadzącymi leczenie ortodontyczne oraz
              szybszą realizacje prac.
            </p> */}
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
              <Reveal as="div" delay={0 * 0.06} distance={12} duration={0.4} className={styles.logoSmallBox}>
                <Image src={shapeLogo} width={280} height={60} alt="3shape" />
              </Reveal>
              <Reveal as="div" delay={1 * 0.06} distance={12} duration={0.4} className={styles.logoSmallBox}>
                <Image
                  src={onyxCephLogo}
                  width={280}
                  height={60}
                  alt="onyxCeph"
                />
              </Reveal>
              <Reveal as="div" delay={0 * 0.06} distance={12} duration={0.4} className={styles.logoSmallBox}>
                <Image
                  src={meshmixerLogo}
                  width={200}
                  height={60}
                  alt="meshmixer"
                />
              </Reveal>
              <Reveal as="div" delay={1 * 0.06} distance={12} duration={0.4} className={styles.logoSmallBox}>
                <Image
                  src={blenderLogo}
                  width={260}
                  height={80}
                  alt="blender"
                />
              </Reveal>
              <Reveal as="div" delay={0 * 0.06} distance={12} duration={0.4} className={styles.logoSmallBox}>
                <Image
                  src={oneTwoThreeDesignLogo}
                  width={80}
                  height={80}
                  alt="123Design"
                />
              </Reveal>
              <Reveal as="div" delay={1 * 0.06} distance={12} duration={0.4} className={styles.logoSmallBox}>
                <Image
                  src={threeDBuilderLogo}
                  width={80}
                  height={80}
                  alt="threeBuilder"
                />
              </Reveal>
              <Reveal as="div" delay={0 * 0.06} distance={12} duration={0.4} className={styles.logoSmallBox}>
                <Image
                  src={meshLabLogo}
                  width={200}
                  height={80}
                  alt="meshLab"
                />
              </Reveal>
              <Reveal as="div" delay={1 * 0.06} distance={12} duration={0.4} className={styles.logoSmallBox}>
                <Image
                  src={threeDToolLogo}
                  width={220}
                  height={60}
                  alt="3D-Tool"
                />
              </Reveal>
            </div>
          </div>
        </Reveal>

        <Reveal
          as="div"
          className={`${styles.sectionWrapper} ${styles.reverseRow}`}
        >
          <div className={styles.btnTextBox}>
            <div className={styles.textBox}>
              <p className={styles.description}>
                Wykonujemy pełen zakres prac ortodontycznych z akrylu,
                doginanych oraz projektowanych cyfrowo i wykonywanych w technice
                SLM (selektywne topienie laserowe). Produkujemy alignery
                stosowane do leczenia nakładkowego. Stosujemy dwie metody
                produkcji:
              </p>
              <ul className={styles.equipmentList}>
                <LogoListElement>Alignery metodą tłoczenia</LogoListElement>
                <LogoListElement>
                  Alignery drukowane z pamięcią kształtu
                </LogoListElement>
              </ul>
              <p className={styles.description}>
                Na bieżąco śledzimy postęp w dziedzinie ortodoncji oraz
                uczestniczymy w szkoleniach organizowanych przez wiodące firmy z
                branży. Pozwala to nam wykonywać nasze prace stosując najnowsze
                technologie i najlepsze materiały. Naszym głównym celem jest
                tworzyć aparaty ortodontyczne, które są zgodne z planem leczenia
                i oferujemy pełne wsparcie techniczne dla lekarza.
              </p>

              <ul className={styles.equipmentList}>
                <LogoListElement>
                  Zawsze służymy naszym doświadczeniem.
                </LogoListElement>
                <LogoListElement>
                  Przyjmujemy zlecenia od indywidualnych lekarzy.
                </LogoListElement>
              </ul>
            </div>
            <Link href={"/kontakt"} className={styles.btn}>
              <div>Kontakt</div>
            </Link>
          </div>
          <div className={styles.ortoMainPhotoWrapper}>
            <Image
              src={pracowniaOrtoPhoto}
              width={340}
              height={400}
              alt="pracownia"
              className={styles.photoImage}
            />
          </div>
        </Reveal>

        <Reveal as="div" className={styles.grayWrapper}>
          <div className={`${styles.grayInnerWrapper} ${styles.uslugiRow}`}>
            <div className={styles.textBox}>
              <h2 className={styles.title}>Usługi</h2>
              <p className={styles.description}>
                Świadczymy kompleksowe usługi techniki dentystycznej w zakresie
                ortodoncji.
              </p>
              <div className={styles.servicesList}>
                <Reveal as="div" delay={0 * 0.06} distance={12} duration={0.4} className={styles.serviceCard}>
                  <span className={styles.serviceLabel}>Diagnostyka</span>
                </Reveal>
                <Reveal as="div" delay={1 * 0.06} distance={12} duration={0.4} className={styles.serviceCard}>
                  <span className={styles.serviceLabel}>
                    Aparaty ortodontyczne
                  </span>
                </Reveal>
                <Reveal
                  as="div"
                  delay={2 * 0.06}
                  distance={12}
                  duration={0.4}
                  className={styles.serviceCard}
                >
                  <span className={styles.serviceLabel}>Szyny</span>
                  <ul className={styles.equipmentList}>
                    <LogoListElement>szyna do wybielania</LogoListElement>
                    <LogoListElement>szyna z set-upem</LogoListElement>
                    <LogoListElement>szyna relaksacyjna</LogoListElement>
                    <LogoListElement>szyna retencyjna</LogoListElement>
                    <LogoListElement>szyna do deprogramacji</LogoListElement>
                  </ul>
                </Reveal>
                <Reveal as="div" delay={3 * 0.06} distance={12} duration={0.4} className={styles.serviceCard}>
                  <span className={styles.serviceLabel}>
                    Alignery In-Office lub GRAPHY
                  </span>
                </Reveal>
                <Reveal as="div" delay={4 * 0.06} distance={12} duration={0.4} className={styles.serviceCard}>
                  <span className={styles.serviceLabel}>
                    Prace drukowane z żywicy
                  </span>
                </Reveal>
                <Reveal as="div" delay={5 * 0.06} distance={12} duration={0.4} className={styles.serviceCard}>
                  <span className={styles.serviceLabel}>
                    Prace drukowane z metalu
                  </span>
                </Reveal>
              </div>
            </div>
            <div className={styles.ortoMainPhotoWrapper}>
              <Image
                src={uslugiOrtoPhoto}
                width={340}
                height={400}
                alt="usługi"
                className={styles.photoImage}
              />
            </div>
          </div>
        </Reveal>

        <Gallery />

        <Gallery
          id="gallery-caption-below"
          title="Galeria Aparatów - podpis pod zdjęciem"
          captionPosition="below"
        />

        <Gallery
          id="gallery-caption-below-blue"
          title="Galeria Aparatów - podpis pod zdjęciem (niebieski)"
          captionPosition="below-blue"
        />

        <Reveal as="div" className={styles.grayWrapper}>
          <div className={`${styles.grayInnerWrapper} ${styles.reverseRow}`}>
            <div className={`${styles.textBox} ${styles.workWithUs}`}>
              <h2 className={styles.title}>Współpraca</h2>
              <p className={styles.description}>
                Zapraszamy do współpracy gabinety ortodontyczne a także
                indywidualnych lekarzy. Aby dowiedzieć się więcej zachęcamy do
                kontaktu
              </p>
              <div className={styles.workWithUsButtons}>
                <Link href={"/kontakt"} className={styles.btn}>
                  <div>Kontakt</div>
                </Link>
                <Link
                  id="kartaPracy"
                  href={"/documents/pracowniaKartaPracy.pdf"}
                  target="_blank"
                  className={styles.btn}
                >
                  <div>Pobierz kartę pracowni</div>
                </Link>
              </div>
            </div>

            <div className={styles.ortoMainPhotoWrapper}>
              <Image
                src={wspolpracaOrtoPhoto}
                width={350}
                height={200}
                alt="współpraca"
                className={styles.photoImage}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </CustomLayout>
  );
};

export default PracowniaOrtodontycznaPage;
