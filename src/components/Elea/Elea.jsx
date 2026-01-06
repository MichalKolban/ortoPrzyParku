import styles from "./Elea.module.css";
import Image from "next/image";

import szkolenie1Img from "../../../public/photos/szkolenie1.jpg";
import szkolenie2Img from "../../../public/photos/szkolenie2.jpg";
import szkolenie3Img from "../../../public/photos/szkolenie3.jpg";

export const Elea = ({}) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>Zapisz się na kurs</h3>
      <p className={styles.description}>
        Oferujemy nowoczesne szkolenia ortodontyczne stworzone z myślą o
        lekarzach, którzy chcą rozwijać swoje umiejętności i pracować pewniej z
        pacjentami. Stawiamy na praktyczną wiedzę, aktualne protokoły leczenia
        oraz doświadczenie prowadzących, które realnie przekłada się na
        codzienną pracę w gabinecie.
      </p>
      <div className={styles.imageWrapper}>
        <Image src={szkolenie1Img} width={180} height={270} alt="szkolenie" />
        <Image src={szkolenie2Img} width={180} height={270} alt="szkolenie" />
        <Image src={szkolenie3Img} width={180} height={270} alt="szkolenie" />
      </div>
      <a
        href="https://ortodoncjaprzyparku.e-lea.com/"
        target="_blank"
        className={styles.button}
      >
        Przejdź do platformy e-Lea
      </a>
    </div>
  );
};
