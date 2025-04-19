"use client";

import { EmptySpaceUnderNavigation } from "../../components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";
import { Section } from "../../components/Section/Section";

import { useEffect } from "react";

import Image from "next/image";

import styles from "./stomatologia.module.css";
import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";
import kontaktImg from "../../../public/photos/gabinetKontakt.png";

import stomatologiaImg from "../../../public/photos/stomatologiaZachowawcza.png";
import endodoncjaImg from "../../../public/photos/endodoncja.png";
import chirurgiaImg from "../../../public/photos/chirurgiaStomatologiczna.png";
import implantologiaImg from "../../../public/photos/implantologia.png";
import protetykaImg from "../../../public/photos/protetyka.png";

import periodontologiaImg from "../../../public/photos/periodontologia.png";
import stomatologiaEstetycznaImg from "../../../public/photos/stomatologiaEstetyczna.png";
import higienizacjaImg from "../../../public/photos/higienizacja.png";

import pracowniaImg from "../../../public/photos/pracowniaRadiologiczna.png";
import skanerWewnatrzustnyImg from "../../../public/photos/skanerWewnatrzustny.png";
import modjawImg from "../../../public/photos/logo_modjaw.svg";

const StomatologiaPage = () => {
  const scrollToSection = () => {
    if (!window.location.hash) {
      return;
    }
    const element = document.getElementById(window.location.hash.substring(1));

    if (element) {
      const yOffset = -200;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToSection();
  }, []);

  return (
    <CustomLayout>
      <EmptySpaceUnderNavigation />

      <div className={styles.background}>
        <Section backgroundClass={"gray"}>
          <div className={styles.textBox}>
            <h3 id="zachowawcza" className={styles.title}>
              Stomatologia zachowawcza
            </h3>
            <div className={styles.textContent}>
              Zabiegi w ramach stomatologii zachowawczej związane są z
              profilaktyką i leczeniem próchnicy. Zabiegi w naszym gabinecie
              przeprowadzane są w znieczuleniu miejscowym, co pozwala uniknąć
              bólu. Do wypełnień ubytków próchnicowych wykorzystujemy tylko
              materiały najwyższej jakości.
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={stomatologiaImg}
              width={300}
              height={200}
              alt="stomatologia zachowawcza"
            />
          </div>
        </Section>
      </div>

      <Section backgroundClass={"white"}>
        <div className={styles.reverse}>
          <div className={styles.imageWrapper}>
            <Image
              src={endodoncjaImg}
              width={240}
              height={300}
              alt="endodoncja"
            />
          </div>

          <div className={styles.textBox}>
            <div id="endodoncja" className={styles.title}>
              Endodoncja
            </div>

            <div className={styles.textContent}>
              Leczenie endodontyczne polega na eliminacji stanu zapalnego i
              zakażenia z wnętrza zęba. Polega na oczyszczeniu wnętrza komory,
              kanałów, a następnie ich dezynfekcji i wypełnieniu. W naszym
              gabinecie leczenie prowadzone jest zawsze z użyciem mikroskopu.
              Mikroskop wykorzystywany jest podczas pierwotnego jak i powtórnego
              leczenia kanałowego. W trakcie leczenia wykonywane są także
              zdjęcia rentgenowskie.
            </div>
          </div>
        </div>
      </Section>

      <div className={styles.background}>
        <Section backgroundClass={"gray"}>
          <div className={styles.textBox}>
            <h3 className={styles.title}>Chirurgia stomatologiczna</h3>
            <div className={styles.textContent}>
              Zabiegi chirurgiczne wykonywane przy użyciu nowoczesnych sprzętów
              i materiałów, dzięki czemu Pacjent może czuć się bezpiecznie i
              komfortowo, w trakcie zabiegu, jak i po nim. Niesiemy pacjentom
              profesjonalną pomoc nawet w najtrudniejszych przypadkach.
              Wykonujemy zabiegi dotyczące usuwania zębów, odsłaniania zębów
              zatrzymanych. Dodatkowo wykonujemy zabiegi przyspieszające
              leczenie ortodontyczne , czyli kortykotomie.
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={chirurgiaImg}
              width={300}
              height={220}
              alt="chirurgia stomatologiczna"
            />
          </div>
        </Section>
      </div>

      <Section backgroundClass={"white"}>
        <div className={styles.reverse}>
          <div className={styles.imageWrapper}>
            <Image
              src={implantologiaImg}
              width={240}
              height={300}
              alt="implantologia"
            />
          </div>
          <div>
            <div id="implantologia" className={styles.title}>
              Implantologia
            </div>
            <div className={styles.textContent}>
              Za pomocą implantów można odbudować: pojedyncze braki zębowe,
              kilka zębów lub braki w całych łukach zębowych, można też wzmocnić
              stabilność protez. Kwalifikacja do implantacji stomatologicznej
              obejmuje: badanie stomatologiczne z oceną stanu jamy ustnej i
              stawów skroniowo-żuchwowych oraz diagnostykę radiologiczną. Dzięki
              tym badaniom lekarz może przedstawić Pacjentowi możliwe warianty
              leczenia i ustalenie precyzyjnego indywidualnego planu leczenia
              wraz z kosztorysem. Podczas rozmowy przedstawiamy Pacjentowi plan
              leczenia i szczegóły dotyczące jego etapów.
            </div>
          </div>
        </div>
      </Section>

      <div className={styles.background}>
        <Section backgroundClass={"gray"}>
          <div className={styles.textBox}>
            <h3 id="protetyka" className={styles.title}>
              Protetyka
            </h3>
            <div className={styles.textContent}>
              Zabiegi z zakresu protetyki i implantoprotetyki umożliwiają
              odtworzenie prawidłowej funkcji żucia i estetyki uśmiechu. Podczas
              leczenia wykorzystywane są zaawansowane i nowoczesne techniki
              stomatologii cyfrowej, pozwala to na perfekcyjnie dopasowanie,
              trwałość i efekt estetyczny pracy.
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={protetykaImg}
              width={300}
              height={200}
              alt="protetyka"
            />
          </div>
        </Section>
      </div>

      <Section backgroundClass={"white"}>
        <div className={styles.reverse}>
          <div className={styles.imageWrapper}>
            <Image
              src={periodontologiaImg}
              width={300}
              height={200}
              alt="periodontologia"
            />
          </div>
          <div>
            <div className={styles.title}>Periodontologia</div>
            <div className={styles.textContent}>
              Dziedzina stomatologii, która zajmuje się leczeniem chorób dziąseł
              oraz tkanek przyzębia. Kondycja dziąseł i przyzębia ma istotny
              wpływ na zdrowie jamy ustnej, oraz całego organizmu. Nieleczony
              stan zapalny dziąseł może doprowadzić co choroby przyzębia tzw.
              paradontozy i wcześniejszej utraty zębów. Wykonujemy zabiegi
              profesjonalnego oczyszczania i usuwania stanów zapalnych –
              kiretaże, jak i zabiegi regeneracyjne, czyli przeszczepy tkanek.
            </div>
          </div>
        </div>
      </Section>

      <div className={styles.background}>
        <Section backgroundClass={"gray"}>
          <div className={styles.textBox}>
            <h3 className={styles.title}>Stomatologia estetyczna</h3>
            <div className={styles.textContent}>
              Nowoczesne metody stomatologii estetycznej dzięki minimalnej
              ingerencji w tkanki zęba pozwalają uzyskać wymarzony uśmiech. W
              ramach stomatologii estetycznej przeprowadzamy wybielanie w
              gabinecie lampą lub w domu metodą nakładkową, korektę kształtu
              oraz koloru zębów poprzez zastosowanie koron, licówek i bondingu.
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={stomatologiaEstetycznaImg}
              width={300}
              height={200}
              alt="stomatologia estetyczna"
            />
          </div>
        </Section>
      </div>

      <Section backgroundClass={"white"}>
        <div className={styles.reverse}>
          <div className={styles.imageWrapper}>
            <Image
              src={higienizacjaImg}
              width={240}
              height={300}
              alt="higienizacja i profilaktyka"
            />
          </div>
          <div>
            <div id="higienizacja" className={styles.title}>
              Higienizacja i profilaktyka
            </div>
            <div className={styles.textContent}>
              Regularne badania kontrolne oraz zabiegi higienizacji mają wpływ
              na ogólny stan zdrowia organizmu i estetykę uśmiechu. Chcąc
              zachować pełnię zdrowych zębów, zalecamy raz na pół roku odbyć
              wizytę kontrolną w gabinecie stomatologicznym. Wykwalifikowane
              higienistki podczas wizyt higienizacyjnych omówią podstawowe
              czynności związane z dbaniem o jamę ustną i udzielą indywidualnych
              porad dotyczących doboru odpowiednich produktów pielęgnacyjnych.
              Do zabiegów profilaktycznych wykorzystujemy sprzęt stomatologiczny
              najwyższej klasy. Dzięki temu nasza praca realizowana jest
              sprawnie i komfortowo.
            </div>
            <div className={styles.textContent}>
              Instruktaż higieny jamy ustnej:
            </div>
            <div className={styles.textContent}>
              Dobry stan zdrowia jamy ustnej jest ważny dla Twojego ogólnego
              samopoczucia ale również pozwala na efektywne leczenie
              ortodontyczne. Pacjenci przed leczeniem ortodontycznym w naszym
              gabinecie są zobowiązani do odbycia wizyty instruktażowej przed
              montażem aparatu ortodontycznego Podczas tej wizyty uczymy technik
              mycia zębów przydatnych podczas leczenia ortodontycznego,
              pokazujemy też jak stosować różne dodatkowe gadżety pozwalające
              utrzymać idealną higienę jamy ustnej.
            </div>
          </div>
        </div>
      </Section>

      <div className={styles.background}>
        <Section backgroundClass={"gray"}>
          <div className={styles.textBox}>
            <h3 className={styles.title}>Pracownia radiologiczna</h3>
            <div className={styles.textContent}>
              Posiadamy pracownie radiologiczną wyposażoną w aparat rentgenowski
              wykonujący m.in. zdjęcie pantomograficzne, cefalometryczne oraz
              tomograf komputerowy. Badania rentgenowskie wykorzystywane są do
              diagnostyki i planowania zabiegów z zakresu chirurgii
              stomatologicznej, implantologii, protetyki, periodontologii,
              leczenia ortodontycznego oraz schorzeń stawów skroniowo-
              żuchwowych.
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={pracowniaImg}
              width={220}
              height={300}
              alt="pracownia ortodontyczna"
            />
          </div>
        </Section>
      </div>

      <Section backgroundClass={"white"}>
        <div className={styles.reverse}>
          <div className={styles.imageWrapper}>
            <Image
              src={skanerWewnatrzustnyImg}
              width={220}
              height={300}
              alt="skaner wewnatrzustny"
            />
          </div>

          <div className={styles.textBox}>
            <h3 className={styles.title}>Skaner wewnątrzustny</h3>
            <div className={styles.textContent}>
              Skaner wewnątrzustny jest urządzeniem cyfrowym używanym w
              stomatologii. Pozwala na szybkie i trójwymiarowe zwizualizowanie
              zębów w czasie rzeczywistym. Technologia skanowania eliminuje
              konieczność pobierania wycisków.
            </div>
          </div>
        </div>
      </Section>

      <div className={styles.background}>
        <Section backgroundClass={"gray"}>
          <div className={styles.textBox}>
            <h3 className={styles.title}>Modjaw i Axioprisa</h3>
            <div className={styles.textContent}>
              Badanie MODJAW to zaawansowane badanie diagnostyczne stawów
              skroniowo-żuchwowych, które wykorzystuje technologię
              trójwymiarowego obrazowania (3D) do dokładnej analizy i funkcji
              stawów. Dzięki analizie ruchu, lekarz może lepiej zrozumieć
              problemy pacjenta związane z układem żucia, takie jak dysfunkcje
              stawów, asymetrie, przedwczesne kontakty czy inne
              nieprawidłowości. Wirtualny artykulator Axioprisa to narzędzie,
              które pozwala lekarzowi na cyfrowe odwzorowanie ruchu stawu.
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={modjawImg}
              width={300}
              height={200}
              alt="ortodoncja przy parku"
            />
          </div>
        </Section>
      </div>
    </CustomLayout>
  );
};

export default StomatologiaPage;
