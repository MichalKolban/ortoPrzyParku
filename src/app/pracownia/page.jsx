import Image from "next/image";

import Link from "next/link";

import { BracesGallery } from "../components/BracesGallery/BracesGallery";
import { LogoListElement } from "../components/LogoListElement/LogoListElement";

import ortoMainPhoto from "../../../public/photos/pracowaniaOrtodontyczna.png";
import pracowniaOrtoPhoto from "../../../public/photos/pracowniaOrtoPhoto.png";
import uslugiOrtoPhoto from "../../../public/photos/pracowaniaUslugiPhoto.png";
import wspolpracaOrtoPhoto from "../../../public/photos/wspolpracaPracowania.png";
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
    <>
      <head>
        <title>Pracownia</title>
        <meta
          name="description"
          content="Ortodoncja Przy Parku w Szczecinie – nowoczesna klinika ortodontyczna dla dzieci i dorosłych. Profesjonalne leczenie wad zgryzu, aparaty stałe i ruchome. Umów się na konsultację!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <div>
        <div className={`${styles.sectionWrapper} ${styles.firstSection}`}>
          <div className={styles.textBox}>
            <h2 className={styles.title}>Pracowania ortodontyczna</h2>
            <p className={styles.description}>
              W Ortodoncji Przy Parku znajduje się profesjonalne i nowoczesne
              laboratorium. Takie rozwiązanie daje nam możliwość bezpośredniego
              kontaktu z lekarzami prowadzącymi leczenie ortodontyczne oraz
              szybszą realizacje prac.
            </p>
          </div>
          <div className={styles.ortoMainPhotoWrapper}>
            <Image
              src={ortoMainPhoto}
              width={420}
              height={280}
              alt="pracownia"
            />
          </div>
        </div>

        <div className={styles.grayWrapper}>
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
              <div className={styles.logoSmallBox}>
                <Image src={shapeLogo} width={280} height={60} alt="3shape" />
              </div>
              <div className={styles.logoSmallBox}>
                <Image
                  src={onyxCephLogo}
                  width={280}
                  height={60}
                  alt="onyxCeph"
                />
              </div>
              <div className={styles.logoSmallBox}>
                <Image
                  src={meshmixerLogo}
                  width={200}
                  height={60}
                  alt="meshmixer"
                />
              </div>
              <div className={styles.logoSmallBox}>
                <Image
                  src={blenderLogo}
                  width={260}
                  height={80}
                  alt="blender"
                />
              </div>
              <div className={styles.logoSmallBox}>
                <Image
                  src={oneTwoThreeDesignLogo}
                  width={80}
                  height={80}
                  alt="123Design"
                />
              </div>
              <div className={styles.logoSmallBox}>
                <Image
                  src={threeDBuilderLogo}
                  width={80}
                  height={80}
                  alt="threeBuilder"
                />
              </div>
              <div className={styles.logoSmallBox}>
                <Image
                  src={meshLabLogo}
                  width={200}
                  height={80}
                  alt="meshLab"
                />
              </div>
              <div className={styles.logoSmallBox}>
                <Image
                  src={threeDToolLogo}
                  width={220}
                  height={60}
                  alt="3D-Tool"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionWrapper}>
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
            />
          </div>
        </div>

        <div className={styles.grayWrapper}>
          <div className={styles.grayInnerWrapper}>
            <div className={styles.textBox}>
              <h2 className={styles.title}>Usługi</h2>
              <p className={styles.description}>
                Świadczymy kompleksowe usługi techniki dentystycznej w zakresie
                ortodoncji.
              </p>
              <ol className={styles.orderedList}>
                Nasze usługi:
                <li className={styles.orderedListElement}>Diagnostyka</li>
                <li>Aparaty ortodontyczne</li>
                <li>Szyny</li>
                <ul className={styles.equipmentList}>
                  <LogoListElement>szyna do wybielania</LogoListElement>
                  <LogoListElement>szyna z set-upem</LogoListElement>
                  <LogoListElement>szyna relaksacyjna</LogoListElement>
                  <LogoListElement>szyna retencyjna</LogoListElement>
                  <LogoListElement>szyna do deprogramacji</LogoListElement>
                </ul>
                <li>Alignery In-Office lub GRAPHY</li>
                <li>Prace drukowane z żywicy</li>
                <li>Prace drukowane z metalu</li>
              </ol>
            </div>
            <div className={styles.ortoMainPhotoWrapper}>
              <Image
                src={uslugiOrtoPhoto}
                width={340}
                height={400}
                alt="usługi"
              />
            </div>
          </div>
        </div>

        <BracesGallery />

        <div className={styles.grayWrapper}>
          <div className={styles.grayInnerWrapper}>
            <div className={`${styles.textBox} ${styles.workWithUs}`}>
              <h2 className={styles.title}>Współpraca</h2>
              <p className={styles.description}>
                Zapraszamy do współpracy gabinety ortodontyczne a także
                indywidualnych lekarzy. Aby dowiedzieć się więcej zachęcamy do
                kontaktu
              </p>
              <Link
                href={"/"}
                className={`${styles.btn} ${styles.descriptionBtn}`}
              >
                <div>Kontakt</div>
              </Link>
            </div>

            <div className={styles.ortoMainPhotoWrapper}>
              <Image
                src={wspolpracaOrtoPhoto}
                width={350}
                height={200}
                alt="współpraca"
              />
            </div>
          </div>
        </div>

        <div>
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
    </>
  );
};

export default PracowniaOrtodontycznaPage;
