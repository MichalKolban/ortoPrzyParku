import styles from "./PriceListPicker.module.css";

export const PriceListPicker = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.priceListWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.mainSign}>Ortodoncja</div>
        <div className={styles.innerWrapper}>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("diagnostykaOrtodontyczna")}
          >
            Diagnostyka Ortodontyczna
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("badaniaRendgenowskie")}
          >
            Badania Rentgenowskie
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("higienizacja")}
          >
            Higienizacja
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("aparatyStałe")}
          >
            Aparaty stałe
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("aparatyZdejmowane")}
          >
            Aparaty zdejmowane
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("wizytaKontrolna")}
          >
            Wizyta konrtolna
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("demontaż")}
          >
            Demontaż
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("retencja")}
          >
            Retencja
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("alignery-AparatyNakładkowe")}
          >
            Alignery - aparaty nakładkowe
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("materiałyDodatkowe")}
          >
            Materiały dodatkowe
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("fizykoterapia")}
          >
            Fizykoterapia
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("awaria")}
          >
            Awaria
          </button>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mainSign}>Stomatologia</div>
        <div className={styles.innerWrapper}>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("poradaLekarska")}
          >
            Porada lekarska
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("profilaktyka")}
          >
            Profilaktyka
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("implantologia")}
          >
            Implantologia
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("protetykaStomatologiczna")}
          >
            Protetyka Stomatologiczna
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("chirurgiaStomatologiczna")}
          >
            Chirurgia stomatologiczna
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("stomatologiaZachowawcza")}
          >
            Stomatologia zachowawcza
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("periodontologia")}
          >
            Periodontologia
          </button>
          <button
            className={styles.btn}
            onClick={() =>
              scrollToSection("wspomaganieChirurgiczneLeczeniaOrtodontycznego")
            }
          >
            Wspomaganie chirurgiczne leczenia ortodontycznego
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("endodoncja")}
          >
            Endodoncja
          </button>
          <button
            className={styles.btn}
            onClick={() => scrollToSection("estetyka")}
          >
            Estetyka
          </button>
        </div>
      </div>
    </div>
  );
};
