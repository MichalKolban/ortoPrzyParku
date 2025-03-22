"use client";

import Image from "next/image";
import { EmptySpaceUnderNavigation } from "../../components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";
import { Section } from "../../components/Section/Section";
import { LogoListElement } from "../../components/LogoListElement/LogoListElement";
import { PhotosLinkRow } from "../../components/PhotosLinkRow/PhotosLinkRow";

import { useEffect } from "react";

import styles from "./page.module.css";

import logoImg from "../../../public/logo.png";

import kontaktImg from "../../../public/photos/gabinetKontakt.png";
import nakladkiImg from "../../../public/photos/nakladki.png";
import skanowanieImg from "../../../public/photos/skanowanie.png";
import usmiechImg from "../../../public/photos/usmiech.png";
import szczekaImg from "../../../public/photos/szczeka.png";

import higienaImg from "../../../public/photos/higiena.png";
import { OrtoBanner } from "../../components/OrtoBanner/OrtoBanner";
import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";

const OrtodoncjaPage = () => {
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
            <h3 className={styles.title}>Ortodoncja przy Parku</h3>
            <div className={styles.textContent}>
              W Ortodoncji Przy Parku nad Państwa zdrowiem czuwa grono
              profesjonalistów stale podnoszących swoje kwalifikacje zawodowe.
              Doskonalimy swoje umiejętności zawodowe, uczestnicząc w licznych
              szkoleniach. Traktujemy to jako obowiązek wobec naszych Pacjentów,
              by zapewnić im opiekę stomatologiczną na najwyższym poziomie.
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={kontaktImg}
              width={300}
              height={200}
              alt="ortodoncja przy parku"
            />
          </div>
        </Section>
      </div>
      <Section backgroundClass={"white"}>
        <div>
          <div className={styles.title}>Czym jest ortodoncja ?</div>
          <div className={styles.textContent}>
            Ortodoncja jest dziedziną stomatologii, która zajmuje się
            zapobieganiem oraz leczeniem wad zgryzu. W naszym gabinecie polega
            ono na holistycznym podejściu do pacjenta. Dokładamy wszelkich
            starań aby przeprowadzone leczenie ortodontyczne gwarantowało nie
            tylko ładny i estetyczny uśmiech, ale również zapobiegało rozwojowi
            wad zgryzu, wymowy, problemów z oddychaniem a także próchnicy,
            chorobom przyzębia oraz zaburzeniom w stawie skroniowo-żuchwowym.
          </div>
          <div className={styles.textContent}>
            Ortodoncja stanowi jeden z głównych filarów naszego gabinetu. Nasz
            zespół ma pod opieką zarówno dzieci, młodzież i dorosłych. W
            Ortodoncji Przy Parku bardzo starannie planujemy Twój indywidualny
            proces leczenia ortodontycznego. Podczas konsultacji omawiamy Twoje
            oczekiwania względem leczenia, wstępnie omawiamy możliwości i
            metody, które można wykorzystać w leczeniu. Indywidualny plan
            leczenia w naszym gabinecie powstaje na podstawie wnikliwie
            przeprowadzonej diagnostyki, na którą składają się: wywiad medyczny
            i stomatologiczny, badanie kliniczne, analiza zdjęć rentgenowskich,
            analiza fotografii twarzy i zdjęć wewnątrzustnych oraz ocena modeli
            diagnostycznych.
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={nakladkiImg} width={300} height={360} alt="nakładki" />
        </div>
      </Section>
      <div className={styles.background}>
        <Section backgroundClass={"gray"}>
          <div className={styles.textBox}>
            <h3 id="skany3d" className={styles.title}>
              Współczesne technologie
            </h3>
            <div className={styles.textContent}>
              Prowadzimy leczenie ortodontyczne przy użyciu najnowszych metod:
              <ul className={styles.equipmentList}>
                <LogoListElement>skutecznych</LogoListElement>
                <LogoListElement>estetycznych</LogoListElement>
                <LogoListElement>szybkich</LogoListElement>
                <LogoListElement>bezpiecznych dla pacjenta</LogoListElement>
              </ul>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={usmiechImg}
              width={300}
              height={200}
              alt="ortodoncja przy parku"
            />
          </div>
        </Section>
      </div>
      <Section backgroundClass={"white"} reverse={true}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>Nowoczesny sprzęt</h3>
          <div className={styles.textContent}>
            Technologia skanowania eliminuje konieczność pobierania wycisków.
            Skan pozwala nam na zdiagnozowanie problemu, wykonanie symulacji
            efektu leczenia oraz wirtualne projektowanie aparatów.
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={skanowanieImg}
            width={300}
            height={180}
            alt="ortodoncja przy parku"
          />
        </div>
      </Section>
      <Section backgroundClass={"white"}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>Trudne przypadki</h3>
          <div className={styles.textContent}>
            Specjalizujemy się w leczeniu zaburzeń stawów skroniowo-żuchwowych
            oraz trudnych wad zgryzu. Problemy układu narządu żucia są bardzo
            złożone, dlatego stosujemy holistyczne podejście do pacjenta, które
            umożliwia prawidłową diagnostykę oraz dobór indywidualnego programu
            terapeutycznego. Nie stronimy od leczenia trudnych wad zgryzu.
            Leczenie ortodontyczno-chirurgiczne dotyczy korekty dysproporcji
            struktur kostnych w obrębie czaszki. Nasz gabinet ściśle
            współpracuje z chirurgami szczękowo-twarzowymi z terenu całej
            Polski. Kompleksowym leczeniem pacjenta zajmuje się zespół, który
            obejmuje lekarza ortodontę, chirurga szczękowo-twarzowego,
            fizjoterapeutę oraz logopedę.
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={szczekaImg}
            width={300}
            height={180}
            alt="ortodoncja przy parku"
          />
        </div>
      </Section>
      <Section backgroundClass={"white"} reverse={true}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>Higiena jamy ustnej</h3>
          <div className={styles.textContent}>
            Zwracamy dużą uwagę na higienę jamy ustnej w trakcie leczenia
            ortodontycznego. Pomagają w tym nasze higienistki stomatologiczne,
            którzy przygotowują i przedstawiają pacjentowi specjalny protokół
            dbania o higienę podczas noszenia aparatu.
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={higienaImg}
            width={300}
            height={180}
            alt="ortodoncja przy parku"
          />
        </div>
      </Section>
      <OrtoBanner />
      <div className={styles.background}>
        <Section backgroundClass={"gray"}>
          <div id="invasilign" className={styles.textColumn}>
            <h3 className={styles.bigTitle}>Zakres Usług Ortodontycznych</h3>
            <div className={`${styles.title} ${styles.ortoTitle}`}>
              Aparat Nakładkowy
            </div>
            <ul className={styles.equipmentList}>
              <li className={styles.textContent}>
                Nowoczesny system leczenia nakładkowego, stanowiący alternatywę
                dla tradycyjnych aparatów ortodontycznych. Alignery to komplet
                przezroczystych nakładek prostujących zęby, które są komfortowe
                i łatwe do utrzymania w czystości. Dzięki swojej budowie
                warunkują delikatne przesuwanie zębów, bez dyskomfortu i bólu.
                Nakładki wymienia się na nowe co 7-14 dni. Efekty stosowania
                systemu nakładkowego są doskonałe, a czas trwania terapii jest
                uzależniony od zaawansowania wady u konkretnego pacjenta. W
                naszym gabinecie stosujemy 3 rodzaje aparatów nakładkowych:
              </li>
              <LogoListElement>Invasilign</LogoListElement>
              <li className={styles.textContent}>
                Invisalign pierwszy i najstarszy system leczenia ortodontycznego
                alignerami, który pomógł już wyleczyć 10 milionów pacjentów na
                całym świecie. Skan zębów pobierany jest w naszym gabinecie i
                wysyłany do firmy, która wykonuje alignery na nasze zlecenie
              </li>
              <LogoListElement>InOffice</LogoListElement>
              <li className={styles.textContent}>
                To autorska metoda leczenia nakładkowe. Alignery są wykonywane w
                naszym laboratorium ortodontycznym. Cały proces począwszy od
                diagnostyki, aż po wykonanie nakładek jest realizowany w naszym
                gabinecie. Lekarz na podstawie skanów poprawia wirtualnie
                ustawienie zębów, technik drukuje w naszym laboratorium modele i
                wytłacza nakładki.
              </li>
              <LogoListElement>Nakładki Graphy</LogoListElement>
              <li className={styles.textContent}>
                Direct printing memory shape aligner. Nowoczesna metoda leczenia
                alignerami, w której stosuje o innowacyjny  materiał utrzymujący
                pamięć kształtu. Nakładki aktywują się w jamie ustnej pacjenta i
                dopasowują się do kształtu zębów.
              </li>
            </ul>
          </div>
          <div className={` ${styles.textColumn} ${styles.secondTextColumn}`}>
            <div className={`${styles.title} ${styles.ortoTitle}`}>
              Aparat Stały
            </div>
            <ul className={styles.equipmentList}>
              <li className={styles.textContent}>
                Aparat stały składa się z przyklejonych do zębów zamków lub
                pierścieni. Elementem aktywnym jest łuk pozwalający na
                przemieszczanie się zębów.
              </li>
              <div className={styles.textContent}>
                W naszym gabinecie oferujemy:
              </div>
              <LogoListElement>Aparaty stałe ligaturowe</LogoListElement>
              <LogoListElement>Aparaty stałe bezligaturowe</LogoListElement>
            </ul>
            <div className={`${styles.title} ${styles.ortoTitle}`}>
              Aparat Ruchomy
            </div>
            <div className={styles.textContent}>
              Aparat ruchomy wykorzystuje się najczęściej w wieku rozwojowym
              pacjenta oraz gdy ma uzębienie mieszane. Aparat powinien być
              noszony przez 14-16h na dobę. W niektórych przypadkach zalecone
              jest noszenie całodobowe aparatu ruchomego. Ortodonta określa
              minimalny czas noszenia. Aparaty zdejmowane są do jedzenia, picia
              i mycia zębów. Aby prawidłowo wyleczyć wadę zgryzu dziecko musi
              przestrzegać obowiązujących zasad stosowania aparatów ruchomych:
              czasu noszenia i sposobu korzystania z aparatu.
            </div>
            <div className={`${styles.title} ${styles.ortoTitle}`}>
              Mikroimplanty
            </div>
            <div className={styles.textContent}>
              To kotwice wyglądem przypominające niedużą śrubkę do których
              przemieszczamy zęby w trakcie leczenia ortodontycznego. Montaż
              mikroimplanów wykonywany jest wraz z montażem aparatów stałych lub
              później w trakcie leczenia ortodontycznego. Zabieg jest mało
              inwazyjny i przeprowadzany jest w znieczuleniu miejscowym. Po
              zabiegu odczuwalny może być niewielki dyskomfort.
            </div>
          </div>
        </Section>
      </div>

      <PhotosLinkRow />
    </CustomLayout>
  );
};

export default OrtodoncjaPage;
