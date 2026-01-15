"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./szkolenia.module.css";
import { EmptySpaceUnderNavigation } from "../../components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";
import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";

import szkolenieImg from "../../../public/photos/team/KatarzynaZaleskaSzkolenie.png";
import { EleaWrapper } from "@/components/EleaWrapper/EleaWrapper";

const SzkoleniaPage = () => {
  return (
    <CustomLayout>
      <div className={style.pageWrapper}>
        <EmptySpaceUnderNavigation />
        <div className={style.grayWrapper}>
          <h2 className={style.title}>Szkolenia</h2>
          <div className={style.doctorWrapper}>
            <h2 className={style.mainTitle}>
              Lekarz Stomatolog, Specjalista ortodonta
            </h2>
            <div className={style.doctorBox}>
              <div className={style.imageWrapper}>
                <Image
                  src={szkolenieImg}
                  width={320}
                  height={460}
                  alt="Katarzyna Zaleska"
                />
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
          <h2 className={style.schoolingTitle}>Szkolenia z Elea</h2>
          <EleaWrapper />
        </div>
      </div>
    </CustomLayout>
  );
};

export default SzkoleniaPage;
