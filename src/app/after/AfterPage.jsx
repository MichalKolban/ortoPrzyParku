"use client";

import styles from "./page.module.css";

import { PriceListDisplay } from "../../components/PriceListDisplay/PriceListDisplay";
import { PriceListPicker } from "../../components/PriceListPicker/PriceListPicker";
import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";

import { EmptySpaceUnderNavigation } from "@/components/EmptySpaceUnderNavigation/EmptySpaceUnderNavigation";

//    Cennik | Ortodoncja Przy Parku w Szczecinie - Ortodoncja Szczecin | Stomatologia Szczecin

const AfterPage = () => {
  return (
    <CustomLayout>
      <EmptySpaceUnderNavigation />
      <div className={styles.wrapper}>
        <h3>Udało się, zostałeś dopisany do kursu!</h3>
        <br></br>
        <br></br>
        <br></br>
        <h4>Niedługo wyślemy maila z informacjami</h4>
      </div>
    </CustomLayout>
  );
};

export default AfterPage;
