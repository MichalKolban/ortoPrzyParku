"use client";

import styles from "./page.module.css";

import { PriceListDisplay } from "../../components/PriceListDisplay/PriceListDisplay";
import { PriceListPicker } from "../../components/PriceListPicker/PriceListPicker";
import CustomLayout from "@/components/Layouts/CustomLayout/CustomLayout";

//    Cennik | Ortodoncja Przy Parku w Szczecinie - Ortodoncja Szczecin | Stomatologia Szczecin

const CennikPage = () => {
  return (
    <CustomLayout>
      <PriceListPicker />
      <PriceListDisplay />
    </CustomLayout>
  );
};

export default CennikPage;
