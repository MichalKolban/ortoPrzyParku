"use client";

import { useState } from "react";
import Image from "next/image";
import style from "./szkolenia.module.css";
// import meshmixerLogo from "../../../public/icons/meshmixerLogo.png";
// import katarzynaZaleskaSzkolenieImg from "../../../photos/team/katarzynaZaleskaSzkolenie.jpg";
import { EmptySpaceUnderNavigation } from "../components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";
import { CourseTileSingle } from "../components/CourseTileSingle/CourseTileSingle";

// import katarzynaSzkolenia from "../../../public/photos/team/katarzynaZaleska.png";

import szkolenieImg from "../../../public/photos/team/szkolenie.png";

import mainPhotoImg from "../../../public/photos/mainPhoto.jpg";

import march2025 from "../data/courseMarch2025.json";
import april2025 from "../data/courseApril2025.json";
import june2025 from "../data/courseJune2025.json";

import { FormABC } from "../components/FormABC/FormABC";

const SzkoleniaPage = () => {
  return (
    <>
      <head>
        <title>
          Szkolenia | Ortodoncja Przy Parku w Szczecinie - Ortodoncja Szczecin |
          Stomatologia Szczecin
        </title>
        <meta
          name="description"
          content="Ortodoncja Przy Parku w Szczecinie – nowoczesna klinika ortodontyczna dla dzieci i dorosłych. Profesjonalne leczenie wad zgryzu, aparaty stałe i ruchome. Umów się na konsultację!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <div className={style.pageWrapper}>
        <EmptySpaceUnderNavigation />
        <div className={style.grayWrapper}>
          <h2 className={style.title}>Szkolenia</h2>
          <div className={style.doctorWrapper}>
            <h2 className={style.mainTitle}>
              Lekarz Stomatolog, Specjalista ortodona
            </h2>
            <div className={style.doctorBox}>
              <div className={style.imageWrapper}>
                <Image src={szkolenieImg} width={320} height={460} />
              </div>
              <div className={style.textContent}>
                Nazywam się Katarzyna Zaleska, jestem absolwentką Wydziału
                Lekarsko- Stomatologicznego PUM w Szczecinie. Od 2001 roku, jako
                jedna z pierwszych ortodontek w Polsce zastosowałam mikroimplant
                do leczenia ortodontycznego. Od tego czasu rozwijam techniki
                leczenia z wykorzystaniem mikroimplantów. Ta dziedzina stała się
                tematem mojej pracy doktorskiej z 2009 roku, w której zbadałam
                skuteczność zakotwienia Mikrośrubą i InPlantem w leczeniu
                ortodontycznym. Przez ponad 20 lat zgromadziłam bogate
                doświadczenie kliniczne w zakresie mikroimplantów, co pozwoliło
                mi opublikować liczne prace naukowe i dzielić się wiedzą podczas
                wykładów i szkoleń. Szczególną satysfakcję czerpię z prowadzenia
                warsztatów, gdzie uczę innych ortodontów technik montażu i
                wykorzystania mikroimplantów w szczęce i żuchwie w różnych
                wadach zgryzu. Od 2020 roku prowadzę klinikę Ortodoncja Przy
                Parku, gdzie łączę swoje doświadczenie akademickie (jako były
                asystent i wykładowca PUM) z pasją do innowacyjnych cyfrowych
                technik leczenia. Jestem członkiem prestiżowych towarzystw
                ortodontycznych: PTO, EOS, PAA i FACE Poland.
              </div>
            </div>
          </div>
        </div>
        <div className={style.schoolingSection}>
          <div className={style.schoolingTitle}>Szkolenia stacjonarne</div>
          <div className={style.courseBox}>
            <CourseTileSingle data={march2025} />
            <br></br>
            <CourseTileSingle data={april2025} />
            <br></br>
            <CourseTileSingle data={june2025} />
          </div>
        </div>
        <></>
      </div>
      {/* <FormABC /> */}
    </>
  );
};

export default SzkoleniaPage;
