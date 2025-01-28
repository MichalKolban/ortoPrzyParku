import Image from "next/image";
import dynamic from "next/dynamic";
import { EmptySpaceUnderNavigation } from "../components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";
import { OrtoBanner } from "../components/OrtoBanner/OrtoBanner";

import Map from "../components/GoogleMap/Map";

// const Map = dynamic(() => import("../components/Map/Map"));

import phoneIcon from "../../../public/icons/socialPhone.png";
import mailIcon from "../../../public/icons/socialMail.png";
import facebookIcon from "../../../public/icons/socialFacebook.png";
import instagramIcon from "../../../public/icons/socialInstagram.png";

import styles from "./kontakt.module.css";
import Link from "next/link";

const KontaktPage = () => {
  return (
    <div>
      <EmptySpaceUnderNavigation />
      <OrtoBanner />

      <div className={styles.contactWrapper}>
        <div className={styles.mainInfo}>
          <h3 className={styles.mainTitle}>Dane kontaktowe</h3>
          <div className={styles.contactBoxWrapper}>
            <div className={styles.contactBox}>
              <p className={styles.label}>Telefon:</p>
              <p className={styles.data}>+48 501 199 124</p>
              <button className={styles.btn}>
                <Image
                  className={styles.iconBtn}
                  src={phoneIcon}
                  width={18}
                  height={16}
                  alt="telefon"
                />
                Zadzwon do nas
              </button>
            </div>
            <div className={styles.contactBox}>
              <p className={styles.label}>Email:</p>
              <p className={styles.data}>kasiazal@ortodoncjaprzyparku.pl</p>
              <button className={styles.btn}>
                <Image
                  className={styles.iconBtn}
                  src={mailIcon}
                  width={20}
                  height={18}
                  alt="email"
                />
                Skontaktuj się z nami
              </button>
            </div>
          </div>
        </div>
        <div className={styles.columnWrapper}>
          <div className={styles.cityMapBox}>
            <div className={styles.cityWrapper}>
              <div className={styles.cityTitle}>Szczecin</div>
              <div className={styles.addressWrapper}>
                <p className={styles.address}>Adres:</p>
                <p className={styles.addressInfo}>ul. Jana Kazimierza 21/1u.</p>
                <p className={styles.zipcode}>71-620 Szczecin</p>
              </div>
            </div>

            <div className={styles.workingHours}>
              <div className={styles.singleDay}>
                <p>Poniedziałek</p>
                <p>8:00 - 20:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Wtorek</p>
                <p>8:00 - 20:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Środa</p>
                <p>8:00 - 20:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Czwartek</p>
                <p>8:00 - 20:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Piątek</p>
                <p>8:00 - 20:00</p>
              </div>
            </div>
            <div className={styles.mapWrapper}>
              <Map location={"Szczecin"} zoom={"15"} />
            </div>
            <a
              href="https://www.google.pl/maps/dir//Ortodoncja+Przy+Parku,+Jana+Kazimierza+21%2F1U,+71-620+Szczecin/@53.4362709,14.5618151,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47aa0c75a7f191e3:0x7379a0ebe69bc9b9!2m2!1d14.56439!2d53.4362677!3e0?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <button className={styles.btn}>Zobacz na mapie</button>
            </a>
          </div>

          <div className={styles.cityMapBox}>
            <div className={styles.cityWrapper}>
              <div className={styles.cityTitle}>Myślibórz</div>
              <div className={styles.addressWrapper}>
                <p className={styles.address}>Adres:</p>
                <p className={styles.addressInfo}>ul. 1-go Maja 2</p>
                <p className={styles.zipcode}>74-300 Myślibórz</p>
              </div>
            </div>

            <div className={styles.workingHours}>
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
            <div className={styles.mapWrapper}>
              <Map location={"Mysliborz"} zoom={"14"} />
            </div>
            <a
              href="https://www.google.com/maps/dir//Indywidualna+praktyka+stomatologiczna,+Ortodoncja+przy+parku,+1-go+Maja+8,+74-300+My%C5%9Blib%C3%B3rz,+Polska/@52.919731,14.860387,19z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47074758f8224eaf:0x523b5e78964a111f!2m2!1d14.8606349!2d52.9197523!3e0?hl=pl-PL&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <button className={styles.btn}>Zobacz na mapie</button>
            </a>
          </div>
        </div>

        <div className={styles.mainInfo}>
          <h3 className={styles.mainTitle}>Social media</h3>
          <div className={styles.socialBox}>
            <button className={`${styles.btn} ${styles.socialBtn}`}>
              <Image
                className={styles.iconBtn}
                src={facebookIcon}
                width={20}
                height={20}
                alt="facebook"
              />
              Facebook
            </button>
            <button className={`${styles.btn} ${styles.socialBtn}`}>
              <Image
                className={styles.iconBtn}
                src={instagramIcon}
                width={26}
                height={24}
                alt="instagram"
              />
              Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;

// AIzaSyBr0TEck37jN1E3KY3F01WitXL0ulEUooA
