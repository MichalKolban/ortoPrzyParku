import Image from "next/image";
import { EmptySpaceUnderNavigation } from "../../components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";
import { OrtoBanner } from "../../components/OrtoBanner/OrtoBanner";

import styles from "./kontakt.module.css";
import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";
import GoogleMap from "@/components/GoogleMap/GoogleMap";

const KontaktPage = () => {
  const phoneIcon = "/icons/socialPhone.png";
  const mailIcon = "/icons/socialMail.png";
  const facebookIcon = "/icons/socialFacebook.png";
  const instagramIcon = "/icons/socialInstagram.png";

  return (
    <CustomLayout>
      <EmptySpaceUnderNavigation />
      <OrtoBanner />

      <div className={styles.contactWrapper}>
        <div className={styles.mainInfo}>
          <h3 className={styles.mainTitle}>Dane kontaktowe</h3>
          <div className={styles.contactBoxWrapper}>
            <div className={styles.contactBox}>
              <p className={styles.label}>Telefon:</p>
              <p className={styles.data}>+48 501 199 124</p>
              <a
                className={styles.singleLink}
                href={"tel:501199124"}
                target="_blank"
              >
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
              </a>
            </div>
            <div className={styles.contactBox}>
              <p className={styles.label}>Email:</p>
              <p className={styles.data}>kasiazal@ortodoncjaprzyparku.pl</p>
              <a
                href={"mailto:kasiazal@ortodoncjaprzyparku.pl"}
                target="_blank"
              >
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
              </a>
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
                <p>8:00 - 19:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Wtorek</p>
                <p>8:00 - 19:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Środa</p>
                <p>8:00 - 19:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Czwartek</p>
                <p>8:00 - 19:00</p>
              </div>
              <div className={styles.singleDay}>
                <p>Piątek</p>
                <p>8:00 - 17:00</p>
              </div>
            </div>
            <div className={styles.mapWrapper}>
              <GoogleMap linkSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.800928142798!2d14.559519090011674!3d53.43626760093319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0c75a7f191e3%3A0x7379a0ebe69bc9b9!2sOrtodoncja%20Przy%20Parku!5e0!3m2!1spl!2spl!4v1747738940837!5m2!1spl!2spl" />
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
              <GoogleMap linkSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.5930937515764!2d14.858059976592026!3d52.919752272168694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47074758f8224eaf%3A0x523b5e78964a111f!2sIndywidualna%20praktyka%20stomatologiczna%2C%20Ortodoncja%20przy%20parku!5e0!3m2!1spl!2spl!4v1747738366074!5m2!1spl!2spl" />
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
            <a
              href={"https://www.facebook.com/OrtodoncjaPrzyParku"}
              target="_blank"
            >
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
            </a>
            <a
              href={"https://www.instagram.com/ortodoncjaprzyparku/"}
              target="_blank"
            >
              <button className={`${styles.btn} ${styles.socialBtn}`}>
                <Image
                  className={styles.iconBtn}
                  src={instagramIcon}
                  width={30}
                  height={24}
                  alt="instagram"
                />
                Instagram
              </button>
            </a>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
};

export default KontaktPage;
