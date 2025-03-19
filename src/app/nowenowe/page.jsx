"use client";

import { useState } from "react";
import Image from "next/image";
import style from "./szkolenia.module.css";
import { EmptySpaceUnderNavigation } from "../../components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";
import { CourseTileSingle } from "../../components/CourseTileSingle/CourseTileSingle";

import szkolenieImg from "../../../public/photos/team/szkolenie.png";

import mainPhotoImg from "../../../public/photos/mainPhoto.jpg";

import march2025 from "../../data/courseMarch2025.json";
import april2025 from "../../data/courseApril2025.json";

import { FormABC } from "../../components/FormABC/FormABC";

const SzkoleniaPageNowe = () => {
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
        <div className={style.schoolingSection}>
          <div className={style.schoolingTitle}>Szkolenia stacjonarne</div>
        </div>
      </div>
      <FormABC />
    </>
  );
};

export default SzkoleniaPageNowe;
