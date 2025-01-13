"use client";

import styles from "./page.module.css";

import { PriceListDisplay } from "../components/PriceListDisplay/PriceListDisplay";
import { PriceListPicker } from "../components/PriceListPicker/PriceListPicker";

const CennikPage = () => {
  return (
    <div className={styles.wrapper}>
      <PriceListPicker />
      <PriceListDisplay />
    </div>
  );
};

export default CennikPage;
