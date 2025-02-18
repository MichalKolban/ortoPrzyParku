"use client";

import styles from "./page.module.css";

import { PriceListDisplay } from "../components/PriceListDisplay/PriceListDisplay";
import { PriceListPicker } from "../components/PriceListPicker/PriceListPicker";

const CennikPage = () => {
  return (
    <>
      <head>
        <title>
          Cennik | Ortodoncja Przy Parku w Szczecinie - Ortodoncja Szczecin |
          Stomatologia Szczecin
        </title>
        <meta
          name="description"
          content="Ortodoncja Przy Parku w Szczecinie – nowoczesna klinika ortodontyczna dla dzieci i dorosłych. Profesjonalne leczenie wad zgryzu, aparaty stałe i ruchome. Umów się na konsultację!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <div className={styles.wrapper}>
        <PriceListPicker />
        <PriceListDisplay />
      </div>
    </>
  );
};

export default CennikPage;
