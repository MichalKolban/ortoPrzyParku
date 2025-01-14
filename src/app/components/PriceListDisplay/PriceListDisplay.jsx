"use client";

import Image from "next/image";

import { PriceTile } from "../PriceTile/PriceTile";

import styles from "./PriceListDisplay.module.css";

import dataJSON from "../../data/procedureList.json";
import triangleIcon from "../../../../public/icons/triangleIcon.png";

export const PriceListDisplay = () => {
  const ortodocnjaFirstColumn = dataJSON.Ortodoncja.filter(
    (item) => item.id <= 5
  );

  const ortodoncjaSecondColumn = dataJSON.Ortodoncja.filter(
    (item) => item.id >= 6
  );

  const stomatologiaFirstColumn = dataJSON.Stomatologia.filter(
    (item) => item.id > 12 && item.id <= 17
  );

  const stomatologiaSecondColumn = dataJSON.Stomatologia.filter(
    (item) => item.id > 17
  );

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.titleSection}>Ortodoncja</h2>
        <div className={styles.innerWrapper}>
          <div className={styles.column}>
            {ortodocnjaFirstColumn.map((element) => {
              return (
                <PriceTile
                  key={element.id}
                  title={element.category}
                  iconImg={element.icon}
                  itemsArr={element.items}
                />
              );
            })}
          </div>

          <div className={styles.column}>
            {ortodoncjaSecondColumn.map((element) => (
              <PriceTile
                key={element.id}
                title={element.category}
                iconImg={element.icon}
                itemsArr={element.items}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.titleSection}>Stomatologia</h2>
        <div className={styles.innerWrapper}>
          <div className={styles.column}>
            {stomatologiaFirstColumn.map((element) => {
              return (
                <PriceTile
                  key={element.id}
                  title={element.category}
                  iconImg={element.icon}
                  itemsArr={element.items}
                />
              );
            })}

            <a href="#" className={styles.backToStart}>
              <Image
                src={triangleIcon}
                width={80}
                height={60}
                alt="ikona powrotu"
              />
              <p className={styles.backToStartTitle}>Powrót na górę strony</p>
            </a>
          </div>

          <div className={styles.column}>
            {stomatologiaSecondColumn.map((element) => (
              <PriceTile
                key={element.id}
                title={element.category}
                iconImg={element.icon}
                itemsArr={element.items}
              />
            ))}

            <a href="#" className={styles.backToStartMobile}>
              <Image
                src={triangleIcon}
                width={80}
                height={60}
                alt="ikona powrotu"
              />
              <p className={styles.backToStartTitle}>Powrót na górę strony</p>
            </a>
          </div>
        </div>
      </div>
      <a href="#" id="backIconMobile" className={styles.returnBackIconMobile}>
        <Image src={triangleIcon} width={20} height={15} alt="ikona powrotu" />
        <p className={styles.returnBackIconMobileTitle}>powrót</p>
      </a>
    </>
  );
};
